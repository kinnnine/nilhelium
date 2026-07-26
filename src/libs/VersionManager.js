import { ConfigHelper } from "./ConfigHelper"

const namespace = "__nilhelium_versions";
const namespace_data = "__nilhelium_versions_data";

export const VersionManager = {
    getVersions: () => {
        return ConfigHelper.getConfig(namespace);
    },
    getVersionsData: () => {
        // TODO (IndexedDB)
    },
    getVersion: (uuid) => {
        var versions = ConfigHelper.getConfig(namespace);
        if (versions[uuid]) {
            return versions[uuid];
        } else {
            return null;
        };
    },
    getVersionData: (uuid) => {
        // TODO (IndexedDB)
    },
    addVersion: (name, epw_identify, epw_data) => {
        var uuid = crypto.randomUUID();
        var versions = VersionManager.getVersions();
        versions[uuid] = {
            name: name,
            epw_identify: epw_identify
        };
        ConfigHelper.saveConfig(namespace, versions);
    },
    removeVersion: (uuid) => {
        var versions = VersionManager.getVersions();
        if (versions[uuid]) {
            delete versions[uuid];
        };
    }
};
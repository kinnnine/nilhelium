import { ConfigHelper } from "./helpers/ConfigHelper"
import { STORAGE_NAMESPACE_VERSIONS, STORAGE_NAMESPACE_VERSIONS_DATA } from "../constants";

export const VersionManager = {
    namespace: STORAGE_NAMESPACE_VERSIONS,
    namespace_data: STORAGE_NAMESPACE_VERSIONS_DATA,
    getVersions() {
        try {
            return ConfigHelper.getConfig(this.namespace);
        } catch (err) {
            throw err;
        };
    },
    getVersionsData() {
        // TODO (IndexedDB)
    },
    getVersion(uuid) {
        if (typeof uuid != 'undefined') {
            try {
                var versions = ConfigHelper.getConfig(this.namespace);
                if (versions[uuid]) {
                    return versions[uuid];
                } else {
                    return null;
                };
            } catch (err) {
                throw err;
            };
        } else {
            throw new Error("Incomplete required parameters: uuid (string)");
        };
    },
    getVersionData(uuid) {
        // TODO (IndexedDB)
    },
    addVersion(name, epw_identify, epw_data) {
        if (typeof name != 'undefined' &&
            typeof epw_identify != 'undefined' &&
            typeof epw_data != 'undefined'
        ) {
            try {
                var uuid = crypto.randomUUID();
                var versions = this.getVersions();
                versions[uuid] = {
                    name: name,
                    epw_identify: epw_identify
                };
                ConfigHelper.saveConfig(this.namespace, versions);
            } catch (err) {
                throw err;
            };
        } else {
            throw new Error("Incomplete required parameters: name (string), epw_indentify (boolean), epw_data (object)");
        };
    },
    removeVersion(uuid) {
        if (typeof uuid != 'undefined') {
            try {
                var versions = this.getVersions();
                if (versions[uuid]) {
                    delete versions[uuid];
                };
            } catch (err) {
                throw err;
            };
        } else {
            throw new Error("Incomplete required parameters: uuid (string)");
        };
    }
};
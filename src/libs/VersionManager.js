import { ConfigHelper } from "./helpers/ConfigHelper"
import { STORAGE_NAMESPACE_VERSIONS } from "../constants";
import { FileHelper } from "./helpers/FileHelper";

export const VersionManager = {
    namespace: STORAGE_NAMESPACE_VERSIONS,
    getVersions() {
        try {
            return ConfigHelper.getConfig(this.namespace);
        } catch (err) {
            throw err;
        };
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
    addVersion(name, epw_identify, epw_file) {
        if (typeof name != 'undefined' &&
            typeof epw_identify != 'undefined' &&
            typeof epw_file === 'object'
        ) {
            try {
                var uuid = crypto.randomUUID();
                var versions = this.getVersions();
                versions[uuid] = {
                    name: name,
                    epw_identify: epw_identify
                };
                FileHelper.addFile("assets.epw", epw_file, uuid);
                ConfigHelper.saveConfig(this.namespace, versions);
            } catch (err) {
                throw err;
            };
        } else {
            throw new Error("Incomplete required parameters: name (string), epw_indentify (boolean), epw_file (object)");
        };
    },
    removeVersion(uuid) {
        if (typeof uuid != 'undefined') {
            try {
                var versions = this.getVersions();
                if (versions[uuid]) {
                    FileHelper.removeFile("assets.epw", uuid);
                    delete versions[uuid];
                };
                ConfigHelper.saveConfig(this.namespace, versions);
            } catch (err) {
                throw err;
            };
        } else {
            throw new Error("Incomplete required parameters: uuid (string)");
        };
    }
};
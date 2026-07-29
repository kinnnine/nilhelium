import { ConfigHelper } from "./helpers/ConfigHelper"
import { STORAGE_NAMESPACE_INSTANCES } from "../constants";

export const InstanceManager = {
    namespace: STORAGE_NAMESPACE_INSTANCES,
    getInstances() {
        try {
            return ConfigHelper.getConfig(this.namespace);
        } catch (err) {
            throw err;
        };
    },
    getInstance(uuid) {
        if (typeof uuid != 'undefined') {
            try {
                var instances = ConfigHelper.getConfig(this.namespace);
                if (instances[uuid]) {
                    return instances[uuid];
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
    addInstance(name, version) {
        if (typeof name != 'undefined' && typeof version != 'undefined') {
            try {
                // Version list check needed.
                var instances = this.getInstances();
                var uuid = crypto.randomUUID();
                instances[uuid] = {
                    name: name,
                    version: version,
                    playtime: ""
                };
                ConfigHelper.saveConfig(this.namespace, instances);
            } catch (err) {
                throw err;
            };
        } else {
            throw new Error("Incomplete required parameters: name (string), version (number)");
        };
    },
    removeInstance(uuid) {
        if (typeof uuid != 'undefined') {
            try {
                var instances = this.getInstances();
                if (instances[uuid]) {
                    delete instances[uuid];
                };
                ConfigHelper.saveConfig(this.namespace, instances);
            } catch (err) {
                throw err;
            };
        } else {
            throw new Error("Incomplete required parameters: uuid (string)");
        };
    }
};
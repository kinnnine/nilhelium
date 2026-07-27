import { ConfigHelper } from "./helpers/ConfigHelper"

const namespace = "__nilhelium_instances";

export const InstanceManager = {
    getInstances: () => {
        return ConfigHelper.getConfig(namespace);
    },
    addInstance: (name, version) => {
        var instances = InstanceManager.getInstances();
        var uuid = crypto.randomUUID();
        instances[uuid] = {
            name: name,
            version: version,
            playtime: ""
        };
        ConfigHelper.saveConfig(namespace, instances);
    },
    removeInstance: (uuid) => {
        var instances = InstanceManager.getInstances();
        if (instances[uuid]) {
            delete instances[uuid];
        };
        ConfigHelper.saveConfig(namespace, instances);
    }
};
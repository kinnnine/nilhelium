import { gzip, ungzip } from "pako";

export const ConfigHelper = {
    saveConfig(namespace, json) {
        if (typeof namespace != 'undefined' && typeof json === 'object') {
            const compressed_json = String.fromCharCode(...gzip(JSON.stringify(json)));
            const data = btoa(compressed_json);
            localStorage.setItem(namespace, data);
        } else {
            throw new Error("Incomplete required parameters: namespace (string), json (object)");
        };
    },
    getConfig(namespace) {
        if (typeof namespace != 'undefined') {
            const data = localStorage.getItem(namespace);
            if (data != null) {
                const compressed_json = atob(data);
                const bytes = Uint8Array.from(compressed_json, char => char.charCodeAt(0));
                try {
                    return JSON.parse(ungzip(bytes, { toText: true }));
                } catch (err) {
                    throw err;
                };
            } else {
                return {};
            };
        } else {
            throw new Error("Incomplete required parameters: namespace (string)");
        };
    }
};
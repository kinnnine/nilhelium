import { gzip, ungzip } from "pako";

export const ConfigHelper = {
    saveConfig: (namespace, json) => {
        const compressed_json = String.fromCharCode(...gzip(JSON.stringify(json)));
        const data = btoa(compressed_json);
        localStorage.setItem(namespace, data);
    },
    getConfig: (namespace) => {
        const data = localStorage.getItem(namespace);
        if (data != null) {
            const compressed_json = atob(data);
            const bytes = Uint8Array.from(compressed_json, char => char.charCodeAt(0));
            try {
                return JSON.parse(ungzip(bytes, { toText: true }));
            } catch (error) {
                console.log(error);
                return null;
            };
        } else {
            return {};
        };
    }
};
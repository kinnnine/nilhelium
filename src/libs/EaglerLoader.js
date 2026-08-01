import { InstanceManager } from "./InstanceManager";
import { VersionManager } from "./VersionManager";

export const EaglerLoader = {
    load: async (instanceUUID) => {
        if (typeof instanceUUID === 'undefined')
            throw new Error("Incomplete required parameters: instanceUUID (string)");
        const instance = InstanceManager.getInstance(instanceUUID);
        if (instance) {
            const epwBlobUrl = await VersionManager.getEPWFile(instance.version_uuid)
                .then((result) => {
                    return URL.createObjectURL(result);
                })
                .catch((err) => {
                    throw new Error("getEPWFile failed", err);
                });
            const version = VersionManager.getVersion(instance.version_uuid);
            if (version) {
                const title = instance.name + " (" + version.name + ")";
                window.nilHeliumEaglerLoader = {
                    title: title,
                    localStorage_prefix: "_nilhelium_eaglercraft_" + instance.uuid,
                    indexedDB_prefix: "_nhfs_" + instance.uuid,
                    assetsURI: epwBlobUrl
                };
            } else {
                throw new Error("getVersion failed", err);
            };
        } else {
            throw new Error("Load instance failure, either not found or something went wrong");
        };
    },
    start: async () => {
        // re-implementation of bootstrap.js
        // credit: https://github.com/Eaglercraft-Archive/EaglercraftX-1.8-workspace/blob/master/target_teavm_wasm_gc/javascript_dist/bootstrap.js (lax1dude)
        if (typeof window.nilHeliumEaglerLoader === 'undefined')
            throw new Error("window.nilHeliumEaglerLoader is not yet existed, load it first");
        console.log(window.nilHeliumEaglerLoader);
        const title = window.nilHeliumEaglerLoader.title;
        const localStorage_prefix = window.nilHeliumEaglerLoader.localStorage_prefix;
        const indexedDB_prefix = window.nilHeliumEaglerLoader.indexedDB_prefix;
        const assetsURI = window.nilHeliumEaglerLoader.assetsURI;
        window.document.title = title;
        window.eaglercraftXOpts = {
            demoMode: false,
            container: "game_frame",
            assetsURI: assetsURI,
            worldsDB: indexedDB_prefix,
            resourcePacksDB: indexedDB_prefix,
            localStorageNamespace: localStorage_prefix,
        };
        console.log(window.eaglercraftXOpts);
        const epwBuffer = await fetch(assetsURI, { cache: "force-cache" })
            .then((result) => {
                return result.arrayBuffer();
            })
            .catch((err) => {
                throw new Error("epwBuffer fetch failure", err);
            });
        console.log(epwBuffer);
        const epw = new DataView(epwBuffer);
        console.log(epw);
        var epwMapping = {
            splashImage: {
                offset: epw.getUint32(100, !0),
                length: epw.getUint32(104, !0)
            },
            splashMime: {
                offset: epw.getUint32(108, !0),
                length: epw.getUint32(112, !0)
            },
            loaderJS: {
                offset: epw.getUint32(164, !0),
                length: epw.getUint32(168, !0)
            },
            loaderWASM: {
                offset: epw.getUint32(180, !0),
                length: epw.getUint32(184, !0)
            }
        };
        const textDecoder = new TextDecoder("utf-8");
        const splashImage = new Uint8Array(epwBuffer, epwMapping.splashImage.offset, epwMapping.splashImage.length);
        const splashMime = new Uint8Array(epwBuffer, epwMapping.splashMime.offset, epwMapping.splashMime.length);
        const loaderJS = new Uint8Array(epwBuffer, epwMapping.loaderJS.offset, epwMapping.loaderJS.length);
        const loaderWASM = new Uint8Array(epwBuffer, epwMapping.loaderWASM.offset, epwMapping.loaderWASM.length);
        const splashImageUrl = URL.createObjectURL(new Blob([splashImage], { type: textDecoder.decode(splashMime) }));
        console.log("splashImageUrl " + splashImageUrl);
        const loaderJSUrl = URL.createObjectURL(new Blob([loaderJS], { type: "text/javascript;charset=utf-8" }));
        console.log("loaderJSUrl: " + loaderJSUrl);
        const loaderWASMUrl = URL.createObjectURL(new Blob([loaderWASM], { type: "application/wasm" }));
        console.log("loaderWASMUrl " + loaderWASMUrl);
        window.__eaglercraftXLoaderContextPre = {
            rootElement: window.document.getElementById(window.eaglercraftXOpts.container),
            eaglercraftXOpts: window.eaglercraftXOpts,
            theEPWFileBuffer: epwBuffer,
            loaderWASMURL: loaderWASMUrl,
            splashURL: splashImageUrl
        };
        console.log(window.__eaglercraftXLoaderContextPre);
        const eagScript = document.createElement("script");
        eagScript.type = "text/javascript";
        eagScript.src = loaderJSUrl;
        window.document.head.appendChild(eagScript);
    }
}
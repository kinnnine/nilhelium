export const FileHelper = {
    db: null,
    store_name: null,
    initDB(db_name, db_store_name) {
        if (typeof db_name != 'undefined' &&
            typeof db_store_name != 'undefined'
        ) {
            const req = indexedDB.open(db_name, 1);
            req.onerror = (e) => {
                console.error("Failed to init indexedDB.");
            };
            req.onsuccess = (e) => {
                this.db = e.target.result;
                this.store_name = db_store_name;
            };
            req.onupgradeneeded = (e) => {
                const store = e.currentTarget.result.createObjectStore(db_store_name, { keyPath: 'uuid' });
            };
        } else {
            throw new Error("Incomplete required parameters: db_name (string), db_store_name (string)");
        };
    },
    getStore(mode = 'read') {
        if (this.db == null && this.store_name == null)
            throw new Error("Incomplete indexedDB initialization");
        if (typeof mode != 'undefined') {
            try {
                return this.db.transaction(this.store_name, mode)
                    .objectStore(this.store_name);
            } catch (err) {
                throw err;
            };
        } else {
            throw new Error("Incomplete required parameters: mode (string)");
        };
    },
    getFile(slot_name, uuid) {
        // TODO
    },
    addFile(slot_name, blob, uuid) {
        if (this.db == null && this.store_name == null)
            throw new Error("Incomplete indexedDB initialization.");
        if (typeof slot_name != 'undefined' &&
            typeof blob === 'object' &&
            typeof uuid != 'undefined'
        ) {
            try {
                const store = this.getStore('readwrite');
                const getReq = store.get(uuid);
                getReq.onsuccess = (e) => {
                    const obj = e.target.result || { uuid: uuid, files: {} };
                    obj.files[slot_name] = blob;
                    const putReq = store.put(obj);
                    putReq.onsuccess = () => {
                        console.log("addFile insertion successful");
                    };
                    putReq.onerror = (e) => {
                        console.error("addFile insertion error", e.error);
                    };
                };
                getReq.onerror = (e) => {
                    console.error("addFile fetch error", e.error);
                };
            } catch (err) {
                throw err;
            };
        } else {
            throw new Error("Incomplete required parameters: slot_name (string), blob (object), uuid (string)");
        };
    },
    removeFile(slot_name, uuid) {
        if (this.db == null && this.store_name == null)
            throw new Error("Incomplete indexedDB initialization.");
        if (typeof slot_name != 'undefined' &&
            typeof uuid != 'undefined'
        ) {
            try {
                const store = this.getStore('readwrite');
                const getReq = store.get(uuid);
                getReq.onsuccess = (e) => {
                    const obj = e.target.result;
                    delete obj.files[slot_name];
                    if (Object.keys(obj.files).length === 0) {
                        store.delete(uuid);
                        return;
                    };
                    const putReq = store.put(obj);
                    putReq.onsuccess = () => {
                        console.log("removeFile removal successful");
                    };
                    putReq.onerror = (e) => {
                        console.error("removeFile removal error", e.error);
                    }
                };
                getReq.onerror = (e) => {
                    console.error("removeFile fetch error", e.error);
                };
            } catch (err) {
                throw err;
            };
        } else {
            throw new Error("Incomplete required parameters: slot_name (string), uuid (string)");
        };
    }
}
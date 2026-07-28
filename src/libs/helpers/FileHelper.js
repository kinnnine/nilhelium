export const FileHelper = {
    db: null,
    store_name: null,
    initDB(db_name, db_store_name) {
        if (typeof db_name != 'undefined' &&
            typeof db_store_name != 'undefined'
        ) {
            const req = indexedDB.open(db_name, 1);
            req.onerror = (e) => {
                console.error("failed to init db.");
            };
            req.onsuccess = (e) => {
                this.db = e.target.result;
                this.store_name = db_store_name;
            };
            req.onupgradeneeded = (e) => {
                const store = e.currentTarget.result.createObjectStore(db_store_name,
                    { keyPath: 'id', autoIncrement: true });
                store.createIndex('uuid', 'uuid', { unique: true });
                store.createIndex('slot_name', 'slot_name', { unique: false });
            };
        } else {
            throw new Error("Incomplete required parameters: db_name (string), db_store_name (string)");
        };
    },
    getStore(mode = 'read') {
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
        if (typeof slot_name != 'undefined' &&
            typeof blob != 'undefined' &&
            typeof uuid != 'undefined'
        ) {
            var obj = { uuid: uuid, slot_name: slot_name, blob: blob };
            var store = this.getStore('readwrite');
            var req;
            try {
                req = store.add(obj);
            } catch (err) {
                console.error(err);
                throw err;
            };
            req.onsuccess = (e) => {
                console.log("addFile insertion successful.");
            };
            req.onerror = (e) => {
                console.error("addFile error", e.error);
            };
        } else {
            throw new Error("Incomplete required parameters: slot_name (string), blob (object), uuid (string)");
        };
    },
    removeFile(slot_name, uuid) {
        // TODO
    }
}
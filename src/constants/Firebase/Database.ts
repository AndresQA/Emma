import firebase from "firebase/app";
import Firebase from "./Firebase";


class SetupDatabase {

    db = Firebase.database();

    evalueteRouteExist(urls: string[], load: (exist: boolean, snapshot: firebase.database.DataSnapshot | undefined) => void) {
        var { isNull, url } = this.getRoutes(urls);

        if (!isNull) {
            this.db.ref(url).once("value", snapshot => {
                var value = undefined;
                var exist = false;
                if (snapshot.exists()) {
                    value = snapshot;
                    exist = true;
                }
                load(exist, value);
            });
        } else {
            load(false, undefined);
        }
    }

    evalueteRouteExistMin(urls: string[], val: string, load: (exist: boolean, snapshot: firebase.database.DataSnapshot | undefined) => void) {
        var { isNull, url } = this.getRoutes(urls);

        if (!isNull) {
            this.db.ref(url).once("value", snapshot => {
                var value = undefined;
                var exist = false;
                var key = snapshot.key || "";

                if (snapshot.exists()) {

                    if (key === "") {
                        value = snapshot;
                        exist = true;
                    } else if (key !== "") {
                        if (key.toLowerCase() === val.toLowerCase()) {
                            value = snapshot;
                            exist = true;
                        }
                    }
                } else {

                }
                load(exist, value);
            });
        } else {
            load(false, undefined);
        }
    }

    readBrachOnlyDatabase(urls: string[], load: (snapshot: firebase.database.DataSnapshot | undefined) => void) {

        var { isNull, url } = this.getRoutes(urls);

        if (!isNull) {
            var refDataBase = this.db.ref(url);
            refDataBase.once('value', (snapshots) => {
                load(snapshots);
            });
        } else {
            load(undefined);
        }
    }

    readBrachDatabase(urls: string[], load: (snapshot: firebase.database.DataSnapshot | undefined) => void) {

        var { isNull, url } = this.getRoutes(urls);

        if (!isNull) {
            var refDataBase = this.db.ref(url);
            refDataBase.on('value', (snapshots: any) => {
                load(snapshots);
            });
        } else {
            load(undefined);
        }
    }

    readBrachDatabaseFilter(urls: string[], filter: string, value: string, load: (snapshot: firebase.database.DataSnapshot | undefined) => void) {

        var { isNull, url } = this.getRoutes(urls);

        if (!isNull) {
            var refDataBase = this.db.ref(url);
            refDataBase.orderByChild(filter).equalTo(value).on('value', (snapshots) => {
                load(snapshots);
            });
        } else {
            load(undefined);
        }
    }

    readBrachDatabaseOnlyFilter(urls: string[], filter: string, value: string, load: (snapshot: firebase.database.DataSnapshot | undefined) => void) {

        var { isNull, url } = this.getRoutes(urls);

        if (!isNull) {
            var refDataBase = this.db.ref(url);
            refDataBase.orderByChild(filter).equalTo(value).once('value', (snapshots) => {
                load(snapshots);
            });
        } else {
            load(undefined);
        }
    }

    readBrachDatabaseLimitChildN(urls: string[], limit: any, load: (snapshot: firebase.database.DataSnapshot | undefined) => void) {

        var { isNull, url } = this.getRoutes(urls);

        if (!isNull) {
            var refDataBase = this.db.ref(url);
            refDataBase.limitToFirst(limit).on('value', (snapshots) => {
                load(snapshots);
            });
        } else {
            load(undefined);
        }
    }

    readBrachDatabaseLimitChildNOnly(urls: string[], limit: any, load: (snapshot: firebase.database.DataSnapshot | undefined) => void) {

        var { isNull, url } = this.getRoutes(urls);

        if (!isNull) {
            var refDataBase = this.db.ref(url);
            refDataBase.limitToFirst(limit).once('value', (snapshots) => {
                load(snapshots);
            });
        } else {
            load(undefined);
        }

    }

    updateDatabase(urls: string[], objeto: any, load: (snapshot: firebase.database.DataSnapshot | undefined) => void) {

        var { isNull, url } = this.getRoutes(urls);

        if (!isNull) {
            this.db.ref(url).update(objeto, () => {
                load && load(objeto);
            });
        } else {
            load && load(undefined);
        }
    }

    writeDatabase(urls: string[], objeto: any, load?: (snapshot: firebase.database.DataSnapshot | undefined) => void) {

        var { isNull, url } = this.getRoutes(urls);

        if (!isNull) {
            this.db.ref(url).set(objeto, () => {
                load && load(objeto);
            });
        } else {
            load && load(undefined);
        }
    }


    generateUID(urls: string[]) {
        var { isNull, url } = this.getRoutes(urls);
        return this.db.ref(url).push().key || "";
    }

    writeDatabasePush(urls: string[], objeto: any, load?: (snapshot: firebase.database.DataSnapshot | undefined, UID: string) => void) {

        var { isNull, url } = this.getRoutes(urls);

        if (!isNull) {

            let UID = this.db.ref(url).push().key || "";
            objeto.UID = UID;
            var resultObject = JSON.parse(JSON.stringify(objeto));

            this.writeDatabase([url, UID], resultObject, (snapshot) => {
                load && load(snapshot, UID);
            });

        } else {
            load && load(undefined, "");
        }
    }

    writeDatabasePushWithOutUID(urls: string[], objeto: any, load?: (snapshot: firebase.database.DataSnapshot | undefined, UID: string) => void) {

        var { isNull, url } = this.getRoutes(urls);

        if (!isNull) {

            let UID = this.db.ref(url).push().key || "";
            var resultObject = JSON.parse(JSON.stringify(objeto));

            if (UID !== "") {
                this.writeDatabase([url, UID], resultObject, (snapshot) => {
                    load && load(snapshot, UID);
                });
            }
        } else {
            load && load(undefined, "");
        }
    }

    getRoutes(urls: string[]) {
        var url = "";
        var isNull = false;
        for (let i = 0; i < urls.length; i++) {
            let u = urls[i];
            if (u !== "" && u !== undefined && u !== null) {
                if (i === 0) {
                    url = u;
                } else {
                    url = url + "/" + u;
                }
            } else {
                isNull = true;
                console.error("No existe un valor", urls);
                i = urls.length;
            }
        }
        return { url, isNull };
    }
}


var Database = new SetupDatabase();

export default Database;



import firebase from 'firebase/app';
import DB_ROUTES from '../Routes/DBRoutes';
import Database from './Database';
import Firebase from './Firebase';



export interface IUserInformation {
    nombre: string;
    role?: "Usuario" | "Administrador";
    chat?: string;
}

class userConfig {

    userFirebase?: firebase.User;
    auth: firebase.auth.Auth;
    information: IUserInformation;


    constructor() {
        this.auth = Firebase.auth();
        this.information = this.getDefaultInformation();
        this.getUserChangeLocal();
    }

    login(correo: string, pass: string, load?: (login: boolean) => void, errorF?: (error: string) => void) {
        this.auth.signInWithEmailAndPassword(correo, pass).then(() => {
            this.getUserChangeLocal(() => {
                load && load(true);
            });

        }).catch((err: any) => {
            errorF && errorF(err.code);
            load && load(false);
        });
    }

    register(correo: string, pass: string, user: IUserInformation, load?: (register: boolean) => void, errorF?: (error: string) => void) {


        this.auth.createUserWithEmailAndPassword(correo, pass).then((userFirebase: any) => {
            if (userFirebase.user) {
                this.userFirebase = userFirebase.user;
                //@ts-ignore
                let UID = this.userFirebase.uid;

                Database.writeDatabase([
                    DB_ROUTES.USER._THIS,
                    DB_ROUTES.USER.INFORMATION,
                    UID,
                    DB_ROUTES.USER.INFORMATION
                ], user, () => {
                    this.setInformation(user);
                    load && load(true);
                });
            }

        }).catch((err: any) => {
            errorF && errorF(err.code);
            load && load(false);
        });

    }

    getUserChangeLocal(load?: (login: boolean) => void) {
        if (this.userFirebase === null || this.userFirebase === undefined) {
            this.auth.onAuthStateChanged((user: firebase.User | null) => {
                if (user) {
                    // User is signed in.
                    this.userFirebase = user

                    Database.readBrachOnlyDatabase([
                        DB_ROUTES.USER._THIS,
                        DB_ROUTES.USER.INFORMATION,
                        this.userFirebase.uid,
                        DB_ROUTES.USER.INFORMATION
                    ], (snap) => {

                        if (snap) {
                            var information = snap.val();
                            // console.clear()
                            // console.log("Mi informacion", information)

                            this.setInformation(information);
                            load && load(true);
                        } else {
                            load && load(false);
                        }
                    })

                } else {
                    // No user is signed in.
                    load && load(false);
                }
            });
        } else {
            load && load(false);
        }
    }

    private getDefaultInformation(): IUserInformation {
        return {
            nombre: "",
            role: undefined,
            chat: undefined
        }
    }

    loginOut(load: (exit: boolean) => void) {
        this.auth.signOut().then(() => {
            this.resetUser();
            load(true);
        }).catch((error: any) => {
            load(false)
        });
    }

    resetUser() {
        this.userFirebase = undefined;
        this.information = this.getDefaultInformation();
    }

    setInformation(information: IUserInformation) {
        this.information = information;
    }

    getUID() {
        var uid = "";
        if (this.userFirebase) {
            uid = this.userFirebase.uid;
        }
        return uid;
    }

}

var User = new userConfig();

export default User;
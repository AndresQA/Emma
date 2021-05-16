import Database from "../Firebase/Database";
import User, { IUserInformation } from "../Firebase/User";
import DB_ROUTES from "../Routes/DBRoutes";
import Mensaje from "./Mensaje";
import Persona from "./Persona";

export interface IChat {
    UID: string;
    fecha: number;
    to: string;
    from: string;
}

class TSChat {

    UID: string;
    informacion: IChat;
    live = true;

    toChat?: Persona;
    myUserChat?: Persona;

    listenerMensajes = () => { }

    constructor(informacion: IChat) {
        this.informacion = informacion;
        this.UID = informacion.UID;

    }

    initInformation(load: () => void) {
        this.findUser(this.informacion.to, () => {

            this.findUser(this.informacion.from, () => {

                load && load()
            })
        })
    }


    private findUser(UID: string, load: (user: Persona) => void) {
        const RU = DB_ROUTES.USER;
        let myUID = User.getUID();

        Database.readBrachOnlyDatabase([
            RU._THIS, RU.INFORMATION, UID, RU.INFORMATION
        ], (userSnap: any) => {

            if (userSnap !== null && userSnap !== undefined) {

                let user = userSnap.val() as IUserInformation;
                if (user !== null && user !== undefined) {
                    let persona = new Persona(this, UID, user.nombre, user.role)
                    if (myUID === UID) {
                        this.myUserChat = persona;
                    } else {
                        this.toChat = persona;
                    }

             
                    load(persona)
                }

            }


        })
    }

    startListenChats(load: (mensajes: Mensaje[]) => void) {
        const RU = DB_ROUTES.USER;
        const RC = DB_ROUTES.CHAT;

        this.listenerMensajes = Database.readBrachDatabase([
            RC._THIS,
            RC.CONTENIDO,
            this.UID
        ], (snapMensaje) => {

            var mensajes: Mensaje[] = []

            if (snapMensaje !== null && snapMensaje !== undefined) {
                var snapMensajeObj = snapMensaje.val();
                if (snapMensajeObj !== null && snapMensajeObj !== undefined) {

                    let mensajesArray = Object.values(snapMensajeObj) as Mensaje[];

                    load(mensajesArray)

                } else {
                    load(mensajes)
                }
            } else {
                load(mensajes)
            }


        })

    }

    stopListenChats() {
        this.listenerMensajes()
    }

}

export default TSChat;
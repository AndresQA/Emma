import Database from "../Firebase/Database";
import DB_ROUTES from "../Routes/DBRoutes";
import TSChat from "./Chat";
import Mensaje from "./Mensaje";

type UserTypes = "Administrador" | "Usuario"

class Persona {

    UID: string;
    nombre: string;
    role: UserTypes;
    chat: TSChat;

    constructor(chat: TSChat, UID: string, nombre: string, role?: UserTypes) {
        this.UID = UID;
        this.nombre = nombre;
        this.role = role !== undefined ? role : "Usuario"
        this.chat = chat;
    }

    enviar(type: "text", msg: string, load?: () => void) {
        let RC = DB_ROUTES.CHAT;

        let ramUID = Database.generateUID([
            RC._THIS,
            RC.CONTENIDO,
            this.UID
        ])

        let mensaje: Mensaje = {
            id: ramUID,
            fecha: (new Date()).getTime(),
            msg,
            type,
            userID: this.UID
        }

        Database.writeDatabase([
            RC._THIS,
            RC.CONTENIDO,
            this.chat.UID,
            ramUID
        ], mensaje, () => {
            load && load()
        })
    }

}

export default Persona;
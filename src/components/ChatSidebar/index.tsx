import { Button } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import TSChat from "../../constants/Chat/Chat";
import ChatManager from "../../constants/Chat/ChatManager";
import Mensaje from "../../constants/Chat/Mensaje";
import Database from "../../constants/Firebase/Database";
import User from "../../constants/Firebase/User";
import DB_ROUTES from "../../constants/Routes/DBRoutes";
import Icon from '@material-ui/core/Icon';
import "./index.scss";
const ChatSidebar = () => {

    const [isView, setIsView] = useState(false)
    const [manager, setManager] = useState<ChatManager>()
    const [chat, setChat] = useState<TSChat>()

    const refInput = useRef<any>()
    const [mensajes, setMensajes] = useState<Mensaje[]>([])

    useEffect(() => {
        if (isView === true && chat === undefined) {

            const chatManager = new ChatManager();

            if (User.information.chat === undefined) {
                chatManager.createChat((chat, uid) => {
                    User.information.chat = uid;
                    const RU = DB_ROUTES.USER;

                    Database.writeDatabase([
                        RU._THIS, RU.INFORMATION,
                        User.getUID(),
                        RU.INFORMATION,
                        "chat"
                    ], uid)

                    setChat(chat)
                })
            } else {
                chatManager.findChat(User.information.chat, (chat) => {
                    setChat(chat)
                })
            }
            setManager(chatManager)

        }
    }, [isView])

    useEffect(() => {
        if (chat !== undefined) {
            chat.initInformation(() => { });
            chat.startListenChats((mensajes) => {
                setMensajes(mensajes)
            })
        }


        return () => {
            if (chat !== undefined) {
                chat.stopListenChats();
            }
        }

    }, [chat])

    const onSend = () => {
        const inputHTML = refInput.current as HTMLInputElement;
        if (inputHTML && chat) {
            if (chat.myUserChat !== undefined) {
                chat.myUserChat.enviar("text", inputHTML.value)
            }
            inputHTML.value = "";
        }
    }


    return <div className="ChatSidebar">
        <div className="ChatSidebar__container">
            <div className={"ChatSidebar__container__header" + (isView ? " view" : "")} onClick={() => setIsView(!isView)}>Habla con Emma</div>
            <div className={"ChatSidebar__container__body"}>
                {isView ? <>
                    <ul className="ChatSidebar__container__body__mensajes">
                        {mensajes.map(({ userID, msg }) => {
                            const remitente = userID === User.getUID();
                            return <div className={!remitente ? "messageAdmin" : ""}>
                                {!remitente ? <img src="/icons/emmachat.png" alt="" /> : <></>}
                                <li className={"ChatSidebar__container__body__mensajes__item" + (remitente ? " my" : "")}>

                                    <p className={"ChatSidebar__container__body__mensajes__item__p"}>{msg}</p>
                                </li>

                            </div>
                        })}
                    </ul>
                    <div className="ChatSidebar__container__body__acciones">
                        <div className="ChatSidebar__container__body__acciones__container">
                            <input className="ChatSidebar__container__body__acciones__container__input" ref={refInput} type="text" placeholder="Pregúntale a Emma" />
                            <Button className="ChatSidebar__container__body__acciones__container__send"
                                variant="contained"
                                color="primary"
                                onClick={onSend}
                                >
                                <Icon>send</Icon>
                             </Button>
                        </div>
                    </div>

                </> : <></>}

            </div>
        </div>

    </div>
}

export default ChatSidebar;
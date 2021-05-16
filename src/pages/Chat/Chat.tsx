import { useEffect, useState } from "react";
import TSChat from "../../constants/Chat/Chat";
import ChatManager from "../../constants/Chat/ChatManager";
import Database from "../../constants/Firebase/Database";
import User from "../../constants/Firebase/User";
import DB_ROUTES from "../../constants/Routes/DBRoutes";
import "./Chat.scss";
import ChatView from "./ChatView";

const Chat = () => {

    const [chatManager] = useState(new ChatManager())
    const [chatsViews, setChatsViews] = useState<TSChat[]>([])
    const [currentChat, setCurrentChat] = useState<TSChat | undefined>(undefined)

    useEffect(() => {
        if (User.information.role === "Administrador") {
            chatManager.startListenerChats((chats) => {
                setChatsViews(chats)
            })
        } else {
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
                    setCurrentChat(chat)
                })
            } else {
                chatManager.findChat(User.information.chat, (chat) => {
                    setCurrentChat(chat)
                })
            }
        }

        return () => {
            chatManager.stopListenerChats();
        }

    }, [])

    return <div className="Chat">
        {currentChat === undefined ?
            <>
                <h1>Interface de Chat</h1>
                <ul>
                    {chatsViews.map((chat) => {
                        const { UID } = chat;
                        return <ChatItem key={UID} chat={chat} setCurrentChat={setCurrentChat} />
                    })}
                </ul>
            </>
            : <>
                <ChatView chat={currentChat} />
            </>}


    </div>
}

export default Chat;

const ChatItem = ({ chat, setCurrentChat }: { chat: TSChat, setCurrentChat: (current: TSChat) => void }) => {
    const { UID } = chat;

    const [nombre, setNombre] = useState("Nombre de usuario")


    useEffect(() => {
        chat.initInformation(() => {
            if (chat.toChat) {
                setNombre(chat.toChat.nombre)
            }
        })
    }, [])

    return <li>
        <div>{nombre}</div>
        <button onClick={() => {
            setCurrentChat(chat)
        }}>Entrar</button>
    </li>
}

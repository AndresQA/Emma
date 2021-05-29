import { useEffect, useRef, useState } from "react";
import TSChat from "../../constants/Chat/Chat";
import Mensaje from "../../constants/Chat/Mensaje";

const ChatView = ({ chat }: { chat: TSChat }) => {

    const refInput = useRef<any>()
    const [mensajes, setMensajes] = useState<Mensaje[]>([])

    useEffect(() => {

        chat.initInformation(() => { });
        chat.startListenChats((mensajes) => {
            setMensajes(mensajes)
        })

        return () => {
            chat.stopListenChats();
        }

    }, [])

    const onSend = () => {
        const inputHTML = refInput.current as HTMLInputElement;
        if (inputHTML) {

            if (chat.myUserChat !== undefined) {
                chat.myUserChat.enviar("text", inputHTML.value)
            }
            inputHTML.value = "";
        }
    }

    return <div className="ChatView">
     
            {mensajes.map(({ userID, msg }) => {
                return <div>
                    <p className={userID}>{msg}</p>
                </div>
            })}
       
        <div className="inputChat">
                <input ref={refInput} type="text" />
                <button onClick={onSend}>Enviar</button>
        </div>
    </div>

}

export default ChatView;
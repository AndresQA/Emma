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
        <h1>Lista de mensajes</h1>
        <ul>
            {mensajes.map(({ id, msg }) => {
                return <div className={id}>
                    <p>{msg}</p>
                </div>
            })}
        </ul>
        <div>
            <label>
                <input ref={refInput} type="text" />
                <button onClick={onSend}>Enviar</button>
            </label>
        </div>
    </div>

}

export default ChatView;
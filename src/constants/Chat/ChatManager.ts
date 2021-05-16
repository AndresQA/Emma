import Database from "../Firebase/Database";
import User from "../Firebase/User";
import DB_ROUTES from "../Routes/DBRoutes";
import UIDChatUserManager from "../UIDChatManager";
import TSChat, { IChat } from "./Chat";

class ChatManager {

    listenChats = () => { }
    chats = new Map<string, TSChat>();

    constructor() {
    }

    createChat(load?: (chat: TSChat, uid: string) => void) {

        let RC = DB_ROUTES.CHAT;
        let ramUID = Database.generateUID([
            RC._THIS,
            RC.INFORMATION
        ])
        let chatInfo: IChat = {
            UID: ramUID,
            fecha: (new Date()).getTime(),
            from: UIDChatUserManager,
            to: User.getUID()
        }

        let newChat = new TSChat(chatInfo);

        Database.writeDatabase([
            RC._THIS,
            RC.INFORMATION,
            ramUID
        ], chatInfo, () => {
            load && load(newChat, ramUID)
        })
    }

    findChat(uid: string, load: (chats: TSChat) => void) {
        const RC = DB_ROUTES.CHAT;

        Database.readBrachOnlyDatabase([
            RC._THIS,
            RC.INFORMATION,
            uid
        ], (snapChat) => {

            let chats: TSChat | undefined = undefined;
            if (snapChat !== null && snapChat !== undefined) {
                var snapChatsObject = snapChat.val() as IChat;

                if (snapChatsObject !== null && snapChatsObject !== undefined) {

                    let currentChat = this.chats.get(snapChatsObject.UID)
                    if (currentChat === undefined) {
                        this.chats.set(snapChatsObject.UID, new TSChat(snapChatsObject));
                    } else {
                        currentChat.live = true;
                    }

                    this.chats.forEach(chat => {
                        if (chat.live === false) {
                            this.chats.delete(chat.informacion.UID);
                        } else {
                            chats = chat
                        }
                    })

                    if (chats) {
                        load(chats)
                    }

                } else {

                }
            } else {

            }
        })
    }

    startListenerChats(load: (chats: TSChat[]) => void) {
        const RC = DB_ROUTES.CHAT;

        this.listenChats = Database.readBrachDatabase([
            RC._THIS,
            RC.INFORMATION
        ], (snapChat) => {

            let chats: TSChat[] = []
            if (snapChat !== null && snapChat !== undefined) {
                var snapChatsObject = snapChat.val();

                if (snapChatsObject !== null && snapChatsObject !== undefined) {
                    var snapChatsObjectArray = Object.values(snapChatsObject) as IChat[];

                    this.chats.forEach(chat => {
                        chat.live = false;
                    })

                    snapChatsObjectArray.forEach(chatInfo => {
                        let currentChat = this.chats.get(chatInfo.UID)
                        if (currentChat === undefined) {
                            this.chats.set(chatInfo.UID, new TSChat(chatInfo));
                        } else {
                            currentChat.live = true;
                        }
                    });

                    this.chats.forEach(chat => {
                        if (chat.live === false) {
                            this.chats.delete(chat.informacion.UID);
                        } else {
                            chats.push(chat)
                        }
                    })



                    load(chats)
                } else {
                    load([])
                }
            } else {
                load([])
            }
        })
    }

    stopListenerChats() {
        this.listenChats();
    }
}

export default ChatManager;
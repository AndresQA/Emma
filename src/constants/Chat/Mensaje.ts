interface Mensaje {

    id: string;
    fecha: number;
    userID: string;
    msg: string;
    type: "text" | "img" | "doc";

}

export default Mensaje;
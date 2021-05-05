import React from "react";
import AppContext from "../../App/AppContext";
import User from "../../constants/Firebase/User";
import Login from "../../pages/Login/Login";
import "./Header.scss";


const Header = () => {


    const { useLogin, useStyle } = AppContext.Consumer();
    const [style] = useStyle();
    const [login] = useLogin()

    var handleLogOut = () => {
        User.loginOut(()=>{})
    };

    return <div className={"Header" + (style.header === "FLOAT" ? " float" : "")}>
        <img className="Header__logo" src="/images/logo.png" alt="logo" />
       {login === true ? <p className="singOut" onClick={handleLogOut}>Cerrar Sesion</p> : <></> }
    </div>
}

export default Header;
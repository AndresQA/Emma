import React from "react";
import AppContext from "../../App/AppContext";
import "./Header.scss";


const Header = () => {


    const { useLogin, useStyle } = AppContext.Consumer();
    const [style] = useStyle();

    return <div className={"Header" + (style.header === "FLOAT" ? " float" : "")}>
        <img className="Header__logo" src="/images/logo.png" alt="logo" />
    </div>
}

export default Header;
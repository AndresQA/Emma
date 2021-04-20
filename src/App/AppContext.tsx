import React, { Props, useEffect, useMemo, useState } from "react";
import createContext from "../constants/Context/context";

interface IStylePage {
    header: "FLOAT" | "" | "DEFAULT"
}

type IUseLogin = [undefined | boolean, React.Dispatch<React.SetStateAction<undefined | boolean>>]
type IUsePathName = [string, React.Dispatch<React.SetStateAction<string>>]
type IUseStyle = [IStylePage, React.Dispatch<React.SetStateAction<IStylePage>>]


export interface IPropsContext {
    useLogin: () => IUseLogin,
    usePathname: () => IUsePathName,
    useStyle: () => IUseStyle
}

const AppContext = createContext<IPropsContext>();

export const AppContextProvider = (props: Props<any>) => {

    const [pathName, setPathName] = useState(window.location.pathname);
    const [style, setStyle] = useState<IStylePage>({
        header: "DEFAULT"
    });

    
    const [isLoging, setIsLogin] = useState<undefined | boolean>(undefined);


    useEffect(() => {
        if(isLoging === true){
            setStyle({header:"DEFAULT"})
        }else{
            setStyle({header:"FLOAT"})
        }
    }, [isLoging])


    const value = useMemo(() => {
        const useLogin: () => IUseLogin = () => [isLoging, setIsLogin]
        const usePathname: () => IUsePathName = () => [pathName, setPathName]
        const useStyle: () => IUseStyle = () => [style, setStyle]
        return {
            useLogin,
            usePathname,
            useStyle
        }
    }, [isLoging, pathName, style]);

    return <AppContext.Provider value={value} {...props} />
}

export default AppContext;

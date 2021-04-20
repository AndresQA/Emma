import React, { Props, useEffect, useMemo, useState } from "react";
import createContext from "../constants/Context/context";

interface IStylePage {
    header: "FLOAT" | "" | "DEFAULT"
}

type IFAQ = "Faq" | "Notification" | "Step"


type IUseLogin = [undefined | boolean, React.Dispatch<React.SetStateAction<undefined | boolean>>]
type IUsePathName = [string, React.Dispatch<React.SetStateAction<string>>]
type IUseStyle = [IStylePage, React.Dispatch<React.SetStateAction<IStylePage>>]
type IUseFaq = [IFAQ, React.Dispatch<React.SetStateAction<IFAQ>>]


export interface IPropsContext {
    useLogin: () => IUseLogin,
    usePathname: () => IUsePathName,
    useStyle: () => IUseStyle
    useFaq: () => IUseFaq
}

const AppContext = createContext<IPropsContext>();

export const AppContextProvider = (props: Props<any>) => {

    const [pathName, setPathName] = useState(window.location.pathname);
    const [style, setStyle] = useState<IStylePage>({
        header: "DEFAULT"
    });
    const [faq, setFaq] = useState<IFAQ>("Faq");
    
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
        const useFaq: () => IUseFaq = () => [faq, setFaq] 
        return {
            useLogin,
            usePathname,
            useStyle,
            useFaq
        }
    }, [isLoging, pathName, style, faq]);

    return <AppContext.Provider value={value} {...props} />
}

export default AppContext;

import React, { Props, useEffect, useMemo, useState } from "react";
import createContext from "../constants/Context/context";

interface IStylePage {
    header: "FLOAT" | "" | "DEFAULT"
}


type IUsePathName = [string, React.Dispatch<React.SetStateAction<string>>]
type IUseStyle = [IStylePage, React.Dispatch<React.SetStateAction<IStylePage>>]


export interface IPropsContext {
    usePathname: () => IUsePathName,
    useStyle: () => IUseStyle
}

const AppContext = createContext<IPropsContext>();

export const AppContextProvider = (props: Props<any>) => {

    const [pathName, setPathName] = useState(window.location.pathname);
    const [style, setStyle] = useState<IStylePage>({
        header:"DEFAULT"
    });

    const value = useMemo(() => {
        const usePathname: () => IUsePathName = () => [pathName, setPathName]
        const useStyle: () => IUseStyle = () => [style, setStyle]
        return {
            usePathname,
            useStyle
        }
    }, [pathName, style]);

    return <AppContext.Provider value={value} {...props} />
}

export default AppContext;

import React, { Props, useEffect, useMemo, useState } from "react";
import createContext from "../constants/Context/context";

interface IStylePage {
    header: "FLOAT" | "" | "DEFAULT"
}

type IFAQ = "Faq" | "Notification" | "Step"

interface IDataForms {
    formaIngreso: string;
    lugarIngreso: string;
    cedulaPersona: Number;
    telefono: Number;
    correoSolicitante: string,
    direccionResidencia: string,
    selectedDate: Date,
}

interface IDataMapsComunity {
    nombreComunidad: String;
    descripcionComunidad: String;
}


type IUseLogin = [undefined | boolean, React.Dispatch<React.SetStateAction<undefined | boolean>>]
type IUsePathName = [string, React.Dispatch<React.SetStateAction<string>>]
type IUseStyle = [IStylePage, React.Dispatch<React.SetStateAction<IStylePage>>]
type IUseFaq = [IFAQ, React.Dispatch<React.SetStateAction<IFAQ>>]
type IUseDataForms = [any, React.Dispatch<React.SetStateAction<any>>]
type IUseDataMapsComunity = [any, React.Dispatch<React.SetStateAction<any>>]



export interface IPropsContext {
    useLogin: () => IUseLogin,
    usePathname: () => IUsePathName,
    useStyle: () => IUseStyle
    useFaq: () => IUseFaq
    useDataForms: () => IUseDataForms
    UseDataMapsComunity: () => IUseDataMapsComunity
}

const AppContext = createContext<IPropsContext>();

export const AppContextProvider = (props: Props<any>) => {

    const [pathName, setPathName] = useState(window.location.pathname);
    const [style, setStyle] = useState<IStylePage>({
        header: "DEFAULT"
    });
    const [faq, setFaq] = useState<IFAQ>("Notification");

    const [isLoging, setIsLogin] = useState<undefined | boolean>(undefined);

    const [dataForms, setDataForms] = useState<IDataForms>({
        formaIngreso: "",
        lugarIngreso: "",
        cedulaPersona: 0,
        telefono: 0,
        correoSolicitante: "",
        direccionResidencia: "",
        selectedDate: new Date()
    })

    const [dataMapsComunity, setDataMapsComunity] = useState<IDataMapsComunity>({
        nombreComunidad: "",
        descripcionComunidad: "",
    })


    useEffect(() => {
        if (isLoging === true) {
            setStyle({ header: "DEFAULT" })
        } else {
            setStyle({ header: "FLOAT" })
        }
    }, [isLoging])


    const value = useMemo(() => {
        const useLogin: () => IUseLogin = () => [isLoging, setIsLogin]
        const usePathname: () => IUsePathName = () => [pathName, setPathName]
        const useStyle: () => IUseStyle = () => [style, setStyle]
        const useFaq: () => IUseFaq = () => [faq, setFaq]
        const useDataForms: () => IUseDataForms = () => [dataForms, setDataForms]
        const UseDataMapsComunity: () => IUseDataMapsComunity = () => [dataMapsComunity, setDataMapsComunity]

        return {
            useLogin,
            usePathname,
            useStyle,
            useFaq,
            useDataForms,
            UseDataMapsComunity
        }
    }, [isLoging, pathName, style, faq, dataForms, dataMapsComunity]);

    return <AppContext.Provider value={value} {...props} />
}

export default AppContext;

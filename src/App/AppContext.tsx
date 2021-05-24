import React, { Props, useEffect, useMemo, useState } from "react";
import createContext from "../constants/Context/context";

interface IStylePage {
    header: "FLOAT" | "" | "DEFAULT"
}

type IFAQ = "Faq" | "Notification" | "Step"


interface IDataForms {
    formaIngreso: string;
    lugarIngreso: string;
    cedulaPersona?: number;
    telefono?: number;
    correoSolicitante: string,
    direccionResidencia: string,
    selectedDate: Date,
    nombreBeneficiario: string,
    idBeneficiario: string,
    edadBeneficiario?: number,
    formaIngresoBeneficiario: string,
    lugarIngresoBeneficiario: String,
    fechaIngresoBeneficiario: Date,
}

interface IDataMapsComunity {
    nombreComunidad: string;
    descripcionComunidad: string;
    direccionComunidad: string;
    telefonoComunidad: string;
    imgComunidad: string;
    email: string;
}


type IUseLogin = [undefined | boolean, React.Dispatch<React.SetStateAction<undefined | boolean>>]
type IUsePathName = [string, React.Dispatch<React.SetStateAction<string>>]
type IUseStyle = [IStylePage, React.Dispatch<React.SetStateAction<IStylePage>>]
type IUseFaq = [IFAQ, React.Dispatch<React.SetStateAction<IFAQ>>]
type IUseDataForms = [any, React.Dispatch<React.SetStateAction<any>>]
type IUseDataMapsComunity = [any, React.Dispatch<React.SetStateAction<any>>]
type IUsePageRouteMig = [number, React.Dispatch<React.SetStateAction<number>>]




export interface IPropsContext {
    useLogin: () => IUseLogin,
    usePathname: () => IUsePathName,
    useStyle: () => IUseStyle
    useFaq: () => IUseFaq
    useDataForms: () => IUseDataForms
    UseDataMapsComunity: () => IUseDataMapsComunity
    usePageRouteMig: () => IUsePageRouteMig
}

const AppContext = createContext<IPropsContext>();

export const AppContextProvider = (props: Props<any>) => {

    const [pathName, setPathName] = useState(window.location.pathname);
    const [style, setStyle] = useState<IStylePage>({
        header: "DEFAULT"
    });
    const [faq, setFaq] = useState<IFAQ>("Notification");

    const [pageRouteMig, setPageRouteMig] = useState(1);

    const [isLoging, setIsLogin] = useState<undefined | boolean>(undefined);

    const [dataForms, setDataForms] = useState<IDataForms>({
        formaIngreso: "",
        lugarIngreso: "",
        cedulaPersona: undefined,
        telefono: undefined,
        correoSolicitante: "",
        direccionResidencia: "",
        selectedDate: new Date(),
        nombreBeneficiario: "",
        idBeneficiario: "",
        edadBeneficiario: undefined,
        formaIngresoBeneficiario: "",
        lugarIngresoBeneficiario: "",
        fechaIngresoBeneficiario: new Date(),
    })

    const [dataMapsComunity, setDataMapsComunity] = useState<IDataMapsComunity>({
        nombreComunidad: "",
        descripcionComunidad: "",
        direccionComunidad: "",
        telefonoComunidad: "",
        imgComunidad: "",
        email: "",
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
        const usePageRouteMig: () => IUsePageRouteMig = () => [pageRouteMig, setPageRouteMig]

        return {
            useLogin,
            usePathname,
            useStyle,
            useFaq,
            useDataForms,
            UseDataMapsComunity,
            usePageRouteMig,
        }
    }, [isLoging, pathName, style, faq, dataForms, dataMapsComunity, pageRouteMig]);

    return <AppContext.Provider value={value} {...props} />
}

export default AppContext;

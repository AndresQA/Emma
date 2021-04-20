import React, { Props, useEffect, useMemo, useState } from "react";
import createContext from "../constants/Context/context";


type IUseUser = [string, React.Dispatch<React.SetStateAction<string>>]
type IUseEmail = [string, React.Dispatch<React.SetStateAction<string>>]
type IUsePassword = [string, React.Dispatch<React.SetStateAction<string>>]



export interface IPropsContext {
    useUser: () => IUseUser,
    useEmail: () => IUseEmail,
    usePassword: () => IUsePassword
}

const LoginContext = createContext<IPropsContext>();

export const LoginContextProvider = (props: Props<any>) => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const value = useMemo(() => {

        const useUser: () => IUseUser = () => [user, setUser];
        const useEmail: () => IUseEmail = () => [email, setEmail];
        const usePassword: () => IUsePassword = () => [password, setPassword];

        return {
            useUser,
            useEmail,
            usePassword
        }
    }, [user, email, password]);

    return <LoginContext.Provider value={value} {...props} />
}

export default LoginContext;

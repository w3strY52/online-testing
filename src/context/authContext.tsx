import {createContext, Dispatch, SetStateAction, useContext, useEffect, useState} from "react";
import {emptyFunction} from "../constants/emptyFunction";
import {TUserAuth} from "../types/UserAuthType";
import useCookie, {getCookie} from 'react-use-cookie';


/**
 * Контекст авторизации
 */


export type TAuthContext = {
    isAuth: boolean,
    authInfo: TUserAuth,
    setIsAuth: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<TAuthContext>({
    isAuth: false,
    authInfo: {
        firstName: "",
        form: "",
        id: 0,
        lastName: "",
        login: "",
        secondName: ""
    },
    setIsAuth: emptyFunction
})

function AuthProvider(props: { children: any }) {
    const [isAuth, setIsAuth] = useState(false);
    const [userInfo, setUserInfo] = useState<TUserAuth>({
        firstName: "",
        form: "",
        id: 0,
        lastName: "",
        login: "",
        secondName: ""
    });

    const [userToken, setUserToken] = useCookie('auth', Math.random().toString());

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
            setUserInfo(JSON.parse(localStorage.getItem('auth') || '') || undefined)
            setUserToken(userInfo.id.toString(), {
                days: 365,
                SameSite: 'Strict',
                Secure: true,
            })
        } else {
            if (!getCookie('auth'))
                setUserToken( Math.random().toString(), {
                    days: 365,
                    SameSite: 'Strict',
                    Secure: true,
                })
        }
    }, [isAuth]);
    return (
        <AuthContext.Provider
            value={{isAuth, setIsAuth, authInfo: userInfo}}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
export const useAuthContext = () => {
    return useContext(AuthContext);
};
import { useCallback, type ReactNode, useMemo, createContext, useState, useEffect } from 'react'
import { UseLogin, UseRegister } from '~/apis'
import type { AuthContextType, RegisternType, loginTypes } from '~/types'
import { message } from "antd"
import { removeAxiosToken, setaxiostoken } from '~/utils/axios'
import { Loading } from '~/components/Base'

const AuthContext = createContext<AuthContextType | null>(null)
const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { mutateAsync: signInWithEmailAndPassword } = UseLogin()
    const { mutateAsync: createUserWithEmailAndPassword } = UseRegister()
    const [userdata, setuserdata] = useState<any>()
    const [loading, setloading] = useState(true)
    const [isAuthenticated, setisAuthenticated] = useState(false)

    const signup = useCallback(({ email, password, username }: RegisternType) => {
        try {
            createUserWithEmailAndPassword({ password, username, email }, {
                onSuccess: (data) => {
                    setuserdata(data)
                    setaxiostoken(data.data.token as string)
                    localStorage.setItem("token", data.data.token as string)
                    if (data.data.token) {
                        setisAuthenticated(true)
                    }
                }
            })
        } catch (error) {
            console.log("signup error:", error)
        }
    }, [createUserWithEmailAndPassword])

    const login = useCallback(async ({ password, username }: loginTypes) => {
        try {
            signInWithEmailAndPassword({ password, username }, {
                onSuccess: (token) => {
                    message.success("User Login Successful!")
                    setuserdata(token)
                    localStorage.setItem("token", token as string)
                    if (token) {
                        setisAuthenticated(true)
                    }
                }
            });
        } catch (error) {
            console.log("login error:", error)
        }
    }, [signInWithEmailAndPassword]);

    const signout = useCallback(() => {
        try {
            removeAxiosToken();
            localStorage.removeItem("token");
            setisAuthenticated(false);
        } catch (error) {
            console.log("signout error:", error);
        }
    }, []);


    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setisAuthenticated(true);
        }
        setloading(false)
        return () => { }
    }, []);

    const value = useMemo(() => ({
        signup,
        login,
        loading,
        userdata,
        signout,
        isAuthenticated
    }), [
        signup,
        login,
        loading,
        userdata,
        signout,
        isAuthenticated
    ]);
    return (
        <AuthContext.Provider value={value}>
            {loading ? <Loading /> : children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };

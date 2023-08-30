import { useCallback, type ReactNode, useMemo, createContext, useState } from 'react'
import { UseLogin, UseRegister } from '~/apis'
import type { AuthContextType, RegisternType, getUserType, loginTypes, } from '~/types'
import { message } from "antd"
import { removeAxiosToken, setaxiostoken } from '~/utils/axios'

const AuthContext = createContext<AuthContextType | null>(null)
const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { mutateAsync: signInWithEmailAndPassword, data: logindata } = UseLogin()
    console.log("🚀 ~ file: AuthContext.tsx:10 ~ AuthProvider ~ logindata:", logindata)
    const { mutateAsync: createUserWithEmailAndPassword, data: registerdata } = UseRegister()

    const [userdata, setuserdata] = useState<getUserType>()
    const [loading, setloading] = useState(false)
    const [isAuthenticated, setisAuthenticated] = useState(false)

    const signup = useCallback(({ email, password, username }: RegisternType) => {
        try {
            createUserWithEmailAndPassword({ password, username, email })
            setuserdata(logindata)
            setaxiostoken(userdata?.token as string)
            localStorage.setItem("token", userdata?.token as string)
            if (userdata?.token) {
                setisAuthenticated(true)
            }
            setisAuthenticated(false)

        } catch (error) {
            console.log("🚀 ~ file: AuthContext.tsx:16 ~ signup ~ error:", error)
        }
    }, [createUserWithEmailAndPassword, logindata, userdata])

    const login = useCallback(async ({ password, username }: loginTypes) => {
        setloading(true)
        try {
            signInWithEmailAndPassword({ password, username }).then(() => {
                message.success("User Login Sucessfull!")
                setuserdata(registerdata)
                localStorage.setItem("token", userdata?.token as string)
                if (userdata?.token) {
                    setisAuthenticated(true)
                }
                setisAuthenticated(false)
            })
        } catch (error) {
            console.log("🚀 ~ file: AuthContext.tsx:17 ~ login ~ error:", error)
        }
    }, [signInWithEmailAndPassword, userdata, registerdata])

    const signout = useCallback(() => {
        try {
            removeAxiosToken()
            localStorage.removeItem("token");
            setuserdata({
                email: "",
                token: '',
                username: ""
            })
            setisAuthenticated(false)
        } catch (error) {
            console.log("🚀 ~ file: AuthContext.tsx:41 ~ signout ~ error:", error)
        }
    }, [])

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
    ])
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
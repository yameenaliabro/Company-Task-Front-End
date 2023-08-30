export type loginTypes = {
    username: string,
    password: string
}

export type RegisternType = {
    username: string,
    email: string,
    password: string,
}

export type getUserType = {
    username: string,
    email: string,
    token: string | undefined
}

export type AuthContextType = {
    login: (props: loginTypes) => void,
    signup: (props: RegisternType) => void,
    signout: VoidFunction,
    isAuthenticated: boolean,
    userdata: getUserType | undefined,
    loading: boolean
}

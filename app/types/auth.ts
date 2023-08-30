export type loginTypes = {
    username: string,
    password: string
}

export type RegisternType = {
    username: string,
    email: string,
    password: string,
}

export type UserType = {
    token: string;
    user: {
        _id: string;
        username: string;
        email: string;
        password: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
};

export type AuthContextType = {
    login: (props: loginTypes) => void,
    signup: (props: RegisternType) => void,
    signout: VoidFunction,
    isAuthenticated: boolean,
    userdata: UserType | undefined,
    loading: boolean
}

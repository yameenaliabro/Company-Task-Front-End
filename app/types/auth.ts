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
    data: {
        token: string;
        user: {
            createdAt: string;
            email: string;
            password: string;
            updatedAt: string;
            username: string;
            __v: number;
            _id: string;
        };
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

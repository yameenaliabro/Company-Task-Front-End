import { useMutation } from "@tanstack/react-query";
import type { RegisternType, UserType, loginTypes } from "~/types";
import axios from "~/utils/axios";

export const UseLogin = () => useMutation<string, Error, loginTypes>({
    mutationFn: async (props) => (await axios.post("/auth/login", props)).data
})

export const UseRegister = () => useMutation<UserType, Error, RegisternType>({
    mutationFn: async (props) => (await axios.post("/auth/register", props))
})


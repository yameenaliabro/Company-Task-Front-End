import { useMutation } from "@tanstack/react-query";
import type { RegisternType, loginTypes } from "~/types";
import axios from "~/utils/axios";

export const UseLogin = () => useMutation<any, Error, loginTypes>({
    mutationFn: async (props) => (await axios.post("/auth/login", props)).data
})

export const UseRegister = () => useMutation<any, Error, RegisternType>({
    mutationFn: async (props) => (await axios.post("/auth/register", props))
})

export const UseUpdateUser = () => useMutation({
    mutationFn: async (props) => (await axios.patch("/auth/update", props)).data
})

import { useMutation, useQuery } from "@tanstack/react-query";
import type { createHistoryTyps, getDosageType } from "~/types/search";
import axios from "~/utils/axios";

export const UseGetDosageBySearch = (searchTerm: string) => useQuery<getDosageType[], string, any>({
    queryKey: ["dosage", searchTerm],
    queryFn: async () => (await axios.get(`/dosage/search?drugname=${searchTerm}`)).data,
});

export const UseGetDosage = () => useQuery<getDosageType[], string, any>({
    queryKey: ["dosage",],
    queryFn: async () => (await axios.get(`/dosage/search`)).data,
});

export const UseCreateHistory = () => useMutation<void, string, createHistoryTyps>({
    mutationFn: async ({ userId, ...rest }) => await axios.post("/doasage/history", rest, { params: userId })
})

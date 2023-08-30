import { useQuery } from "@tanstack/react-query";
import { type getDosageType } from "~/types/search";
import axios from "~/utils/axios";

export const UseGetDosageBySearch = (searchTerm: string) => useQuery<getDosageType[], string, any>({
    queryKey: ["dosage", searchTerm],
    queryFn: async () => (await axios.get(`/dosage/search?drugname=${searchTerm}`)).data,
});

export const UseGetDosage = () => useQuery<getDosageType[], string>({
    queryKey: ["dosage",],
    queryFn: async () => (await axios.get(`/dosage/search`)).data,
});
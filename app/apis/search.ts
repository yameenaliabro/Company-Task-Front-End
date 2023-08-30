import { useQuery } from "@tanstack/react-query";
import { type getDosageType } from "~/types/search";
import axios from "~/utils/axios";

export const UseGetDosage = (searchTerm: string) => useQuery<getDosageType[], string, any>({
    queryKey: ["dosage", searchTerm],
    queryFn: async () => (await axios.get(`/dosage/search?drugname=${searchTerm}`)).data,
});
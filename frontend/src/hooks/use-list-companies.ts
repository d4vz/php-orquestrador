import { useQuery } from "@tanstack/react-query";
import { companies } from "../api/companies";
import { companiesKeys } from "./keys";

export const useListCompanies = () => {
	return useQuery({
		queryKey: companiesKeys.findAll,
		queryFn: companies.findAll,
	});
};

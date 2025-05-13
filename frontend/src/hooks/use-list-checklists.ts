import { useQuery } from "@tanstack/react-query";
import { checklist } from "../api/checklist";
import { checklistKeys } from "./keys";

export const useListChecklists = () => {
	return useQuery({
		queryKey: checklistKeys.findAll,
		queryFn: checklist.findAll,
	});
};

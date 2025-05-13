import { useQuery } from "@tanstack/react-query";
import { checklist } from "../api/checklist";
import { checklistKeys } from "./keys";

export const useFindChecklistById = (id: string) => {
	return useQuery({
		queryKey: checklistKeys.findById(id),
		queryFn: () => checklist.findById(id),
	});
};

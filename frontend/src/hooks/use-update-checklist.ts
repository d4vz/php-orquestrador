import { useMutation } from "@tanstack/react-query";
import { checklist } from "../api/checklist";
import type { ChecklistFormSchema } from "../components/checklist-form/schema";
export const useUpdateChecklist = (id: string) => {
	return useMutation({
		mutationFn: (data: ChecklistFormSchema) => checklist.update(id, data),
	});
};

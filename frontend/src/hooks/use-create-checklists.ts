import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checklist } from "../api/checklist";
import { checklistKeys } from "./keys";

export const useCreateChecklist = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: checklist.create,
		onSuccess: () => {
			alert("Checklist finalizado com sucesso");
		},
		onError: () => {
			alert("Erro ao finalizar checklist");
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: checklistKeys.findAll });
		},
	});
};

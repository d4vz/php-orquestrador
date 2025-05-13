import { useParams } from "react-router";
import { ChecklistForm } from "../components/checklist-form/ChecklistForm";
import type { ChecklistFormSchema } from "../components/checklist-form/schema";
import { useFindChecklistById } from "../hooks/use-find-checlist-by-id";
import { useUpdateChecklist } from "../hooks/use-update-checklist";
import type { Checklist } from "../types";

const adaptChecklistToFormSchema = (
	checklist: Checklist
): ChecklistFormSchema => {
	return {
		...checklist,
		company: checklist.company.id,
	};
};

export const Update = () => {
	const { id } = useParams<{ id: string }>();
	const { data: checklist, isLoading } = useFindChecklistById(id ?? "");
	const updateChecklist = useUpdateChecklist(id ?? "");

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!checklist) {
		return <div>Checklist not found</div>;
	}

	const handleSubmit = async (data: ChecklistFormSchema) => {
		await updateChecklist.mutateAsync(data);
	};

	return (
		<ChecklistForm
			onSubmit={handleSubmit}
			defaultValues={adaptChecklistToFormSchema(checklist)}
		/>
	);
};

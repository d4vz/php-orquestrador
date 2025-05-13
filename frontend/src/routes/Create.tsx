import { ChecklistForm } from "../components/checklist-form/ChecklistForm";
import type { ChecklistFormSchema } from "../components/checklist-form/schema";
import { useCreateChecklist } from "../hooks";

export const Create = () => {
	const createChecklist = useCreateChecklist();

	const handleSubmit = async (data: ChecklistFormSchema) => {
		await createChecklist.mutateAsync(data);
	};

	return <ChecklistForm onSubmit={handleSubmit} />;
};

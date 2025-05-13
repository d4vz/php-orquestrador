import { z } from "zod";

const stepSchema = z.object({
	title: z.string().min(1),
	category: z.string().min(1),
	items: z.array(
		z.object({
			label: z.string().min(1),
			value: z.boolean().optional(),
		})
	),
});

export const checklistFormSchema = z.object({
	company: z.string().min(1, "Selecione uma empresa"),
	user: z.string().min(1, "Digite o nome do usuário"),
	steps: z.array(stepSchema),
});

export type ChecklistFormSchema = z.infer<typeof checklistFormSchema>;

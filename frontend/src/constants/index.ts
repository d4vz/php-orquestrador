import type { Step } from "../types";

export const STEPS_CATEGORIES = {
	OIL_AND_MOTOR: "Óleo e Motor",
	SUSPENSION: "Suspensão",
} as const;

export const STEPS: Step[] = [
	{
		title: "Óleo e Motor",
		category: STEPS_CATEGORIES.OIL_AND_MOTOR,
		items: [
			{
				label: "Verificar nível de óleo",
				value: false,
			},
			{
				label: "Verificar nível de água",
				value: false,
			},
			{
				label: "Verificar filtro de Ar",
				value: true,
			},
		],
	},
	{
		title: "Suspensão",
		category: STEPS_CATEGORIES.SUSPENSION,
		items: [
			{
				label: "Verificar amortecedor",
				value: false,
			},
		],
	},
];

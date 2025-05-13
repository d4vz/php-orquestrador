export const checklistKeys = {
	findAll: ["checklists"] as const,
	findById: (id: string) => [...checklistKeys.findAll, id] as const,
};

export const companiesKeys = {
	findAll: ["companies"] as const,
};

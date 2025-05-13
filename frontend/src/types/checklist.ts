import type { Company } from "./companies";

export type StepItem = {
	label: string;
	value?: boolean;
};

export type Step = {
	title: string;
	category: string;
	items: StepItem[];
};

export type Checklist = {
	id: string;
	company: Company;
	user: string;
	steps: Step[];
	status: ChecklistStatus;
};

export type ChecklistStatus = "pending" | "completed";

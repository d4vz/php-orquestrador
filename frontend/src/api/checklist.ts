import { faker } from "@faker-js/faker";
import type { ChecklistFormSchema } from "../components/checklist-form/schema";
import { STEPS } from "../constants";
import type { Checklist, Step } from "../types";
import { COMPANIES } from "./companies";

const generateStep = (): Step[] => {
	return STEPS.map((step) => ({
		...step,
		items: step.items.map((item) => ({
			...item,
			value: faker.helpers.arrayElement([true, false]),
		})),
	}));
};

const generateChecklist = (): Checklist => {
	return {
		company: faker.helpers.arrayElement(COMPANIES),
		user: faker.person.fullName(),
		status: faker.helpers.arrayElement(["pending", "completed"]),
		steps: generateStep(),
		id: faker.string.uuid(),
	};
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const CHECKLISTS = Array.from({ length: 10 }, generateChecklist);

const findAll = async (): Promise<Checklist[]> => {
	await sleep(1000);
	return CHECKLISTS;
};

const findById = async (id: string): Promise<Checklist | undefined> => {
	await sleep(1000);
	return CHECKLISTS.find((checklist) => checklist.id === id);
};

const create = async (data: ChecklistFormSchema): Promise<Checklist> => {
	await sleep(1000);

	const company = COMPANIES.find((company) => company.id === data.company);

	if (!company) {
		throw new Error("Company not found");
	}

	CHECKLISTS.push({
		...data,
		id: faker.string.uuid(),
		status: "pending",
		company,
	});

	return CHECKLISTS[CHECKLISTS.length - 1];
};

const update = async (
	id: string,
	data: ChecklistFormSchema
): Promise<Checklist | undefined> => {
	await sleep(1000);

	const checklist = CHECKLISTS.find((checklist) => checklist.id === id);

	if (!checklist) {
		return undefined;
	}

	Object.assign(checklist, data);
	return checklist;
};

export const checklist = {
	findAll,
	findById,
	create,
	update,
};

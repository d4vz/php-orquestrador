import { faker } from "@faker-js/faker";
import type { Company } from "../types";
import { sleep } from "../utils";

const generateCompany = (): Company => ({
	id: faker.string.uuid(),
	name: faker.company.name(),
});

const generateCompanies = (count: number): Company[] => {
	return Array.from({ length: count }, generateCompany);
};

export const COMPANIES = generateCompanies(10);

const findAll = async (): Promise<Company[]> => {
	await sleep(1000);
	return COMPANIES;
};

export const companies = {
	findAll,
};

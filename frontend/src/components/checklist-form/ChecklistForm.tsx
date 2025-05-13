import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { STEPS } from "../../constants";
import { useListCompanies } from "../../hooks/use-list-companies";
import { FormCheckbox } from "../ui/FormCheckbox";
import { FormInput } from "../ui/FormInput";
import { FormSelect } from "../ui/FormSelect";
import { checklistFormSchema, type ChecklistFormSchema } from "./schema";

const initialValues: ChecklistFormSchema = {
	company: "",
	user: "",
	steps: STEPS,
};

interface ChecklistFormProps {
	onSubmit: (data: ChecklistFormSchema) => Promise<void>;
	defaultValues?: ChecklistFormSchema;
}

export const ChecklistForm = ({
	onSubmit,
	defaultValues,
}: ChecklistFormProps) => {
	const { data: companies = [] } = useListCompanies();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<ChecklistFormSchema>({
		resolver: zodResolver(checklistFormSchema),
		defaultValues: defaultValues ?? initialValues,
	});

	useEffect(() => {
		if (!defaultValues) return;
		reset(defaultValues);
	}, [defaultValues, reset]);

	return (
		<form
			onSubmit={handleSubmit(onSubmit, console.error)}
			className="space-y-6 bg-white p-6 rounded-lg shadow-lg"
		>
			<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
				<div className="flex">
					<div className="flex-shrink-0">
						<Icon icon="mdi:alert" className="h-5 w-5 text-yellow-400" />
					</div>
					<div className="ml-3">
						<p className="text-sm text-yellow-700">
							Atenção: Se o formulário não for preenchido completamente, ele
							será salvo como "Pendente".
						</p>
					</div>
				</div>
			</div>

			<div className="space-y-4">
				<div>
					<FormSelect
						label="Empresa"
						id="companies"
						placeholder="Selecione uma empresa"
						options={companies.map((company) => ({
							value: company.id,
							label: company.name,
						}))}
						register={register("company")}
						error={errors.company}
					/>
				</div>

				<div>
					<FormInput
						label="Nome do usuário"
						placeholder="Nome do usuário"
						error={errors.user}
						register={register("user")}
					/>
				</div>
			</div>

			<div className="space-y-6">
				{STEPS.map((step, index) => (
					<div key={step.category} className="bg-gray-50 p-4 rounded-lg">
						<div className="flex items-center justify-between mb-4">
							<h2 className="text-lg font-semibold text-gray-800">
								{step.title}
							</h2>
							<span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
								{step.items.length} itens
							</span>
						</div>
						<div className="space-y-3">
							{step.items.map((item, itemIndex) => (
								<FormCheckbox
									key={item.label}
									label={item.label}
									register={register(`steps.${index}.items.${itemIndex}.value`)}
								/>
							))}
						</div>
					</div>
				))}
			</div>

			<button
				className="w-full py-3 px-4 text-white font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				type="submit"
				disabled={isSubmitting}
			>
				{isSubmitting ? "Enviando..." : "Enviar"}
			</button>
		</form>
	);
};

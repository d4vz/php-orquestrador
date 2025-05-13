import type { SelectHTMLAttributes } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface Option {
	value: string | number;
	label: string;
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	error?: FieldError;
	register?: UseFormRegisterReturn;
	options: Option[];
	placeholder?: string;
}

export const FormSelect = ({
	label,
	error,
	register,
	options,
	placeholder,
	...props
}: FormSelectProps) => {
	return (
		<div>
			{label && (
				<label
					htmlFor={props.id || props.name}
					className="block mb-2 text-sm font-semibold text-gray-700"
				>
					{label}
				</label>
			)}
			<select
				{...register}
				{...props}
				className={`w-full px-4 py-2.5 text-gray-700 bg-white border ${
					error ? "border-red-500" : "border-gray-300"
				} rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors ${
					props.className || ""
				}`}
			>
				{placeholder && <option value="">{placeholder}</option>}
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
		</div>
	);
};

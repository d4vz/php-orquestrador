import type { InputHTMLAttributes } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: FieldError;
	register?: UseFormRegisterReturn;
}

export const FormInput = ({
	label,
	error,
	register,
	...props
}: FormInputProps) => {
	return (
		<div>
			{label && (
				<label className="block mb-2 text-sm font-semibold text-gray-700">
					{label}
				</label>
			)}
			<input
				{...register}
				{...props}
				className={`w-full px-4 py-2.5 text-gray-700 bg-white border ${
					error ? "border-red-500" : "border-gray-300"
				} rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors ${
					props.className || ""
				}`}
			/>
			{error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
		</div>
	);
};

import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface FormCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	register?: UseFormRegisterReturn;
}

export const FormCheckbox = ({
	label,
	register,
	...props
}: FormCheckboxProps) => {
	const id = props.id || label.replace(/\s+/g, "-").toLowerCase();
	return (
		<div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
			<label htmlFor={id} className="text-gray-700 font-medium cursor-pointer">
				{label}
			</label>
			<input
				type="checkbox"
				id={id}
				{...register}
				{...props}
				className={`w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer ${
					props.className || ""
				}`}
			/>
		</div>
	);
};

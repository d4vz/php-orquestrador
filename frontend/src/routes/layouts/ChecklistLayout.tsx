import { Icon } from "@iconify/react/dist/iconify.js";
import { Outlet, useNavigate } from "react-router";

export const ChecklistLayout = () => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate("/");
	};

	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className="w-full max-w-xl flex flex-col gap-4 p-4">
				<div className="flex items-center gap-2">
					<button
						onClick={handleBack}
						className="p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors"
					>
						<Icon icon="mdi:arrow-left" />
					</button>
					<h1 className="text-2xl font-bold ">Realizar checklist</h1>
				</div>
				<Outlet />
			</div>
		</div>
	);
};

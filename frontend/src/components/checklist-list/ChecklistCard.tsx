import { Icon } from "@iconify/react";
import type React from "react";

import type { Checklist } from "../../types/checklist";
import StatusBadge from "./StatusBadge";

type ChecklistCardProps = React.HTMLAttributes<HTMLDivElement> & Checklist;

export const ChecklistCard: React.FC<ChecklistCardProps> = ({
	company,
	user,
	status,
	...props
}) => {
	return (
		<div
			className="flex flex-col rounded-lg shadow-xl p-6 border border-gray-200 gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
			{...props}
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Icon icon="mdi:office-building" />
					<h1 className="text-lg font-bold line-clamp-1">{company.name}</h1>
				</div>
				<div>
					<div className="flex items-center gap-2">
						<div className="flex items-center gap-2 text-gray-500 text-sm">
							<Icon icon="mdi:user" />
							<span className="line-clamp-1">{user}</span>
						</div>
						<StatusBadge status={status} />
					</div>
				</div>
			</div>
			<div className="flex gap-4">
				<div className="flex items-center gap-2 text-gray-500 text-sm">
					<Icon icon="mdi:relation-many-to-zero-or-one" />
					<span>Motor 6/6</span>
				</div>
				<div className="flex items-center gap-2 text-gray-500 text-sm">
					<Icon icon="mdi:car-battery" />
					<span>Bateria e elétrica 5/6</span>
				</div>
				<div className="flex items-center gap-2 text-gray-500 text-sm">
					<Icon icon="mdi:tire" />
					<span>Pneus e Rodas 4/4</span>
				</div>
			</div>
		</div>
	);
};

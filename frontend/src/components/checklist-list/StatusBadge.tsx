import type { ChecklistStatus } from "../../types";

interface StatusBadgeProps {
	status: ChecklistStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
	let badgeColorClasses = "";

	switch (status) {
		case "completed":
			badgeColorClasses = "bg-green-200 text-green-700";
			break;
		case "pending":
			badgeColorClasses = "bg-yellow-200 text-yellow-700";
			break;
		default:
			badgeColorClasses = "bg-gray-200 text-gray-700";
			break;
	}

	return (
		<span className={`px-2 py-1 rounded-full text-xs ${badgeColorClasses}`}>
			{status}
		</span>
	);
};

export default StatusBadge;

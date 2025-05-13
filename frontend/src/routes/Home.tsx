import { useNavigate } from "react-router";
import { ChecklistCard } from "../components/checklist-list/ChecklistCard";
import { useListChecklists } from "../hooks";
export const Home = () => {
	const { data: checklists = [] } = useListChecklists();
	const navigate = useNavigate();

	const renderChecklists = () => {
		return checklists.map((checklist) => (
			<ChecklistCard
				key={checklist.id}
				{...checklist}
				onClick={() => navigate(`/update/${checklist.id}`)}
			/>
		));
	};

	return (
		<div className="grid grid-cols-3 gap-4 p-8 w-screen">
			{renderChecklists()}
		</div>
	);
};

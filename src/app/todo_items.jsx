import { Toggle } from "./toggle";

export const TodoItems = (props) => {
	return (
		<>
			<div className="todo__item__content">
				<div className="todo__item__title">{props.task.title}</div>
				<div className="todo__item__note">{props.task.note}</div>
			</div>
			<div className="status__selector">
				<Toggle />
			</div>
		</>
	);
};

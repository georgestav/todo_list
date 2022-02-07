import "./App.scss";
import { TodoItems } from "./todo_items";

const thingsTodo = [
	{ title: "task 1", note: "Do all the react exercises of the day" },
	{ title: "task 2", note: "Do the last weeks remaining exercises" },
	{ title: "task 3", note: "Send some CVs" },
	{ title: "task 4", note: "Eat" },
	{ title: "task 5", note: "Send some more CVs" },
	{ title: "task 6", note: "Go though my mails" },
	{ title: "task 7", note: "Take the trash out" },
];
console.log(thingsTodo);
function App() {
	return (
		<div className="todo__list">
			{thingsTodo.map((element, i) => {
				console.log(element, i);
				return (
					<div className={`todo__item td--${i}`} key={i}>
						<TodoItems task={element} />
					</div>
				);
			})}
		</div>
	);
}

export default App;

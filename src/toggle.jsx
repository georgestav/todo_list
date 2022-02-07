import { useState } from "react";
import question from "./img/question.svg";
import check from "./img/check.svg";
import cross from "./img/cross.svg";

export const Toggle = () => {
	//set initial status to question
	const [status, setStatus] = useState(question);

	//toggle / loop logic
	const toggleStatus = () => {
		const availableStatuses = [question, check, cross]; // assign the possible statuses in an array
		const index = availableStatuses.findIndex((element) => element === status); //find the current index of the status
		if (!availableStatuses[index + 1]) {
			// return the default status if the status is falsy
			return setStatus(question);
		}
		setStatus(availableStatuses[index + 1]); // if the status is not falsy add 1 to the index to loop thought the array
	};

	return (
		<>
			<img src={status} alt="status" onClick={toggleStatus} />
		</>
	);
};

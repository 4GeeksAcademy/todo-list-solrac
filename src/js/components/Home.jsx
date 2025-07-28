import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {


	const [inputData, setInputData] = useState("");
	const [task, setTask] = useState(null);


	const onInputChange = (event) => {
		setInputData(event.target.value)
	}

	const handleKeyUp = (event) => {
		if (event.key === "Enter") {
			setTask(inputData)
			setInputData("")
		}

	}

	const addTask = (event) => {

	}


	return (

		<div className="task m-5 p-2 bg-warning">
			<div className="text-center">
				<h1 className="display-2">TODO-LIST</h1>
			</div>
			<div className="task-body m-2">
				<label className="form-label" htmlFor="taskNew"><strong>New Task:</strong></label>
				<input className="form-control"
					id="taskNew"
					placeholder="Add Task"
					type="text"
					value={inputData}
					onChange={onInputChange}
					onKeyUp={handleKeyUp} />
			</div>
			<div className="row">
				<p className="text-center">{task}</p>
			</div>
		</div>


	);
};

export default Home;
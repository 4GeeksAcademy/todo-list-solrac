import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {


	const [inputData, setInputData] = useState("");
	const [tasks, setTasks] = useState([]);


	const onInputChange = (event) => {
		setInputData(event.target.value)
	}

	const handleKeyUp = (event) => {
		if (event.key === "Enter") {
			addTask()
			setInputData("")
		}

	}

	const addTask = () => {
		
		setTasks([...tasks, inputData])
		//let newTasks = [...tasks]
		//newTasks.push(inputData)
		//setTasks(newTasks)
	}

	const deleteTask = (index) => {
	
		let newTasks = [...tasks]
		newTasks.splice(index, 1)
		setTasks(newTasks)
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
				<div className="text-center"> {tasks.map((task, index) => <p key={index}>{task}
					<button className="btn btn-danger m-1" onClick={() => deleteTask(index)}> X </button>
				</p>)}
				</div>
			</div>
		</div>


	);
};

export default Home;
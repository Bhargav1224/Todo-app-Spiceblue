import React, { useState } from "react";
import styled from "styled-components";
import { FaTasks } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTodos, updateTodos } from "../Redux/Todo/action";

const Container = styled.div`
	width: 25%;
	height: 340px;
	border: 1px solid #a5aaad;
	margin-left: 14%;
	background-color: #d9f3fa;
`;
const Description = styled.div`
	width: 95%;
	height: 80px;
	margin: auto;
	p {
		font-family: "Varela Round", sans-serif;
	}
`;
const TaskInput = styled.input`
	width: 85%;
	margin: auto;
	height: 20px;
	margin-top: -5px;
	border: 1px solid #a5aaad;
	outline: none;
`;
const Symbol = styled.div`
	width: 13%;
	height: 23px;
`;
const Mini = styled.div`
	display: flex;
`;
const DateContainer = styled.div`
	width: 95%;
	height: 80px;
	margin: auto;
`;
const TimeContainer = styled.div`
	width: 95%;
	height: 80px;
	margin: auto;
`;

const Date = styled.input`
	width: 71%;
	margin: auto;
	height: 20px;
	border: 1px solid #a5aaad;
	outline: none;
`;
const Time = styled.input`
	width: 71%;
	margin: auto;
	height: 20px;
	border: 1px solid #a5aaad;
	outline: none;
`;
const UserContainer = styled.div`
	width: 99%;
	height: 80px;
	margin: auto;
`;

const MiniCon = styled.div`
	width: 70%;
	height: 40px;
	display: flex;
	margin-left: 50px;
	button {
		margin-left: 60px;
		color: white;
		background-color: green;
		width: 100px;
		border-radius: 5px;
		border: none;
		outline: none;
		cursor: pointer;
	}
`;

const init = {
	assigned_user: "user_41c1d48564a8435d815643996d9a388f",
	task_date: "2012-5-30",
	task_time: 1345,
	time_zone: 32,
	is_completed: 1,
	task_msg: "",
};

export const Todos = ({ item, edit, setEdit }) => {
	const [data, setData] = useState(item || init);

	const { assigned_user, task_date, task_time, task_msg, id } = data;
	const dispatch = useDispatch();

	const handleSubmit = (id) => {
		edit && setEdit(false);
		if (edit) {
			dispatch(updateTodos(data));
		} else {
			dispatch(addTodos(data));
		}
	};

	const handleOnChange = (e) => {
		let { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	return (
		<>
			<Container>
				<Description>
					<p>Task Description</p>
					<Mini>
						<TaskInput
							type="text"
							value={task_msg}
							name="task_msg"
							onChange={handleOnChange}
						></TaskInput>
						<Symbol>
							<FaTasks />
						</Symbol>
					</Mini>
					<Mini>
						<DateContainer>
							<p>Date</p>
							<Date
								type="text"
								value={task_date}
								name="task_date"
								onChange={handleOnChange}
								placeholder="Date"
							></Date>
						</DateContainer>
						<TimeContainer>
							<p>Time</p>
							<Time
								type="text"
								value={task_time}
								name="task_time"
								onChange={handleOnChange}
								placeholder="Time"
							></Time>
						</TimeContainer>
					</Mini>
					<UserContainer>
						<p>Assign User</p>
						<TaskInput
							type="text"
							value={assigned_user}
							name="assigned_user"
							onChange={() => handleOnChange(id)}
						></TaskInput>
					</UserContainer>
					<UserContainer>
						<MiniCon>
							<p>Cancel</p>
							<button onClick={handleSubmit}>{edit ? "Update" : "Save"}</button>
						</MiniCon>
					</UserContainer>
				</Description>
			</Container>
		</>
	);
};

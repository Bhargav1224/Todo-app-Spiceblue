import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Todos } from "./Todos";
import { TodosLists } from "./TodosLists";

const Container = styled.div`
	display: flex;
`;
const SideBar = styled.div`
	width: 14%;
	height: 800px;
	background-color: #2a3a49;
`;
const Navbar = styled.nav`
	width: 99%;
	height: 40px;
	box-shadow: 5px 0px 5px 5px gray;
`;
const TodoContainer = styled.div`
	width: 25%;
	height: 30px;
	border: 1px solid #a5aaad;
	margin-left: 14%;
	margin-top: -700px;
	display: flex;
	p {
		text-align: left;
		margin-left: 5px;
		margin-top: 10px;
		font-family: "Josefin Sans", "sans-serif";
	}
	button {
		margin-left: 63%;
		outline: none;
		width: 50px;
		height: 100%;
		font-size: 25px;
		background-color: white;
		border-left: 1px solid gray;
		border-right: none;
		border-top: none;
		border-bottom: none;
		cursor: pointer;
	}
	button:hover {
		color: rgb(196, 17, 70);
	}
`;

export const Sidebar = () => {
	const [display, setDisplay] = useState(false);
	const { total_todos } = useSelector((state) => state.todos);

	const handleDisplay = () => {
		setDisplay((prev) => !prev);
	};

	return (
		<React.Fragment>
			<Container>
				<SideBar></SideBar>
				<Navbar></Navbar>
			</Container>
			<TodoContainer>
				<p>TASKS {total_todos}</p>
				<button onClick={handleDisplay}>+</button>
			</TodoContainer>
			{display && <Todos />}
			<TodosLists />
		</React.Fragment>
	);
};

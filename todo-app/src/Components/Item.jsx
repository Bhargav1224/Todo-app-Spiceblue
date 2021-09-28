import React, { useState } from "react";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Todos } from "./Todos";
import { useDispatch } from "react-redux";
import { deleteTodos } from "../Redux/Todo/action";

const Container = styled.div`
	width: 25%;
	height: 60px;
	/* border: 1px solid #a5aaad; */
	margin-left: 14%;
	margin-top: 5px;
	display: flex;
`;
const Content = styled.div`
	width: 59%;
	height: 60px;
	border: 1px solid #a5aaad;
	p {
		font-family: "Varela Round", sans-serif;
		margin-top: -2px;
	}
`;
const EditDelete = styled.div`
	width: 40%;
	height: 60px;
	border: 1px solid #a5aaad;
	display: flex;
`;
const Icons = styled.div`
	width: 20%;
	height: 20px;
	margin: 10px;
	font-size: 20px;
	border: 1px solid #a5aaad;
	text-align: center;
	padding: 5px;
`;
export const Item = ({ item }) => {
	const [edit, setEdit] = useState(false);
	const handleEdit = () => {
		setEdit(true);
	};

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteTodos(id));
	};

	return (
		<div>
			{!edit ? (
				<Container>
					<Content>
						<p>{item.task_msg}</p>
						<p>{item.task_date}</p>
					</Content>
					<EditDelete>
						<Icons>
							<IconContext.Provider value={{ className: "button" }}>
								<FaEdit onClick={handleEdit}></FaEdit>
							</IconContext.Provider>
						</Icons>
						<Icons>
							<IconContext.Provider value={{ className: "button" }}>
								<FaTrash onClick={() => handleDelete(item.id)}></FaTrash>
							</IconContext.Provider>
						</Icons>
					</EditDelete>
				</Container>
			) : (
				<Todos item={item} setEdit={setEdit} edit={edit} />
			)}
		</div>
	);
};

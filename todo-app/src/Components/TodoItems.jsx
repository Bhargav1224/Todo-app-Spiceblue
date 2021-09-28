import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Redux/Todo/action";
import { Item } from "./Item";

export const TodoItems = () => {
	const dispatch = useDispatch();
	const { todos } = useSelector((state) => state.todos);

	const handleGetdata = () => {
		dispatch(getTodos());
	};

	useEffect(() => {
		handleGetdata();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{todos?.map((item) => (
				<Item item={item} />
			))}
		</>
	);
};

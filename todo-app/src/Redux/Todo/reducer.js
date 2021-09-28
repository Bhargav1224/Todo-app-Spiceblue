//state,action
import {
	ADD_TODO_FAILURE,
	ADD_TODO_REQUEST,
	ADD_TODO_SUCCESS,
	DELETE_TODO_FAILURE,
	DELETE_TODO_REQUEST,
	DELETE_TODO_SUCCESS,
	EDIT_TODO_FAILURE,
	EDIT_TODO_REQUEST,
	EDIT_TODO_SUCCESS,
	GET_TODO_FAILURE,
	GET_TODO_REQUEST,
	GET_TODO_SUCCESS,
} from "./actionType";

const init = {
	todos: [],
	isEdit: false,
	isDelete: false,
	isSuccess: false,
	isLoading: false,
	isError: false,
	total_todos: 0,
};
// action===>  {type,payload}
//reducer will take state and action and perform some logics...
export const Todoreducer = (state = init, { type, payload }) => {
	switch (type) {
		//post request
		case ADD_TODO_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case ADD_TODO_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: false,
				total_todos: state.total_todos++,
			};
		case ADD_TODO_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		//get todos
		case GET_TODO_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case GET_TODO_SUCCESS:
			return {
				...state,
				todos: payload,
				isError: false,
				isLoading: false,
				total_todos: payload.length,
			};
		case GET_TODO_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case EDIT_TODO_REQUEST:
			return {
				...state,
				isEdit: true,
				isLoading: true,
				isError: false,
			};
		case EDIT_TODO_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: false,
				isEdit: false,
			};
		case EDIT_TODO_FAILURE:
			return {
				...state,
				isEdit: false,
				isLoading: false,
				isError: true,
			};
		case DELETE_TODO_REQUEST:
			return {
				...state,
				isDelete: true,
				isLoading: true,
				isError: false,
			};
		case DELETE_TODO_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: false,
				isDelete: true,
				total_todos: payload.length,
			};
		case DELETE_TODO_FAILURE:
			return {
				...state,
				isDelete: false,
				isLoading: false,
				isError: true,
			};

		default:
			return state;
	}
};

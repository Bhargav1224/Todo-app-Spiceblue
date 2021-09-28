//action is an creater
//it is a function
//which returns an object,it is a plain javascript object
//that defines the action
//an action is an object with a key called type and payload
//Type will define what type of action it is and we can pass payload as body
//payload ,etc...
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

import axios from "axios";

//adding todos
export const addtodoRequest = () => {
	return {
		type: ADD_TODO_REQUEST,
	};
};

export const addtodoSuccess = (payload) => {
	return {
		type: ADD_TODO_SUCCESS,
		payload,
	};
};
export const addtodoFailure = (er) => {
	return {
		type: ADD_TODO_FAILURE,
		payload: er,
	};
};

//getting todos
export const gettodoRequest = () => {
	return {
		type: GET_TODO_REQUEST,
	};
};

export const gettodoSuccess = (payload) => {
	return {
		type: GET_TODO_SUCCESS,
		payload,
	};
};
export const gettodoFailure = (er) => {
	return {
		type: GET_TODO_FAILURE,
		payload: er,
	};
};

//updating todos
export const updatetodoRequest = () => {
	return {
		type: EDIT_TODO_REQUEST,
	};
};

export const updatetodoSuccess = (payload) => {
	return {
		type: EDIT_TODO_SUCCESS,
		payload,
	};
};
export const updatetodoFailure = (er) => {
	return {
		type: EDIT_TODO_FAILURE,
		payload: er,
	};
};

//deleting todos
export const deletetodoRequest = () => {
	return {
		type: DELETE_TODO_REQUEST,
	};
};

export const deletetodoSuccess = (payload) => {
	return {
		type: DELETE_TODO_SUCCESS,
		payload,
	};
};
export const deletetodoFailure = (er) => {
	return {
		type: DELETE_TODO_FAILURE,
		payload: er,
	};
};

const companyId = "company_0336d06ff0ec4b3b9306ddc288482663";
const token =
	"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzI4MzQyMjcsIm5iZiI6MTYzMjgzNDIyNywianRpIjoiMDVmMWNiYmQtYTAyYi00N2FiLThiYjctYjY4OWFkNjY5YTM1IiwiaWRlbnRpdHkiOnsibmFtZSI6Ik1haGkgQ1NLIiwiZW1haWwiOiJnb29kQHRlc3QzLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzQxYzFkNDg1NjRhODQzNWQ4MTU2NDM5OTZkOWEzODhmIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mZDE3ZDIwNjUwYzk5NTk0YWVmNmQxMjVhMjU5ODdlYT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.e8I3nrDQJJbO9tXgODpoNZ-xosOBYt5uceUYy3JQ8EA";

export const getTodos = (payload) => (dispatch) => {
	dispatch(gettodoRequest());
	return axios
		.get(
			` https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b?company_id=${companyId}`,
			{
				headers: {
					Authorization: "Bearer " + token,
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		)
		.then((res) => {
			dispatch(gettodoSuccess(res.data.results));
		})
		.catch((er) => {
			dispatch(gettodoFailure(er));
		});
};

export const addTodos = (payload) => (dispatch) => {
	dispatch(addtodoRequest());
	return axios
		.post(
			` https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b?company_id=${companyId}`,
			{
				headers: {
					Authorization: "Bearer " + token,
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				payload,
			}
		)
		.then(() => {
			dispatch(addtodoSuccess());
			dispatch(getTodos());
		})
		.catch((er) => {
			dispatch(addtodoFailure(er));
		});
};

export const updateTodos = (payload) => (dispatch) => {
	
	dispatch(updatetodoRequest());
	return axios
		.put(
			`  https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b/${payload.id}?company_id=${companyId}`,
			{
				headers: {
					Authorization: "Bearer " + token,
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				payload,
			}
		)
		.then(() => {
			dispatch(updatetodoSuccess());
			dispatch(getTodos());
		})
		.catch((er) => {
			dispatch(updatetodoFailure(er));
		});
};

export const deleteTodos = (payload) => (dispatch) => {
	dispatch(deletetodoRequest());
	return axios
		.delete(
			`  https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b/${payload}?company_id=${companyId}`,
			{
				headers: {
					Authorization: "Bearer " + token,
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		)
		.then(() => {
			dispatch(deletetodoSuccess());
			dispatch(getTodos());
		})
		.catch((er) => {
			dispatch(deletetodoFailure(er));
		});
};

// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

// Todo 추가 Action Creator
export const addTodo = (payload) => {
	return { type: ADD_TODO, payload };
};

// Todo 지우기 Action Creator
export const deleteTodo = (payload) => {
	return { type: DELETE_TODO, payload };
};

// Update 해주기 Action Creator
export const updateTodo = (payload) => {
	return { type: UPDATE_TODO, payload };
};



// 초기 상태값
const initialState = {
	todos: [
		{
			id: 1,
			title: "산책",
			body: "9시 이후에 산책 한시간",
			isDone: true,
		},
		{
			id: 2,
			title: "react",
			body: "리액트 한번 더 둘러보기",
			isDone: false,
		},
	],
};

// 리듀서
const todos = (state = initialState, action) => { //state:초기값들 , 10번을 넣어줌 , action: 받아온 값 넣어줌 
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload],
			};

		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => action.payload !== todo.id), //수정
			};

		// case UPDATE_TODO: {
		// 	const newTodos = state.todos.map((todo) => {
		// 	if (todo.id === action.payload) {
		// 	todo.isDone = !todo.isDone;
		// 	}
		// 	return todo;
		// 	});
		// 	return { todos: newTodos };
		// 	}

		case UPDATE_TODO:
			const newTodos = state.todos.map((todo) => {
				if (todo.id === action.payload) {
					todo.isDone = !todo.isDone;
					return todo;
				} else {
					return todo;
				}
			});
			return { todos: newTodos };

		default:
			return state;
	}
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;

import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/module/todos';
import "./style.css";

function Form({ setTodos, todos }) {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
  const sona = useSelector((state)=>state.todos.todos);
  console.log(sona)
  const dispatch = useDispatch();

  const [todo, setTodo] = useState(initialState);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value, id: todos.length + 1 });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo({...todo}));
    setTodos([...todos, todo]); //추가하는 줄
    setTodo(initialState);
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          className="add-input input-body"
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          className="add-input"
          onChange={onChangeHandler}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;

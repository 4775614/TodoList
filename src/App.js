import React from "react";
import TodoList from "./pages/TodoList";

function App() {
	return <TodoList />;
}

export default App;

// import { useState } from "react";
// import "./App.css";

// import Layout from "./components/layout/Layout";
// import Header from "./components/header/Header";
// import Form from "./components/form/Form";
// import List from "./components/list/List";
// import Pages from "./components/list/List";
// import Todo from "./components/todo/Todo";

// function App() {
// 	const [title, setTitle] = useState("");
// 	const [content, setContent] = useState("");
// 	const [todos, setTodos] = useState([
// 		{
// 			id: 1,
// 			title: "react를 배워봅시다.",
// 			content: "어쩔티비~",
// 		},
// 	]);

// 	// function del() {
// 	// 	fetch(`http://localhost:3000/`),
// 	// 		{
// 	// 			method: "DELETE",
// 	// 		};
// 	// }

// 	return (
// 		<div className="container">
// 			<input
// 				type="text"
// 				value={title}
// 				onChange={(event) => {
// 					setTitle(event.target.value);
// 				}}
// 			/>
// 			<input
// 				type="text"
// 				value={content}
// 				onChange={(event) => {
// 					setContent(event.target.value);
// 				}}
// 			/>
// 			<button
// 				onClick={() => {
// 					setTodos([
// 						...todos,
// 						{ id: todos.length + 1, title: title, content: content },
// 					]);
// 				}}
// 			>
// 				추가하기
// 			</button>

// 			<div>
// 				<h1>Working</h1>

// 				<div className="todos-container">
// 					{todos.map((todo) => (
// 						<div className="todo">
// 							<div className="todo_title" key={todo.id}>
// 								{todo.title}
// 							</div>
// 							<div className="todo_content" key={todo.id}>
// 								{todo.content}
// 							</div>
// 							<button className="btn_del">삭제</button>
// 							<button>완료</button>
// 						</div>
// 					))}
// 				</div>
// 			</div>

// 			<div>
// 				<h1>Done</h1>
// 				<div className="todos-container">
// 					{todos.map((todo) => (
// 						<div className="todo">
// 							<div className="todo_title" key={todo.id}>
// 								{todo.title}
// 							</div>
// 							<div className="todo_content" key={todo.id}>
// 								{todo.content}
// 							</div>
// 							<button>삭제</button>
// 							<button>취소</button>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default App;

// import { useState } from 'react'

// const ToDoListPage = () => {
// 		//우리가 쓸 함수, state(값) 넣는 곳
//     //변하는 값들은 usestate를 사용함 ex)배열
//     const [title, SetTitle] = useState("")
//       // [""] <- 타이틀이 지금은 빈 문자열이라는 뜻, 바꾸고 싶으면 setTitle을 해야 title이 바뀜
//     const [content, SetContent] = useState("")
//     const [contentList, SetContentList] = useState("")
//     const onHandleTitle = (event) => {
//         setTitle(event.target.value)
//     }
//     //인풋이 change할 때 마다

//     const onRegister = () => {
//       const todo = {title:title, content:content, isComplete:false} // 앞에 타이틀은 key값 뒤에 타이틀은 변수(우리가 만든 변수)
//       setContentList([...contentList, todo])
//     }

// 	return(
//       <div>
//           <div>
//               <input type="text" value={title} onChange={(e) => { setTitle(e.target.value); }}/>
//               <input type="text" value={content} onChange={(e) => { setContent(e.target.value); }}/>
//               {/* //input을 칠 때마다 값이 변경되어야 하는데 string으로 해버리면 그 고정값만 나옴
//               // 근데 {title}로 하면 빈 ""문자열만 나와서 settitle로 바꿔야함 how? onChange={} 화살표함수 이용
//               // target : 이벤트가 발생한 input(목표물)에 있는 value.
//               // input 값을 가지고 싶으면 target.value 는 그냥 공식
//               // onChange가 실행될 때 마다 setTitle이 발생함
//                */}
//               <button onClick={onRegister}>등록하기</button>
//           </div>

//           <div>
//             <h1>working</h1>
//                {contentList.map((todo, index)=>{ //contentlistlist에 있는 객체 하나하나가 todo에 담김
//                 if(!todo.isComplete){//! = false일 때 트루가 된다는 뜻
// return (
//                     <div key={index} style={{border : '1px solid black'}}>
//                       <p>{todo.title}</p> //첫번째 받아온 Todo에 받아온 키값 title
//                       <span>{todo.content}</span>
//                       <button>완료하기</button>
//                       <button>삭제하기</button>
//                   </div>
//                   )
//                   }  {
//                     else
//                   }

//                })}
//           </div>

//           <div>
//             <h1>Done</h1>
//                {contentList.map((todo, index)=>{ //contentlistlist에 있는 객체 하나하나가 todo에 담김
//                   return (
//                     <div key={index} style={{border : '1px solid black'}}>
//                       <p>{todo.title}</p> //첫번째 받아온 Todo에 받아온 키값 title
//                       <span>{todo.content}</span>
//                       <button>완료하기</button>
//                       <button>삭제하기</button>
//                   </div>
//                   )
//                })}
//           </div>

//       </div>

// 	)
// }

// export default ToDoListPage;

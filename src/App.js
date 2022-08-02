import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import Detail from "./components/detail/Detail";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TodoList />}></Route>
				<Route path="detail/:id" element={<Detail />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

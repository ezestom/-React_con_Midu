import { useState } from "react";
import { Todos } from "./components/Todos";
import { mockTodos } from "./mocks/mocksTodos.js"
import { TodoId, type Todo as TodoType } from "./types";


const App = (): JSX.Element => {
	const [todos, setTodos] = useState(mockTodos);

	const handleRemove = (id: TodoId) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	}

	const handleCompleted = (
		{ id, completed }: Pick<TodoType, 'id | completed'>
	): void => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					completed
				}
			}
			return todo;
		})
		setTodos(newTodos);
	}

	return (
		<div className="todoapp">

			<Todos
				onToggleCompleteTodo={handleCompleted}
				onRemoveTodo={handleRemove}
				todos={todos} />
		</div>

	);
}

export default App;
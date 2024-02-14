import { MinusCircle, CheckCircle } from 'lucide-react';
import { TodoTypes } from '../types/todos';
import { Dispatch, SetStateAction } from 'react';

interface TodoComponentProps {
    todo: TodoTypes;
    setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

export function Todo({ todo, setTodos }: TodoComponentProps) {
    function handleDeleteTodo() {
        const todoList = JSON.parse(localStorage.getItem('todos') || '[]');

        const newTodoList = todoList.filter((item: TodoTypes) => item.id !== todo.id);

        localStorage.setItem('todos', JSON.stringify(newTodoList));
        setTodos(newTodoList);
    }

    function handleCompleteTodo() {
        const todoList = JSON.parse(localStorage.getItem('todos') || '[]');

        const todoIndex = todoList.findIndex((item: TodoTypes) => item.id === todo.id);

        todoList[todoIndex].completed = true;

        localStorage.setItem('todos', JSON.stringify(todoList));
        setTodos(todoList);
    }

    return (
        <div className="mt-3 bg-neutral-200 p-2 flex justify-between items-center pl-2 group hover:bg-white border-2 border-neutral-200 cursor-default rounded-md">
            <p>{todo.content}</p>
            <div className="hidden items-center gap-2 group-hover:flex">
                <button onClick={handleDeleteTodo} className="text-red-600">
                    <MinusCircle />
                </button>
                <button onClick={handleCompleteTodo} className="text-green-600 rounded-r-md">
                    <CheckCircle />
                </button>
            </div>
        </div>
    );
}

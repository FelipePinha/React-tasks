import { MinusCircle, CheckCircle } from 'lucide-react';
import { TodoTypes } from '../types/todos';
import { Dispatch, SetStateAction } from 'react';
import { clsx } from 'clsx';

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
        <div
            className={clsx(
                'mt-3 p-2 flex justify-between items-center pl-2 group  border-2 md:hover:bg-white cursor-default rounded-md',
                todo.completed
                    ? 'bg-green-400 border-green-400 text-white hover:text-neutral-500'
                    : 'bg-neutral-200  border-neutral-200'
            )}
        >
            <p>{todo.content}</p>
            <div className="md:hidden flex items-center gap-2 md:group-hover:flex">
                <button onClick={handleDeleteTodo} className="text-red-600">
                    <MinusCircle />
                </button>
                {!todo.completed && (
                    <button onClick={handleCompleteTodo} className="text-green-600 rounded-r-md">
                        <CheckCircle />
                    </button>
                )}
            </div>
        </div>
    );
}

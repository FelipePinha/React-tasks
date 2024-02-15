import { useState } from 'react';
import { Form } from './components/Form';
import { Todo } from './components/Todo';
import { TodoTypes } from './types/todos';
import { Percentage } from './components/Percentage';

function App() {
    const [todos, setTodos] = useState<TodoTypes[]>(() => {
        const todosOnStorage = localStorage.getItem('todos');

        if (todosOnStorage) {
            return JSON.parse(todosOnStorage);
        }

        return [];
    });
    const [textFilter, setTextFilter] = useState('');
    const [buttonFilter, setButtonFilter] = useState('all');

    function createTodo(content: string) {
        const newTodo = {
            id: crypto.randomUUID(),
            content,
            completed: false,
        };

        const todoList = [newTodo, ...todos];

        localStorage.setItem('todos', JSON.stringify(todoList));

        setTodos(todoList);
    }

    function clearAllSearch() {
        setButtonFilter('all');
        setTextFilter('');
    }

    const filterResults = todos
        .filter(todo => {
            if (buttonFilter === 'all') {
                return todo;
            } else if (buttonFilter === 'pending') {
                return todo.completed === false;
            } else {
                return todo.completed === true;
            }
        })
        .filter(todo => todo.content.toLowerCase().includes(textFilter));

    return (
        <main className="h-screen w-screen flex justify-center items-center p-5 text-neutral-500">
            <div className="bg-white shadow-sm shadow-stone-400 p-5 md:p-14 w-full max-w-[800px] rounded-md">
                <header className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-1">
                        <p className="font-bold text-5xl">13</p>
                        <div className="leading-3">
                            <p className="font-bold text-lg">Fev</p>
                            <p className="text-md">2024</p>
                        </div>
                    </div>
                    <p className="text-lg">Tuesday</p>
                </header>

                <Percentage todos={todos} />

                <Form
                    setTextFilter={setTextFilter}
                    createTodo={createTodo}
                    setButtonFilter={setButtonFilter}
                    buttonFilter={buttonFilter}
                />

                <div className="w-full h-[200px] overflow-y-scroll mt-6">
                    {todos.length === 0 ? (
                        <p>Your list is empty. Try add some items by filling in the field above</p>
                    ) : filterResults.length === 0 ? (
                        <p>
                            Your search found no results.{' '}
                            <button onClick={clearAllSearch} className="underline">
                                Clean the search here
                            </button>{' '}
                            to se all items
                        </p>
                    ) : (
                        filterResults.map(todo => (
                            <Todo key={todo.id} todo={todo} setTodos={setTodos} />
                        ))
                    )}
                </div>
            </div>
        </main>
    );
}

export default App;

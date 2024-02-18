import { TodoTypes } from '../types/todos';

interface PercentageProps {
    todos: TodoTypes[];
}

export function Percentage({ todos }: PercentageProps) {
    function calculatePercentage() {
        const completedTodos = todos.filter(todo => todo.completed === true).length;
        const totalTodos = todos.length;

        if (completedTodos === 0 && totalTodos === 0) {
            return 0;
        }

        const percentage = (completedTodos / totalTodos) * 100;
        return percentage;
    }

    return (
        <div className="h-4 w-full bg-neutral-300 mt-6 rounded-sm">
            <div
                style={{ width: `${calculatePercentage()}%`, transition: 'width 0.2s ease' }}
                className={`h-full bg-green-400 rounded-sm`}
            ></div>
        </div>
    );
}

import { MinusCircle, CheckCircle } from 'lucide-react';
import { TodoTypes } from '../types/todos';

interface TodoComponentProps {
    todo: TodoTypes;
}

export function Todo({ todo }: TodoComponentProps) {
    return (
        <div className="mt-3 bg-neutral-200 p-2 flex justify-between items-center pl-2 group hover:bg-white border-2 border-neutral-200 cursor-default rounded-md">
            <p>{todo.content}</p>
            <div className="hidden items-center gap-2 group-hover:flex">
                <button className=" text-red-600">
                    <MinusCircle />
                </button>
                <button className="text-green-600 rounded-r-md">
                    <CheckCircle />
                </button>
            </div>
        </div>
    );
}

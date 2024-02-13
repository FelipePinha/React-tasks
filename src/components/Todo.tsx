import { MinusCircle, CheckCircle } from 'lucide-react';

export function Todo() {
    return (
        <div className="mt-3 bg-neutral-200 p-2 flex justify-between items-center pl-2 group hover:bg-white border-2 border-neutral-200 cursor-default rounded-md">
            <p>Do a great job and join the best Product team!</p>
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

import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { Check, PlusCircle, Search } from 'lucide-react';
import { clsx } from 'clsx';

interface FormProps {
    createTodo: (content: string) => void;
    setTextFilter: Dispatch<SetStateAction<string>>;
    setButtonFilter: Dispatch<SetStateAction<string>>;
    buttonFilter: string;
}

export function Form({ createTodo, setTextFilter, setButtonFilter, buttonFilter }: FormProps) {
    const [content, setContent] = useState('');

    function handleSaveTodo(e: FormEvent) {
        e.preventDefault();

        if (!content) return;

        createTodo(content);

        setContent('');
    }

    function handleClickDoneFilterButton() {
        if (buttonFilter === 'done') {
            setButtonFilter('all');
            return;
        }

        setButtonFilter('done');
    }

    function handleClickPendingFilterButton() {
        if (buttonFilter === 'pending') {
            setButtonFilter('all');
            return;
        }

        setButtonFilter('pending');
    }

    return (
        <form onSubmit={handleSaveTodo} className="mt-6">
            <div className="flex flex-col-reverse md:flex-row items-center gap-3 md:gap-8">
                <div className="flex items-center gap-2 justify-end w-full md:w-60">
                    <button
                        onClick={handleClickDoneFilterButton}
                        className={clsx(
                            'flex gap-1 items-center border border-1 text-sm py-1 px-2 rounded-full',
                            buttonFilter === 'done'
                                ? 'bg-slate-100 border-sky-400 text-sky-400'
                                : ''
                        )}
                        type="button"
                    >
                        {buttonFilter === 'done' && <Check className="size-4" />}
                        Done
                    </button>
                    <button
                        onClick={handleClickPendingFilterButton}
                        className={clsx(
                            'flex gap-1 items-center border border-1 text-sm py-1 px-2 rounded-full',
                            buttonFilter === 'pending'
                                ? 'bg-slate-100 border-sky-400 text-sky-400'
                                : ''
                        )}
                        type="button"
                    >
                        {buttonFilter === 'pending' && <Check className="size-4" />}
                        Pending
                    </button>
                </div>
                <div className="relative w-full">
                    <input
                        onChange={e => setTextFilter(e.target.value)}
                        className="w-full p-2 rounded-md outline-none border-slate-300 border border-1"
                        type="text"
                        placeholder="search items"
                    />
                    <Search className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 size-5" />
                </div>
            </div>

            <div className="relative w-full mt-6">
                <input
                    onChange={e => setContent(e.target.value)}
                    value={content}
                    className="w-full p-2 rounded-md outline-none border-slate-300 border border-1"
                    type="text"
                    placeholder="Add new item"
                />
                <button
                    type="submit"
                    className="bg-cyan-600 absolute top-0 right-0 rounded-r-md h-full flex items-center p-2"
                >
                    <PlusCircle className="size-6 text-white" />
                </button>
            </div>
        </form>
    );
}

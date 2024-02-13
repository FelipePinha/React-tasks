import { Form } from './components/Form';
import { Todo } from './components/Todo';

function App() {
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

                <div className="h-4 w-full bg-neutral-300 mt-6 rounded-sm">
                    <div className="h-full w-1/2 bg-green-400 rounded-sm"></div>
                </div>

                <Form />

                <div className="w-full h-[200px] overflow-y-scroll mt-6">
                    <Todo />
                    <Todo />
                    <Todo />
                    <Todo />
                    <Todo />
                </div>
            </div>
        </main>
    );
}

export default App;

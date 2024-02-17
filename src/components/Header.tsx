import { getWeekDay, getCurrentMonth } from '../utils/date';

export function Header() {
    const currentDayNumber = new Date().getDate();
    const currentWeekDay = getWeekDay();
    const currentMonth = getCurrentMonth();
    const currentYear = new Date().getFullYear();

    console.log(currentWeekDay);

    return (
        <header className="w-full flex justify-between items-center">
            <div className="flex items-center gap-1">
                <p className="font-bold text-5xl">{currentDayNumber}</p>
                <div className="leading-3">
                    <p className="font-bold text-lg">{currentMonth}</p>
                    <p className="text-md">{currentYear}</p>
                </div>
            </div>
            <p className="text-lg">{currentWeekDay}</p>
        </header>
    );
}

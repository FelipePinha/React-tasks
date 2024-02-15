export function getWeekDay() {
    const currentDay = new Date().getDay();
    let day = '';

    switch (currentDay) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'friday';
            break;
        default:
            'Saturday';
    }

    return day;
}

export function getCurrentMonth() {
    const currentMonth = new Date().getMonth();
    let month = '';

    switch (currentMonth) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        default:
            month = 'December';
    }

    const formattedMonthString = month.substring(0, 3);
    return formattedMonthString;
}
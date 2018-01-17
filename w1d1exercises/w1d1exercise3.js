function isWeekEnd(){
    const todayDate = new Date();
    const today = todayDate.getDay();
    let days = ['weekend', 'weekday', 'weekday', 'weekday', 'weekday', 'weekday', 'weekend']
    return days[today];
}

console.log(isWeekEnd());
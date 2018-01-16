
function isWeekEnd() {
    const  todayDate = new Date();
    const day = todayDate.getDay();

    return day===0 || day ===6 ? "WeekEnd" : "WeekDay"

}
console.log(isWeekEnd());
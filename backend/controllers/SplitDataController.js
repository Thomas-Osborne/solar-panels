function splitData(data) {

    const splitDates = {};
    
    data.forEach(item => {
        const fullDate = new Date(item.period_end);
        const shortDate = fullDate.toLocaleDateString();
        if (!splitDates[shortDate]) {
            splitDates[shortDate] = [];
        }
        splitDates[shortDate].push(item);
    });

    return splitDates;
}

function determineFixedDate(data) {
    const splitUp = splitData(data);
    const keys = Object.keys(splitUp);

    const firstEntry = splitUp[keys[0]][0];
    const firstDate = new Date(firstEntry.period_end);

    const secondEntry = splitUp[keys[1]][0];
    const secondDate = new Date(secondEntry.period_end);

    if (firstDate.getHours() <= 18) {
        return secondDate.toLocaleDateString();
    } else {
        return firstDate.toLocaleDateString();
    }

}

export { determineFixedDate, splitData };
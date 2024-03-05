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

export { splitData };
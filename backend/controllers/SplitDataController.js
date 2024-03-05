function splitData(data) {
    data = data.map(value => value.period_end);

    const splitDates = {};
    
    data.forEach(item => {
        const fullDate = new Date(item);
        const shortDate = fullDate.toLocaleDateString();
        if (!splitDates[shortDate]) {
            splitDates[shortDate] = [];
        }
        splitDates[shortDate].push(fullDate);
    });

    console.log(splitDates);
    return splitDates;
}

export { splitData };
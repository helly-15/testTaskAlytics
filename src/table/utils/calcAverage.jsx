function calcAverage(data, field) {
    let newData = [...data];
    if(typeof newData[0][field] ==='string'){
        return Math.floor(newData.reduce(function (accumulator, currentValue) {
            return accumulator + +currentValue[field][0]
        }, 0)/newData.length) + ' дня'
    } else {
        return Math.floor(newData.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue[field]
        }, 0)/newData.length)
    }
}
export default calcAverage;


function dataLine(pageNumber,numOfLines, data) {
    let pageTable =[];
    console.log(pageNumber, numOfLines);
    for ( let i=(pageNumber -1)*numOfLines+1;i<=pageNumber*numOfLines;i++){
        pageTable.push(
            <tr>
                <td className='table__firstCol'>{data[i].number}</td>
                <td >{data[i].date}</td>
                <td >{data[i].income}</td>
                <td>{data[i].profit}</td>
                <td>{data[i].daysTo}</td>
                <td>{data[i].sessions}</td>
            </tr>
        )

    }
    return pageTable
    ;
}
export default dataLine;

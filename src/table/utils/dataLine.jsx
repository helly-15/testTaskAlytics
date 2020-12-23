
function dataLine(pageNumber,numOfLines, data) {
    let pageTable =[];
    console.log(pageNumber, numOfLines);
    for ( let i=(pageNumber -1)*numOfLines+1;i<=pageNumber*numOfLines;i++){
        pageTable.push(
            <tr>
                <td>Green</td>
                <td>Yellow</td>
                <td>Orange</td>
                <td>Green</td>
                <td>Yellow</td>
                <td>Orange</td>
            </tr>
        )

    }
    return pageTable
    ;
}
export default dataLine;

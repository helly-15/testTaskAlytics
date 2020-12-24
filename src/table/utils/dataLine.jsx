import chain from '../../assets/chain.svg'
function dataLine(pageNumber,numOfLines, data) {
    let pageTable =[];
    //console.log(pageNumber, numOfLines);
    for ( let i=(pageNumber -1)*numOfLines+1;i<=pageNumber*numOfLines;i++){
        pageTable.push(
            <tr>
                <th className='firstCol'>
                    <img src={chain} className='chain'/>
                    {data[i].number}
                </th>
                <td >{formatDate(data[i].date)}</td>
                <td >{data[i].income}</td>
                <td>{data[i].profit}</td>
                <td>{data[i].daysTo}</td>
                <td className='innerDivParent'>{data[i].sessions}</td>
            </tr>
        )

    }
    return pageTable
    ;
}
export default dataLine;

function formatDate(dateToFormat) {
    let parsed = new Date(Date.parse(dateToFormat));
    let options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };
    let formatted = parsed.toLocaleDateString('ru-Ru', options);

    let regexp = /[\s\u0433]\./g;
    let regexp2 = /\s\,/g;
    let regexp3 = /\./g;
    let regexp4 = /\,/;
    formatted = formatted.replace(regexp, '').replace(regexp2, ',').replace(regexp3, '').replace(regexp4, '.').replace(/\p{sc=Cyrillic}/u, l => l.toUpperCase()).replace(/\s\p{sc=Cyrillic}/u, l => l.toUpperCase());

    return formatted;

}

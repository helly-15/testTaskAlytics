import chain from '../../assets/chain.svg';
import './dataLine.scss';
import modalFunc from "./openModalWindow";
function dataLine(pageNumber,numOfLines, dataState) {
    let data = dataState;
    let pageTable =[];
    for ( let i=(pageNumber-1)*numOfLines;i<=pageNumber*numOfLines;i++){
        if(data[i]===undefined){
            return pageTable
        }
        pageTable.push(
            <tr className='row'>
                <th className='firstCol numLink' onClick={(e)=>modalFunc(e,data[i])}>
                    <img src={chain} className='chain' alt ='chain'/>
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
    let regexp2 = /\s,/g;
    let regexp3 = /\./g;
    let regexp4 = /,/;
    formatted = formatted.replace(regexp, '').replace(regexp2, ',').replace(regexp3, '').replace(regexp4, '.').replace(/\p{sc=Cyrillic}/u, l => l.toUpperCase()).replace(/\s\p{sc=Cyrillic}/u, l => l.toUpperCase());

    return formatted;

}

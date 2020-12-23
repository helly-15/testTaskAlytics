import React from 'react';
import './Table.scss';
import dataLine from './utils/dataLine';
import arrowDown from '../assets/arrowDown.svg'
function Table (props) {
    const {pageNumber, numOfLines, data} = props;
    return (
        <div className='table-outer'>
            <div className='table-inner'>
                <table className='table'>
                    <thead>
                    <tr className='table__title'>
                        <th className='table__firstCol sticky-1 sticky-col'>Номер
                            <img src={arrowDown} className='arrow'/>
                        </th>
                        <th className='table__secCol sticky-1'>Дата и время</th>
                        <th className='table__thirdCol sticky-1'>Выручка</th>
                        <th className='table__fourCol sticky-1'>Прибыль</th>
                        <th className='table__fifCol sticky-1'>Дней до сделки</th>
                        <th className='table__sixCol sticky-1'>Сессий</th>
                    </tr>
                    <tr className='table__average'>
                        <th className='table__firstCol sticky-2 sticky-col' >Итого и средние </th>
                        <th className='sticky-2' />
                        <th className='sticky-2'>-</th>
                        <th className='sticky-2'>-</th>
                        <th className='sticky-2'>-</th>
                        <th className='sticky-2'>-</th>
                    </tr>
                    </thead>
                    <tbody>
                    { dataLine(pageNumber,  numOfLines, data) }
                    </tbody>
                </table>

            </div>
            {addDiv()}
        </div>

    );
}

function addDiv(){
    console.log(document.querySelectorAll('innerDivParent'))
//document.querySelectorAll('innerDivParent')[0].insertAdjacentHTML('afterend', '<div id="innerDiv">');
//document.querySelectorAll('innerDivParent')[this.length-1].insertAdjacentHTML('afterend', '</div>')
}
export default Table;

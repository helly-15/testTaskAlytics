import React from 'react';
import './Table.scss';
import dataLine from './utils/dataLine';
import arrowDown from '../assets/arrowDown.svg'
function Table (props) {
    const {pageNumber, numOfLines, data} = props;
    return (
        <table className='table'>
            <thead>
            <tr className='table__title'>
                <th className='table__firstCol sticky-1'>Номер
                    <img src={arrowDown} className='arrow'/>
                </th>
                <th className='table__secCol sticky-1'>Дата и время</th>
                <th className='table__thirdCol sticky-1'>Выручка</th>
                <th className='table__fourCol sticky-1'>Прибыль</th>
                <th className='table__fifCol sticky-1'>Дней до сделки</th>
                <th className='table__sixCol sticky-1'>Сессий</th>
            </tr>
            <tr className='table__average'>
                <th className='table__firstCol sticky-2' >Итого и средние </th>
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
    );
}
export default Table;

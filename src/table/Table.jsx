import React from 'react';
import './Table.scss';
import dataLine from './utils/dataLine';
import arrowDown from '../assets/arrowDown.svg'
function Table (props) {
    const {pageNumber, numOfLines, data} = props;
    return (
        <table className='table'>
            <thead>
            <tr>
                <th className='table__firstCol'>Номер
                    <img src={arrowDown} className='arrow'/>
                </th>
                <th className='table__secCol'>Дата и время</th>
                <th className='table__thirdCol'>Выручка</th>
                <th className='table__fourCol'>Прибыль</th>
                <th className='table__fifCol'>Дней до сделки</th>
                <th className='table__sixCol'>Сессий</th>
            </tr>
            <tr>
                <th className='table__firstCol' >Итого и среднее </th>
                <th />
                <th >-</th>
                <th >-</th>
                <th >-</th>
                <th >-</th>
            </tr>
            </thead>
            <tbody>
            { dataLine(pageNumber,  numOfLines, data) }
            </tbody>
        </table>
    );
}
export default Table;

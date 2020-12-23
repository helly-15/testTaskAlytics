import React from 'react';
import './Table.scss';
import dataLine from './utils/dataLine'
function Table (props) {
    const {pageNumber, numOfLines, data} = props;
    return (
        <table>
            <thead>
            <tr>
                <th>Номер </th>
                <th>Дата и время</th>
                <th>Выручка</th>
                <th>Прибыль</th>
                <th>Дней до сделки</th>
                <th>Сессий</th>
            </tr>
            </thead>
            <tbody>
            { dataLine(pageNumber,  numOfLines, data) }
            </tbody>
        </table>
    );
}
export default Table;

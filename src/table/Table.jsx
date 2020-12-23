import React from 'react';
import './Table.scss';
import dataLine from './utils/dataLine';
import arrowDown from '../assets/arrowDown.svg'
function Table (props) {
    const {pageNumber, numOfLines, data} = props;
    return (
        // <div className='table-outer'>
            <div className='table-scroll'>
                <table className='main-table'>
                    <thead>
                        <tr>
                            <th scope="col" className='sticky-1 firstCol'>Номер
                                <img src={arrowDown} className='arrow'/>
                            </th>
                            <th scope="col" className='sticky-1'>Дата и время</th>
                            <th scope="col" className='sticky-1'>Выручка</th>
                            <th scope="col" className='sticky-1'>Прибыль</th>
                            <th scope="col" className='sticky-1'>Дней до сделки</th>
                            <th scope="col" className='sticky-1'>Сессий</th>
                        </tr>
                        <tr>
                            <th scope="col" className='sticky-2 firstCol'>Итого и средние </th>
                            <th scope="col" className='sticky-2'/>
                            <th scope="col" className='sticky-2'>-</th>
                            <th scope="col" className='sticky-2'>-</th>
                            <th scope="col" className='sticky-2'>-</th>
                            <th scope="col" className='sticky-2'>-</th>
                        </tr>
                    </thead>
                    <tbody>
                    { dataLine(pageNumber,  numOfLines, data) }
                    </tbody>
                </table>

            </div>
            // {addDiv()}
        // </div>

    );
}

export default Table;

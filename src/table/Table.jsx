import React from 'react';
import './Table.scss';
import dataLine from './utils/dataLine';
import arrowDown from '../assets/arrowDown.svg';
import sortTable from "./utils/sortTable";
import {useState} from "react";

function Table (props) {
    const {pageNumber, numOfLines, data} = props;
    //console.log(data);
    const [dataState, setDataState] = useState(data);
    const [order, setOrder] = useState('asc')
    console.log(dataState);
    let  handleClick= (e)=> {
        console.log(dataState +' in sort');
        //e.preventDefault();
        setDataState(sortTable(e.target.id,dataState, order))
        if (order === 'asc'){
            setOrder('desc')
        } else {
            setOrder('asc')
        }

    };
    console.log("Table dataState after handleClick: " + dataState);
    return (
            <div className='table-scroll'>
                <table className='main-table'>
                    <thead>
                        <tr>
                            <th scope="col" id='number' className='sticky-1 firstCol' onClick={handleClick}>Номер
                                <img src={arrowDown} className='arrow'/>
                            </th>
                            <th scope="col" id='date' className='sticky-1' onClick={handleClick}>Дата и время</th>
                            <th scope="col" id='income' className='sticky-1' onClick={handleClick}>Выручка</th>
                            <th scope="col" id='profit' className='sticky-1' onClick={handleClick}>Прибыль</th>
                            <th scope="col" id='daysTo' className='sticky-1' onClick={handleClick}>Дней до сделки</th>
                            <th scope="col" id='sessions' className='sticky-1' onClick={handleClick}>Сессий</th>
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
                    { dataLine(pageNumber,  numOfLines, dataState) }
                    </tbody>
                </table>

            </div>
    );
}

export default Table;

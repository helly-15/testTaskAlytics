import React from 'react';
import './Table.scss';
import dataLine from './utils/dataLine';
import sortTable from "./utils/sortTable";
import {useState} from "react";
import calcAverage from "./utils/calcAverage";
import PropTypes from 'prop-types';

function Table (props) {
    const {pageNumber, numOfLines, data} = props;
    const [dataState, setDataState] = useState(data);
    const [order, setOrder] = useState('asc');
    let  handleClick = (e) => {
        e.nativeEvent.stopImmediatePropagation();
        let elements = document.querySelectorAll('.arrow');
        for (let arrow of elements){
            arrow.style.display = 'inline-block';
            arrow.classList.toggle('down');
            arrow.classList.toggle('up');
        }
        setDataState(sortTable(e.currentTarget.id||e.target.parentNode.id,dataState, order))
        if (order === 'asc'){
            setOrder('desc')
        } else {
            setOrder('asc')
        }

console.log(e.currentTarget.id)
    };

    return (
            <div className = 'table-scroll'>
                <div className = "modal modal-visibility">
                    <div className = 'cards'>
                    </div>
                    <div className = 'cards'>
                    </div>
                </div>
                <table className = 'main-table'>
                    <thead>
                        <tr>
                            <th scope = "col" id = 'number' className = 'sticky-1 firstCol' onClick = {handleClick} >Номер<i className = "arrow up"/>
                            </th>
                            <th scope = "col" id = 'date' className = 'sticky-1' onClick = {handleClick}>Дата и время<i className = "arrow up"/> </th>
                            <th scope = "col" id = 'income' className = 'sticky-1' onClick = {handleClick}>Выручка<i className = "arrow up"/></th>
                            <th scope = "col" id = 'profit' className = 'sticky-1' onClick = {handleClick}>Прибыль<i className = "arrow up"/></th>
                            <th scope = "col" id = 'daysTo' className = 'sticky-1' onClick = {handleClick}>Дней до сделки<i className = "arrow up"/></th>
                            <th scope = "col" id = 'sessions' className = 'sticky-1' onClick = {handleClick}>Сессий<i className = "arrow up"/></th>
                        </tr>
                        <tr>
                            <th scope = "col" className = 'sticky-2 firstCol'>Итого и средние </th>
                            <th scope = "col" className = 'sticky-2'/>
                            <th scope = "col" className = 'sticky-2'>{calcAverage(dataState,'income')}</th>
                            <th scope = "col" className = 'sticky-2'>{calcAverage(dataState,'profit')}</th>
                            <th scope = "col" className = 'sticky-2'>{calcAverage(dataState,'daysTo')}</th>
                            <th scope = "col" className = 'sticky-2'>{calcAverage(dataState,'sessions')}</th>
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

Table.propTypes = {
    pageNumber: PropTypes.number,
    numOfLines: PropTypes.number,
    data: PropTypes.object,
};

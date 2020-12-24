import React from 'react';
import './App.css';
import Header from './header/Header';
import Table from './table/Table';
import Footer from './footer/Footer';
import data from './data.json';
import {useState} from "react";
import ReactPaginate from 'react-paginate';

function App() {
    const [pageNumber, setPageNumber] = useState(1);
    const [numOfLines, setNumOfLines] = useState(20);
    let handlePageClick = (e) => {
        setPageNumber(e.selected+1)
        //console.log( e.selected)
    };
   // console.log(pageNumber)
  // console.log(data)
  return (
    <div className='paginatedTable'>
      <Header/>
      <Table pageNumber ={pageNumber} numOfLines = {numOfLines} data = {data.array}  />
      <Footer/>
      <div className='pagContainer'>
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={8}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
        />
      </div>
      </div>

  );
}



export default App;

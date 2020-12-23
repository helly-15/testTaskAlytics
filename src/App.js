import React from 'react';
import './App.css';
import Header from './header/Header';
import Table from './table/Table';
import Footer from './footer/Footer';
import data from './data.json';
import {useState} from "react";

function App() {
    const [pageNumber, setPageNumber] = useState(1);
    const [numOfLines, setNumOfLines] = useState(20);
  return (
    <>
      <Header/>
      <Table pageNumber ={ pageNumber} numOfLines = {numOfLines} data = {data}  />
      <Footer/>
      </>

  );
}

export default App;

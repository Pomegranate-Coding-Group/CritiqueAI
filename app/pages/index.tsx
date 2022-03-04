import type { NextPage } from 'next'
import { Flex, Box, Button, Container, Accordian, Text, ErrorPopup, Banner } from '@components/common';
import { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import NavBar from '@components/NavBar';
import InputData from '@components/homepage/InputData';
import ResultsPage from '@components/homepage/ResultsPage';

const Home: NextPage = () => {
  const [loading, setLoading] = useState(null);
  const [dataRetrieved, setDataRetrieved] = useState('yes');

    const getData = ()=> {
    //setLoading = true

    // Colins functions here

    //on success
      //set dataRetrieved
    }
  
  return (
    <>
      <TitleAndMetaTags />
      <NavBar />
      {!dataRetrieved && (
        <InputData loading={loading} getData={getData}/>
      )}
      {dataRetrieved && (
        <ResultsPage dataRetrieved={dataRetrieved} />
      )}
    </>
  )
}

export default Home;

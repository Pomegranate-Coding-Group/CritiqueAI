import type { NextPage } from 'next'
import { Flex, Box, Button, Container, Accordian, Text, ErrorPopup, Banner } from '@components/common';
import { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import NavBar from '@components/NavBar';
import { InputData, ResultsPage} from '@components/homepage/';
import axios from 'axios';
import { JobListing } from './api/parser';

const Home: NextPage = () => {
    let [loading, setLoading] = useState(null);
    let [dataRetrieved, setDataRetrieved] = useState(null);

    const getData = (jobText: string, industry: string) => {
    setLoading(true)
    let request: JobListing;
    if (industry == "Software Engineering") {
        request = {
            industry : "swe",
            title : "engineer",
            text : jobText
        }
    } else if (industry == "UX Design") {
        request = {
            industry : "ux",
            title : "designer",
            text : jobText
        }
    }

    // Colins functions here
    const url = "http://localhost:3000" // TODO change to env var when deploy to vercel
    axios.post(url + "/api/parser", request)
    .then(function (response) {
        console.log(response)
        setLoading(false)
        setDataRetrieved("true")
    })
    .catch(function (error) {
        console.log("ERROR AXIOS FAILURE?", error)
    })

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

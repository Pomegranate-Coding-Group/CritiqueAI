import type { NextPage } from 'next'
import { Flex, Box, Button, Container, Accordian, Text, ErrorPopup, Banner } from '@components/common';
import { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import NavBar from '@components/NavBar';

const Home: NextPage = () => {
  const [industry, setIndustry] = useState('Industry');
  const [jobDescriptionText, setJobDescriptionText] = useState(null);
  const [pageError, setPageError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleJobDescriptionChange = (e: any) => {
    console.log(e.target.value);
    setJobDescriptionText(e.target.value);
  }

  const handleSubmit = () => {
    if (industry == 'Industry' || !jobDescriptionText) {
      setPageError('Please enter a job descirption and select an inudstry');
      return;
    }

    setLoading(true);
  }

  return (
    < >
      <TitleAndMetaTags />
      <NavBar />
      <Box css={{ mt: "2em" }}>
        <Container size="1" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Banner>
            <Text size='7'>CritiqueAI</Text>
          </Banner>
        </Container>
        <Container size="4">
          <Flex direction="column" >

            <Flex gap="2" justify="center">
              <textarea placeholder="Enter job description..." value={jobDescriptionText} onChange={(e) => handleJobDescriptionChange(e)} style={{ width: '500px', height: "200px" }} />
            </Flex>

            <Flex direction="row" justify='center' align="center" gap="8">
              <Accordian title={industry} setIndustry={setIndustry} items={['UX Design', 'UX Research']} />
              <Button size='2' onClick={() => handleSubmit()}>
                {loading ? <ClipLoader size={20} /> : <></>}
                <Text style={loading ? { marginLeft: '10px' } : {}}>Submit</Text>
              </Button>
            </Flex>

          </Flex>
          {pageError && (
            <>
              <ErrorPopup title="Error submitting job information" error={pageError} setPageError={setPageError} />
            </>)}
        </Container>
      </Box>
    </>
  )
}

export default Home;

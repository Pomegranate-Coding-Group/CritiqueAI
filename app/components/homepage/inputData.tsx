import { Flex, Box, Button, Container, Accordian, Text, ErrorPopup, Banner, AlertDialog, SelectInput, SelectGroup, DefaultSelectItem, SelectLabel } from '@components/common';
import { ChangeEvent, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

interface InputDataProps {
  loading: boolean;
  getData: any;
}

export const InputData = ({ loading, getData }: InputDataProps) => {
  const [industry, setIndustry] = useState('Industry');
  const [jobDescriptionText, setJobDescriptionText] = useState("");
  const [pageError, setPageError] = useState(null);

  const handleJobDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescriptionText(e.target.value);
  }

  const handleSubmit = () => {
    if (industry == 'Industry' || !jobDescriptionText) {
      setPageError('Please enter a job description and select an inudstry');
      return;
    }
    getData(jobDescriptionText, industry);
  }
  return (
    <Box css={{ mt: "2em" }}>
      <Container size="2" style={{ marginTop: "50px", marginBottom: "50px" , textAlign: "center" }}>
          <Text style={{color: 'white', fontSize: '45px'}}>Tailor your resume for each company you apply to</Text>
      </Container>
      <Container size="4">
        <Flex direction="column" >

          <Flex gap="2" justify="center">
            <textarea placeholder="Enter job description..." value={jobDescriptionText} onChange={(e) => handleJobDescriptionChange(e)} style={{ width: '500px', height: "200px", backgroundColor: 'white', border: 'none', borderRadius: '4px', padding: '10px 20px', color: 'black' }} />
          </Flex>

          <Flex direction="row" justify='center' align="center" gap="8">
            <Accordian title={industry} setIndustry={setIndustry} items={['Software Engineering', 'UX Design']} />
            {/* Radix Select Implementation
               <SelectInput onValueChange={(val) => setIndustry(val)} children={
                <SelectGroup>
                  <SelectLabel>Industry</SelectLabel>
                  <DefaultSelectItem value='swe' name='Software Engineering' />
                  <DefaultSelectItem value='ux' name='UX Design' />
                </SelectGroup>
              } /> */}
            <Button size='2' onClick={() => handleSubmit()} style={{marginTop: '14px', marginLeft: '-25px'}}>
              {loading ? <ClipLoader size={20} /> : <></>}
              <Text style={loading ? { marginLeft: '10px'} : {}}>Submit</Text>
            </Button>
          </Flex>

        </Flex>
        <ErrorPopup title="Error submitting job information" open={pageError} description={pageError} onOpenChange={(open) => {
          setPageError(null);
        }} />
      </Container>
      <Container size="2" style={{ marginTop: "50px", marginBottom: "50px" , textAlign: "center" }}>
          <Text style={{color: '#001E75', fontSize: '35px'}}> Instructions &amp; Info </Text>
          <Text style={{color: '#001E75', fontSize: '20px', paddingTop: '20px'}}>
            To use this tool, find a job that you are interested in applying for.
            Then select the job description text containing the preferred skills and qualifications for the job and paste it into the text box above.
            Select the industry that the job is in, and hit submit to receive a list of the most important keywords found in the listing.
          </Text>
      </Container>
    </Box>
  )
}
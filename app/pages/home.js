// conditional render 
    //if no suggestions data show welcome page
        // get text data for the job
        // get job title / industry
        // post data to keywordxtraction endpoint
    //if loading show loading screen
    //if suggestions data show results page

   const Home = () => {
        const [suggestionsData, setSugestionsData] = useState();

        
        render(
            <>
            {!suggestionsData && (
                <Homepage />
            )}
            {loading && (
                <Loading />
            )}
            {suggestionsData && (
                <ResultsPage suggestionsData={suggestionsData}/>
            )}
            </>
        );
    }

    export default Home;

import { Text } from "@components/common";
import NavBar from "@components/NavBar";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";

export default function Results(){
    return <>
        <TitleAndMetaTags />
        <NavBar />
        <main>
            <Text size="6" as="h1">Job Listing Results</Text>
        </main>
    </>
}
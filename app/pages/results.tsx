
import { Text } from "@components/common";
import Header from "@components/Header";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";

export default function Results(){
    return <>
        <TitleAndMetaTags />
        <Header />
        <main>
            <Text size="6" as="h1">Job Listing Results</Text>
        </main>
    </>
}
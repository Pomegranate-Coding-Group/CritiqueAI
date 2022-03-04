import Header from "@components/NavBar";
import {
    Box,
    Heading,
    Text,
    Container,
    Paragraph,
    Section,
    Flex,
    Separator,
} from "@components/common";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { Banner, KeywordItem } from "@components/results/";
import { TooltipProvider } from "@components/common/TooltipProvider";


export default function ResultsPage () {
    return (
        <>
            <TitleAndMetaTags />
            <Box>
                <main>
                    <Banner />
                    <Flex css={{ jc: "center" }}>
                        <Separator size="2" />
                    </Flex>
                    <Section size="3">
                        <Container size="3">
                            <Heading size="3" css={{ ta: "center", mb: "$3" }}>
                                Keywords
                            </Heading>
                            <TooltipProvider delayDuration={100}>
                                <Flex gap="3" wrap="wrap">
                                    <KeywordItem name="Java" priority={1} description="General-purpose, multi-paradigm programming language." verified tags={["common"]} />
                                    <KeywordItem name="Agile Development" priority={2} description="Iterative approach to project management and software development." />
                                    <KeywordItem name="Git" priority={2} description="Common version control tool used in larger projects" />
                                    <KeywordItem name="Azure" priority={2} description="A large scale cloud service from Microsoft, frequently used in industry" />
                                    <KeywordItem name="SQL" priority={2} description="A basic query language used in many relational databases" verified tags={["common"]}/>
                                </Flex>
                            </TooltipProvider>
                        </Container>
                    </Section>
                </main>
            </Box>
        </>
    )
}
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

export default function Results() {
    return (
        <>
            <TitleAndMetaTags />
            <Box>
                <Header />
                <main>
                    <Banner />
                    <Flex css={{ jc: "center" }}>
                        <Separator size="2" />
                    </Flex>
                    <Section size="3">
                        <Container size="2">
                            <Paragraph size="1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Paragraph>
                        </Container>
                    </Section>
                    <Section size="3">
                        <Container size="3">
                            <Heading size="3" css={{ ta: "center", mb: "$3" }}>
                                Keywords
                            </Heading>
                            <TooltipProvider delayDuration={100}>
                                <Flex gap="3">
                                    <KeywordItem name="C#" importance={1} desc="General-purpose, multi-paradigm programming language."/>
                                    <KeywordItem name="Agile Development" importance={2} desc="Iterative approach to project management and software development." />
                                    <KeywordItem name="C++" importance={2} desc="General-purpose programming language" />
                                </Flex>
                            </TooltipProvider>
                        </Container>
                    </Section>
                </main>
            </Box>
        </>
    );
}

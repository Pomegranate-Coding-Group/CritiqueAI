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


export default function Home() {
    return (
        <>
            <TitleAndMetaTags />
            <Box>
                <Header />
                <main>
                    <Section size="3">
                        <Container size="2">
                            <Heading size="4" css={{ ta: "center", mb: "$3" }}>
                                Here's what we found
                            </Heading>
                            <Paragraph size="2" css={{ ta: "center" }}>
                                We checked through the job listing.
                            </Paragraph>
                        </Container>
                    </Section>
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
                            <Paragraph size="2" css={{ ta: "center" }}>

                            </Paragraph>
                            <Flex gap="3">

                            </Flex>
                        </Container>
                    </Section>
                </main>
            </Box>
        </>
    );
}

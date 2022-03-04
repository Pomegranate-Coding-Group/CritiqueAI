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

export function Banner() {
    return <Section size="3">
        <Container size="2">
            <Heading size="4" css={{ ta: "center", mb: "$3" }}>
                Here's what we found
            </Heading>
            <Paragraph size="2" css={{ ta: "center" }}>
                We checked through the job listing and found these keywords. Based on our analysis, it will be important to reference these items in your resume if they fit your skillset. 
            </Paragraph>
        </Container>
    </Section>
}
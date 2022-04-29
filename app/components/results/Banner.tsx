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
            <Heading size="4" css={{ ta: "center", mb: "$3", fontFamily: '$rowdies', letterSpacing: '1px', color: '#001E75' }}>
                Here is what we found
            </Heading>
            <Paragraph size="2" css={{ ta: "center", color: '#EFF3FF', fontWeight: '300', letterSpacing: '1px'}}>
                We checked through the job listing and found these keywords. Based on our analysis, it will be important to reference these items in your resume if they fit your skillset.
            </Paragraph>
        </Container>
    </Section>
}
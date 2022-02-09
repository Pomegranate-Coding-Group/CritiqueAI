import { Box, Container, Heading, Paragraph, Section, Text, Card } from "@components/common";

interface KeywordData {
    name: string,
    priority: number,
    description: string,
}

let priorities = {
    1: "Extremely important!",
    2: "Very important",
    3: "Important",
    4: "Good to have",
    5: "Might be good to have"
}

export function KeywordItem({ name, priority, description }: KeywordData) {
    return <Box css={{ width: 250 }}>
        <Card css={{ p: '$3' }}>
            <Heading css={{ mb: '$2' }}>
                {name}
            </Heading>
            <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
                {description}
            </Text>
        </Card>
    </Box>
}
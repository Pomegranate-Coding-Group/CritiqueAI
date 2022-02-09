import { Box, Container, Heading, Paragraph, Section, Text, Card, Flex, IconButton, Badge, Tooltip } from "@components/common";
import { VariantProps } from "@stitches-config";
import { IoCloseOutline } from "react-icons/io5";
import type * as Stitches from '@stitches/react';

type BannerVariant = Stitches.VariantProps<typeof Badge>['variant'];

interface KeywordData {
    name: string,
    priority: number,
    description: string,
    tags?: string[],
}

let priorities = {
    1: "Extremely important!",
    2: "Very important",
    3: "Important",
    4: "Good to have",
    5: "Might be good to have"
}

interface TagInfo {
    name: string;
    description: string;
    variantColor: BannerVariant
}

let tagColors: { [tag: string]: TagInfo } = {
    "common": {
        name: "Common",
        description: "Common term for this type of job.",
        variantColor: "blue"
    },
    "listed": {
        name: "Listed",
        description: "This term was found in the job listing.",
        variantColor: "green"
    },
    //  all colors:
    //  "red" 
    //  "crimson" 
    //  "pink" 
    //  "purple" 
    //  "violet" 
    //  "indigo" 
    //  "blue" 
    //  "cyan" 
    //  "teal" 
    //  "green" 
    //  "lime" 
    //  "yellow" 
    //  "orange" 
    //  "gold" 
    //  "bronze" 
}
function TagItem({ name, description, variantColor }: TagInfo) {
    return <Tooltip content={description}>
        <Badge as="button" size="2" variant={variantColor} interactive >
            {name}
        </Badge>
    </Tooltip>
}
export function KeywordItem({ name, priority, description, tags }: KeywordData) {
    const tagComponents = tags !== undefined ? tags.map((value, index) => {
        return <TagItem {...tagColors[value]} />
    }) : undefined;
    return <Box css={{ width: 250 }}>
        <Card css={{ p: '$3' }}>
            <Flex justify={"between"}>
                <Heading css={{ mb: '$2' }}>
                    {name}
                </Heading>
                <IconButton>
                    <IoCloseOutline />
                </IconButton>
            </Flex>
            <Text size="3" variant={"gray"} css={{ lineHeight: '23px', mb: '$2' }}>
                {description}
            </Text>
            <Flex gap={"2"}>
                {tagComponents}
            </Flex>
        </Card>
    </Box>
}
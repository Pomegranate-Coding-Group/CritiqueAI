import {
  Box,
  Container,
  Heading,
  Paragraph,
  Section,
  Text,
  Card,
  Flex,
  IconButton,
  Badge,
  Tooltip,
  VerifiedBadge,
  Button,
  Link,
} from "@components/common";
import { VariantProps } from "@stitches-config";
import { IoCloseOutline } from "react-icons/io5";
import type * as Stitches from "@stitches/react";

type BannerVariant = Stitches.VariantProps<typeof Badge>["variant"];

interface KeywordData {
  name: string;
  priority: number;
  description: string;
  link?: string;
  verified?: boolean;
  tags?: string[];
}

const priorities = {
  1: "Extremely important!",
  2: "Very important",
  3: "Important",
  4: "Good to have",
  5: "Might be good to have",
};

function VerifiedTag() {
  return (
    <Tooltip content={"We found it in the job listing!"}>
      <VerifiedBadge />
    </Tooltip>
  );
}

interface TagInfo {
  name: string;
  description: string;
  variantColor: BannerVariant;
}

const tagColors: { [tag: string]: TagInfo } = {
  common: {
    name: "Common",
    description: "Common term for this type of job.",
    variantColor: "blue",
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
};
function TagItem({ name, description, variantColor }: TagInfo) {
  return (
    <Tooltip key={name} content={description}>
      <Badge as="button" size="2" variant={variantColor} interactive>
        {name}
      </Badge>
    </Tooltip>
  );
}
export function KeywordItem({
  name,
  priority,
  description,
  verified,
  tags,
  link
}: KeywordData) {
  const tagComponents =
    tags !== undefined
      ? tags.map((value, index) => {
        return <TagItem {...tagColors[value]} />;
      })
      : undefined;
  return (
    <Box css={{ width: 300 }}>
      <Card css={{ p: "$3" }}>
        <Flex justify={"between"} align={"center"} css={{mb: "$2"} }>
          <Heading
            css={{display: "inline-flex", alignItems: "center" }}
          >
            {name}
            {verified && <VerifiedTag />}
          </Heading>

          <Flex gap={"1"}>
            {link && <Link href={link} style={{fontWeight: "300", marginTop: '-2px', marginRight: '5px'}}>Learn More</Link>}
            {/* <IconButton>
              <IoCloseOutline />
            </IconButton> */}
          </Flex>
        </Flex>
        <Text size="2" variant={"gray"} css={{ lineHeight: "23px", mb: "$2", fontFamily: '$mono' }}>
          {description}
        </Text>
        <Flex gap={"2"}>{tagComponents}</Flex>
      </Card>
    </Box>
  );
}

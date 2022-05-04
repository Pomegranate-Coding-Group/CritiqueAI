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
import { IKeyword } from "models/keyword";
import { ITag } from "models/tag";

type BannerVariant = Stitches.VariantProps<typeof Badge>["variant"];

interface KeywordData {
  name: string;
  desc?: string;
  link?: string;
  tags?: ITag[];
  industry?: string[];
  importance: number;
  verified?: boolean;
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

function TagItem({ name, desc, color }: ITag) {
  return (
    <Tooltip key={name} content={desc}>
      <Badge as="button" size="2" variant={color as BannerVariant} interactive>
        {name}
      </Badge>
    </Tooltip>
  );
}
export function KeywordItem({
  name,
  importance,
  desc,
  verified,
  tags,
  link,
}: KeywordData) {
  const tagComponents =
    tags !== undefined
      ? tags.map((value, index) => {
          return <TagItem {...value} />;
        })
      : undefined;
  return (
    <Box css={{ width: 300 }}>
      <Card css={{ p: "$3" }}>
        <Flex justify={"between"} align={"center"} css={{ mb: "$2" }}>
          <Heading css={{ display: "inline-flex", alignItems: "center" }}>
            {name}
            {verified && <VerifiedTag />}
          </Heading>

          <Flex gap={"1"}>
            {link && (
              <Link
                href={link}
                style={{
                  fontWeight: "300",
                  marginTop: "-2px",
                  marginRight: "5px",
                }}
              >
                Learn More
              </Link>
            )}
            {/* <IconButton>
              <IoCloseOutline />
            </IconButton> */}
          </Flex>
        </Flex>
        <Text
          size="2"
          variant={"gray"}
          css={{ lineHeight: "23px", mb: "$2", fontFamily: "$mono" }}
        >
          {desc}
        </Text>
        <Flex gap={"2"}>{tagComponents}</Flex>
      </Card>
    </Box>
  );
}

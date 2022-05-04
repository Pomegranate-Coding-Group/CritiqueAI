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
import { IKeyword } from "models/keyword";
import { ITag } from "models/tag";

interface ResultsPageProps {
    success: boolean;
    keywords: IKeyword[];
    tags: ITag[];
}

export const ResultsPage = ({ success, keywords, tags }: ResultsPageProps) => {
    const keywordData = keywords.map((val, i) => {
      const keyTags = tags.filter((x) => val.tags.includes(x.name));
      return (
        <KeywordItem
          key={val.name}
          name={val.name}
          importance={val.importance}
          desc={val.desc}
          link={val.link}
          tags={keyTags}
        />
      );
    });
    return (
        <>
            <Box>
                <main>
                    <Banner />
                    <Flex css={{ jc: "center" }}>
                        <Separator size="2" />
                    </Flex>
                    <Section size="3">
                        <Container size="3" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <Heading size="3" css={{ ta: "center", mb: "$3", fontFamily: '$rowdies', color: '#001E75', letterSpacing: '1px'}}>
                                Keywords
                            </Heading>
                            <TooltipProvider delayDuration={100}>
                                <Flex gap="3" wrap="wrap" style={{maxWidth: '930px'}}>
                                    {keywordData}
                                </Flex>
                            </TooltipProvider>
                        </Container>
                    </Section>
                </main>
            </Box>
        </>
    )
}
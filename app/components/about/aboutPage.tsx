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
import Link from "next/link";

export function AboutPage() {
    return <Section size="3">
        <Container size="2">
            <Heading size="4" css={{ ta: "center", mb: "$6", fontFamily: '$rowdies', letterSpacing: '1px', color: '#001E75' }}>
                About ResumeQuest
            </Heading>
            <Heading size="2" css={{ ta: "center", mb: "$3", mt: "$6", fontFamily: '$rowdies', letterSpacing: '1px', color: '#001E75' }}>
                The Why
            </Heading>
            <Paragraph size="2" css={{ ta: "left", color: '#EFF3FF', fontWeight: '300', letterSpacing: '1px'}}>
                ResumeQuest was created to be a fun professional development platform meant for college
                students looking for their first job opportunities post-college graduation and who need help
                improving the quality of professional documents such as resumes and cover letters, so they can
                feel more confident when applying to their first jobs
            </Paragraph>
            <Heading size="2" css={{ ta: "center", mb: "$3",  mt: "$6", fontFamily: '$rowdies', letterSpacing: '1px', color: '#001E75' }}>
                The Problem
            </Heading>
            <Paragraph size="2" css={{ ta: "left", color: '#EFF3FF', fontWeight: '300', letterSpacing: '1px'}}>
                College Students have a difficult time choosing what to include in their resumes
                11 million job openings but no one is applying
                63% of recruiters want to receive resumes tailored to the open position but college students looking for
                jobs in the fields do not have the proper elements in their resumes
            </Paragraph>
            <Heading size="2" css={{ ta: "center", mb: "$3",  mt: "$6", fontFamily: '$rowdies', letterSpacing: '1px', color: '#001E75' }}>
                Our Solution
            </Heading>
            <Paragraph size="2" css={{ ta: "left", color: '#EFF3FF', fontWeight: '300', letterSpacing: '1px'}}>
                Students are able to quickly view job applications and find most important information from them. <br /><br />
                Students can also know the most important information to include in their resume. <br /><br />
                Check out the site at <Link href="https://resumequest.careers">resumequest.careers</Link>
            </Paragraph>
        </Container>
    </Section>
}
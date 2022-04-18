import Link from "next/link";
import {
  Flex,
  Text,
  AppBar,
  SkipToMainContent,
  Container,
} from "@components/common";
import { DarkThemeButton } from "./DarkThemeButton";

export default function NavBar({ }) {
  return (
    <nav>
      <SkipToMainContent />
      <AppBar size="3" color="plain" sticky>
        <Container size="3">
          <Flex justify="between" align="center">
            <Flex gap="4" align="center">
              <img src='Logo.svg'/>
            </Flex>
            <Flex gap="4" align="center">
              <Link href="/privacy-policy">
                <Text variant="white">Privacy Policy</Text>
              </Link>
              <Link href="/jobs">
                <Text variant="white">Jobs</Text>
              </Link>
              <Link href="/resources">
                <Text variant="white">Resources</Text>
              </Link>
              <DarkThemeButton />
            </Flex>
          </Flex>
        </Container>
      </AppBar>
    </nav>
  );
}

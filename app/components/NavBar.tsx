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
      <AppBar size="2" color="loContrast" border sticky glass>
        <Container size="3">
          <Flex justify="between" align="center">
            <Flex gap="4" align="center">
              <Text>Resume Quest</Text>
            </Flex>
            <Flex gap="4" align="center">
              <Link href="/privacy-policy">
                <Text>Privacy Policy</Text>
              </Link>
              <Link href="/jobs">
                <Text>Jobs</Text>
              </Link>
              <Link href="/resources">
                <Text>Resources</Text>
              </Link>
              <DarkThemeButton />
            </Flex>
          </Flex>
        </Container>
      </AppBar>
    </nav>
  );
}

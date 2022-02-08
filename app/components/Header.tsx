import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import cn from "classnames";
import { Flex, Text } from "./common";

export default function Header({}) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrolling(window.scrollY > 40);
  };
  return (
    <nav className={cn(styles.topBar, { [styles.scroll]: scrolling })}>
      <div className={styles.skip}>
        <a href="#main">Skip to Content</a>
      </div>
      <Flex justify="between">
          <Flex gap="1">
            <Text size="4">Critique AI</Text>
          </Flex>
          <Flex>
            <Text size="4">
              <Link href="/about">About</Link>
            </Text>
          </Flex>
      </Flex>
    </nav>
  );
}

import styles from './Header.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import cn from 'classnames';

export default function Header({ }) {
    const [scrolling, setScrolling] = useState(false)


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const handleScroll = () => {
        setScrolling(window.scrollY > 40);
    }
    return <nav className={cn(styles.topBar, { [styles.scroll]: scrolling })}>
        <div className={styles.skip}>
            <a href="#main">Skip to Content</a>
        </div>
        <ul className={styles.leftNav}>
            <li>
                Critique AI
            </li>
        </ul>
        <ul className={styles.rightNav}>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
    </nav>
}
import type { NextPage } from 'next'
import NavBar from '@components/NavBar';
import Header from "@components/NavBar";
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { AboutPage } from '@components/about';

const About: NextPage = () => {
    return (
        <div style={{minHeight: '100vh',
        backgroundImage: 'linear-gradient(217deg, rgba(129,162,255,.9), rgba(200,209,255,0.9) 100%)'}}>
            <TitleAndMetaTags />
            <NavBar />
            <AboutPage />
        </div>
    )
}

export default About;
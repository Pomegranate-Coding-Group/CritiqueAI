import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://use.typekit.net/bxj4tlq.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400&display=swap" rel="stylesheet"></link>
                    {/* semantic ui script */}
                    <link
                        async
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
                    />
                
                    <meta name="keywords" content="Resume, CritiqueAI, Resume Quest, resume" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
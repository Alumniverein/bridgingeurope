import { Fragment } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';
class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();

        // Check if in production
        const isProduction = process.env.NODE_ENV === 'production'

        return { ...page, styleTags, isProduction };
    }

    render() {
        const { isProduction } = this.props

        return (
            <Html lang="de">
                <Head>
                    {this.props.styleTags}
                    {/* We only want to add the scripts if in production */}
                    {isProduction && (
                        <Fragment>
                            {/* Global Site Tag (gtag.js) - Google Analytics */}
                            <script
                                async
                                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                            />
                            <script
                                dangerouslySetInnerHTML={{
                                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                                }}
                            />
                        </Fragment>
                    )}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
import Head from 'next/head';

const Meta = ({ title }) => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/logos/180w/be-blue-bg.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/logos/32w/be-blue-bg.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/logos/16w/be-blue-bg.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
            rel="mask-icon"
            href="/assets/logos/180w/be-blue-bg.png"
            color="#003866"
        />

        { /* 
        <meta name="msapplication-TileColor" content="#003866" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        */ }

        <meta
            name="description"
            content="Bridging Europe :: Online wiedersehen. Freunde treffen. Vernetzen."
        />
        <meta property="og:image" content="/assets/logos/512w/be-blue-bg.png" />

        <link rel="shortcut icon" type="image/png" href="/assets/logos/16w/be-simple.png" />
        { /* <link rel="stylesheet" type="text/css" href="/static/nprogress.css" /> */}
        <title>{title}</title>
    </Head>
)
export default Meta;
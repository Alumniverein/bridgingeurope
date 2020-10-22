import '../styles/globals.css'
import * as gtag from '../lib/gtag'
import Router from 'next/router'

// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp


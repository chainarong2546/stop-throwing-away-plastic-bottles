import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SSRProvider } from '@react-aria/ssr';
import Head from 'next/head';
import {Container, Image} from 'react-bootstrap';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <SSRProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Container fluid="md">
        <Image src="/header_img.jpg" alt="header_img" fluid style={{borderRadius:'10px', marginBottom:'5px'}}/>
        <Component {...pageProps} />
      </Container>
    </SSRProvider>
  )
}

export default MyApp;
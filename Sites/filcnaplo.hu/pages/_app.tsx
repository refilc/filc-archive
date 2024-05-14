import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Filc Napló</title>
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Egy nem hivatalos alkalmazás az eKréta rendszerhez'
        />
        <meta
          name='keywords'
          content='filc,naplo,filcnaplo,enaplo,e-naplo,napló,filc napló,e-napló,alkalmazás,kréta,ekréta,kreta,ekreta,diák,diak,szivacs'
        />

        <link
          rel='shortcut icon'
          href='/img/favicon-32x32.png'
          type='image/png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='apple-touch-icon' href='/img/apple-touch-icon.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

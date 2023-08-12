import { AppProps } from "next/app";
import Head from "next/head";
import GlobalProvider from "@/app/GlobalProvider";
import { Open_Sans, Montserrat } from "next/font/google";

const openSans = Open_Sans({subsets: ["latin"], weight: ["400", "700"]})
const montserrat = Montserrat({subsets: ["latin"], weight: ["400", "500", "600", "700"]})



export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Центр отчетности</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg"/>
      </Head>

      <GlobalProvider>
        <Component {...pageProps} className={`${openSans} ${montserrat}`}/>
      </GlobalProvider>
    </>
  );
}
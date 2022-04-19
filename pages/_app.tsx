import React from 'react';
import { AppProps } from 'next/app';

import '../styles/index.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&display=swap"
          rel="stylesheet"></link>
        <title>Tapan Awasthi</title>
        <meta
          name="description"
          content="A software engineer who works with js and related
                  technologies like React, React Native Typescript and many
                  more... A Potter head and a marvel fan"></meta>
        <meta name="title" content="Tapan Awasthi"></meta>
        <meta
          property="og:image"
          content="https://tapanawasthi.dev/images/me.png"
        />

        <meta property="og:title" content="Tapan Awasthi" />

        <meta
          property="og:description"
          content="A software engineer who works with js and related
                  technologies like React, React Native Typescript and many
                  more... A Potter head and a marvel fan"
        />

        <meta property="og:image:width" content="1080" />

        <meta property="og:image:height" content="1080" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

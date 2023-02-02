"use client"
import Head from "next/head";

type Props = {}

const HeadLyaout = (props: Props) => {
  return (
    <Head>
      <title>Boronilov Reddit</title>
      <link rel="shortcut icon" href="/images/redditFace.svg" />
    </Head>
  );
};

export default HeadLyaout;


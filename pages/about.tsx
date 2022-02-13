import { Button } from "@mui/material";
import Head from "next/head";
import { useRef } from "react";
import Layout from "../components/layout";

export default function About() {
  const videoRef = useRef();

  const handleClick = () => {
    const element: HTMLVideoElement = videoRef.current;
    console.log(element);
    element.play();
  };

  return (
    <Layout>
      <Head>
        <title>Hellooooo</title>
      </Head>
      <Button onClick={handleClick}>Play!</Button>
    </Layout>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

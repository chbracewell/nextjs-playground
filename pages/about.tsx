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
      <section>
        <video
          ref={videoRef}
          data-html5-video=""
          preload="metadata"
          playsInline
          src="blob:http://givemenbastreams.com/4ec0bce3-114d-4ce6-867e-63560e59551f"
        ></video>
        <Button onClick={handleClick}>Play!</Button>
      </section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

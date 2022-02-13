import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";

const name = "Chris Bracewell";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Box component="header">
        <Image
          priority
          alt="Landscape image"
          src="/images/landscape-large.jpg"
          layout="responsive"
          width="800px"
          height="400px"
        />
      </Box>
      <Container sx={{ marginBottom: 3 }}>
        <main>{children}</main>
      </Container>
    </div>
  );
}

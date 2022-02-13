import { Typography } from "@mui/material";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getPostData } from "../../lib/posts";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Typography component="h1" variant="h3">
          {postData.title}
        </Typography>
        <Typography variant="caption">
          <Date dateString={postData.date} />
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await axios.get("http://localhost:3000/api/users");
  const paths = users.data.map((user) => user.value);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  const userData = {};
  return {
    props: {
      userData,
      postData,
    },
  };
};

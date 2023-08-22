import Layout from "../../components/layout";
import { getBlogPostFromFirestore } from "../../lib/posts";
import Head from 'next/head';
import Container from "../../components/container";
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";

export async function getStaticProps({ params }) {
  const postData = await getBlogPostFromFirestore(params.id);
  return {
    props: {
      postData,
    },
    revalidate: 10,
    notFound: !postData,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default function Post({ postData }) {
  //const postTitle = () => postData.title === undefined ? "" : postData.title; 

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Container>
        <PostHeader postData={postData} />
        <PostBody postData={postData} />
      </Container>
    </Layout>
  );
}

import Layout from "../../components/layout";
import { getBlogPostFromFirestore } from "../../lib/posts";
import Head from 'next/head';
import Container from "../../components/container";
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";
//import { getAllPostIdsFromFirestore } from "../../lib/posts"

export async function getStaticProps({ params }) {
  const postData = await getBlogPostFromFirestore(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  /* NEED TO FIX THIS:
   - when pulling from FS, it doesn't format properly
   - short term fix, return empty array and fallback to dynamic
  */
  //const paths = await getAllPostIdsFromFirestore();
  const paths = [];

  return {
    paths,
    fallback: true,
  };
}

export default function Post({ postData }) {
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


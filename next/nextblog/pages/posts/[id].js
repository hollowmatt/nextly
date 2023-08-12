import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from '../../lib/posts';
//import { getBlogPostFromFirestore, getAllPostIdsFromFirestore } from "../../lib/posts _fs";
import Head from 'next/head';
import Container from "../../components/container";
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  // const postData = await getBlogPostFromFirestore(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  console.log(postData.title);
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


import Layout from "../../components/layout";
import { getAllPostIds, getPostData, getBlogPostFromFirestore } from '../../lib/posts';
import Head from 'next/head';
import Container from "../../components/container";
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";

export async function getStaticProps({ params }) {
  const postData_old = await getPostData(params.id);
  const postData = await getBlogPostFromFirestore(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
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


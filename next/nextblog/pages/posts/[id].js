import Layout from "../../components/layout";
//import { getPostData } from '../../lib/posts';
import { getBlogPostFromFirestore, getAllPostIdsFromFirestore } from "../../lib/posts _fs";
import Head from 'next/head';
import Container from "../../components/container";
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";

export async function getStaticProps({ params }) {
  //const postData = await getPostData(params.id);
  const postData = await getBlogPostFromFirestore(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  //const paths = getAllPostIds();
  const paths = [];
  const paths_fs = await getAllPostIdsFromFirestore();

  return {
    paths,
    fallback: true,
  };
}

export default function Post({ postData }) {
  console.log(postData);
  return (
    <Layout>
      <Head>
        {/* <title>{postData.title}</title> */}
      </Head>
      <Container>
        <p>Placeholder</p>
        {/* <PostHeader postData={postData} />
        <PostBody postData={postData} /> */}
      </Container>
    </Layout>
  );
}


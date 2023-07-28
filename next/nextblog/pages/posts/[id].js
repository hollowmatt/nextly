import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Container from "../../components/container";
import Image from 'next/image';
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
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


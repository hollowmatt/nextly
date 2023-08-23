import Layout from "../../components/layout";
import { getBlogPostFromFirestore } from "../../lib/posts";
import Head from 'next/head';
import Container from "../../components/container";
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";
import Comments from "../../components/comments";

export async function getStaticProps({ params }) {
  const postData = await getBlogPostFromFirestore(params.id);
  const shortname = await process.env.DISQUS_SHORT_NAME;
  const url = await process.env.SITE_URL + "/posts/" + postData.id;

  return {
    props: {
      postData,
      shortname,
      url,
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

export default function Post({ postData, shortname, url }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Container>
        <PostHeader postData={postData} />
        <PostBody postData={postData} />
        <Comments id={postData.id} title={postData.title} shortname={shortname} url={url}/>
      </Container>
    </Layout>
  );
}

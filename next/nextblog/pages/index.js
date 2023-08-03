import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData, getHeaderData } from '../lib/posts';
import Intro from '../components/intro';
import Hero from '../components/hero-post';
import PostList from '../components/more-posts';
import Container from '../components/container';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const headerData = await getHeaderData();
  return {
    props: {
      allPostsData,
      headerData,
    },
  };
}

export default function Home( {allPostsData, headerData} ) {
  const heroPost = allPostsData[0];
  const morePostsData = allPostsData.slice(1);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <Intro introData = {headerData} />
        <Hero postData={heroPost} />
        <PostList postsData={morePostsData} />
      </Container>
    </Layout>
  )
}

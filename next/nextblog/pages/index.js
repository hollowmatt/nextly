import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData, getHeaderData, getHeaderDataFromFirestore } from '../lib/posts';
import Intro, { IntroFire } from '../components/intro';
import Hero from '../components/hero-post';
import PostList from '../components/more-posts';
import Container from '../components/container';
import { getData } from '../data/get-data';
import AddPost from '../components/add-post';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const headerData = await getHeaderData();
  const headerDataFire = await getHeaderDataFromFirestore();
  const headerContent = headerDataFire.contentHtml;
  const headerTitle = headerDataFire.headerTitle;

  return {
    props: {
      allPostsData,
      headerTitle,
      headerContent,
    },
  };
}

export default function Home( {allPostsData, headerTitle, headerContent} ) {
  const heroPost = allPostsData[0];
  const morePostsData = allPostsData.slice(1);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <IntroFire title = {headerTitle} content = {headerContent} />
        <Hero postData={heroPost} />
        <PostList postsData={morePostsData} />
        <AddPost />
      </Container>
    </Layout>
  )
}

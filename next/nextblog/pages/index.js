import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData, getHeaderData, getHeaderDataFromFirestore, getBlogPostsFromFirestore } from '../lib/posts';
import Intro, { IntroFire } from '../components/intro';
import Hero from '../components/hero-post';
import PostList from '../components/more-posts';
import Container from '../components/container';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const headerData = await getHeaderData();
  const headerDataFire = await getHeaderDataFromFirestore();
  const headerContent = headerDataFire.contentHtml;
  const headerTitle = headerDataFire.headerTitle;
  const allPosts = await getBlogPostsFromFirestore();

  return {
    props: {
      allPosts,
      allPostsData,
      headerTitle,
      headerContent,
    },
  };
}

export default function Home( {allPosts, allPostsData, headerTitle, headerContent} ) {
  //const heroPost = allPostsData[0];
  const morePostsData = allPostsData.slice(1);
  const heroPost = allPosts[0];
  //const morePosts = allPosts.slice(1);
  //console.log(allPosts);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <IntroFire title = {headerTitle} content = {headerContent} />
        <Hero postData={heroPost} />
        <PostList postsData={morePostsData} />
      </Container>
    </Layout>
  )
}

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getHeaderDataFromFirestore, getBlogPostsFromFirestore } from '../lib/posts';
import { Intro } from '../components/intro';
import Hero from '../components/hero-post';
import PostList from '../components/more-posts';
import Container from '../components/container';

export async function getStaticProps() {
  const headerDataFire = await getHeaderDataFromFirestore();
  const headerContent = headerDataFire.contentHtml;
  const headerTitle = headerDataFire.headerTitle;
  const allPosts = await getBlogPostsFromFirestore();

  return {
    props: {
      allPosts,
      headerTitle,
      headerContent,
    },
  };
}

export default function Home( {allPosts, headerTitle, headerContent} ) {
  const morePostsData = allPosts.slice(1);
  const heroPost = allPosts[0];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <Intro title = {headerTitle} content = {headerContent} />
        <Hero postData={heroPost} />
        <PostList postsData={morePostsData} />
      </Container>
    </Layout>
  )
}

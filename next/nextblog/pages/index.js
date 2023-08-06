import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData, getHeaderData } from '../lib/posts';
import Intro from '../components/intro';
import Hero from '../components/hero-post';
import PostList from '../components/more-posts';
import Container from '../components/container';
import { getData } from '../data/get-data';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const headerData = await getHeaderData();
  const managers = await getData();
  console.log(managers);
  return {
    props: {
      allPostsData,
      headerData,
      managers,
    },
  };
}

export default function Home( {allPostsData, headerData, managers} ) {
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
        {managers.map(({ name, email, region, title, ldap, id }) => (
          <p key={id}>{name}</p>
        ))}
      </Container>
    </Layout>
  )
}

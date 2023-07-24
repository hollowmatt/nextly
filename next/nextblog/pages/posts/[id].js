import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Container from "../../components/container";
import Image from 'next/image';

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
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">{postData.title}</h1>
        <div className="flex items-center">
          <img src={postData.avatar} className="w-12 h-12 rounded-full mr-4" alt={postData.contributor} />
          <div className="text-xl font-bold">{postData.contributor}</div>
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0">
          <Image
            src={postData.coverImage}
            alt={`Cover Image for ${postData.title}`}
            className="shadow-sm w-full hover:shadow-lg transition-shadow duration-200"
            width={1300}
            height={630}
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="block md:hidden mb-6">
            <div className="flex items-center">
              <img src={postData.avatar} className="w-12 h-12 rounded-full mr-4" alt={postData.contributor} />
              <div className="text-xl font-bold">{postData.contributor}</div>
            </div>
          </div>
          <div className="mb-6 text-lg">
            <Date dateString={postData.date} />
          </div>
        </div>
        <article>
          <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        </article> 
      </Container>
    </Layout>
  );
}


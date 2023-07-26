import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData, getHeaderData } from '../lib/posts';
import Link from 'next/link';
import Image from 'next/image';
import Date from '../components/date';
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
        {/* Move this section to a 'intro' omponent */}
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            {headerData.header_title}
          </h1>
          <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
            <div dangerouslySetInnerHTML={{__html: headerData.contentHtml}} />
          </h4>
        </section>

        {/* Move this section to a 'hero' component */}
        <section>
          <div className="mb-8 md:mb-16">
            <Image
              src={heroPost.coverImage}
              alt={`Cover Image for ${heroPost.title}`}
              className="shadow-sm w-full hover:shadow-lg transition-shadow duration-200"
              width={1300}
              height={630}
            />
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
            <div>
              <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
                <Link
                  as={`/posts/wobbly`}
                  href="/posts/wobbly"
                  className="hover:underline"
                >
                  {heroPost.title}
                </Link>
              </h3>
              <div className="mb-4 md:mb-0 text-lg">
                <Date dateString="2023-07-17" />
              </div>
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-4">{heroPost.short}</p>
              <img src={heroPost.avatar} className="w-12 h-12 rounded-full mr-4" alt={heroPost.contributor} />
            </div>
          </div>
        </section>

        {/* All Posts Component */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            More Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
            {morePostsData.map(({ id, date, title, short, coverImage, contributor, avatar }) => (
              <div>
                <div className='mb-5'>
                  <Image
                    src={coverImage}
                    alt={`Cover Image for ${title}`}
                    className="shadow-sm w-full hover:shadow-lg transition-shadow duration-200"
                    width={1300}
                    height={630}
                  />
                </div>
                <h3 className='text-3xl mb-3 leading-snug'>
                  <Link href={`/posts/${id}`}>{title}</Link>
                </h3>
                <div className='text-lg mb-4'>
                  <Date dateString={date} />
                </div>
                <p className="text-lg leading-relaxed mb-4">{short}</p>
                <img src={avatar} className="w-12 h-12 rounded-full mr-4" alt={contributor} />
              </div>
            ))}
          </div>
        </section>
      </Container>
    </Layout>
  )
}

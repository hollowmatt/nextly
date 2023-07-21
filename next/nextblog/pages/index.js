import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData, getHeaderData } from '../lib/posts';
import Link from 'next/link';
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
            <p>[cover image here]</p>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
            <div>
              <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
                <Link
                  as={`/posts/wobbly`}
                  href="/posts/wobbly"
                  className="hover:underline"
                >
                  Wobbly, Wobbly
                </Link>
              </h3>
              <div className="mb-4 md:mb-0 text-lg">
                <Date dateString="2023-07-17" />
              </div>
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-4">[excerpt]</p>
              [avatar]
            </div>
          </div>
        </section>

        {/* All Posts Component */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>All Posts...</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br/>
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </Layout>
  )
}

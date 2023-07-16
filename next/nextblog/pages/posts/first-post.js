import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <div>
        <h1>First Post</h1>
        <Image src="/images/profile.jpg" height={144} width={144} alt="Matt" />
        <h2>
          <Link href="/">Back home</Link>
        </h2>
      </div>
    </Layout>
  );
}
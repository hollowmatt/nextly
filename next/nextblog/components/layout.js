import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Footer from './footer';
import Container from './container';
import { LargeAvatar, MedAvatar } from './image';
const name = "Matt Holloway";
export const siteTitle = "Matt's Blog - supplemental";
export const headerImage = "/images/profile.jpg";
export const headerAltText = "Captain's Blog - Supplemental"

export default function Layout({ children, home }) {
  return (
    <div className=" bg-slate-50">
      <div className="min-h-screen">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="blah blah about next.js blah"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <LargeAvatar path={headerImage} altText={headerAltText} />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <MedAvatar path={headerImage} altText={headerAltText} />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>
          {children}
          <Analytics/>
        </main>
        {!home && (
          <Container>
            <div className={styles.backToHome}>
              <Link className="hover:text-sky-700 hover:font-bold hover:underline " href="/">← Back to home</Link>
            </div>
          </Container>
        )}
      </div>
      <Footer className="bg-slate-300"/>
    </div>
  );
}
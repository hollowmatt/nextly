import Link from 'next/link';
import Date from './date';
import utilStyles from '../styles/utils.module.css';
import { MedImg, SmallAvatar } from './image';

export default function PostList({ postsData }) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {postsData.map(({ id, date, title, short, coverImage, contributor, avatar }) => (
          <div key={id}>
            <MedImg path={coverImage} altText={title} />
            <h3 className='text-3xl mb-3 leading-snug'>
              <Link href={`/posts/${id}`}>{title}</Link>
            </h3>
            <div className='text-lg mb-4'>
              {/* <Date dateString={date} suppressHydrationWarning={true}/> */}
            </div>
            <p className="text-lg leading-relaxed mb-4">{short}</p>
            <SmallAvatar path={avatar} altText={contributor} />
          </div>
        ))}
      </div>
    </section>
  );
}
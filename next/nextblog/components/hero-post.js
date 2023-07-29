import Image from 'next/image';
import Link from 'next/link';
import Date from './date';
import { HeroImg, SmallAvatar } from './image';

export default function Hero ({ postData }) {
  return (
    <section>
      <HeroImg path={postData.coverImage} alText={postData.title} />
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              href={`/posts/${postData.id}`}
              className="hover:underline"
            >
              {postData.title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={postData.date} suppressHydrationWarning={true}/>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{postData.short}</p>
          <SmallAvatar path={postData.avatar} altText={postData.contributor} />
        </div>
      </div>
    </section>
  );
}
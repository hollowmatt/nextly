import Image from 'next/image';
import Link from 'next/link';
import Date from './date';

export default function Hero ({ postData }) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <Image
          src={postData.coverImage}
          alt={`Cover Image for ${postData.title}`}
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
              {postData.title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString="2023-07-17" />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{postData.short}</p>
          <img src={postData.avatar} className="w-12 h-12 rounded-full mr-4" alt={postData.contributor} />
        </div>
      </div>
    </section>
  );
}
export default function Intro({ introData }) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {introData.header_title}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <div dangerouslySetInnerHTML={{__html: introData.contentHtml}} />
      </h4>
    </section>
  );
}

export function IntroFire ( { title, content }) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {title}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <div dangerouslySetInnerHTML={{__html: content}} />
      </h4>
    </section>
  );
}
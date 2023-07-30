import Image from 'next/image';

export function HeroImg({ path, altText }) {
  return(
    <div className="mb-8 md:mb-16">
      <Image
        src={path}
        alt={`Cover Image for ${altText}`}
        className="shadow-lg shadow-slate-300 rounded-lg w-full hover:shadow-2xl transition-shadow duration-200"
        width={1300}
        height={630}
      />
    </div>
  )
}
export function MedImg({path, altText}) {
  return(
    <div className='mb-5'>
      <Image
        src={path}
        alt={`Cover Image for ${altText}`}
        className="shadow-lg rounded-md shadow-slate-300 w-full hover:shadow-2xl transition-shadow duration-200"
        width={1300}
        height={630}
      />
    </div>
  );
}

export function SmallAvatar({path, altText }) {
  return (
    <img src={path} className="w-12 h-12 rounded-full mr-4 mb-3" alt={altText} />
  );
}

export function LargeAvatar({ path, alText }) {

}

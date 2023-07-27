import Image from 'next/image';

export function MedImg({path, altText}) {
  return(
    <div className='mb-5'>
      <Image
        src={path}
        alt={`Cover Image for ${altText}`}
        className="shadow-sm w-full hover:shadow-lg transition-shadow duration-200"
        width={1300}
        height={630}
      />
    </div>
  );
}

export function SmallAvatar({path, altText }) {
  return (
    <img src={path} className="w-12 h-12 rounded-full mr-4" alt={altText} />
  );
}

export function LargeAvatar({ path, alText }) {
  
}

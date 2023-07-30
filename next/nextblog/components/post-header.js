import { HeroImg, SmallAvatar } from "./image";

export default function PostHeader( {postData }) {
    return(
        <>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-stone-600 font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">{postData.title}</h1>
            <div className="flex items-center">
            <SmallAvatar path={postData.avatar} altText={postData.contributor} />
            <div className="text-xl font-bold">{postData.contributor}</div>
            </div>
            <HeroImg path={postData.coverImage} altText={postData.title} />
        </>
    )
}
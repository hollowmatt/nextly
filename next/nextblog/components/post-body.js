import Date from './date';

export default function PostBody({ postData }) {
    return (
        <>
            <div className="max-w-2xl mx-auto">
                <div className="mb-6 text-lg">
                    <Date dateString={postData.date} />
                </div>
            </div>
            <article>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
            </article> 
        </>
    );
}
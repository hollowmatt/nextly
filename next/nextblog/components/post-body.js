import Date from './date';
import utilStyles from '../styles/utils.module.css';

export default function PostBody({ postData }) {
    return (
        <>
            <div className="max-w-2xl mx-auto">
                <div className="mb-6 text-lg">
                    <Date dateString={postData.date.slice(1,11)} /> 
                </div>
            </div>
            <article className={utilStyles.article}>
                <div dangerouslySetInnerHTML={{__html: postData.body}} />
            </article> 
        </>
    );
}
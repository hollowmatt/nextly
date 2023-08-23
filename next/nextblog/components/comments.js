import {DiscussionEmbed} from "disqus-react"

const Comments = ({ id, title, shortname, url }) => {
  const disqusShortname = shortname;
  const disqusConfig = {
    url: url,
    identifier: id,
    title: title
  }
  
  return (
    <div>
      <DiscussionEmbed className="bg-sky-50 border-2 border-neutral-200 mt-4 p-2"
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default Comments;

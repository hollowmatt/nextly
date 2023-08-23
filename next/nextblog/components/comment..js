import {DiscussionEmbed} from "disqus-react"

const Comments = ({ id, title }) => {
  const disqusShortname = process.env.DISQUS_SHORT_NAME;
  const url = process.env.SITE_URL + "/" + id;
  const disqusConfig = {
    url: url,
    identifier: id,
    title: title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default Comments;

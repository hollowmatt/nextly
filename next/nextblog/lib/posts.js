import { remark } from 'remark';
import html from 'remark-html';
import { getBucketContent, getData, getRow, getSortedData, getAvatarURL } from './get-data';

export async function getHeaderDataFromFirestore() {
  const headerData = await getData("metablog");
  const title = headerData[0].title;
  const processedContent = await remark().use(html).process(headerData[0].blurb)
  const blurb = processedContent.toString();

  return{
    contentHtml: blurb,
    headerTitle: title,
  };
}

export async function getBlogPostsFromFirestore() {
  const postsData = await getSortedData("blogposts");
  const posts = postsData.map(async (post) => {
    return {
        id: post.id,
        avatar: await getAvatarURL(post.avatar),
        contributor: post.contributor,
        coverImage: await getAvatarURL(post.coverImage),
        short: post.short,
        title: post.title,
        date: JSON.stringify(post.date.toDate()),
      }
  });
  return Promise.all(posts);
}

export async function getBlogPostFromFirestore(id) {
  const blogPost = await getRow('blogposts', id);
  const processedContent = await remark().use(html).process(await getBucketContent(id));
  
  return({
    id: id,
    avatar: await getAvatarURL(blogPost.avatar),
    contributor: blogPost.contributor,
    coverImage: await getAvatarURL(blogPost.coverImage),
    short: blogPost.short,
    title: blogPost.title,
    body: processedContent.toString(),
    date: JSON.stringify(blogPost.date.toDate()),
  });
}

export async function getAllPostIdsFromFirestore() {
  const postsData = await getData("blogposts");
  const paths = postsData.map((post) => ({
    params: { id: post.id },
  }));
  return paths;
}
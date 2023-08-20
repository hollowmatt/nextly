import { remark } from 'remark';
import html from 'remark-html';
import { getBucketContent, getData, getRow, getSortedData, getBucketURL, getAvatarURL } from '../data/get-data';

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
  const posts = [];
  
  postsData.map((post) => {
    const postDate = JSON.stringify(post.date.toDate());
    posts.push(
      {
        id: post.id,
        avatar: post.avatar,
        contributor: post.contributor,
        coverImage: post.coverImage,
        short: post.short,
        title: post.title,
        body: post.body,
        date: postDate,
      }
    );
  });
  return posts;
}

export async function getBlogPostFromFirestore(id) {
  const blogPost = await getRow('blogposts', id);
  const processedContent = await remark().use(html).process(await getBucketContent(id));
  
  return({
    avatar: await getAvatarURL(blogPost.avatar),
    contributor: blogPost.contributor,
    coverImage: blogPost.coverImage,
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
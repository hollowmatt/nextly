import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { getData, getRow } from '../data/get-data';

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
  const postsData = await getData("blogposts");
  const posts = [];
  postsData.map((post) => {
    posts.push(
      {
        id: post.id,
        avatar: post.avatar,
        contributor: post.contributor,
        coverImage: post.coverImage,
        short: post.short,
        title: post.title,
        body: post.body,
      }
    )
  });
  return posts;
}

export async function getBlogPostFromFirestore(id) {
  const blogPost = await getRow('blogposts', id);
  const processedContent = await remark().use(html).process(blogPost.body);
  const body = processedContent.toString();
  const postDate = JSON.stringify(blogPost.date.toDate());

  return({
    avatar: blogPost.avatar,
    contributor: blogPost.contributor,
    coverImage: blogPost.coverImage,
    short: blogPost.short,
    title: blogPost.title,
    body: body,
    date: postDate,
  });
}

export async function getAllPostIdsFromFirestore() {
  const postsData = await getData("blogposts");
  const paths = postsData.map((post) => ({
    params: { id: post.id },
  }));
  return paths;
}
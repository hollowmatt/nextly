import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { getData } from '../data/get-data';

const postsDirectory = path.join(process.cwd(), 'data/posts');
const metaDirectory = path.join(process.cwd(), 'data/meta');

export function getSortedPostsData() {

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // use regex to remove .md from filename
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    //use gray-matter to parse
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.data < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export async function getHeaderData() {
  const fullPath = path.join(metaDirectory, 'header.md');
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...matterResult.data,
  };
}

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
<<<<<<< HEAD
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
=======
  const allPosts = [];
  postsData.map((item) => {
    allPosts.push(
      {
        date: item.date,
        contentHtml: item.body,
      }
    );
  });
  console.log(allPosts[0].contentHtml);
}
>>>>>>> refs/remotes/origin/modernize

import { getData } from '../../data/get-data';

export default async function handler(req, res) {
  const postsData = await getData("blogposts");
  const paths = postsData.map((post) => ({
    params: { id: post.id },
  }));
  res.status(200).json(paths);
}

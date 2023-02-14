import type { NextApiRequest, NextApiResponse } from "next"
import connect from "../../lib/mongodb"
import Blog from "../../models/blogSchema"

connect()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { title } = req.body
    const post = await Blog.create({
      title,
    })
    res.json(post)
  }
  if (req.method === "GET") {
    const posts = await Blog.find({})
    res.json(posts)
  }
}

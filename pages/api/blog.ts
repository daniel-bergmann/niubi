import type { NextApiRequest, NextApiResponse } from "next"
import connect from "../../lib/mongodb"
import Blog from "../../models/blogSchema"

connect()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { title, timestamp } = req.body
    const post = await Blog.create({
      title,
      timestamp,
    })
    res.json(post)
  }
  if (req.method === "GET") {
    //- _id: -1 added is to get newest post first first
    const posts = await Blog.find({}).sort({ _id: -1 })
    res.json(posts)
  }
}

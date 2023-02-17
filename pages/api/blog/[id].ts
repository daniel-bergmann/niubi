import type { NextApiRequest, NextApiResponse } from "next"
import connect from "../../../lib/mongodb"
import Blog from "../../../models/blogSchema"

connect()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const id = await Blog.findById({ _id: req.query.id })
    res.json(id)
  }
}

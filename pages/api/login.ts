import connect from "../../lib/mongodb"
import User from "../../model/schema"
import type { NextApiRequest, NextApiResponse } from "next"

connect()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { email, password } = req.body
  const user = await User.findOne({ email, password })
  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Wrong email or password" })
  }
  res.redirect(307, "/")
}

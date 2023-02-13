// import type { NextApiRequest, NextApiResponse } from "next"
// import clientPromise from "../../lib/mongodb"

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<any>
// ) {
//   try {
//     const client = await clientPromise
//     const db = client.db("blog")
//     if (req.method === "POST") {
//       // Process a POST request
//       const post = req.body
//       await db.collection("posts").insertOne(post)
//       await res.status(200).json({ message: "Post added" })
//     } else if (req.method === "GET") {
//       // Process a GET request
//       const blogPosts = await db
//         .collection("posts")
//         .find({})
//         .sort({ metacritic: -1 })
//         .limit(10)
//         .toArray()
//       // Process a GET request
//       res.status(200).json(blogPosts)
//     }
//   } catch (e) {
//     console.error(e)
//   }
// }

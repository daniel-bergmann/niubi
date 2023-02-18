import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next"
import { server } from "../../config"
import Articles from "@/components/Articles"

export default function Post({
  item,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Articles item={item} />
}

// get static paths
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(server + "/api/blog")
  const data = await res.json()

  const paths = data.map((post: any) => ({
    params: { _id: post._id.toString() },
  }))

  return { paths, fallback: false }
}

// get static props
export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context?.params?._id
  const res = await fetch(server + "/api/blog/" + id)
  const item = await res.json()
  return {
    props: { item },
  }
}

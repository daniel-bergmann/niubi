import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next"
import { server } from "../../config"
import { Container } from "../index"
import Articles from "@/components/Articles"
import Hero from "../../components/Hero"
import { deletePost } from "@/service/api"

export default function Post({
  item,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Hero />
      <div>
        <Articles deletePost={deletePost} item={item} />
      </div>
    </Container>
  )
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

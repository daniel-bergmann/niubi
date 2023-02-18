import { server } from "../../config"
import { Container } from "../index"
import Articles from "@/components/Articles"
import Hero from "../../components/Hero"

interface Props {
  posts: {}[]
}

export default function Index({ posts }: Props) {
  return (
    <Container>
      <Hero />
      <div>
        {posts.map((item: any) => (
          <Articles deletePost={() => {}} key={item._id} item={item} />
        ))}
      </div>
    </Container>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(server + "/api/blog")
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}

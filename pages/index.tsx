import { useState, useContext } from "react"
import styled from "styled-components"
import { server } from "../config"
import { GlobalContext } from "../pages/_app"
import Link from "next/link"

import Hero from "../components/Hero"
import Form from "../components/Form"
import Articles from "@/components/Articles"

interface Props {
  posts: {}[]
}

export default function Home({ posts }: Props) {
  const [title, setTitle] = useState<string>("")

  const [loggedin] = useContext(GlobalContext)

  // function to send a post request to the api
  const sendPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch(server + "/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
    const rebuild = await fetch(process.env.NEXT_PUBLIC_WEBHOOK as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
    setTitle("")
  }

  // function to delete a post
  const deletePost = async (id: string) => {
    const res = await fetch(server + "/api/blog/" + id, {
      method: "DELETE",
    })
    const rebuild = await fetch(process.env.NEXT_PUBLIC_WEBHOOK as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
    console.log(res)
  }

  return (
    <Container>
      <div>
        {loggedin && (
          <Form title={title} setTitle={setTitle} sendPost={sendPost} />
        )}
        {posts.slice(0, 6).map((item: any) => (
          <Articles key={item._id} item={item} deletePost={deletePost} />
        ))}
        <Link className="seemore" href="/posts">
          <button>see more posts</button>
        </Link>
      </div>
      <Hero />
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

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  div {
    .seemore {
      padding: 10px;
      text-decoration: underline;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

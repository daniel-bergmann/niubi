import { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { server } from "../config"
import { GlobalContext } from "../pages/_app"
import Link from "next/link"

import Hero from "../components/Hero"
import Form from "../components/Form"
import Articles from "@/components/Articles"

export default function Home() {
  const [title, setTitle] = useState<string>("")
  const [data, setData] = useState<any>([])

  const [loggedin] = useContext(GlobalContext)

  const fetchData = async () => {
    const res = await fetch(server + "/api/blog")
    const data = await res.json()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

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
    if (res.status === 200) {
      loggedin && fetchData()
    } else {
      console.log("There was a problem with the request")
    }
    setTitle("")
  }

  return (
    <Container>
      <div>
        {loggedin && (
          <Form title={title} setTitle={setTitle} sendPost={sendPost} />
        )}
        {data.map((item: any) => (
          <Articles key={item._id} item={item} />
        ))}
        <Link className="seemore" href="/posts">
          <button>see more posts</button>
        </Link>
      </div>
      <Hero />
    </Container>
  )
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

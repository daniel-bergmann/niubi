import { useState, useEffect, useContext } from "react"
import { server } from "../config"
import { GlobalContext } from "../pages/_app"
import Link from "next/link"

export default function Home() {
  const [title, setTitle] = useState<string>("")
  const [data, setData] = useState<any>([])

  const [loggedin] = useContext(GlobalContext)

  // function to fetch data from the api
  const fetchData = async () => {
    const res = await fetch(server + "/api/blog")
    const data = await res.json()
    setData(data)
  }
  useEffect(() => {
    // fetching data on each render
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
      console.log("article added")
      loggedin && fetchData()
    } else {
      console.log("could not add article")
    }
    setTitle("")
  }

  if (loggedin) {
    return (
      <>
        <h1>Blog</h1>
        <form onSubmit={sendPost}>
          <input
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {data.map((item: any) => (
          <h3 key={item._id}>{item.title}</h3>
        ))}
      </>
    )
  } else {
    return (
      <>
        {data.map((item: any) => (
          <h3 key={item._id}>{item.title}</h3>
        ))}
        <p>
          Not logged in? <Link href="/login">Login here</Link>
        </p>
      </>
    )
  }
}

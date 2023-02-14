import { useState, useEffect } from "react"
import { server } from "../config"

export default function Home() {
  const [title, setTitle] = useState<string>("")
  const [data, setData] = useState<any>([])

  const storage = typeof window !== "undefined" && window.localStorage
  const token = storage && storage.getItem("token")

  // function to fetch data from the api
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(server + "/api/blog")
      const data = await res.json()
      setData(data)
      console.log(data)
    }
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
    console.log(res)
    setTitle("")
  }

  if (token) {
    return (
      <div>
        <form onSubmit={sendPost}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {/* {data.map((item: any, i: any) => (
          <div key={i}>
            <h1>{item.title}</h1>
          </div>
        ))} */}
      </div>
    )
  } else
    return (
      <div>
        {/* {data.map((item: any, i: any) => (
          <div key={i}>
            <h1>{item.title}</h1>
          </div>
        ))} */}
      </div>
    )
}

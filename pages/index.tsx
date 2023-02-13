import { useState } from "react"

export default function Home() {
  const [title, setTitle] = useState<string>("")
  const [data, setData] = useState<any>([])

  // function to fetch data from the api
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/blog")
    const data = await res.json()
    setData(data)
    console.log(data)
  }

  // function to send a post request to the api
  const sendPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch("http://localhost:3000/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
    console.log(res)
    setTitle("")
    await fetchData()
  }

  return (
    <div>
      {/* form to send a post request for a title */}
      <form onSubmit={sendPost}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {/* map over the data and display it */}
      {data.map((item: any, i: any) => (
        <div key={i}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  )
}

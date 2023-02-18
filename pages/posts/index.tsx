import { useEffect, useState } from "react"
import { server } from "../../config"
import { Container } from "../index"
import Articles from "@/components/Articles"
import Hero from "../../components/Hero"

export default function Index() {
  const [data, setData] = useState<any>([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(server + "/api/blog")
      const data = await res.json()
      setData(data)
      console.log(data)
    }
    fetchData()
  }, [])

  return (
    <Container>
      <Hero />
      <div>
        {data.map((item: any) => (
          <Articles key={item._id} item={item} />
        ))}
      </div>
    </Container>
  )
}

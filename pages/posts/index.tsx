import { useEffect, useState } from "react"
import { server } from "../../config"
import Articles from "@/components/Articles"

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
    <div>
      {data.map((item: any) => (
        <Articles key={item._id} item={item} />
      ))}
    </div>
  )
}

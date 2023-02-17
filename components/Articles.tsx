import React from "react"

interface ArticlesProps {
  data: {
    _id: string
    title: string
    timestamps: string
  }[]
}

export default function Articles({ data }: ArticlesProps) {
  return (
    <main className="w-full">
      {" "}
      {data.map((item: any) => (
        <article key={item._id} className="p-3">
          <h3 className="text-lg">{item.title}</h3>
          <span className="date text-gray-500">
            {item.timestamps.slice(0, 10)}
          </span>
        </article>
      ))}
    </main>
  )
}

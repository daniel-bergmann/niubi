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
        <article key={item._id}>
          <h3>{item.title}</h3>
          <span>{item.timestamps.slice(0, 10)}</span>
        </article>
      ))}
    </main>
  )
}

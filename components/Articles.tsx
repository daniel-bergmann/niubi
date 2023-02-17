import React from "react"
import styled from "styled-components"

interface ArticlesProps {
  data: {
    _id: string
    title: string
    timestamps: string
  }[]
}

export default function Articles({ data }: ArticlesProps) {
  return (
    <Container>
      {" "}
      {data.map((item: any) => (
        <article key={item._id}>
          <h3>{item.title}</h3>
          <span>{item.timestamps.slice(0, 10)}</span>
        </article>
      ))}
    </Container>
  )
}

const Container = styled.div`
  margin: 12px;
  article {
    margin: 20px 0;
    h3 {
      font-size: 1.2rem;
      max-width: 800px;
    }
    span {
      font-size: 0.9rem;
      color: #676767;
    }
  }
`

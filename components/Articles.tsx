import React from "react"
import styled from "styled-components"
import Link from "next/link"

interface ArticlesProps {
  item: {
    title: string
    _id: any
    timestamps: string
  }
}

export default function Articles({ item }: ArticlesProps) {
  return (
    <Container>
      <article>
        <Link href={`/posts/${item._id}`}>
          <h3>{item.title}</h3>
        </Link>
        <span>{item.timestamps.slice(0, 10)}</span>
      </article>
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

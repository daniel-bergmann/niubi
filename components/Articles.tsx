import React from "react"
import styled from "styled-components"
import Link from "next/link"
import { useContext } from "react"
import { GlobalContext } from "../pages/_app"

interface ArticlesProps {
  item: {
    title: string
    _id: any
    timestamps: string
  }
  deletePost: (id: string) => void
}

export default function Articles({ item, deletePost }: ArticlesProps) {
  const [loggedin] = useContext(GlobalContext)
  return (
    <Container>
      <article>
        <Link href={`/posts/${item._id}`}>
          <h3>{item.title}</h3>
        </Link>

        <span>{item.timestamps.slice(0, 10)}</span>
      </article>
      {loggedin && (
        <button onClick={() => deletePost(item._id)}>
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            ></path>
          </svg>
        </button>
      )}
    </Container>
  )
}

const Container = styled.div`
  margin: 12px;
  svg {
    width: 20px;
  }
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

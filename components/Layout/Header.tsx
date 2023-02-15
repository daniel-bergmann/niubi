import React from "react"
import Link from "next/link"

export default function Header() {
  return (
    <div>
      <h1>niubi</h1>
      <Link href="/login">Login</Link>
    </div>
  )
}

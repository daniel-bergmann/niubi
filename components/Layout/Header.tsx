import React from "react"
import Link from "next/link"

export default function Header() {
  return (
    <div className="flex justify-around font-bold border-b-2 border-black">
      <Link href="/">
        <h1 className="text-lg border-r-2 border-black p-4">niubi</h1>
      </Link>
     
      <Link
        className="text-sm border-l-2 border-black p-4 font-light"
        href="/login"
      >
        Login
      </Link>
    </div>
  )
}

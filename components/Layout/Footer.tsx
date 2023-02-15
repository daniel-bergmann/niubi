import React from "react"

export default function Footer() {
  return (
    <footer className="h-5 border-t-2 border-black">
      <p className="text-xs text-center pt-2">
        © {new Date().getFullYear()} | niubi
      </p>
    </footer>
  )
}

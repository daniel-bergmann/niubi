import React, { useState } from "react"
import { useRouter } from "next/router"

export default function Login() {
  const [email, setEmail] = useState<any>("")
  const [password, setPassword] = useState<any>("")
  const router = useRouter()
  // function to post to login api
  const sendPost = async (e: any) => {
    e.preventDefault()
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    console.log(res)
    setEmail("")
    setPassword("")
    // router.push("/")
  }

  return (
    <>
      Login
      <form onSubmit={sendPost}>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" value="login">
          Submit
        </button>
      </form>
      {/* Register
      <form action="/api/register" method="post">
        <input placeholder="email" name="email" type="text" />
        <input placeholder="password" name="password" type="password" />
        <button type="submit" value="register">
          Submit
        </button>
      </form> */}
    </>
  )
}

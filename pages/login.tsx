import React, { useState, useContext } from "react"
import { useRouter } from "next/router"
import { UserContext } from "./_app"

export default function Login() {
  const [email, setEmail] = useState<any>("d@n.is")
  const [password, setPassword] = useState<any>("12345")

  const [loggedin, setLoggedin] = useContext(UserContext)

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
    if (res.status === 200) {
      // get token
      const { token } = await res.json()
      token && setLoggedin(true)
      // set token in localstorage
      const storage = window.localStorage
      storage.setItem("token", token)
    } else {
      setLoggedin(false)
    }

    setEmail("")
    setPassword("")
    router.push("/")
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
      {loggedin ? <p>Logged in</p> : <p>Not logged in</p>}
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

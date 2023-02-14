import React, { useState, useContext } from "react"
import { useRouter } from "next/router"
import { GlobalContext } from "./_app"

export default function Login() {
  const [email, setEmail] = useState<any>("")
  const [password, setPassword] = useState<any>("")

  const [loggedin] = useContext(GlobalContext)

  const router = useRouter()

  const loginHandler = async (e: any) => {
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
      // setting token to localstorage
      const storage = window.localStorage
      storage.setItem("token", token)
    } else {
      console.log("Login failed")
    }
    setEmail("")
    setPassword("")
    // rerouting to the frontpage after successfully logged in
    router.push("/")
  }

  return (
    <>
      Login
      <form onSubmit={loginHandler}>
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

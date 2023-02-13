import React from "react"

export default function login() {
  return (
    <>
      Register
      <form action="/api/register" method="post">
        <input placeholder="email" name="email" type="text" />
        <input placeholder="password" name="password" type="password" />
        <button type="submit" value="register">
          Submit
        </button>
      </form>
      Login
      <form action="/api/login" method="post">
        <input placeholder="email" name="email" type="text" />
        <input placeholder="password" name="password" type="password" />
        <button type="submit" value="login">
          Submit
        </button>
      </form>
    </>
  )
}

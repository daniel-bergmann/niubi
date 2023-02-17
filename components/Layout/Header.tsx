import { useContext } from "react"
import Link from "next/link"
import { GlobalContext } from "../../pages/_app"
import { IoLogOutOutline } from "react-icons/io5"

export default function Header() {
  const [loggedin, setLoggedIn] = useContext(GlobalContext)

  // funtion that removes the token from localstorage and sets the global state to false
  const logoutHandler = () => {
    const storage = window.localStorage
    storage.removeItem("token")
    setLoggedIn(false)
  }

  return (
    <div>
      <Link href="/">
        <h1>niubi</h1>
      </Link>

      {loggedin ? (
        <button onClick={logoutHandler}>
          <IoLogOutOutline />
        </button>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  )
}

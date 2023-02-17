import { useContext } from "react"
import Link from "next/link"
import { GlobalContext } from "../../pages/_app"
import { IoLogOutOutline } from "react-icons/io5"
import styled from "styled-components"

export default function Header() {
  const [loggedin, setLoggedIn] = useContext(GlobalContext)

  // funtion that removes the token from localstorage and sets the global state to false
  const logoutHandler = () => {
    const storage = window.localStorage
    storage.removeItem("token")
    setLoggedIn(false)
  }

  return (
    <Container>
      <Link className="link-left" href="/">
        <h1>niubi</h1>
      </Link>

      {loggedin ? (
        <span className="link-right" onClick={logoutHandler}>
          <IoLogOutOutline />
        </span>
      ) : (
        <Link className="link-right" href="/login">
          Login
        </Link>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
  .link-left {
    border-right: 2px solid black;
    padding: 0 1rem;
    height: 100%;
    h1 {
      height: 100%;
    }
  }
  .link-right {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;

    height: 50px;
    border-left: 2px solid black;
    svg {
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
  @media (max-width: 760px) {
  }
`

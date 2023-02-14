import type { AppProps } from "next/app"
import { useState, createContext } from "react"

//  usercontext for token
export const UserContext = createContext({} as any)

export default function App({ Component, pageProps }: AppProps) {
  const [loggedIn, setLoggedIn] = useState<any>(false)

  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

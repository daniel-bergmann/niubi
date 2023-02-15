import React, { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
  children?: ReactNode
}

const Index = ({ children, ...props }: Props) => {
  return (
    <>
      <Header {...props} />
      {children}
      <Footer />
    </>
  )
}

export default Index

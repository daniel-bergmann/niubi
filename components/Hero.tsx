import Image from "next/image"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import One from "../public/images/1.png"
import Two from "../public/images/2.png"
import Three from "../public/images/3.png"
import Four from "../public/images/4.png"
import Five from "../public/images/5.png"
import Six from "../public/images/6.png"
import Seven from "../public/images/7.png"
import Eight from "../public/images/8.png"
import Nine from "../public/images/9.png"
import Ten from "../public/images/10.png"

const images = [Ten, Two, Three, Four, Five, Six, Seven, Eight, Nine, One]

export default function Hero() {
  const [image, setImage] = React.useState(images[0])
  // choose a random image
  function randomimage() {
    return images[Math.floor(Math.random() * images.length)]
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setImage(randomimage())
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Container>
      <Image
        className=""
        src={image}
        alt="hero image"
        width={800}
        height={500}
        priority
      />
    </Container>
  )
}

const Container = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    img {
      /* cover */
      object-fit: cover;
      width: 100%;
      height: auto;
      border-left: 2px solid black;
    }
  }
`

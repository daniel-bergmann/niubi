import styled from "styled-components"
export default function Footer() {
  return (
    <Container>
      <p>© {new Date().getFullYear()} | niubi</p>
    </Container>
  )
}

const Container = styled.footer`
  min-height: 100px;
  border-top: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
` 

import styled from "styled-components"
interface FormProps {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  sendPost: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export default function Form({ title, setTitle, sendPost }: FormProps) {
  return (
    <Container onSubmit={sendPost}>
      <input
        placeholder="..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Submit</button>
    </Container>
  )
}

const Container = styled.form`
  margin: 10px;
 
`

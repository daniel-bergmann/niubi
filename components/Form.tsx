import React from "react"

interface FormProps {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  sendPost: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export default function Form({ title, setTitle, sendPost }: FormProps) {
  return (
    <form onSubmit={sendPost}>
      <input
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

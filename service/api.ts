import { server } from "../config"

// function to delete a post
export const deletePost = async (id: string) => {
  const res = await fetch(server + "/api/blog/" + id, {
    method: "DELETE",
  })
  rebuildWebhook()
}

// trigger rebuild
export const rebuildWebhook = async () => {
  const rebuild = await fetch(process.env.NEXT_PUBLIC_WEBHOOK as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  })
}

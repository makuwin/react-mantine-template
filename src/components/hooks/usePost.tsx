import { useMutation } from "@tanstack/react-query"
import pb from "../../lib/pocketbase"

const usePost = (name:string) => {
  return useMutation({
    mutationKey: [`post-${name}`],
    mutationFn: async (data:any) => await pb.collection(name)
      .create(data)
  })
}

export default usePost
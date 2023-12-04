import { useQuery } from "@tanstack/react-query"
import pb from "../../lib/pocketbase"

const useGet = (name:string, filter: {}) => {
  return useQuery({
    queryKey: [`get-${name}`, filter],
    queryFn: async () => await pb.collection(name)
      .getFullList(filter)
  })
}

export default useGet
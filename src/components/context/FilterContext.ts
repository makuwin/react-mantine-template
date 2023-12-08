// source => https://www.js-craft.io/blog/adding-usestate-react-context/#:~:text=A%20nicer%20approach%20is%20to,directly%20from%20within%20this%20AppContextProvider%20.

import { createContext } from "react"

type FilterContextType = {
  value: string[] | undefined,
  setValue: React.Dispatch<React.SetStateAction<string[] | undefined>>
}

const iFilterContextState = {
  value: undefined,
  setValue: () => []
}

const FilterContext = createContext<FilterContextType>(iFilterContextState)

export default FilterContext
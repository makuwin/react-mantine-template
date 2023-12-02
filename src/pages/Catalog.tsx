import { SimpleGrid  } from "@mantine/core"
import { CatalogItem } from "../components/ui"

const Catalog = () => {

  return (
    <SimpleGrid
      cols={{ base: 2, sm: 3, lg: 8 }}
      // spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'lg' }}
    >
      <div><CatalogItem/></div>
      <div><CatalogItem/></div>
      <div><CatalogItem/></div>
      <div><CatalogItem/></div>
      <div><CatalogItem/></div>
      <div><CatalogItem/></div>
      <div><CatalogItem/></div>
      <div><CatalogItem/></div>
      <div><CatalogItem/></div>
      <div><CatalogItem/></div>
      <div><CatalogItem/></div>
      <div><CatalogItem/></div>
      <div><CatalogItem/></div>
      <div><CatalogItem/></div>
      <div><CatalogItem/></div>
      <div><CatalogItem/></div>
      <div><CatalogItem/></div>
    </SimpleGrid>
  )
}

export default Catalog
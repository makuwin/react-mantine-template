import { Button, SimpleGrid } from "@mantine/core"
import { CatalogItem } from "../components/ui";
import { faker } from "@faker-js/faker"
import { useGet } from "../components/hooks";
import usePost from "../components/hooks/usePost";

const Catalog = () => {
  const {data, refetch} = useGet('catalog_items', {sort: '-created', requestKey: null})
  const {mutate, isSuccess} = usePost('catalog_items')

  const handleClick = () => {
    const toSend = {
      "name": faker.person.firstName(),
      "price": faker.number.float({ min: 10, max: 10000, precision: 0.01 }),
      "imagesrc": faker.image.urlLoremFlickr({ category: 'cats' })
    }

    mutate(toSend) 
  }

  if(isSuccess) {
    refetch()
  }

  return (
    <>
      <SimpleGrid
        cols={{ base: 2, sm: 3, lg: 8 }}
        spacing={{ base: 10, sm: 'md' }}
        verticalSpacing={{ base: 'md', sm: 'lg' }}
      >
        {
          data?.map(row => (
            <CatalogItem name={row.name} price={row.price} imagesrc={row.imagesrc} key={row.id}/>
          ))
        }
        <Button onClick={handleClick}>Press Me</Button>
      </SimpleGrid>
    </>
  )
}

export default Catalog
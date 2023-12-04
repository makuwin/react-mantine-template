import { Center, Image, Text, Title } from "@mantine/core"

// import { faker } from "@faker-js/faker"

type Props = {
  imagesrc:string,
  name:string,
  price:number
}

const CatalogItem = (p:Props) => {
  const {imagesrc, name, price} = p

  return (
    <div>
      <Center>
        <Image
          src={imagesrc}
          height={200}
          maw={200}
          radius={"xs"}
          alt="e"
        />
      </Center>
      <Title ta={"center"} mt="xs" mb="xs" size="1rem" >{name}</Title>
      <Text ta={"center"} size="xs" c="dimmed" >
        ₱{price}
      </Text>
    </div>
  )
}

export default CatalogItem

/* faker.image.urlLoremFlickr({ category: 'cats' })
faker.person.firstName()
faker.number.float({ min: 10, max: 10000, precision: 0.01 }) */
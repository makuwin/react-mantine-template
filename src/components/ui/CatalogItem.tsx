import { Card, Image, Text, Title } from "@mantine/core"

import { faker } from "@faker-js/faker"

const CatalogItem = () => {

  return (
    <Card shadow="sm" radius="md">
      <Card.Section>
        <Image
          src={faker.image.urlLoremFlickr({ category: 'cats' })}
          height={100}
          alt="e"
        />
      </Card.Section>
      
      <Title mt="xs" mb="xs" size="1rem" >{faker.person.firstName()}</Title>

      <Text size="xs" c="dimmed" >
        ₱{faker.number.float({ min: 10, max: 10000, precision: 0.01 })}
      </Text>
    </Card>
  )
}

export default CatalogItem
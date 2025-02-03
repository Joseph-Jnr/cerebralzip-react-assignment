import { Avatar, Box, Button, Flex, Table, Text } from '@mantine/core'
import { IconStarFilled } from '@tabler/icons-react'

const items = [
  {
    imageUrl:
      'https://d1r6yjixh9u0er.cloudfront.net/Custom/Content/Products/19/64/1964_camera-de-seguranca-360-1080p-x314_z1_637382118757482300.webp',
    name: 'Camera Mi 360',
    sold_amount: 432,
    price: 120,
    revenue: 51840,
    rating: 4.81,
  },
  {
    imageUrl:
      'https://www.mcsport.ie/cdn/shop/products/HITFITNESSMassageGun_4_800x_a4d59378-7002-4a14-8c00-dfb21fc44390_778x.webp?v=1670320370',
    name: 'Massage Gun',
    sold_amount: 120,
    price: 112,
    revenue: 25440,
    rating: 3.44,
  },
  {
    imageUrl:
      'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695739072-61TfkhAidjL.jpg?crop=1xw:1.00xh;center,top&resize=980:*',
    name: 'Vacuum-Mop 2 Pro',
    sold_amount: 221,
    price: 320,
    revenue: 15123,
    rating: 3.22,
  },
  {
    imageUrl:
      'https://assets.epicurious.com/photos/65188ec72488886504808579/3:4/w_748%2Cc_limit/Tineco%2520Floor%2520One%2520S7%2520Pro%2520Smart%2520Cordless%2520Floor%2520Cleaner.png',
    name: 'Vacuum Mop 2',
    sold_amount: 223,
    price: 234,
    revenue: 32812,
    rating: 3.0,
  },
]

const TopProducts = () => {
  const rows = items.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Flex align="center" gap={4}>
          <Avatar src={item.imageUrl} size="sm" radius="md" />
          <Text fz={13} fw={500}>
            {item.name}
          </Text>
        </Flex>
      </Table.Td>
      <Table.Td>{item.sold_amount}</Table.Td>
      <Table.Td>${item.price.toLocaleString()}</Table.Td>
      <Table.Td>${item.revenue.toLocaleString()}</Table.Td>
      <Table.Td fw={500}>
        <Flex gap={2} align="center">
          <IconStarFilled size={10} color="orange" /> {item.rating.toFixed(2)}
        </Flex>
      </Table.Td>
    </Table.Tr>
  ))

  return (
    <Box mt={40}>
      <Flex justify="space-between" align="center">
        <Text fz="sm" fw={500}>
          Top Products
        </Text>

        <Button variant="default" radius="xl" size="xs">
          Full results
        </Button>
      </Flex>

      <Table.ScrollContainer minWidth={700}>
        <Table mt={20} withRowBorders={false}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Product</Table.Th>
              <Table.Th>Sold amount</Table.Th>
              <Table.Th>Unit price</Table.Th>
              <Table.Th>Revenue</Table.Th>
              <Table.Th>Rating</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Box>
  )
}

export default TopProducts

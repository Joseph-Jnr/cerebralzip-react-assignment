import { Box, Card, Flex, Text } from '@mantine/core'
import LinearMetric from './LinearMetrics'

const customerSatisfaction = [
  {
    label: 'negative',
    value: 28,
    bg: '#FFA9A9',
  },
  {
    label: 'neutral',
    value: 34,
    bg: '#FFCD90',
  },
  {
    label: 'positive',
    value: 134,
    bg: '#91EDB6',
  },
]

const Feedback = () => {
  return (
    <Card p={20} radius={'lg'} bg="white" className="custom-shadow">
      <Text c="dimmed" fz={'xs'}>
        Community feedback
      </Text>
      <Text fz="md" fw={500}>
        Mostly positive
      </Text>

      <Box mt={10}>
        <LinearMetric data={customerSatisfaction} />

        <Flex align={'center'} gap={20} mt={18}>
          {/* Negative */}
          <Flex direction={'column'} gap={3}>
            <Text c={'dimmed'} fz="xs">
              Negative
            </Text>
            <Flex align={'center'} gap={5}>
              <Text fw={700} fz="md">
                {customerSatisfaction[0].value.toLocaleString()}
              </Text>
            </Flex>
          </Flex>
          {/* Neutral */}
          <Flex direction={'column'} gap={3}>
            <Text c={'dimmed'} fz="xs">
              Neutral
            </Text>
            <Flex align={'center'} gap={5}>
              <Text fw={700} fz="md">
                {customerSatisfaction[1].value.toLocaleString()}
              </Text>
            </Flex>
          </Flex>
          {/* Positive */}
          <Flex direction={'column'} gap={3}>
            <Text c={'dimmed'} fz="xs">
              Positive
            </Text>
            <Flex align={'center'} gap={5}>
              <Text fw={700} fz="md">
                {customerSatisfaction[2].value.toLocaleString()}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Card>
  )
}

export default Feedback

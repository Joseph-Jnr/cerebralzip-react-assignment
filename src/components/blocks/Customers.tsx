import { Card, ColorSwatch, Flex, Text } from '@mantine/core'
import { AreaChart } from '@mantine/charts'
import { customerChartData, valueFormatter } from '@/utils'

const Customers = () => {
  return (
    <Card p={20} radius={'lg'} bg="white" className="custom-shadow">
      <Text fz={'md'} fw={500}>
        Customers by device
      </Text>

      <AreaChart
        h={180}
        mt={20}
        valueFormatter={valueFormatter}
        data={customerChartData || []}
        dataKey="day"
        series={[
          { name: 'web', color: '#0068F7' },
          { name: 'offline', color: '#B2EFFE' },
        ]}
        dotProps={{ r: 0, strokeWidth: 0, stroke: '#fff' }}
        fillOpacity={0}
        curveType="bump"
        withXAxis={false}
      />

      <Flex gap={20} mt={20}>
        <Flex direction="column">
          <Flex align="center" gap={6}>
            <Text c="dimmed" fz="xs">
              Web sales
            </Text>
            <ColorSwatch color="#0068F7" radius="xs" size={10} />
          </Flex>

          <Text fw="bold" fz="sm">
            1,304%
          </Text>
        </Flex>
        <Flex direction="column">
          <Flex align="center" gap={6}>
            <Text c="dimmed" fz="xs">
              Offline selling
            </Text>
            <ColorSwatch color="#B2EFFE" radius="xs" size={10} />
          </Flex>

          <Text fw="bold" fz="sm">
            473%
          </Text>
        </Flex>
      </Flex>
    </Card>
  )
}

export default Customers

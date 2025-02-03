import { Box, Button, Flex, Menu, Text } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import { BarChart } from '@mantine/charts'
import { valueFormatter } from '@/utils'

const chartData = [
  {
    period: 'Jan',
    thisYear: 665,
    lastYear: 1442,
  },
  {
    period: 'Feb',
    thisYear: 217,
    lastYear: 2804,
  },
  {
    period: 'Mar',
    thisYear: 876,
    lastYear: 4152,
  },
  {
    period: 'Apr',
    thisYear: 817,
    lastYear: 5573,
  },
  {
    period: 'May',
    thisYear: 647,
    lastYear: 7906,
  },
  {
    period: 'Jun',
    thisYear: 184,
    lastYear: 3498,
  },
]

const Comparison = () => {
  return (
    <Box>
      <Flex justify="space-between" align="center">
        <Text fz="sm" fw={500}>
          Comparison
        </Text>

        {/* Dropdown */}
        <Menu shadow="md" width={200} position="bottom-end">
          <Menu.Target>
            <Button
              variant="default"
              radius="xl"
              size="xs"
              rightSection={<IconChevronDown size={14} />}
            >
              6 months
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>2 months</Menu.Item>
            <Menu.Item>4 months</Menu.Item>
            <Menu.Item>6 months</Menu.Item>
            <Menu.Item>12 months</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>

      <Box>
        <BarChart
          h={300}
          mt={20}
          valueFormatter={valueFormatter}
          data={chartData || []}
          dataKey="period"
          tooltipAnimationDuration={800}
          withLegend
          barProps={{ radius: 5 }}
          legendProps={{ verticalAlign: 'bottom', height: 50 }}
          series={[
            { name: 'thisYear', label: 'This year', color: '#0068F7' },
            { name: 'lastYear', label: 'Last year', color: '#B2EFFE' },
          ]}
        />
      </Box>
    </Box>
  )
}

export default Comparison

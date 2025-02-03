import { Badge, Card, Flex, Text } from '@mantine/core'
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react'

const DashboardSummary = () => {
  /* const { data: dashStats, isFetching } = useQuery({
    queryKey: ['dashStats'],
    queryFn: GetDashboardStats,
  }) */

  //const data = dashStats

  return (
    <Flex
      my={40}
      direction={{ base: 'column', md: 'row' }}
      gap={10}
      justify="space-between"
    >
      <SummaryCard title="Purchases" value={4294} metric={32} isGain />
      <SummaryCard title="Revenue" value={322000} metric={49} isFiat isGain />
      <SummaryCard title="Refunds" value={8200} metric={7} isFiat />
    </Flex>
  )
}

export default DashboardSummary

interface SummaryCardProps {
  title: string
  value: number
  metric: number
  isFiat?: boolean
  isGain?: boolean
}

const SummaryCard = ({
  title,
  value,
  metric,
  isFiat,
  isGain,
}: SummaryCardProps) => {
  const Icon: React.FC<any> = isGain ? IconTrendingUp : IconTrendingDown
  const badgeColor = isGain ? 'teal' : 'red'
  return (
    <Card p={10} flex={1} radius="md" withBorder>
      <Text c="dimmed" fz="xs">
        {title}
      </Text>

      <Flex mt={10} gap={10} align="center">
        <Text fw="bold">
          {isFiat && '$'}
          {value.toLocaleString()}
        </Text>
        <Badge
          variant="light"
          color={badgeColor}
          size="sm"
          rightSection={<Icon size={14} />}
        >
          {`${isGain ? '+' : '-'}${metric}%`}
        </Badge>
      </Flex>
    </Card>
  )
}

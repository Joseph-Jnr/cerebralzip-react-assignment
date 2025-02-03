import { Box, BoxProps, Flex } from '@mantine/core'

interface DataItem {
  label: string
  value: number
  bg: string
}

interface LinearMetricProps extends BoxProps {
  data: DataItem[]
}

/**
 * How to use the LinearMetric Component
 *
 * This component displays a horizontal bar chart representing the proportion
 * of different categories based on the provided data array. The data array
 * should contain at least two objects with each object specifying the label,
 * value, and background color of the category.
 *
 * @param {DataItem[]} data - Array of data objects
 *
 * Example usage:
 * const customerSatisfaction = [
 *   { label: 'negative', value: 16, bg: 'red' },
 *   { label: 'neutral', value: 45, bg: 'yellow' },
 *   { label: 'positive', value: 2113, bg: 'green' },
 * ];
 *
 * <LinearMetric data={customerSatisfaction} />
 */

const LinearMetric = ({ data, ...props }: LinearMetricProps) => {
  // Calculate the total value
  const total = data.reduce((acc, item) => acc + item.value, 0)

  return (
    <Flex gap={6}>
      {data.map((item, index) => {
        // Calculate the width percentage for each category
        const width = (item.value / total) * 100
        return (
          <Box
            key={index}
            w={`${width}%`}
            h={8}
            bg={item.bg}
            className="rounded-full"
            {...props}
          ></Box>
        )
      })}
    </Flex>
  )
}

export default LinearMetric

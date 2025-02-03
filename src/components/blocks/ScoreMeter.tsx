import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  RingProgress,
  Text,
} from '@mantine/core'

export const data = [{ name: 'USA', value: 400, color: 'indigo.6' }]

const ScoreMeter = () => {
  return (
    <Card p={20} radius={'lg'} bg="white" className="custom-shadow">
      <Flex justify="center">
        <RingProgress
          size={180}
          thickness={12}
          roundCaps
          sections={[{ value: 40, color: '#0068F7' }]}
          label={
            <Flex direction="column" justify="center" align="center">
              <Text fz={30} fw="bold">
                78
              </Text>
              <Text c="dimmed" fz="xs">
                of 100 points
              </Text>
            </Flex>
          }
        />
      </Flex>

      <Divider my="md" />

      <Box>
        <Text fw="bold">You're good!</Text>
        <Text c="dimmed" fz="xs">
          Your sales performance score is better than 80% other users
        </Text>

        <Button variant="default" radius="xl" size="xs" mt={20}>
          Improve your score
        </Button>
      </Box>
    </Card>
  )
}

export default ScoreMeter

import {
  Comparison,
  Customers,
  DashboardSummary,
  Feedback,
  PageHelmet,
  ScoreMeter,
  SideNav,
  TopProducts,
} from '@/components'
import {
  Box,
  Burger,
  Button,
  Card,
  Flex,
  Grid,
  Menu,
  Text,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'

const Dashboard = () => {
  const [opened, { toggle }] = useDisclosure()

  return (
    <>
      <PageHelmet title="Dashboard" />
      <Grid h={'100%'} bg="#F3F5F7">
        <Grid.Col span={2.2} className={opened ? 'block' : 'hidden md:block'}>
          <SideNav opened={opened} toggle={toggle} />
        </Grid.Col>

        <Grid.Col
          span={{ base: 12, md: 9.8 }}
          className="w-full h-full md:max-h-[100vh] overflow-scroll rounded-2xl"
        >
          <Box p={10}>
            <Grid>
              <Grid.Col span={{ base: 12, md: 8 }}>
                <Card
                  bg={'white'}
                  p={20}
                  radius="lg"
                  className="max-h-full overflow-y-scroll hide-scrollbar custom-shadow"
                >
                  {/* Header area */}
                  <Flex
                    direction={{ base: 'column', md: 'row' }}
                    gap={20}
                    justify="space-between"
                    align={{ base: 'flex-start', md: 'center' }}
                  >
                    <Flex align="center" gap={10}>
                      <Burger
                        size="sm"
                        opened={opened}
                        onClick={toggle}
                        aria-label="Toggle navigation"
                        hiddenFrom="md"
                      />
                      <Text fz={{ base: 18, md: 22 }} fw={500}>
                        Dashboard
                      </Text>
                    </Flex>

                    {/* Dropdown */}
                    <Flex align="center" gap={10}>
                      <Text fz="sm">Compare to</Text>
                      <Menu shadow="md" width={200} position="bottom-end">
                        <Menu.Target>
                          <Button
                            variant="default"
                            radius="xl"
                            size="xs"
                            rightSection={<IconChevronDown size={14} />}
                          >
                            Last year
                          </Button>
                        </Menu.Target>

                        <Menu.Dropdown>
                          <Menu.Item>Today</Menu.Item>
                          <Menu.Item>This week</Menu.Item>
                          <Menu.Item>This month</Menu.Item>
                          <Menu.Item>This year</Menu.Item>
                          <Menu.Item>Last year</Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </Flex>
                  </Flex>

                  {/* Dashboard Summary */}
                  <DashboardSummary />

                  {/* Comparison */}
                  <Comparison />

                  {/* Top products */}
                  <TopProducts />
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 4 }}>
                <Flex direction="column" gap={8}>
                  {/* Score meter */}
                  <ScoreMeter />
                  {/* Customers by device */}
                  <Customers />
                  {/* Feedback */}
                  <Feedback />
                </Flex>
              </Grid.Col>
            </Grid>
          </Box>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default Dashboard

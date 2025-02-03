import { Avatar, Box, Flex, Overlay, Text } from '@mantine/core'
import { IconX } from '@tabler/icons-react'
import LinksGroup from './LinksGroup'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@mantine/hooks'
import { navLinks } from '@/utils'

interface SideNavProps {
  opened: boolean
  toggle: () => void
}

const SideNav = ({ opened, toggle }: SideNavProps) => {
  const isMobile = useMediaQuery('(max-width: 64em)')
  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && opened && (
        <Overlay
          color="black"
          opacity={0.3}
          zIndex={40}
          onClick={toggle}
          fixed
        />
      )}

      <Box
        p={20}
        h="100vh"
        pos={isMobile ? 'fixed' : 'sticky'}
        miw={220}
        top={0}
        left={0}
        className={`z-50 transition-transform duration-300 ${
          isMobile
            ? opened
              ? 'bg-white translate-x-0'
              : '-translate-x-full'
            : ''
        }`}
      >
        <Flex direction="column" justify="space-between" h="100%">
          <Box>
            <Flex justify="space-between">
              <Text fw="bolder" mb={20} px={14}>
                <Link to="/dashboard">LOGO</Link>
              </Text>

              {isMobile && <IconX onClick={toggle} size={18} />}
            </Flex>

            {/* Render grouped links */}
            {navLinks.map((group) => (
              <div key={group.title || group.label}>
                {group.title && (
                  <Text
                    fz={11}
                    tt="uppercase"
                    c="dimmed"
                    mt={'md'}
                    mb={'xs'}
                    fw={500}
                    px={14}
                  >
                    {group.title}
                  </Text>
                )}
                {group.links ? (
                  group.links.map((link) => (
                    <Flex direction="column" key={link.label}>
                      <LinksGroup {...link} key={link.label} />
                    </Flex>
                  ))
                ) : (
                  <LinksGroup {...group} />
                )}
              </div>
            ))}
          </Box>

          <Flex align="center" gap={10}>
            <Avatar
              size="sm"
              src="https://avatars.githubusercontent.com/u/67343514?v=4"
            />
            <Text fz="sm" fw={500}>
              Tom Wang
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default SideNav

'use client'

import { Group, Box, UnstyledButton, rem } from '@mantine/core'
import { Link, useLocation } from 'react-router-dom'

interface LinksGroupProps {
  icon?: React.FC<any>
  label: string
  navLink?: any
}

const LinksGroup = ({ icon: Icon, label, navLink }: LinksGroupProps) => {
  const currentPath = useLocation().pathname
  const isActive = currentPath.startsWith(navLink)

  return (
    <>
      <Link to={navLink}>
        <UnstyledButton
          py={10}
          bg={isActive ? 'white' : 'transparent'}
          px={14}
          w={'100%'}
          className={`rounded-lg ${isActive ? 'shadow-md' : ''}`}
        >
          <Group justify="space-between" gap={0}>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              {Icon && (
                <Icon
                  style={{ width: rem(18), height: rem(18) }}
                  size={30}
                  color={isActive ? '#0068F7' : 'gray'}
                />
              )}
              <Box
                ml="xs"
                fz="sm"
                c="#76787E"
                fw={isActive ? 'bold' : 'initial'}
              >
                {label}
              </Box>
            </Box>
          </Group>
        </UnstyledButton>
      </Link>
    </>
  )
}

export default LinksGroup

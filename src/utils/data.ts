import {
  IconChartBar,
  IconLayoutDashboardFilled,
  IconList,
  IconPlug,
  IconSettings,
  IconSitemap,
  IconUserCircle,
} from '@tabler/icons-react'

export const navLinks = [
  {
    label: 'Settings',
    navLink: '/settings',
    icon: IconSettings,
  },
  {
    label: 'Team',
    navLink: '/team',
    icon: IconUserCircle,
  },
  {
    title: 'Menu',
    links: [
      {
        label: 'Dashboard',
        navLink: '/dashboard',
        icon: IconLayoutDashboardFilled,
      },
      {
        label: 'Campaigns',
        navLink: '/campaigns',
        icon: IconChartBar,
      },
      {
        label: 'Flows',
        navLink: '/flows',
        icon: IconSitemap,
      },
      {
        label: 'Integrations',
        navLink: '/integrations',
        icon: IconPlug,
      },
      {
        label: 'Customers',
        navLink: '/customers',
        icon: IconList,
      },
    ],
  },
]

export const customerChartData = [
  { day: '1', web: 1300, offline: 1550 },
  { day: '2', web: 1350, offline: 1580 },
  { day: '3', web: 1450, offline: 1620 },
  { day: '4', web: 1400, offline: 1650 },
  { day: '5', web: 1500, offline: 1600 },
  { day: '6', web: 1550, offline: 1680 },
  { day: '7', web: 1600, offline: 1750 },
  { day: '8', web: 1570, offline: 1720 },
  { day: '9', web: 1630, offline: 1800 },
  { day: '10', web: 1700, offline: 1850 },
  { day: '11', web: 1650, offline: 1830 },
  { day: '12', web: 1600, offline: 1750 },
  { day: '13', web: 1550, offline: 1680 },
  { day: '14', web: 1450, offline: 1600 },
  { day: '15', web: 1400, offline: 1550 },
  { day: '16', web: 1500, offline: 1650 },
  { day: '17', web: 1550, offline: 1700 },
  { day: '18', web: 1600, offline: 1750 },
  { day: '19', web: 1700, offline: 1800 },
  { day: '20', web: 1750, offline: 1850 },
  { day: '21', web: 1800, offline: 1900 },
  { day: '22', web: 1750, offline: 1880 },
  { day: '23', web: 1800, offline: 1920 },
  { day: '24', web: 1850, offline: 1950 },
  { day: '25', web: 1900, offline: 2000 },
  { day: '26', web: 1950, offline: 2050 },
  { day: '27', web: 1900, offline: 2100 },
  { day: '28', web: 1850, offline: 2080 },
  { day: '29', web: 1800, offline: 2000 },
  { day: '30', web: 1750, offline: 1950 },
]

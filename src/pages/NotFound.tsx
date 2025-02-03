import { PageHelmet } from '@/components'
import { Button } from '@mantine/core'

import { Link } from 'react-router-dom'

const NotFound = () => (
  <>
    <PageHelmet title="404 Page Not Found" />
    <div className="flex justify-center items-center flex-col h-screen">
      <h1 className="text-8xl">404</h1>
      <p className="tracking-widest	text-lg">- Page Not Found -</p>
      <Link to="/dashboard" className="my-4">
        <Button mt={10}>Go back to dashboard</Button>
      </Link>
    </div>
  </>
)

export default NotFound

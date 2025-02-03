import { Button } from '@mantine/core'
import { useRouteError } from 'react-router'
import { Link } from 'react-router-dom'

const ErrorBoundary = () => {
  const error: any = useRouteError()

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-8xl">Oops!</h1>
      <p className="tracking-widest	text-lg">- Something went wrong -</p>
      <pre>{error}</pre>

      <Link to="/" className="my-4">
        <Button mt={10}>Click to refresh </Button>
      </Link>
    </div>
  )
}

export default ErrorBoundary

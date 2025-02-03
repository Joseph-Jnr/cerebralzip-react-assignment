import { createBrowserRouter } from 'react-router-dom'
import { Login, Dashboard } from './routes.lazyload'
import { ErrorBoundary } from '@/components'
import NotFound from '@/pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    children: [{ element: <Login />, index: true }],
    hasErrorBoundary: true,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/dashboard',
    children: [{ element: <Dashboard />, index: true }],
    hasErrorBoundary: true,
    errorElement: <ErrorBoundary />,
  },
  { path: '*', element: <NotFound /> },
])

export default router

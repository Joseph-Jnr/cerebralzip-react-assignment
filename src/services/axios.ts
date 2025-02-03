import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
})

// Request Interceptor
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => config,
  (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
)

// Response Interceptor: Handle 401
const successHandler = (response: AxiosResponse): AxiosResponse => response

const errorHandler = async (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error) && error.response) {
    if (error.response.status === 401) {
      console.log('Unauthorized! Redirecting to login...')
      window.location.href = '/login'
    }
  }
  return Promise.reject(error)
}

instance.interceptors.response.use(successHandler, errorHandler)

export default instance

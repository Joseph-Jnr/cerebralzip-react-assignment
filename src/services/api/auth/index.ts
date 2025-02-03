/* eslint-disable no-useless-catch */
import axios from '@/services/axios'
import { LoginPayload } from './auth.types'

/**
 * Description: Send authentication data
 * @param  {LoginPayload} payload
 * @returns Promise
 */
export const Auth = async (payload: LoginPayload): Promise<any> => {
  try {
    const url = '/login'
    const res = await axios.post(url, payload)
    return res.data
  } catch (err) {
    throw err
  }
}

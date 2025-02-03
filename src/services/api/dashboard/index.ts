import axios from '@/services/axios'
import {
  CustomerStatTypes,
  DashboardStatTypes,
  FeedbackTypes,
  ScoreMeterTypes,
} from './dashboard.types'

/**
 * Description: Send dashboard data
 * @returns Promise
 */

// Get dashboard stats
export const GetDashboardStats = async (): Promise<DashboardStatTypes> => {
  try {
    const url = '/sample_assignment_api_1'
    const res = await axios.get(url)
    return res.data
  } catch (err) {
    throw err
  }
}

// Get score meter
export const GetScore = async (): Promise<ScoreMeterTypes> => {
  try {
    const url = '/sample_assignment_api_3'
    const res = await axios.get(url)
    return res.data
  } catch (err) {
    throw err
  }
}

// Get customer data
export const GetCutomerData = async (): Promise<CustomerStatTypes[]> => {
  try {
    const url = '/sample_assignment_api_4'
    const res = await axios.get(url)
    return res.data as CustomerStatTypes[]
  } catch (err) {
    throw err
  }
}

// Get feedback
export const GetFeedback = async (): Promise<FeedbackTypes> => {
  try {
    const url = '/sample_assignment_api_5'
    const res = await axios.get(url)
    return res.data
  } catch (err) {
    throw err
  }
}

export interface DashboardStatTypes {
  purchases: number
  revenue: number
  refunds: number
}

export interface ScoreMeterTypes {
  score: number
  title: string
  message: string
}

export interface CustomerStatTypes {
  date2: string
  unique_count: number
  cumulative_tweets: number
}

export interface FeedbackTypes {
  negative: number
  positive: number
  neutral: number
}

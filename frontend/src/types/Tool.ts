export interface Tool {

  id: number
  name: string
  description: string

  vendor: string
  category: string

  monthly_cost: number
  previous_month_cost: number

  owner_department: string
  active_users_count: number

  status: "active" | "unused" | "expiring" | "disabled"

  website_url: string
  icon_url: string

  created_at: string
  updated_at: string

}
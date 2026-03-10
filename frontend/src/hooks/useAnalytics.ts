import { useEffect, useState } from "react"
import { api } from "../services/api"
import type { Analytics } from "../types/Analytics"

export const useAnalytics = () => {

  const [analytics, setAnalytics] = useState<Analytics | null>(null)

  useEffect(() => {

    const fetchAnalytics = async () => {
      const response = await api.get<Analytics>("/analytics")
      setAnalytics(response.data)
    }

    fetchAnalytics()

  }, [])

  return { analytics }
}
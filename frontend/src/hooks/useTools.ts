import { useEffect, useState } from "react"
import { api } from "../services/api"
import type { Tool } from "../types/Tool"

export const useTools = () => {

  const [tools, setTools] = useState<Tool[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {

    const fetchTools = async () => {

      try {

        const response = await api.get<Tool[]>("/tools")
        setTools(response.data)

      } catch (err) {

        setError("Failed to load tools")

      } finally {

        setLoading(false)

      }

    }

    fetchTools()

  }, [])

  return { tools, loading, error }

}
import { useEffect, useState } from "react"
import { api } from "../services/api"
import type { Tool } from "../types/Tool"

export const useTools = () => {

  const [tools, setTools] = useState<Tool[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchTools = async () => {
      const response = await api.get<Tool[]>(
        "/tools?_sort=updated_at&_order=desc&_limit=8"
      )

      setTools(response.data)
      setLoading(false)
    }

    fetchTools()

  }, [])

  return { tools, loading }
}
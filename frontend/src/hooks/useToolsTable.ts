import { useState, useMemo } from "react"
import type { Tool } from "../types/Tool"

export type SortOrder = "asc" | "desc"

export type SortField =
  | "name"
  | "category"
  | "status"
  | "monthly_cost"
  | "updated_at"

export function useToolsTable(tools: Tool[]) {

  const [sortField, setSortField] = useState<SortField>("name")
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc")
  const [page, setPage] = useState(1)

  const pageSize = 10

  const sortedTools = useMemo(() => {

    const sorted = [...tools].sort((a, b) => {

      const aValue = a[sortField]
      const bValue = b[sortField]

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc"
          ? aValue - bValue
          : bValue - aValue
      }

      const aString = String(aValue).toLowerCase()
      const bString = String(bValue).toLowerCase()

      if (aString < bString) return sortOrder === "asc" ? -1 : 1
      if (aString > bString) return sortOrder === "asc" ? 1 : -1
      return 0

    })

    return sorted

  }, [tools, sortField, sortOrder])

  const totalPages = Math.ceil(sortedTools.length / pageSize)

  const paginatedTools = useMemo(() => {

    const start = (page - 1) * pageSize
    return sortedTools.slice(start, start + pageSize)

  }, [sortedTools, page])

  const handleSort = (field: SortField) => {

    if (field === sortField) {
      setSortOrder(prev => prev === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortOrder("asc")
    }

    setPage(1)

  }

  return {
    tools: paginatedTools,
    sortField,
    sortOrder,
    handleSort,
    page,
    setPage,
    totalPages
  }

}
import { useState, useMemo } from "react"
import type { Tool } from "../types/Tool"

/* ---------- TYPES ---------- */

export type SortField =
  | "name"
  | "vendor"
  | "category"
  | "owner_department"
  | "active_users_count"
  | "monthly_cost"

type SortOrder = "asc" | "desc"

/* ---------- HOOK ---------- */

export function useToolsTable(tools: Tool[]) {

  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  const [sortField, setSortField] = useState<SortField>("name")
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc")

  const pageSize = 8

  /* ---------- SEARCH ---------- */

  const filteredTools = useMemo(() => {
    return tools.filter((tool) =>
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.vendor.toLowerCase().includes(search.toLowerCase()) ||
      tool.category.toLowerCase().includes(search.toLowerCase())
    )
  }, [tools, search])

  /* ---------- SORT ---------- */

  const sortedTools = useMemo(() => {

  const sorted = [...filteredTools].sort((a, b) => {

    const aValue = a[sortField]
    const bValue = b[sortField]

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortOrder === "asc"
        ? aValue - bValue
        : bValue - aValue
    }

    return sortOrder === "asc"
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue))

  })

  return sorted

}, [filteredTools, sortField, sortOrder])

  /* ---------- PAGINATION ---------- */

  const totalPages = Math.ceil(sortedTools.length / pageSize)

  const paginatedTools = useMemo(() => {

    const start = (page - 1) * pageSize
    return sortedTools.slice(start, start + pageSize)

  }, [sortedTools, page])

  /* ---------- SORT HANDLER ---------- */

  const handleSort = (field: SortField) => {

    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortOrder("asc")
    }

  }

  return {
    tools: paginatedTools,
    search,
    setSearch,
    page,
    setPage,
    totalPages,
    sortField,
    sortOrder,
    handleSort
  }
}
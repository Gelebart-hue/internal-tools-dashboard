import { useMemo, useState } from "react"
import type { Tool } from "../types/Tool"

type SortField = "name" | "active_users_count" | "monthly_cost"

export const useToolsTable = (tools: Tool[]) => {

  const [search, setSearch] = useState("")
  const [sortField, setSortField] = useState<SortField>("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [page, setPage] = useState(1)

  const itemsPerPage = 10

  // FILTER
  const filteredTools = useMemo(() => {

    return tools.filter((tool) =>
      tool.name.toLowerCase().includes(search.toLowerCase())
    )

  }, [tools, search])

  // SORT
  const sortedTools = useMemo(() => {

    return [...filteredTools].sort((a, b) => {

      const valueA = a[sortField] ?? 0
      const valueB = b[sortField] ?? 0

      if (typeof valueA === "string" && typeof valueB === "string") {

        return sortOrder === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA)

      }

      return sortOrder === "asc"
        ? Number(valueA) - Number(valueB)
        : Number(valueB) - Number(valueA)

    })

  }, [filteredTools, sortField, sortOrder])

  // PAGINATION
  const totalPages = Math.ceil(sortedTools.length / itemsPerPage)

  const paginatedTools = useMemo(() => {

    return sortedTools.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    )

  }, [sortedTools, page])

  const handleSort = (field: SortField) => {

    if (sortField === field) {

      setSortOrder(sortOrder === "asc" ? "desc" : "asc")

    } else {

      setSortField(field)
      setSortOrder("asc")

    }

  }

  return {
    search,
    setSearch,
    page,
    setPage,
    totalPages,
    paginatedTools,
    handleSort,
    sortField,
    sortOrder
  }

}
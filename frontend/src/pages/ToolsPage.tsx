import { useMemo, useState, useEffect } from "react"

import ToolsTable from "../components/tools/ToolsTable"
import ToolsFilters from "../components/tools/ToolsFilters"
import AddToolModal from "../components/tools/AddToolModal"

import { useTools } from "../hooks/useTools"
import { useToolsTable } from "../hooks/useToolsTable"

import type { Tool } from "../types/Tool"
import ToolDetailsModal from "../components/tools/ToolDetailsModal"

interface ToolsPageProps {
  search: string
}

export default function ToolsPage({ search }: ToolsPageProps) {

  const { tools: apiTools, loading } = useTools()

  const [tools, setTools] = useState<Tool[]>([])
  const [department, setDepartment] = useState("")
  const [status, setStatus] = useState("")
  const [category, setCategory] = useState("")
  const [openModal, setOpenModal] = useState(false)
  const [page, setPage] = useState(1)
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null)

  const ITEMS_PER_PAGE = 10

  useEffect(() => {
    setTools(apiTools)
  }, [apiTools])

  const {
    sortField,
    sortOrder,
    handleSort
  } = useToolsTable(tools)

  // Création d'outil (state local)

  const handleCreate = (newTool: Partial<Tool>) => {

    const tool: Tool = {
      id: Date.now(),

      name: newTool.name ?? "New Tool",
      description: newTool.description ?? "",

      category: newTool.category ?? "Other",
      owner_department: newTool.owner_department ?? "IT",

      vendor: newTool.vendor ?? "Unknown",

      website_url: newTool.website_url ?? "",
      icon_url: newTool.icon_url ?? "",

      status: "active",

      active_users_count: 0,

      monthly_cost: Number(newTool.monthly_cost) || 0,
      previous_month_cost: 0,

      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString().slice(0, 10)
    }

    setTools(prev => [tool, ...prev])

  }

  // Filtrage

  const filteredTools = useMemo(() => {

    let result = tools

    if (search) {
      result = result.filter(tool =>
        tool.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (department) {
      result = result.filter(tool => tool.owner_department === department)
    }

    if (status) {
      result = result.filter(tool => tool.status === status)
    }

    if (category) {
      result = result.filter(tool => tool.category === category)
    }

    return result

  }, [tools, search, department, status, category])

  // Pagination

  const totalPages = Math.ceil(filteredTools.length / ITEMS_PER_PAGE)

  const paginatedTools = filteredTools.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  const handleToggleStatus = (tool: Tool) => {

  setTools(prev =>
    prev.map(t =>
      t.id === tool.id
        ? {
            ...t,
            status: t.status === "active" ? "disabled" : "active"
          }
        : t
    )
  )

}

  return (

    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-2xl font-bold text-white">
            Tools Catalog
          </h1>

          <p className="text-gray-400 text-sm">
            Manage and monitor internal tools
          </p>

        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Add Tool
        </button>

      </div>

      {/* Filters */}

      <ToolsFilters
        tools={tools}
        department={department}
        setDepartment={setDepartment}
        status={status}
        setStatus={setStatus}
        category={category}
        setCategory={setCategory}
      />

      {/* Table */}

      <ToolsTable
        tools={paginatedTools}
        loading={loading}
        handleSort={handleSort}
        sortField={sortField}
        sortOrder={sortOrder}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        onView={(tool) => setSelectedTool(tool)}
        onToggleStatus={handleToggleStatus}
      />

      {/* Modal création */}

      <AddToolModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onCreate={handleCreate}
      />

      <ToolDetailsModal
        tool={selectedTool}
        onClose={() => setSelectedTool(null)}
      />

    </div>

  )
}
import { useState, useMemo } from "react"
import ToolsTable from "../components/tools/ToolsTable"
import ToolsFilters from "../components/tools/ToolsFilters"
import AddToolModal from "../components/tools/AddToolModal"

import { useTools } from "../hooks/useTools"
import { useToolsTable } from "../hooks/useToolsTable"

export default function ToolsPage() {

  const { tools, loading, error } = useTools()

  const [search, setSearch] = useState("")
  const [department, setDepartment] = useState("")
  const [status, setStatus] = useState("")
  const [category, setCategory] = useState("")

  const [openModal, setOpenModal] = useState(false)

  /* FILTER + SEARCH */

  const filteredTools = useMemo(() => {

    return tools.filter((tool) => {

      const matchesSearch =
        tool.name.toLowerCase().includes(search.toLowerCase())

      const matchesDepartment =
        !department || tool.owner_department === department

      const matchesStatus =
        !status || tool.status === status

      const matchesCategory =
        !category ||
        tool.category.toLowerCase().includes(category.toLowerCase().trim())

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesStatus &&
        matchesCategory
      )

    })

  }, [tools, search, department, status, category])

  /* TABLE LOGIC (sort + pagination) */

  const {
    tools: paginatedTools,
    page,
    setPage,
    totalPages,
    sortField,
    sortOrder,
    handleSort
  } = useToolsTable(filteredTools)

  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-8">
        <p className="text-red-400">{error}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      <div className="max-w-7xl mx-auto p-8 space-y-6">

        {/* HEADER */}
        <div className="flex items-center justify-between">

          <h1 className="text-2xl font-bold">
            Tools Catalog
          </h1>

          <button
            onClick={() => setOpenModal(true)}
            className="
              px-4 py-2
              bg-purple-600
              rounded-lg
              hover:bg-purple-500
              transition
            "
          >
            + Add Tool
          </button>

        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setPage(1)
          }}
          className="
            w-full
            max-w-md
            px-4
            py-2
            bg-gray-900
            border
            border-gray-800
            rounded-lg
            focus:outline-none
            focus:border-purple-500
          "
        />

        {/* FILTERS */}
        <ToolsFilters
          tools={tools}
          department={department}
          setDepartment={setDepartment}
          status={status}
          setStatus={setStatus}
          category={category}
          setCategory={setCategory}
        />

        {/* TABLE */}

        {loading ? (

          <div className="text-gray-400">
            Loading tools...
          </div>

        ) : paginatedTools.length === 0 ? (

          <div className="text-gray-400">
            No tools found
          </div>

        ) : (

          <ToolsTable
            tools={paginatedTools}
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            sortField={sortField}
            sortOrder={sortOrder}
            handleSort={handleSort}
          />

        )}

      </div>

      {/* MODAL */}
      <AddToolModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

    </div>
  )
}
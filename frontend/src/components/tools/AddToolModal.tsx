import { useState } from "react"

interface Props {
  open: boolean
  onClose: () => void
}

export default function AddToolModal({ open, onClose }: Props) {

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [cost, setCost] = useState("")

  if (!open) return null

  return (

    <div className="fixed inset-0 flex items-center justify-center bg-black/60">

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-full max-w-md">

        <h2 className="text-xl font-bold mb-4">
          Add New Tool
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Tool name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
          />

          <input
            type="number"
            placeholder="Monthly cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
          />

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
          >
            Cancel
          </button>

          <button
            className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-500"
          >
            Add Tool
          </button>

        </div>

      </div>

    </div>
  )
}
import { useState } from "react"

interface Props {
  open: boolean
  onClose: () => void
  onCreate: (tool: any) => void
}

export default function AddToolModal({ open, onClose, onCreate }: Props) {

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [cost, setCost] = useState("")

  if (!open) return null

  const handleSubmit = () => {

    if (!name || !category) {
      alert("All fields are required")
      return
    }

    onCreate({
      name,
      category,
      monthly_cost: Number(cost)
    })

    onClose()
  }

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-slate-900 p-6 rounded-xl w-96 space-y-4">

        <h2 className="text-lg font-semibold text-white">
          Add new tool
        </h2>

        <input
          className="w-full p-2 rounded bg-slate-800"
          placeholder="Tool name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          className="w-full p-2 rounded bg-slate-800"
          placeholder="Category"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        />

        <input
          className="w-full p-2 rounded bg-slate-800"
          placeholder="Monthly cost"
          value={cost}
          onChange={(e)=>setCost(e.target.value)}
        />

        <div className="flex justify-end gap-3">

          <button onClick={onClose} className="text-slate-400">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-purple-600 px-3 py-2 rounded"
          >
            Create
          </button>

        </div>

      </div>

    </div>
  )
}
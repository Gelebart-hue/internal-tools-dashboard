import type { LucideIcon } from "lucide-react"

type Props = {
  title: string
  value: string
  icon: LucideIcon
}

export default function KPICard({ title, value, icon: Icon }: Props) {

  return (

    <div className="
      bg-linear-to-br
      from-purple-500/10
      to-blue-500/10
      p-6
      rounded-xl
      border
      border-gray-800
      hover:border-purple-500
      hover:scale-[1.02]
      transition-all
      duration-200
    ">

      <div className="flex justify-between items-center mb-3">

        <p className="text-gray-400 text-sm">
          {title}
        </p>

        <Icon size={18} className="text-purple-400" />

      </div>

      <h2 className="text-2xl font-bold text-white truncate">
        {value}
      </h2>

    </div>

  )
}
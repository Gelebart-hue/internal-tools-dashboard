interface Props {
  status: string
}

export default function StatusBadge({ status }: Props) {

  const styles = {
    active: "bg-green-500/20 text-green-400",
    unused: "bg-yellow-500/20 text-yellow-400",
    expiring: "bg-red-500/20 text-red-400",
    disabled: "bg-gray-500/20 text-gray-400"
  }

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${styles[status as keyof typeof styles]}`}>
      {status}
    </span>
  )
}
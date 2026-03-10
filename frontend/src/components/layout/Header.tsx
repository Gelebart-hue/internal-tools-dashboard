import { Bell, Menu, Search, User } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export default function Header() {

  const location = useLocation()

  const linkStyle = (path: string) =>
    `hover:text-purple-400 transition ${
      location.pathname === path ? "text-purple-400" : "text-gray-300"
    }`

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900">

      {/* LEFT */}

      <div className="flex items-center gap-8">

        <h1 className="text-xl font-bold text-white">
          TechCorp
        </h1>

        <nav className="hidden md:flex gap-6">

          <Link to="/" className={linkStyle("/")}>
            Dashboard
          </Link>

          <Link to="/tools" className={linkStyle("/tools")}>
            Tools
          </Link>

          <Link to="/analytics" className={linkStyle("/analytics")}>
            Analytics
          </Link>

        </nav>

      </div>

      {/* SEARCH */}

      <div className="hidden md:flex items-center bg-gray-800 rounded-lg px-3 py-2 w-72">

        <Search size={16} className="text-gray-400 mr-2" />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm text-white w-full"
        />

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-4">

        <div className="relative">

          <Bell size={20} className="text-gray-300" />

          <span className="absolute -top-1 -right-1 bg-purple-500 text-xs px-1 rounded-full">
            3
          </span>

        </div>

        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
          <User size={16} />
        </div>

        <Menu className="md:hidden text-gray-300" />

      </div>

    </header>
  )
}
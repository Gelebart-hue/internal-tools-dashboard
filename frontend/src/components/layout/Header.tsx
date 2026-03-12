import { Bell, Menu, Search, User, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

interface HeaderProps {
  search: string
  setSearch: (value: string) => void
}

export default function Header({ search, setSearch }: HeaderProps) {

  const location = useLocation()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const linkStyle = (path: string) =>
    `transition hover:text-purple-400 ${
      location.pathname === path
        ? "text-purple-400"
        : "text-gray-300"
    }`

  const placeholder =
    location.pathname === "/tools"
      ? "Search in tools catalog..."
      : location.pathname === "/analytics"
      ? "Search metrics, insights..."
      : "Search tools..."

  return (
    <header className="border-b border-gray-800 bg-gray-900">

      <div className="flex items-center justify-between px-6 py-4">

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

            <Link to="/settings" className={linkStyle("/settings")}>
              Settings
            </Link>

          </nav>

        </div>

        {/* SEARCH */}

        <div className="hidden md:flex items-center bg-gray-800 rounded-lg px-3 py-2 w-72">

          <Search
            size={16}
            className="text-gray-400 mr-2"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder}
            className="bg-transparent outline-none text-sm text-white w-full"
          />

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-5">

          {/* Notifications */}

          <div className="relative cursor-pointer">

            <Bell
              size={20}
              className="text-gray-300 hover:text-white transition"
            />

            <span className="absolute -top-1 -right-1 bg-purple-500 text-xs px-1.5 rounded-full">
              3
            </span>

          </div>

          {/* USER MENU */}

          <div className="relative">

            <div
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center cursor-pointer"
            >
              <User size={16} />
            </div>

            {userMenuOpen && (

              <div className="absolute right-0 mt-3 w-40 bg-gray-900 border border-gray-800 rounded-lg shadow-lg">

                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800">
                  Profile
                </button>

                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800">
                  Settings
                </button>

                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800 text-red-400">
                  Logout
                </button>

              </div>

            )}

          </div>

          {/* MOBILE MENU */}

          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen
              ? <X size={22} />
              : <Menu size={22} />
            }
          </button>

        </div>

      </div>

      {/* MOBILE NAV */}

      {mobileOpen && (

        <div className="md:hidden border-t border-gray-800 bg-gray-900">

          <div className="flex flex-col">

            <Link
              to="/"
              className="px-6 py-3 hover:bg-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              Dashboard
            </Link>

            <Link
              to="/tools"
              className="px-6 py-3 hover:bg-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              Tools
            </Link>

            <Link
              to="/analytics"
              className="px-6 py-3 hover:bg-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              Analytics
            </Link>

            <Link
              to="/settings"
              className="px-6 py-3 hover:bg-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              Settings
            </Link>

          </div>

        </div>

      )}

    </header>
  )
}
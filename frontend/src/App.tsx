import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/layout/Header"
import DashboardPage from "./pages/DashboardPage"
import ToolsPage from "./pages/ToolsPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import SettingsPage from "./pages/SettingsPage"
import { useState } from "react"

function App() {

  const [search, setSearch] = useState("")

  return (
    <BrowserRouter>

      <div className="min-h-screen bg-gray-950 text-white">

        <Header search={search} setSearch={setSearch} />

        <main className="p-6">
          <Routes>

            <Route
              path="/"
            element={<DashboardPage search={search} />}
            />

            <Route
              path="/tools"
              element={<ToolsPage search={search} />}
            />

            <Route
              path="/analytics"
              element={<AnalyticsPage search={search} />}
            />

            <Route path="/settings" element={<SettingsPage />} />

          </Routes>
        </main>

      </div>

    </BrowserRouter>
  )
}

export default App
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/layout/Header"
import DashboardPage from "./pages/DashboardPage"
import ToolsPage from "./pages/ToolsPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import SettingsPage from "./pages/SettingsPage"

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-gray-950 text-white">

        <Header />

        <main className="p-6">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>

      </div>

    </BrowserRouter>
  )
}

export default App
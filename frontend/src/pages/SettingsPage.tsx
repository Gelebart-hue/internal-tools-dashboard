export default function SettingsPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <form className="space-y-4">
        <label className="block text-gray-400">Theme</label>
        <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2">
          <option value="dark">Dark Mode</option>
          <option value="light">Light Mode</option>
        </select>
        {/* Ajoute d'autres paramètres ici */}
        <button type="submit" className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-500">
          Save Changes
        </button>
      </form>
    </div>
  )
}
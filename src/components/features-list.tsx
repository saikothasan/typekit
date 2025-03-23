export function FeaturesList() {
  return (
    <div className="bg-[#f9e9e7] border border-[#f5d4ce] rounded-md p-4">
      <h2 className="text-center font-bold mb-4">FEATURES</h2>
      <ul className="space-y-4 text-sm">
        <li className="flex">
          <span className="text-[#ff5c39] mr-2">•</span>
          <span>Handy keyboard shortcuts that take zero time to learn</span>
        </li>
        <li className="flex">
          <span className="text-[#ff5c39] mr-2">•</span>
          <span>Switch between languages while typing</span>
        </li>
        <li className="flex">
          <span className="text-[#ff5c39] mr-2">•</span>
          <span>Rich-text editor with curly quotes and other typographical symbols</span>
        </li>
        <li className="flex">
          <span className="text-[#ff5c39] mr-2">•</span>
          <span>Your text is automatically saved in case you exit by accident</span>
        </li>
      </ul>
    </div>
  )
}


export function StatsBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 p-2 text-xs overflow-x-auto whitespace-nowrap">
      <div className="flex items-center gap-6 px-4">
        <div>
          <span className="text-gray-400">US NATIONAL DEBT</span>
          <span className="ml-2">$38,197,518,998,407</span>
          <span className="ml-1 text-red-500">↑</span>
        </div>
        <div>
          <span className="text-gray-400">D.O.G.E PRICE</span>
          <span className="ml-2 text-green-500">$0.1576 +5.71%</span>
        </div>
        <div>
          <span className="text-gray-400">D.O.G.E MARKET CAP</span>
          <span className="ml-2">$150.44M</span>
          <span className="ml-1 text-green-500">+5.71%</span>
        </div>
        <div>
          <span className="text-gray-400">D.O.G.E VOL 24HR</span>
          <span className="ml-2">$47.30M</span>
          <span className="ml-1 text-green-500">+0.00%</span>
        </div>
        <div>
          <span className="text-gray-400">D.O.G.E HOLDERS</span>
          <span className="ml-2">28,641</span>
        </div>
      </div>
    </div>
  )
}


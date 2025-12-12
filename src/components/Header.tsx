import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm w-full">
      {/* Top Banner - Christmas Promotion */}
      <div className="bg-[#01206A] text-white text-left py-2 text-sm">
        <Link href="#" className="hover:underline ml-6">
          Get more. Gift more. Order by noon EST on 12/17/25 to get it before Christmas. Shop Now &gt;
        </Link>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200 w-full">
        <div className="w-full px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Store Selector & Logo */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center">
                <div className="bg-[#01206A] text-white px-4 py-2 rounded font-bold text-xl">
                  Lowe&apos;s
                </div>
              </Link>
              <button className="flex items-center gap-2 text-sm hover:bg-gray-100 px-3 py-2 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="font-medium">Presque Isle Lowe&apos;s</span>
                <span className="text-red-600 font-bold">Closed</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <input
                  type="search"
                  placeholder="What can we help you find?"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
              <button className="flex flex-col items-center text-xs hover:text-blue-600">
                <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>MyLowe&apos;s</span>
              </button>

              <button className="flex flex-col items-center text-xs hover:text-blue-600">
                <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Sign In</span>
              </button>

              <button className="flex flex-col items-center text-xs hover:text-blue-600 relative">
                <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white border-b border-gray-200 w-full">
        <div className="w-full px-6">
          <div className="flex items-center gap-1 overflow-x-auto">
            <button className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 whitespace-nowrap font-medium">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Shop All
            </button>
            <Link href="#" className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Installations</Link>
            <Link href="#" className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Deals</Link>
            <Link href="#" className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Design & Ideas</Link>
            <Link href="#" className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Holiday Decorations</Link>
            <Link href="#" className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Appliances</Link>
            <Link href="#" className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Bathroom</Link>
            <Link href="#" className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Building Supplies</Link>
            <Link href="#" className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Flooring</Link>
            <Link href="#" className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Lighting</Link>
            <Link href="#" className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Plumbing</Link>
            <Link href="#" className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Tools</Link>
            <Link href="#" className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Doors & Windows</Link>
            <Link href="#" className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Outdoor</Link>
            <Link href="#" className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Gift Zone</Link>
          </div>
        </div>
      </nav>

      {/* Search Suggestions */}
      <div className="bg-gray-50 border-b border-gray-200 w-full">
        <div className="w-full px-6 py-3">
          <div className="flex items-center">
            <span className="text-sm text-gray-600 font-medium">Recommended Searches for You</span>
            <Link href="#" className="text-sm font-bold text-blue-600 ml-4">More Suggestions for You &gt;</Link>
          </div>
          <div className="flex gap-2 mt-2 overflow-x-auto">
            {['Refrigerator', 'Peel Stick Wallpaper', 'Snowblower', 'Lawn Mower', 'Door Interior', 'Vinyl Floor', 'Vacuum', 'Toilet', 'Klein Tool', 'Carhartt', 'Drywall', 'Plywood', 'Light Bulb', 'Vinyl Siding', 'Stove'].map((term) => (
              <button
                key={term}
                className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:border-blue-500 hover:text-blue-600 whitespace-nowrap"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}


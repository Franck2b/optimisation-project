import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'Seasonal Projects and Inspiration',
    description: 'Refresh your home for the coming season.',
    image: '/default-image.png',
    buttonText: 'Shop Now',
    buttonIcon: true
  },
  {
    title: 'How to Unclog the Main Household Drain',
    image: '/default-image.png',
    buttonText: 'Read Article',
    buttonIcon: false
  },
  {
    title: 'Create a coffee bar at home.',
    description: 'Find coffee makers and more.',
    image: '/default-image.png',
    buttonText: 'Shop Now',
    buttonIcon: true
  },
  {
    title: 'How to Lay Tile: DIY Floor Tile Installation',
    image: '/default-image.png',
    buttonText: 'Read Article',
    buttonIcon: false,
    badge: 'HOW TO'
  },
  {
    title: 'Get crafty.',
    description: 'Set up a space for creative projects.',
    image: '/default-image.png',
    buttonText: 'Shop Now',
    buttonIcon: true
  }
];

export default function RewardsAndProjectsSection() {
  return (
    <section className="bg-white w-full">
      <div className="w-full px-6 md:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Section Rewards - 1/3 */}
          <div className="lg:w-1/3">
            <div className="bg-[#003d82] text-white rounded-lg p-8 h-full flex flex-col">
              {/* Logo myLowe's Rewards */}
              <div className="flex items-center mb-8 relative">
                <div className="absolute -left-4 top-0 bg-red-600 w-8 h-12 transform -rotate-12 rounded-sm"></div>
                <div className="bg-[#9BCBEB] text-[#003d82] px-6 py-3 rounded border-4 border-white relative z-10">
                  <div className="text-sm font-bold leading-none">myLowe's</div>
                  <div className="text-2xl font-bold leading-tight">Rewards</div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Shop. Earn. Save.</h2>
              <p className="text-lg mb-8">Account benefits now include:</p>

              {/* Liste des avantages */}
              <div className="space-y-6 mb-auto">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="font-medium">Points on every eligible dollar.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                      <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                    </svg>
                  </div>
                  <p className="font-medium">Members-only free gifts and offers.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                  </div>
                  <p className="font-medium">Free Standard Shipping starting with Silver Key Status.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="font-medium">Track in-store and online purchase history.</p>
                </div>
              </div>

              {/* Bouton */}
              <div className="mt-8">
                <Link 
                  href="#"
                  className="block w-full bg-white text-[#003d82] px-6 py-3 rounded font-bold hover:bg-gray-100 transition-colors text-center"
                >
                  Sign In or Create Account
                </Link>
              </div>
            </div>
          </div>

          {/* Section Météo et Projets - 2/3 */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            {/* Météo + Explore Ideas */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Weather Forecast */}
              <div className="bg-[#003d82] text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-6">Weather Forecast Near Your Store</h3>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-[#0055a5] rounded-lg py-4 px-2">
                    <p className="font-bold mb-3 text-sm">Today</p>
                    <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <p className="text-sm font-medium">Hi: 21°</p>
                    <p className="text-sm font-medium">Lo: 11°</p>
                  </div>
                  <div className="py-4 px-2">
                    <p className="font-bold mb-3 text-sm">Sat</p>
                    <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <p className="text-sm">Hi: 24°</p>
                    <p className="text-sm">Lo: 8°</p>
                  </div>
                  <div className="py-4 px-2">
                    <p className="font-bold mb-3 text-sm">Sun</p>
                    <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <p className="text-sm">Hi: 22°</p>
                    <p className="text-sm">Lo: 5°</p>
                  </div>
                  <div className="py-4 px-2">
                    <p className="font-bold mb-3 text-sm">Mon</p>
                    <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <p className="text-sm">Hi: 17°</p>
                    <p className="text-sm">Lo: 8°</p>
                  </div>
                </div>
              </div>

              {/* Explore Ideas */}
              <div className="bg-[#EBF1FF] rounded-lg p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#2E7D32] mb-4">
                    Explore Ideas, Tips & Inspiration
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Upgrade your indoor and outdoor spaces with stylish ideas, DIY tips, and seasonal inspiration. From fresh looks to bold projects, transform every corner of your home with Lowe&apos;s.
                  </p>
                </div>
                <Link 
                  href="#"
                  className="text-blue-600 font-bold hover:underline inline-flex items-center"
                >
                  Get Inspired
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Your Project Forecast */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Your Project Forecast</h3>
              <div className="relative">
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                  {projects.map((project, index) => (
                    <div 
                      key={index}
                      className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow snap-start"
                    >
                      <div className="relative h-40">
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        {project.badge && (
                          <div className="absolute top-3 left-3 bg-[#003d82] text-white px-3 py-1 rounded font-bold text-xs">
                            {project.badge}
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-sm mb-2">{project.title}</h4>
                        {project.description && (
                          <p className="text-xs text-gray-600 mb-3">{project.description}</p>
                        )}
                        <Link 
                          href="#" 
                          className="inline-flex items-center text-blue-600 font-bold text-sm hover:underline"
                        >
                          {project.buttonIcon && (
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                          )}
                          {!project.buttonIcon && (
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                            </svg>
                          )}
                          {project.buttonText}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Bouton de navigation droite */}
                <button 
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
                  aria-label="Scroll right"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="bg-white w-full">
      {/* Barre de délimitation bleue */}
      <div className="w-full h-4 bg-[#003d82]"></div>
      
      {/* Section des services avec icônes */}
      <div className="bg-gray-50 py-8">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
            {/* Ask Mylow */}
            <Link href="#" className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center mb-3 group-hover:border-blue-600 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-base font-semibold text-[#0072CE]">Ask Mylow</span>
            </Link>

            {/* Contact Us & FAQ */}
            <Link href="#" className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center mb-3 group-hover:border-blue-600 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </div>
              <span className="text-base font-semibold text-[#0072CE]">Contact Us & FAQ</span>
            </Link>

            {/* Order Status */}
            <Link href="#" className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center mb-3 group-hover:border-blue-600 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-base font-semibold text-[#0072CE]">Order Status</span>
            </Link>

            {/* Lowe's Credit Center */}
            <Link href="#" className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center mb-3 group-hover:border-blue-600 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-base font-semibold text-[#0072CE]">Lowe&apos;s Credit Center</span>
            </Link>

            {/* Gift Cards */}
            <Link href="#" className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center mb-3 group-hover:border-blue-600 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                </svg>
              </div>
              <span className="text-base font-semibold text-[#0072CE]">Gift Cards</span>
            </Link>

            {/* Installation Services */}
            <Link href="#" className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center mb-3 group-hover:border-blue-600 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-base font-semibold text-[#0072CE]">Installation Services</span>
            </Link>

            {/* Lowe's App */}
            <Link href="#" className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center mb-3 group-hover:border-blue-600 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-base font-semibold text-[#0072CE]">Lowe&apos;s App</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Section des liens */}
      <div className="py-12">
        <div className="w-full px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* ABOUT LOWE'S */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6">ABOUT LOWE&apos;S</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Who We Are</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Careers</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Our Responsibilities</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Investors</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Newsroom</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Lowe&apos;s Suppliers</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Safety Unites Us</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Lowe&apos;s Creators</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Lowe&apos;s Brands</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Lowe&apos;s Marketplace</Link></li>
              </ul>
            </div>

            {/* STORES & SERVICES */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">STORES & SERVICES</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Find a Store</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Store Directory</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Brand Directory</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Store Services</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Subscriptions</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">DIY Workshops</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">MyLowe&apos;s Rewards Program</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Resources for Pros</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">MyLowe&apos;s Pro Rewards Program</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Site Directory</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Best Sellers</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Lowe&apos;s Rental</Link></li>
              </ul>
            </div>

            {/* CUSTOMER SERVICE */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">CUSTOMER SERVICE</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">FAQ/Contact Us</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Rebates</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Returns & Exchanges</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Pickup, Shipping & Delivery</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Special Orders</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Recalls & Product Safety</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Protection Plans</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Military Discount</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Coupons</Link></li>
              </ul>
            </div>

            {/* CONNECT WITH US */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6">CONNECT WITH US</h3>
              <div className="flex gap-14">
                <Link href="#" className="text-blue-600 hover:text-blue-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-blue-600 hover:text-blue-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-blue-600 hover:text-blue-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-blue-600 hover:text-blue-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
              </div>

              <h4 className="text-lg font-bold text-gray-800 mb-3 mt-14">PRIVACY & USE</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Terms</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Privacy Statement</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Interest-Based Ads</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Your CA Privacy Rights</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Do Not Sell/Share My Personal Information</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Limit the Use of My Sensitive Personal Information</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline text-lg">Notice of Financial Incentive/Loyalty Programs</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-50 py-6 border-t border-gray-200">
        <div className="w-full px-6 md:px-12">
          <p className="text-base text-gray-600 text-center">
            © 2025 Lowe&apos;s. All rights reserved. Lowe&apos;s and the Gable Mansard Design are registered trademarks of LF, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}


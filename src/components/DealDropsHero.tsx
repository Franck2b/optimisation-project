import Link from 'next/link';

export default function DealDropsHero() {
  return (
    <section className="bg-[#01206A] text-white py-10 md:py-12 relative overflow-hidden w-full">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1 flex flex-col md:flex-row items-start gap-6">
            <div className="border-2 border-white px-6 py-4 flex-shrink-0">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                December<br />
                <span className="text-red-500">DEAL<br/>Drops</span>
              </h2>
            </div>
            
            {/* Centered content */}
            <div className="flex flex-col items-center justify-center gap-4 text-center w-full">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
                  Shop new limited-time deals<br className="hidden md:block" /> every week.
                </h3>
                <p className="text-base md:text-lg">
                  Rewards members get free standard shipping.*
                </p>
              </div>
              
              <div>
                <Link 
                  href="#"
                  className="inline-block bg-white text-[#003d82] px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors"
                >
                  Shop Now
                </Link>
                <p className="text-xs mt-3 opacity-80">
                  *Not available in AK and HI. Exclusions & more terms apply. Visit lowes.com/ShippingTerms for details.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex-shrink-0 w-full md:w-auto">
            <div className="flex gap-4 items-end justify-end">
              <div className="relative">
                <div className="w-24 h-32 md:w-28 md:h-36 bg-[#4A9FD8] rounded-sm relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-full bg-[#6BB8E8]"></div>
                  <div className="absolute top-0 left-0 w-full h-2 bg-[#6BB8E8]"></div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="w-10 h-6 border-[3px] border-[#6BB8E8] rounded-t-full bg-transparent"></div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-32 h-44 md:w-36 md:h-52 bg-[#00C6D7] rounded-sm relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-full bg-[#36D9E6]"></div>
                  <div className="absolute top-0 left-0 w-full h-3 bg-[#36D9E6]"></div>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-8 border-[3px] border-[#36D9E6] rounded-t-full bg-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 left-0">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="absolute top-12 right-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="absolute top-4 right-20">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


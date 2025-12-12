import Link from 'next/link';
import Image from 'next/image';

const giftsByPrice = [
  { title: '$10 & Under', image: '/article.png' },
  { title: '$25 & Under', image: '/article.png' },
  { title: '$50 & Under', image: '/article.png' },
  { title: '$100 & Under', image: '/article.png' }
];

const giftsByInterest = [
  { title: 'For the NFL Fan', image: '/article.png' },
  { title: 'For the Outdoor Cook', image: '/article.png' },
  { title: 'For the Coffee Lover', image: '/article.png' },
  { title: 'For the Techie', image: '/article.png' }
];

export default function HolidayGifts() {
  return (
    <section className="bg-[#E5F2FA] w-full py-12">
      <div className="w-full px-6 md:px-12">
        {/* Titre principal avec étoiles décoratives */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003d82] inline-flex items-center justify-center gap-3">
            <span className="flex gap-1">
              <span className="text-blue-500 text-xl">✦</span>
              <span className="text-blue-600 text-2xl">✦</span>
              <span className="text-blue-500 text-xl">✦</span>
            </span>
            Check off your holiday list the easy way.
            <span className="flex gap-1">
              <span className="text-blue-500 text-xl">✦</span>
              <span className="text-blue-600 text-2xl">✦</span>
              <span className="text-blue-500 text-xl">✦</span>
            </span>
          </h2>
        </div>

        {/* Grille des 3 sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Section 1 : Gifts by Price */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-[#003d82]">Gifts by Price</h3>
              <Link href="#" className="text-blue-600 font-bold text-sm hover:underline">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {giftsByPrice.map((gift, index) => (
                <Link
                  key={index}
                  href="#"
                  className="group relative bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-32">
                    <Image
                      src={gift.image}
                      alt={gift.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 bg-white">
                    <h4 className="font-bold text-sm text-gray-800">{gift.title}</h4>
                    <p className="text-blue-600 font-bold text-xs mt-1">Shop Now</p>
                  </div>
                  {/* Étoile décorative sur certaines cartes */}
                  {index === 0 && (
                    <div className="absolute top-2 left-2 text-blue-500">
                      <span className="text-xl">✦</span>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Section 2 : Creator Holiday Picks (Centre) */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-[#003d82]">Creator Holiday Picks</h3>
            </div>
            <Link href="#" className="group block">
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-[#00A8E8] to-[#0081C9] rounded-lg overflow-hidden mb-4">
                <Image
                  src="/article.png"
                  alt="MrBeast's Top Gifts"
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay avec étoiles décoratives */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white">
                    <span className="absolute top-8 right-12 text-2xl">✦</span>
                    <span className="absolute top-6 right-20 text-4xl">✦</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">MrBeast&apos;s Top Gifts</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Check out his favorite finds, from tools to tech.
                </p>
                <span className="text-blue-600 font-bold text-sm hover:underline">
                  Shop Now
                </span>
              </div>
            </Link>
          </div>

          {/* Section 3 : Gifts by Interest */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-[#003d82]">Gifts by Interest</h3>
              <Link href="#" className="text-blue-600 font-bold text-sm hover:underline">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {giftsByInterest.map((gift, index) => (
                <Link
                  key={index}
                  href="#"
                  className="group relative bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-32">
                    <Image
                      src={gift.image}
                      alt={gift.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 bg-white">
                    <h4 className="font-bold text-sm text-gray-800">{gift.title}</h4>
                    <p className="text-blue-600 font-bold text-xs mt-1">Shop Now</p>
                  </div>
                  {/* Étoile décorative sur certaines cartes */}
                  {(index === 1 || index === 2) && (
                    <div className="absolute top-2 right-2 text-blue-500">
                      <span className="text-lg">✦</span>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


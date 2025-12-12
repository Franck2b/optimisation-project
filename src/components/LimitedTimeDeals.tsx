'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const categories = [
  'Top Picks',
  'Deals Of The Day',
  'Appliances',
  'Paint',
  'Home Decor',
  'Storage & Organization',
  'Tools',
  'Holiday Decor',
  'Bathroom',
  'Lighting & Ceiling Fans',
  'Outdoor Power Equipment'
];

const products = [
  {
    id: 1,
    price: 488.00,
    originalPrice: 699.00,
    discount: 30,
    savings: 211.00,
    rating: 4,
    reviews: 28679,
    title: 'Whirlpool 3.5-cu ft High Efficiency Agitator Small (3.5-cu ft) Top-Load Washer',
    isMemberDeal: true
  },
  {
    id: 2,
    price: 488.00,
    originalPrice: 699.00,
    discount: 30,
    savings: 211.00,
    rating: 4,
    reviews: 28679,
    title: 'Whirlpool 3.5-cu ft High Efficiency Agitator Small (3.5-cu ft) Top-Load Washer',
    isMemberDeal: true
  },
  {
    id: 3,
    price: 269.00,
    originalPrice: 419.00,
    discount: 35,
    savings: 150.00,
    rating: 4.5,
    reviews: 19478,
    title: 'Whirlpool 1.7-cu ft Over-the-Range Microwave (Fingerprint Resistant Stainless Steel)',
    isMemberDeal: true
  },
  {
    id: 4,
    price: 488.00,
    originalPrice: 699.00,
    discount: 30,
    savings: 211.00,
    rating: 4,
    reviews: 28679,
    title: 'Whirlpool 3.5-cu ft High Efficiency Agitator Small (3.5-cu ft) Top-Load Washer',
    isMemberDeal: true
  },
  {
    id: 5,
    price: 488.00,
    originalPrice: 699.00,
    discount: 30,
    savings: 211.00,
    rating: 4,
    reviews: 28679,
    title: 'Whirlpool 3.5-cu ft High Efficiency Agitator Small (3.5-cu ft) Top-Load Washer',
    isMemberDeal: true
  },
  {
    id: 6,
    price: 488.00,
    originalPrice: 699.00,
    discount: 30,
    savings: 211.00,
    rating: 4,
    reviews: 28679,
    title: 'Whirlpool 3.5-cu ft High Efficiency Agitator Small (3.5-cu ft) Top-Load Washer',
    isMemberDeal: true
  },
];

export default function LimitedTimeDeals() {
  const [activeCategory, setActiveCategory] = useState('Top Picks');

  return (
    <section className="bg-white w-full py-12">
      <div className="w-full px-6 md:px-12">
        {/* En-tête */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Shop new <span className="text-red-600">limited-time</span> deals weekly.
          </h2>
          <Link href="#" className="text-blue-600 font-bold hover:underline flex items-center gap-1">
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Menu de catégories */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille des produits */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src="/article.png"
                    alt={product.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Contenu */}
                <div className="p-4">
                  {/* Prix */}
                  <div className="mb-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    {product.savings && (
                      <p className="text-green-600 text-sm font-medium">
                        Save ${product.savings.toFixed(2)} ({product.discount}%)
                      </p>
                    )}
                  </div>

                  {/* Member Deal Badge */}
                  {product.isMemberDeal && (
                    <div className="flex items-center gap-1 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
                        Member Deal
                      </span>
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}

                  {/* Étoiles et avis */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : i < product.rating
                              ? 'text-yellow-400 fill-current opacity-50'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{product.reviews.toLocaleString()}</span>
                  </div>

                  {/* Titre du produit */}
                  <h3 className="text-sm text-gray-700 mb-4 line-clamp-3 h-16">
                    {product.title}
                  </h3>

                  {/* Bouton Add to Cart */}
                  <button className="w-full bg-white border-2 border-blue-600 text-blue-600 font-bold py-2 rounded hover:bg-blue-50 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton de navigation droite */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10 border-2 border-gray-200"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Barre de progression */}
        <div className="mt-8">
          <div className="h-1 bg-gray-200 rounded-full">
            <div className="h-full w-1/3 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


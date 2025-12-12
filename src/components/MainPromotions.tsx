import Link from 'next/link';
import Image from 'next/image';

export default function MainPromotions() {
  return (
    <section className="py-4 w-full">
      <div className="w-full px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
          {/* 40% Off Major Appliances - Image (3/4 largeur) */}
          <div className="md:col-span-3 relative w-full h-[250px] md:h-[370px]">
            <Image 
              src="/40.png" 
              alt="40% Off Major Appliances" 
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Gift Zone - Image (1/4 largeur) */}
          <div className="md:col-span-1 relative w-full h-[250px] md:h-[350px]">
            <Image 
              src="/gift.png" 
              alt="Gift Zone" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>Index
      </div>
    </section>
  );
}


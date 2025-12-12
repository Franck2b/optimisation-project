import Link from 'next/link';
import Image from 'next/image';

export default function PromoCards() {
  return (
    <section className="pt-3 pb-12 w-full">
      <div className="w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {/* 50% Off Holiday Décor */}
          <div className="relative w-full h-[280px]">
            <Image 
              src="/default-image.png" 
              alt="50% Off Holiday Décor" 
              fill
              className="object-contain"
            />
          </div>

          {/* FREE Select Tools */}
          <div className="relative w-full h-[280px]">
            <Image 
              src="/free.png" 
              alt="FREE Select Tools" 
              fill
              className="object-contain"
            />
          </div>

          {/* 30% Off Vanities */}
          <div className="relative w-full h-[280px]">
            <Image 
              src="/30.png" 
              alt="30% Off Vanities" 
              fill
              className="object-contain"
            />
          </div>

          {/* 25% Off Grills */}
          <div className="relative w-full h-[280px]">
            <Image 
              src="/25.png" 
              alt="25% Off Grills" 
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


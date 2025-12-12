import Image from 'next/image';

export default function AIAssistantBanner() {
  return (
    <section className="w-full px-6 md:px-12 py-8">
      <div className="relative w-full h-48 md:h-56 lg:h-48 rounded-lg overflow-hidden">
        <Image
          src="/banniere.png"
          alt="Mylow AI Assistant Banner"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}


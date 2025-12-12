import Header from '@/components/Header';
import PromoBanner from '@/components/PromoBanner';
import DealDropsHero from '@/components/DealDropsHero';
import MainPromotions from '@/components/MainPromotions';
import PromoCards from '@/components/PromoCards';
import RewardsAndProjectsSection from '@/components/RewardsAndProjectsSection';
import HolidayGifts from '@/components/HolidayGifts';
import AIAssistantBanner from '@/components/AIAssistantBanner';
import LimitedTimeDeals from '@/components/LimitedTimeDeals';
import PopularCategoriesSection from '@/components/PopularCategoriesSection';
import NextProjectSection from '@/components/NextProjectSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      <PromoBanner />
      
      <div className="bg-[#9BCBEB] w-full">
        <DealDropsHero />
        <MainPromotions />
        <PromoCards />
      </div>

      <RewardsAndProjectsSection />
      <HolidayGifts />
      <AIAssistantBanner />
      <LimitedTimeDeals />
      <PopularCategoriesSection />
      <NextProjectSection />
      <FooterSection />
    </main>
  );
}

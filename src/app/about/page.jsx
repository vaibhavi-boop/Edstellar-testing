// src/app/about/page.jsx (UPDATED)
import FAQSection from "../Components/FAQSection";
import { AboutFaqData } from "./AboutFaqData";
import Banner from "../Components/Banner";
import { learningStrategyData } from "../Components/BannerData";

export default function AboutPage() {
  return (
    <>
      <Banner data={learningStrategyData} />
      <main className="min-h-screen p-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FAQSection data={AboutFaqData} />
        </div>
      </main>
    </>
  );
}

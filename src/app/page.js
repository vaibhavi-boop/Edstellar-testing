import Image from "next/image";
import BannerSection from "./Components/BannerSection";
import Latest from "./Components/HomePage/Latest";
import Blogs from "./Components/HomePage/Blogs";
import { Framework } from "./Components/HomePage/Framework";
import { BusinessCase } from "./Components/HomePage/BusinessCase";
import { Instruments } from "./Components/HomePage/Instruments";
import { ProcessTimeline } from "./Components/HomePage/ProcessTImeLine";
import FAQSection from "./Components/FAQSection";
import { FaqData } from "./Components/HomePage/FaqData";

export default function Home() {
  return (
    <>
      <BannerSection />
      <Framework />
      <BusinessCase />
      <Instruments />
      <ProcessTimeline />
      <Latest />
      <Blogs />
      <FAQSection data={FaqData} />
    </>
  );
}

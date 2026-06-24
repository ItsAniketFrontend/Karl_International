import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Destinations } from "@/components/sections/Destinations";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { TestPrep } from "@/components/sections/TestPrep";
import { Universities } from "@/components/sections/Universities";
import { Insights } from "@/components/sections/Insights";
import { Counselling } from "@/components/sections/Counselling";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <WhyUs />
        <Services />
        <Testimonials />
        <TestPrep />
        <Universities />
        <Insights />
        <Counselling />
        <SocialLinks />
      </main>
      <Footer />
    </>
  );
}

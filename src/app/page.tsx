import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Destinations } from "@/components/sections/Destinations";
import { Universities } from "@/components/sections/Universities";
import { Testimonials, LanguageTestimonials } from "@/components/sections/Testimonials";
import { LanguageCoaching } from "@/components/sections/TestPrep";
import { Mbbs } from "@/components/sections/Mbbs";
import { Insights } from "@/components/sections/Insights";
import { Counselling } from "@/components/sections/Counselling";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Study Abroad Brief */}
        <Hero />
        {/* 2. Who We Are */}
        <WhoWeAre />
        {/* 3. Our Services */}
        <Services />
        {/* 4. Why Karl Konsult International? */}
        <WhyUs />
        {/* 5. Countries */}
        <Destinations />
        {/* 6. Universities */}
        <Universities />
        {/* 7. Study Abroad Testimonials */}
        <Testimonials />
        {/* 8. Language Coaching */}
        <LanguageCoaching />
        {/* 9. Language Coaching Testimonials */}
        <LanguageTestimonials />
        {/* 10. MBBS Abroad */}
        <Mbbs />
        {/* 11. Blogs */}
        <Insights />
        {/* 12. CTA Section */}
        <Counselling />
        {/* 13. Social */}
        <SocialLinks />
      </main>
      {/* 13. Quick Links + 14. Address & Contact */}
      <Footer />
      <StickyActions />
    </>
  );
}

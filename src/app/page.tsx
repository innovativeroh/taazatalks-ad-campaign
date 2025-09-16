import ContentDeliverablesBreakdown from "@/components/landing-page/ContentDeliverablesBreakdown";
import FaqSection from "@/components/landing-page/faq";
import HeroSection from "@/components/landing-page/hero";
import TestimonialsSection from "@/components/landing-page/testimonials";
import VideoAndStatsSection from "@/components/landing-page/videoAndStats";
import YourHost from "@/components/landing-page/your-host";

export default function Home() {
  return (
    <main className="bg-[#000000]">
      <HeroSection />
      <VideoAndStatsSection />
      <TestimonialsSection />
      <ContentDeliverablesBreakdown />
      <YourHost />
      <FaqSection />
    </main>
  );
}

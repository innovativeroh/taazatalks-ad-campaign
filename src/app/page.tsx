import ContentDeliverablesBreakdown from "@/components/landing-page/ContentDeliverablesBreakdown";
import FaqSection from "@/components/landing-page/faq";
import HeroSection from "@/components/landing-page/hero";
import TestimonialsSection from "@/components/landing-page/testimonials";
import VideoAndStatsSection from "@/components/landing-page/videoAndStats";
import YourHost from "@/components/landing-page/your-host";
import Script from 'next/script'
export default function Home() {
  return (
    <main className="bg-[#000000]">
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-PM2XK6K84D`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PM2XK6K84D', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <HeroSection />
      <VideoAndStatsSection />
      <TestimonialsSection />
      <ContentDeliverablesBreakdown />
      <YourHost />
      <FaqSection />
    </main>
  );
}

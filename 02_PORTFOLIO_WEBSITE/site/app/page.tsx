import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import WhoIAmSection from "@/components/WhoIAmSection";
import WhatIDoOperatingPanel from "@/components/WhatIDoOperatingPanel";
import OperatingStackSection from "@/components/OperatingStackSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
// Proof & Voices is temporarily hidden until verified quotes are approved.
// import ProofVoicesSection from "@/components/ProofVoicesSection";
import ProfessionalJourney from "@/components/ProfessionalJourney";
import HowIWorkSection from "@/components/HowIWorkSection";
import ContactCTA from "@/components/ContactCTA";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#F4F0E7]">
      <FloatingNav />

      <main>
        <HeroSection />
        <WhoIAmSection />
        <WhatIDoOperatingPanel />
        <OperatingStackSection />
        <SelectedWorkSection />
        {/* <ProofVoicesSection /> */}
        <ProfessionalJourney />
        <HowIWorkSection />
        <ContactCTA />
      </main>

      <SiteFooter />
    </div>
  );
}

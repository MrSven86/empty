import HeroSection from "@/components/HeroSection";
import AssuranceSection from "@/components/AssuranceSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import AboutSection from "@/components/AboutSection";
import ClinicsSection from "@/components/ClinicsSection";
import StaffSection from "@/components/StaffSection";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";

// Page order follows the visitor's thought sequence (Wonder File principles):
// 1. HERO — Hook: grab attention, first micro-yes, primary value proposition
// 2. ASSURANCE — Why you? Foster conclusion with 12/12 evidentials + anticipation
// 3. TREATMENTS — What do you offer? Outcome-focused, builds desire
// 4. ABOUT — Social proof reviews — safety check after desire is built
// 5. CLINICS — Where are you? Location confirmation
// 6. STAFF + APPOINTMENT — How do I book? CTA with process-level VP

const Index = () => {
  return (
    <main>
      <HeroSection />
      <AssuranceSection />
      <TreatmentsSection />
      <AboutSection />
      <ClinicsSection />
      <StaffSection />
      <AppointmentSection />
      <Footer />
    </main>
  );
};

export default Index;


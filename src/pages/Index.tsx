import FloatingNav from '@/components/FloatingNav';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Global grid background */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />
      
      {/* Navigation */}
      <FloatingNav />
      
      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;

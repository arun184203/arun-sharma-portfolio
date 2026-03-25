import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection from "./components/ContactSection";
import ExplorationSection from "./components/ExplorationSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import ScrollProgress from "./components/ScrollProgress";
import SkillsSection from "./components/SkillsSection";
import VisionSection from "./components/VisionSection";
import AboutVisionPage from "./pages/AboutVisionPage";
import ProjectsPage from "./pages/ProjectsPage";

export type PageId = "home" | "projects" | "about";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageId>("home");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <div
        className="min-h-screen"
        style={{
          background: "linear-gradient(180deg, #050611 0%, #0B1024 100%)",
          opacity: loading ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      >
        <ScrollProgress />
        <NavBar currentPage={currentPage} navigateTo={navigateTo} />
        <main>
          {currentPage === "home" && (
            <>
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <CertificatesSection />
              <ProjectsSection />
              <ExplorationSection />
              <VisionSection />
              <ContactSection />
            </>
          )}
          {currentPage === "projects" && (
            <ProjectsPage navigateTo={navigateTo} />
          )}
          {currentPage === "about" && (
            <AboutVisionPage navigateTo={navigateTo} />
          )}
        </main>
        <Footer currentPage={currentPage} navigateTo={navigateTo} />
      </div>
    </>
  );
}

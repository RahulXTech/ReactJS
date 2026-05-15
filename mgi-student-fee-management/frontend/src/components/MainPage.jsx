import HeroSlider from "./HeroSlider";
import AdmissionSection from "./AdmissionSection";
import AboutSection from "./AboutSection";
import CoursesSection from "./CoursesSection";
import StatsSection from "./StatsSection";
import NewsSection from "./NewsSection";
import Footer from "./Footer";

function MainPage() {
  return (
    <div className="ml-[240px] w-[calc(100vw-240px)]">

      <HeroSlider />
      <AboutSection />
      <CoursesSection /> 
      <StatsSection /> 
      <NewsSection />
      <AdmissionSection />
      <Footer />

    </div>
  );
}
export default MainPage;

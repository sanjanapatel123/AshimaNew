import Hero from "./components/Hero";
import LearningJourney from "./components/LearningJourney";
import LearningStyle from "./components/LearningStyle";
import Trending from "../src/components/Trending";
import FeaturedIn from "./components/FeaturedIn";
import StartLearning from "./components/StartLearning";
import DigitalProducts from "./components/DigitalProducts";
import Letmake from "./components/Letmake";
import CategoryButtons from "./components/CategoryButtons";
import Navbar from "./components/Navbar";
import "./App.css";
import CompaniesSection from "./components/CompaniesSection";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQSection";
import ReviewCards from "./components/ReviewCards";
import ModernGallery from "./components/ModernGallery";
import Explore from "./components/Explore";
import AllCourses from "./components/AllCourses";

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Hero />
      <Explore />
      <CompaniesSection />
      <Trending />
      <LearningJourney />
      <CategoryButtons />
      <DigitalProducts />
      <FeaturedIn />
      <Letmake />
      <FAQSection />
      <ReviewCards />
      <StartLearning />
      <AllCourses/>
      {/* <LearningStyle />

      <ReviewCards />
      <ModernGallery /> */}

      {/* <Footer /> */}
    </div>
  );
}
export default App;

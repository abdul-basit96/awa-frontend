import "./App.css";
import CarouselTop from "./components/carousel";
import Header from "./components/header";
import Footer from "./components/footer";
import TeachingQuran from "./components/teachingQuran";
import Testimonial from "./components/testimonial";
import SubjectCard from "./components/subject-card";
import Facilities from "./components/facilities";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselTop />
      <SubjectCard />
      <Facilities />
      <Testimonial />
      <TeachingQuran />
      <Footer />
    </div>
  );
}

export default App;

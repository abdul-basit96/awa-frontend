import "./App.css";
import CarouselTop from "./components/carousel";
import Header from "./components/header";
import Footer from "./components/footer";
import TeachingQuran from "./components/teachingQuran";
import Testimonial from "./components/testimonial";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselTop />
      <Testimonial />
      <TeachingQuran />
      <Footer />
    </div>
  );
}

export default App;

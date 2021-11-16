import "./App.css";
import CurriculumPrice from "./components/curriculum_and_pricing";
import KidsCoding from "./components/kids-coding";
import ChildLearn from "./components/child-learn-section";
import SairaVideo from "./components/saira-video-section";
import JrCarousel from "./components/JrCarousel";
import ExpertEducators from "./components/expert-educators";
import TopDiv from './components/top-divs';
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <TopDiv />
      <br />
      <KidsCoding />
      <br/>
      <ChildLearn />
      <br/>
      <br/>
      <JrCarousel/>
      <br/>
      <br/>
      <SairaVideo />
      <br/>
      <br/>
      <CurriculumPrice />
      <br/>
      <ExpertEducators />
    </div>
  );
}

export default App;

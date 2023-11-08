import {
  Hero,
  Courses,
  Achievement,
  Feedback,
  Evaluate,
  Footer,
  SliderInForTeam,
  Certification,
} from "../components";
import { AllAges } from "../atoms/all_ages";
import "../App.css";

export const PageHome = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <AllAges />
      <Achievement />
      <Evaluate />
      <SliderInForTeam />
      <Certification />
      <Feedback />
    </div>
  );
};

//   export default ;

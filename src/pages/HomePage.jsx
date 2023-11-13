import {
  Hero,
  Courses,
  Achievement,
  Feedback,
  Evaluate,
  SliderInForTeam,
} from "../components";
import { Certification } from "../components/templates/certification";
import { BrandRepresentative } from "../components/Molecules/BrandRepresentative";
import { AllAges } from "../atoms/all_ages";
import "../App.css";

export const PageHome = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <AllAges />
      <Achievement />
      <BrandRepresentative />
      <Evaluate />
      <SliderInForTeam />
      <Certification />
      <Feedback />
    </div>
  );
};

//   export default ;

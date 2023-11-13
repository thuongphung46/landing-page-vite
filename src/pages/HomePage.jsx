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
import { BrandRepresentative2 } from "../components/Molecules/BrandRepresentative2";
import { AllAges } from "../atoms/all_ages";
import "../App.css";

export const PageHome = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <AllAges />
      <Achievement />
      <BrandRepresentative2 />
      <BrandRepresentative />
      <Evaluate />
      <SliderInForTeam />
      <Certification />
      <Feedback />
    </div>
  );
};

//   export default ;

import {
  Hero,
  Courses,
  Achievement,
  Feedback,
  Evaluate,
  Footer,
  SliderInForTeam,
  Certification
} from "../components";
import "../App.css";

export const PageHome = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <Achievement />
      <SliderInForTeam />
      <Evaluate />
      <Certification/>
      <Feedback />
      <Footer />
    </div>
  );
};

//   export default ;

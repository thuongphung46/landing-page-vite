import {
  Hero,
  Navbar,
  Companies,
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
      {/* <>CTA</> */}
      <Evaluate />
      <Certification/>
      {/* <>Feedback</> */}
      <Feedback />
      <Footer />
    </div>
  );
};

//   export default ;

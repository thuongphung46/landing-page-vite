import {
  Hero,
  Navbar,
  Companies,
  Courses,
  Achievement,
  Feedback,
  CTA,
  Footer,
  SliderInForTeam,
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
      <CTA />
      {/* <>Feedback</> */}
      <Feedback />
      <Footer />
    </div>
  );
};

//   export default ;

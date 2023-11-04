import {
  Hero,
  Navbar,
  Companies,
  Courses,
  Achievement,
  Categories,
  Feedback,
  CTA,
  Footer,
  SliderInForTeam,
} from "./components";
import "./App.css";

//  {/* <>Categori</> */}  //       {/* <Categories /> */}  
// {/* <>Compani</>// <Companies /> */}
      

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <>Achievement</>
      <Achievement />
      <SliderInForTeam/>
      <>CTA</>
      <CTA />
      <>Feedback</>
      <Feedback />

      <Footer />
    </div>
  );
};

export default App;

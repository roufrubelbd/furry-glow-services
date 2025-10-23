import "animate.css";
import HomeBanner from "../HomeBanner/HomeBanner";
import Services from "../Services/Services";
import Tips from "../Tips/Tips";
import Vets from "../Vets/Vets";

const Home = () => {
  // blue-600, emerald-500, emerald-300
  
  return (
    <div className="min-h-screen bg-base-100 w-11/12 mx-auto">
      <HomeBanner />
      <Services />
      <Tips />
      <Vets />
    </div>
    
  );
};

export default Home;

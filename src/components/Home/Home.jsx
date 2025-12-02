import "animate.css";
import HomeBanner from "../HomeBanner/HomeBanner";
import Services from "../Services/Services";
import Tips from "../Tips/Tips";
import Vets from "../Vets/Vets";
import Stories from "../Stories/Stories";

const Home = () => {
  
  return (
    <div className="bg-base-100">
      <HomeBanner />
      <Services />
      <Tips />
      <Vets />
      <Stories />
    </div>
  );
};

export default Home;

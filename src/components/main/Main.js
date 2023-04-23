import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import Career from "./Career";
import EmploymentInformation from "./EmploymentInformation";
import MainInsite from "./MainInsite";
import SlideImg from "./SlideImg";
import TypeButton from "./TypeButton";
import RecommendButton from "./RecommendButton";

function Main() {
  return (
    <>
      <Header />
      <SlideImg />
      <MainInsite />
      <TypeButton />
      <RecommendButton />
      <Career />
      <EmploymentInformation />
      <Footer />
    </>
  );
}
export default Main;

import Footer from "../footer/footer";
import Header from "../header/header";
import Career from "./career";
import EmploymentInformation from "./employmentInformation";
import MainInsite from "./mainInsite";
import SlideImg from "./slideImg";
import TypeButton from "./typeButton";
import RecommendButton from "./recommendButton";

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

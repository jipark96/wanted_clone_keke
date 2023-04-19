import Footer from "../footer/footer";
import Header from "../header/header";
import Career from "./career";
import EmploymentInformation from "./employmentInformation";
import MainInsite from "./mainInsite";
import SlideImg from "./slideImg";
import TypeButton from "./typeButton";
import "./main.css";

function Main () {
    return (
        <>
        <Header />
      <SlideImg/>
      <MainInsite/>
      <TypeButton />
      <Career />
      <EmploymentInformation />
      <Footer />
        </>
    )
}
export default Main;
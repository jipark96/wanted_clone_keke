
import Career from "../components/main/Career";
import EmploymentInformation from "../components/main/EmploymentInformation";
import MainInsite from "../components/main/MainInsite";
import SlideImg from "../components/main/SlideImg";
import TypeButton from "../components/main/TypeButton";
import RecommendButton from "../components/main/RecommendButton";
import Layout from "../components/layout/Layout";


function Main() {
  return (
    <>
      <Layout>
      <SlideImg />
      <MainInsite />
      <TypeButton />
      <RecommendButton />
      <Career />
      <EmploymentInformation />
      </Layout>
    </>
  );
}
export default Main;

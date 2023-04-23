import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import TypeButton from "../main/TypeButton";
import BookMark from "./BookMark";
import CompanyCard from "./CompanyCard";
import JobSelect from "./JobSelect";

function Employment2() {
  return (
    <>
      <Header />
      <JobSelect />
      <BookMark />
      <CompanyCard />
      <TypeButton />
      <CompanyCard />
      <Footer />
    </>
  );
}

export default Employment2;

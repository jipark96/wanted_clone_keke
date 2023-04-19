import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";
import TypeButton from "../layout/main/typeButton";
import BookMark from "./bookMark";
import CompanyCard from "./companyCard";
import JobSelect from "./jobSelect";

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

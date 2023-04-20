import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";
import EmploymentCompanyCard from "./EmploymentCompanyCard";
import EmploymentContent from "./EmploymentContent";
import EmploymentDetailAside from "./EmploymentDetailAside";
import EmploymentDetailCompany from "./EmploymentDetailCompany";
import EmploymentDetailFollow from "./EmploymentDetailFollow";
import EmploymentDetailImg from "./EmploymentDetailImg";
import EmploymentDetailInfo from "./EmploymentDetailInfo";
import Warning from "./Warning";

function EmploymentDetail() {
  return (
    <>
      <Header />
      <div className="employmentDetail">
        <div className="employmentDetail_main">
          <EmploymentDetailAside />
          <EmploymentDetailImg />
          <EmploymentDetailInfo />
          <EmploymentContent />
          <EmploymentDetailCompany />
          <EmploymentDetailFollow />
          <Warning />
        </div>
        <EmploymentCompanyCard />
      </div>
      <Footer />
    </>
  );
}
export default EmploymentDetail;

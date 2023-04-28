import Layout from "../components/layout/Layout";
import EmploymentCompanyCard from "../components/employmentDetail/EmploymentCompanyCard";
import EmploymentContent from "../components/employmentDetail/EmploymentContent";
import EmploymentDetailAside from "../components/employmentDetail/EmploymentDetailAside";
import EmploymentDetailCompany from "../components/employmentDetail/EmploymentDetailCompany";
import EmploymentDetailFollow from "../components/employmentDetail/EmploymentDetailFollow";
import EmploymentDetailImg from "../components/employmentDetail/EmploymentDetailImg";
import EmploymentDetailInfo from "../components/employmentDetail/EmploymentDetailInfo";
import Warning from "../components/employmentDetail/Warning";
import { Outlet } from "react-router-dom";

function EmploymentDetail() {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}
export default EmploymentDetail;

import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";
import EmploymentDetailAside from "./EmploymentDetailAside";
import EmploymentDetailImg from "./EmploymentDetailImg";
import EmploymentDetailInfo from "./EmploymentDetailInfo";

function EmploymentDetail() {
    return (
        <>
        <Header />
        <div class="employmentDetail">
            <EmploymentDetailAside />
            <EmploymentDetailImg />
            <EmploymentDetailInfo />
        </div>
        <Footer />
        </>
    )
}
export default EmploymentDetail;
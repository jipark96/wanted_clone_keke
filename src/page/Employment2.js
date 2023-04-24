import Layout from "../components/layout/Layout";
import TypeButton from "../components/main/TypeButton";
import BookMark from "../components/employment2/BookMark";
import CompanyCard from "../components/employment2/CompanyCard";
import JobSelect from "../components/employment2/JobSelect";

function Employment2() {
  return (
    <>
      <Layout>
      <JobSelect />
      <BookMark />
      <CompanyCard />
      <TypeButton />
      <CompanyCard />
      </Layout>
    </>
  );
}

export default Employment2;

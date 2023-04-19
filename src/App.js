import { useState } from "react";
import "./App.css";
import Footer from "./components/layout/footer/footer";
import Header from "./components/layout/header/header";
import Main from "./components/layout/main/main";
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import companyData from "./data";

function App() {
  return (
    <div className="App">

      {/* <Main /> */}
    <Header />
    <JobSelect />
    <CompanyCard />


    </div>
  );
}

function JobSelect () {
  let [benefit,setBenefit] = useState(["연봉이 최고의 복지","재택근무","퇴사율 10% 이하","병력특례","업력 5년 이상","유연 근무","연봉이 최고의 복지","재택근무","연봉이 최고의 복지"])

  return (
    <>
    <div className="section1">
    <div className="section1_div1">
         <div>
            <span className="section1_span1">전체</span>
            <button className="section1_Btn">
            ∨
            </button>
            <span className="section1_span2">|</span>
            <span className="section1_span3">직군을 선택해주세요.</span>
         </div>
         <div className="section1_div2">
            <button className="section1_btn1">
                <span className="section1_btn1_span1">지역</span>
                <span className="section1_btn1_span2">한국</span>
            </button>
            <button className="section1_btn1">
                <span className="section1_btn1_span1">경력</span>
                <span className="section1_btn1_span2">전체▼
                </span>
            </button>
            <button className="section1_btn1">
                <span className="section1_btn1_span1">기술스택▼
                </span>
            </button>
            <button className="section1_btn1" style={{marginLeft: 610}}>
                <span className="section1_btn1_span1">응답률순▼

                </span>
            </button>
         </div>
    </div>
    <hr style ={{width:1060,marginTop:30}}/>

    <div className="section1_div3">
        <div className="section1_div4">
        <div className="section1_div5">
          
            <div className="jobSelect_button_start">
              <button className="jobSelect_button1">
                {'<'}
              </button>
            </div>
            <div className="jobSelect_button_end">
              <button className="jobSelect_button1">
                {'>'}
              </button>
            </div>
              {
                benefit.map((a,i) => {
                  return (
                    <button type="button" className="section1_btn2">{benefit[i]}
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                    style={{width: 16, height: 16}}/></button>
                  )
                })
              }
              

        </div>
    </div>
    </div>
</div>
<hr style={{marginTop:40}}/>
</>
  )
}


function CompanyCard () {

  let [company, setCompany] = useState(companyData)
  
  return (
  <div className="section2">
            <div className="section2_div1">
                <button className="section2_btn1">
                    <span className="section2_span1">북마크 모아보기 {'>'}</span>
                </button>
            </div>

            <ul className="section2_ul">
                {
                  company.map((a,i) => {
                    return (
                    <CompanyInfo company={company[i]} i={i} key={i} />
                    )
                  })
                }
                </ul>
        </div>
        )
}
function CompanyInfo (props) {
  return (
    <>
    <li className="section2_li">
                  <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F28689%2Fnsqn3gukqjh20dog__400_400.png&w=400&q=75"
                  className="section2_img" alt="" />
                  <div className="section2_div2">
                    <div className="section2_h2">{props.company.job}</div>
                    <div className="section2_p1">{props.company.name}</div>
                    <div className="section2_p4">{props.company.speed}</div>
                    <div className="section2_p2">{props.company.region}</div>
                    <div className="section2_p3">{props.company.compensation}</div>
                  </div>
                </li>
    </>  
    )
}


export default App;

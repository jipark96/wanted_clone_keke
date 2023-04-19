import { useState } from "react";

function MainInsite() {
    let [insite, setInsite] = useState(["거기 숫자 뒤에 사람 있어요!","태블로로 대시보드 만들기 1","태블로로 대시보드 만들기 2","태블로로 대시보드 만들기 3"])
    let [button1, setButton1] = useState(["데이터","개발","커리어고민","취업/이직","IT/기술","인간관계","라이프스타일","MD","마케팅","콘텐츠 제작","노무","브랜딩","경영/전략","리더십"])
    
    return (
      <div className="mainInsite">
        <div className="mainInsite_title">나에게 필요한 커리어 인사이트</div>
        <div className="mainInsite_cotainer">
          <div className="mainInsite_wrap">
            <div className="mainInsite_button_start">
              <button className="mainInsite_button1">
                {'<'}
              </button>
            </div>
            <div className="mainInsite_button_end">
              <button className="mainInsite_button1">
                {'>'}
              </button>
            </div>
            {
              button1.map((a,i) => {
                return (
                  <button type="button" className="mainInsite_btn">{button1[i]}</button>
                )
              })
            }
          
          </div>
          <span>
            <button className="mainInsite_button2">
            ···
            </button>
          </span>
        </div>
        <aside className="mainInsite_aside">
          <div>
          <span className="mainInsite_aside_close">&times;</span>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&w=144&q=90"
              className="mainInsite_aside_div1"
              alt=""
            ></img>
            
          </div>
          <div className="mainInsite_aside_h2">
            <div className="mainInsite_aside_h3">즐겨보는</div>
            <div className="mainInsite_aside_h3">크리에이터의 글도</div>
            <div className="mainInsite_aside_h3">추천하고 싶다면?</div>
          </div>
          <div className="mainInsite_aside_p">크리에이트 추천</div>
        </aside>
        <ul className="mainInsite_ul">
          { 
            [...Array(12)].map( (i) => {
              return (
                <Insite insite={insite[i]} key={i}/>
              )
            })
          }
          {/* {
            insite.map( (i) => {
              return (
                <Insite insite={insite[i]} key={i}/>
              )
            })
          } */}
         
        </ul>
        <div className="mainInsite_div1">
          <button className="mainInsite_btn2">더 많은 콘텐츠 보기 ∨ </button>
        </div>
      </div>
    );
  }

  function Insite () {
    return (
      <>
      <li className="mainInsite_li2">
            <img
              src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FeyW6%2Fimage%2F1Vg4cW7sgrY6HgRkkosXiE9PDV8.png&w=750&q=100"
              className="mainInsite_li"
              alt=""
            />
            <div className="mainInsite_li_div">
              <div className="mainInsite_li_div1">거기 숫자 뒤에 사람 있어요!</div>
              <div className="mainInsite_li_div2">
                요즘 자기네 회사는 데이터 드리븐 UX(Data Driven UX)를 활용한다는
                이야기를 종종 듣곤 합니다. 막상 깊이 들어보면 A/B 테스트나 지표를
                보고 의사결정을 하다 보니 확신이 생긴다고는 하는데 … 이야기를 듣다
                보면 정작 그 숫자를 제대로 ‘이해’하고 쓰는지 의문이 들더군요 여기
                아주 소소하지만 이해하기 쉬운 예를 하나 들어드릴게요. 십여 년
              </div>
              <div>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
                  className="mainInsite_li_div3"
                  alt=""
                ></img>
                <span className="mainInsite_li_span">Aiden</span>
              </div>
            </div>
          </li>
          </>
    )
  }

  export default MainInsite;
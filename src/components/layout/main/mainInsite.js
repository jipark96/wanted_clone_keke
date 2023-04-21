import { useState } from "react";
import { insiteData } from "../../../data";
import Insite from "./Insite";

function MainInsite() {
    let [insite, setInsite] = useState(insiteData)
    let [button1, setButton1] = useState(["데이터","개발","커리어고민","취업/이직","IT/기술","인간관계","라이프스타일","MD","마케팅","콘텐츠 제작","노무","브랜딩","경영/전략","리더십"])
    let [index, setIndex] = useState(0)
    let [isClicked, setIsClicked] = useState(false);

    const prevClick = () => {
      if (index > 0) { // index가 0보다 크면 index 값을 1 감소
        setIndex(index - 1)
      }
    }
    
    const nextClick = () => {
      if (index < button1.length) { // index가 button1 배열의 길이보다 작으면 index 값을 1 증가
        setIndex(index + 1)
      }
    }
    
    const handleClick = () => {
      setIsClicked(true);
    }
    
    return (
      <div className="mainInsite">
        <div className="mainInsite_title">나에게 필요한 커리어 인사이트</div>
        <div className="mainInsite_cotainer">
          <div className="mainInsite_wrap">
            <div className="mainInsite_button_start">
              <button className="mainInsite_button1" onClick={prevClick}>
                {'<'}
              </button>
            </div>
            <div className="mainInsite_button_end">
              <button className="mainInsite_button1" onClick={nextClick}>
                {'>'}
              </button>
            </div>
            { /* button1 배열의 일부를 잘라서 출력*/
              button1.slice(index, index + button1.length).map((a,i) => {
                return (
                  <button type="button" className="mainInsite_btn">{button1[i + index]}</button>
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
            insite.map((a, i) => {
              return (
                <Insite insite={insite[i]}/>
              )
            })
          }
        </ul>

        <div className="mainInsite_div1">
        {isClicked && (<ul className="mainInsite_ul">
    {insite.slice(0, insite.length/2).map((a, i) => {
      return <Insite insite={insite[i]} />;
    })}
    </ul>
    )}
  <button className="mainInsite_btn2" onClick={handleClick}>더 많은 콘텐츠 보기 ∨ </button>
</div>
      </div>
    );
  }



  export default MainInsite;
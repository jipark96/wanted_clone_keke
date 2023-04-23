import { useState } from "react";
import { careerData } from "../../data";

function Career () {

    let [careerImg, setCareerImg] = useState(careerData);
    let [index, setIndex] = useState(0);

    const prevClick = () => {
      if (index > 0) {
          setIndex(index-1);
      } else {
        setIndex(careerImg.length-1);
      }
    }
    const nextClick = () => {
      if(index < careerImg.length -1) {
        setIndex(index+1)
      } else {
        setIndex(0);
      }
    }

    return (
      <>
      <div className="career">
          <div className="career_div1">
            <div className="career_div2">
              <button className="career_btn1" onClick={prevClick}>
              <span>{'<'}</span>
              </button>
              <div className="career_title">
                  <h2 className="career_h2">커리어 성장을 위한 맞춤 이벤트</h2>
                  <div className="career_a">이벤트 전체보기 {'>'} </div>
              </div>
              <button className="career_btn2" onClick={nextClick}>
                <span>{'>'}</span>
              </button>
            </div>
            <div className="career_wrap">

              {
                careerImg.slice(index, index + careerImg.length).map((data, i) => {
                  return (
                    <div>
                    <img src={data.img}
                className="career_item" 
                alt=""/>
                <div className="career_a2">{data.title}</div>
                <div className="career_h3">{data.content}</div>
                </div>
                  )
                }) 
              }

            </div>
            </div>
        </div>
        <hr style={{width:1060, marginTop:80}}/>
        </>
    )
  }
  export default Career;
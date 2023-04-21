import { useState } from "react";
import { slideImgData } from "../../../data";

function SlideImg() {
  let [slideImg, setSlideImg] = useState(slideImgData);
  let [index, setIndex] = useState(0)

  const prevClick = () => {
    if (index > 0) { // index가 0보다 크면 index 값을 1 감소
      setIndex(index - 1)
    } else { // 첫 번째 이미지에서 왼쪽 버튼 클릭 시, 마지막 이미지로 이동
      setIndex(slideImg.length - 1);
    }
  }
  
  const nextClick = () => {
    if (index < slideImg.length-1) { // index가 button1 배열의 길이보다 작으면 index 값을 1 증가
      setIndex(index + 1)
    } else { // 마지막 이미지에서 오른쪽 버튼 클릭 시, 첫 번째 이미지로 이동
      setIndex(0);
    }
  }

    return (
      <div className="slideImg">
          <button type="button" className="slideImg_btn1" onClick={prevClick}>
          {'<'}
          </button>
          <button type="button" className="slideImg_btn2" onClick={nextClick}>
          {'>'}
          </button>
        <div className="slideImg_container">
          {
            slideImg.slice(index, index + slideImg.length).map((data,i) => {
              return (
                <div className="slideImg_wrap">
            <img
              className="slideImg_img"
              src={data.img}
              alt=""
            />
            <div className="slideImg_div3">
              <div className="slideImg_div4">
                <div className="slideImg_p1">{data.title}</div>
                <div className="slideImg_p2">
                  {data.content}
                </div>
              </div>
              <div className="slideImg_div5">
                <div className="slideImg_p3">바로가기 </div>
              </div>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
    );
  }
  
  export default SlideImg;
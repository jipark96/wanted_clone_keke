import { useState } from "react";
import { slideImgData } from "../../../data";

function SlideImg() {
  let [slideImg, setSlideImg] = useState(slideImgData);
  

    return (
      <div className="slideImg">
          <button type="button" className="slideImg_btn1">
          {'<'}
          </button>
          <button type="button" className="slideImg_btn2">
          {'>'}
          </button>
        <div className="slideImg_container">
          {
            slideImg.map((data,i) => {
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
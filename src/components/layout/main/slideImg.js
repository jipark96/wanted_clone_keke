import { useState } from "react";
import { slideImgData } from "../../../data";

function SlideImg() {
  let [slideImg, setSlideImg] = useState(slideImgData);

    return (
      <div className="slideImg">
        <div className="slideImg_div1" onclick="">
          <svg className="slideImg_svg" viewBox="0 0 18 18">
            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
          </svg>
        </div>
        <div className="slideImg_div2" onclick="">
          <svg className="slideImg_svg" viewBox="0 0 18 18">
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </div>
        <div className="slideImg_container">
          {
            slideImg.map((data) => {
              return (
                <div className="slideImg_wrap">
            <img
              className="slideImg_img"
              src={data.img}
              alt=""
            ></img>
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
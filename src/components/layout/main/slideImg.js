function SlideImg() {
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
          <div id="first_item" className="slideImg_wrap">
            <img
              className="slideImg_img"
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1993%2F16ebbe65.thumb_1006_280.jpg&w=1060&q=100"
              alt=""
            ></img>
            <div className="slideImg_div3">
              <div className="slideImg_div4">
                <div className="slideImg_p1">프리온보딩 프론트엔드 인턴십</div>
                <div className="slideImg_p2">
                  기업이 진짜 원하는 프론트엔드 주니어
                </div>
              </div>
              <div className="slideImg_div5">
                <div className="slideImg_p3">바로가기 </div>
              </div>
            </div>
          </div>
          <div className="slideImg_wrap">
            <img
              className="slideImg_img"
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2011%2F982a3738.jpg&w=1060&q=100"
              alt=""
            ></img>
            <div className="slideImg_div3">
              <div className="slideImg_div4">
                <div className="slideImg_p1">프리온보딩 프론트엔드 인턴십</div>
                <div className="slideImg_p2">
                  기업이 진짜 원하는 프론트엔드 주니어
                </div>
              </div>
              <div className="slideImg_div5">
                <div className="slideImg_p3">바로가기 </div>
              </div>
            </div>
          </div>
          <div className="slideImg_wrap">
            <img
              className="slideImg_img"
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2002%2F68e95300.jpg&w=1060&q=100"
              alt=""
            ></img>
            <div className="slideImg_div3">
              <div className="slideImg_div4">
                <div className="slideImg_p1">프리온보딩 프론트엔드 인턴십</div>
                <div className="slideImg_p2">
                  기업이 진짜 원하는 프론트엔드 주니어
                </div>
              </div>
              <div className="slideImg_div5">
                <div className="slideImg_p3">바로가기 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SlideImg;
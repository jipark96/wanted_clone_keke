import "./header.module.css";

function Header() {
  return (
    <div className="header">
      <div className="header_wrap">
        <div className="header_content">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=17&q=75"
            className="header_img1"
            alt=""
          ></img>
          <div className="header_p1">wanted</div>
        </div>
        <span className="header_ul">
          <div className="header_li">채용</div>
          <div className="header_li">이벤트</div>
          <div className="header_li">직군별 연봉</div>
          <div className="header_li">이력서</div>
          <div className="header_li">프리랜서</div>
          <div className="header_li">AI 합격예측</div>
        </span>
        <span className="header_span">
          <div className="header_li2">
            <img
              src={process.env.PUBLIC_URL + "/search.png"}
              className="header_img2"
              alt=""
            />
          </div>
          <div className="header_li3">회원가입/로그인</div>
          <div className="header_li4"></div>
          <div className="header_li5">기업 서비스</div>
        </span>
      </div>
    </div>
  );
}

export default Header;

import { useState } from "react";
import "./header.module.css";
import { socialData } from "../../../data";

function Header() {
  let [loginModal, setLoginModal] = useState(false);
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
          <div
            className="header_li3"
            onClick={() => {
              setLoginModal(!loginModal);
            }}
          >
            회원가입/로그인
          </div>
          {loginModal && (
            <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
          )}
          <div className="header_li4"></div>
          <div className="header_li5">기업 서비스</div>
        </span>
      </div>
    </div>
  );
}

function LoginModal(props) {
  let [social, setSocial] = useState(socialData);
  let [email, setEmail] = useState("");
  let [isEmailValid, setIsEmailValid] = useState(false);

  const validEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="loginModal">
      <div className="loginModal_content">
        <span
          className="loginModal_close"
          onClick={() => {
            props.setLoginModal(false);
          }}
        >
          &times;
        </span>
        <h1 className="loginModal_h1">wanted</h1>

        <div className="loginModal_div1">
          <h2 className="loginModal_h2">직장인을 위한</h2>
          <h2 className="loginModal_h2">커리어 플랫폼, 원티드!</h2>
          <p className="loginModal_p" style={{ marginTop: 20 }}>
            커리어 성장과 행복을 위한 여정
          </p>
          <p className="loginModal_p">지금 원티드에서 시작하세요.</p>
        </div>
        <div className="loginModal_div2">
          <span className="loginModal_span">이메일</span>
        </div>
        <input
          type="email"
          className={`loginModal_input ${isEmailValid ? "" : "invalid"}`}
          placeholder="이메일을 입력해주세요."
          onChange={(e) => {
            setEmail(e.target.value);
            setIsEmailValid(validEmail(e.target.value));
          }}
        />
        <p
          class="loginModal_email_error"
          style={{ display: isEmailValid ? "none" : "block" }}
        >
          유효한 이메일 주소를 입력하세요.
        </p>
        <button
          type="button"
          className={`loginModal_button ${isEmailValid ? "active" : ""}`}
          disabled={!isEmailValid}
        >
          <span className="loginModal_span2">이메일로 계속하기</span>
        </button>

        <div className="loginModal_div3">또는</div>
        <div className="loginModal_div4">
          {social.map((item, i) => {
            return (
              <button className="loginModal_button1">
                <span>
                  <img src={item.img} class="loginModal_img" alt="" />
                </span>
                <p className="loginModal_p1">{item.name}</p>
              </button>
            );
          })}
        </div>
        <div className="loginModal_div5">
          <p className="loginModal_p2">계정을 잊으셨나요? {">"}</p>
        </div>
        <hr style={{ marginTop: 30 }} />
        <div className="loginModal_div6">
          <p className="loginModal_p3">이용약관</p>
          <p className="loginModal_p4">개인정보처리방침</p>
        </div>
        <p className="loginModal_p5">© Wantedlab, Inc.</p>
        <div className="loginModal_div7">
          <div className="loginModal_div8">
            <img
              src="https://static.wanted.co.kr/images/wantedoneid/ico_KR.svg"
              className="loginModal_img1"
              alt=""
            />
            <div className="loginModal_div9">
              <select className="loginModal_selct">
                <option value="Ko" selected>
                  한국
                </option>
                <option value="En">English</option>
                <option value="Ja">日本語</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

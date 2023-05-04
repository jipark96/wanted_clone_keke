import { useState } from "react";
import "./Header.module.css";

import { Link, Navigate, useNavigate } from "react-router-dom";
import LoginModal from "../../modal/LoginModal";
import JoinModal from "../../modal/JoinModal";
import PasswordModal from "../../modal/PasswordModal";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // isLoggedIn 상태 관리
  let [loginModal, setLoginModal] = useState(false);
  let [joinModal, setJoinModal] = useState(false);
  let [email, setEmail] = useState("");
  let [passwordModal, setPasswordModal] = useState(false);
  let [headerLi, setHeaderLi] = useState([
    "채용",
    "이벤트",
    "직군별 연봉",
    "이력서",
    "프리랜서",
    "AI 합격예측",
  ]);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="header">
      <div className="header_wrap">
        <div className="header_content">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=17&q=75"
            className="header_img1"
            alt=""></img>
          <div
            className="header_p1"
            onClick={() => {
              navigate("/");
            }}>
            wanted
          </div>
        </div>
        <span className="header_ul">
          {headerLi.map((a, i) => {
            return <div className="header_li">{headerLi[i]}</div>;
          })}
        </span>
        <span className="header_span">
          <div className="header_li2">
            <img
              src={process.env.PUBLIC_URL + "/search.png"}
              className="header_img2"
              alt=""
              onClick={() => {
                navigate("/search");
              }}
            />
          </div>
          {isLoggedIn ? (
            <>
              <span className="header_profile"></span>
              <div className="header_li3" onClick={handleLogout}>
                로그아웃
              </div>
            </>
          ) : (
            <div
              className="header_li3"
              onClick={() => {
                setLoginModal(!loginModal);
              }}>
              회원가입/로그인
            </div>
          )}

          {loginModal && (
            <LoginModal
              loginModal={loginModal}
              setLoginModal={setLoginModal}
              joinModal={joinModal}
              setJoinModal={setJoinModal}
              setEmail={setEmail}
              email={email}
              passwordModal={passwordModal}
              setPasswordModal={setPasswordModal}
            />
          )}
          {joinModal && (
            <JoinModal
              joinModal={joinModal}
              setJoinModal={setJoinModal}
              email={email}
              setEmail={setEmail}
            />
          )}
          {passwordModal && (
            <PasswordModal
              email={email}
              setEmail={setEmail}
              setLoginModal={setLoginModal}
              passwordModal={passwordModal}
              setPasswordModal={setPasswordModal}
              setIsLoggedIn={setIsLoggedIn}
            />
          )}

          <div className="header_li4"></div>
          <div className="header_li5">기업 서비스</div>
        </span>
      </div>
    </div>
  );
}

export default Header;

import { useState } from "react";
import "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LoginModal from "../../modal/LoginModal";
import JoinModal from "../../modal/JoinModal";
import PasswordModal from "../../modal/PasswordModal";
import { setJoinModal, setLoginModal, setPasswordModal } from "../../../store";
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // isLoggedIn 상태 관리
  let [email, setEmail] = useState("");

  const loginModal = useSelector((state) => state.loginModal);
  const joinModal = useSelector((state) => state.joinModal);

  const dispatch = useDispatch();

  const handleLoginModal = (state) => {
    dispatch(setLoginModal(state));
  };
  const handleJoinModal = (state) => {
    dispatch(setJoinModal(state));
  };

  const passwordModal = useSelector((state) => state.passwordModal);
  const handlePasswordModal = (state) => {
    dispatch(setPasswordModal(state));
  };
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
          <div
            className="header_li"
            onClick={() => {
              navigate("/employment2");
            }}>
            채용
          </div>
          <div className="header_li">커리어</div>
          <div
            className="header_li"
            onClick={() => {
              navigate("/event");
            }}>
            이벤트
          </div>

          <div className="header_li">이력서</div>
          <div className="header_li">커뮤니티</div>
          <div className="header_li">프리랜서</div>
          <div className="header_li">AI 합격예측</div>
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
            <div className="header_li3" onClick={handleLoginModal}>
              회원가입/로그인
            </div>
          )}

          {loginModal && <LoginModal setEmail={setEmail} email={email} />}

          {joinModal && <JoinModal email={email} setEmail={setEmail} />}
          {passwordModal && (
            <PasswordModal
              email={email}
              setEmail={setEmail}
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

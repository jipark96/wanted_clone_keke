import { useState } from "react";
import { socialData } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { setJoinModal, setLoginModal, setPasswordModal } from "../../store";

function LoginModal(props) {
  let [social, setSocial] = useState(socialData);
  let [isEmailValid, setIsEmailValid] = useState(false);
  let [country, setCountry] = useState(["한국", "English", "日本語"]);

  const loginModal = useSelector((state) => state.loginModal);
  const dispatch = useDispatch();

  const handleLoginModal = () => {
    dispatch(setLoginModal());
  };

  const joinModal = useSelector((state) => state.joinModal);
  const handleJoinModal = () => {
    dispatch(setJoinModal());
  };
  const passwordModal = useSelector((state) => state.passwordModal);
  const handlePasswordModal = () => {
    dispatch(setPasswordModal());
  };
  const validEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const checkEmailInLocalStorage = (email) => {
    const storedUserString = localStorage.getItem("user");
    if (storedUserString === null) {
      return false;
    }
    const storedUser = JSON.parse(storedUserString);
    return storedUser.email === email;
  };

  const handleContinue = () => {
    if (isEmailValid) {
      if (checkEmailInLocalStorage(props.email)) {
        handlePasswordModal();
        setLoginModal(false);
        setJoinModal(false);
      } else {
        handleJoinModal();
        setLoginModal(false);
      }
    }
  };

  return (
    <div className="loginModal">
      <div className="loginModal_content">
        <span className="loginModal_close" onClick={handleLoginModal}>
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
            props.setEmail(e.target.value);
            setIsEmailValid(validEmail(e.target.value));
          }}
        />
        <p
          class="loginModal_email_error"
          style={{ display: isEmailValid ? "none" : "block" }}>
          유효한 이메일 주소를 입력하세요.
        </p>
        <button
          type="button"
          className={`loginModal_button ${isEmailValid ? "active" : ""}`}
          disabled={!isEmailValid}
          onClick={handleContinue}>
          <span className="loginModal_span2">이메일로 계속하기</span>
        </button>

        <div className="loginModal_div3">또는</div>
        <div className="loginModal_div4">
          {social.map((item, i) => {
            return (
              <button className="loginModal_button1">
                <span>
                  <img src={item.img} key={i} class="loginModal_img" alt="" />
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
              <select className="loginModal_select">
                {country.map((a, i) => {
                  return <option>{country[i]}</option>;
                })}
              </select>
              <div className="loginModal_div10">∨</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;

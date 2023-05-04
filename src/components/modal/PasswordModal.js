import React, { useState } from "react";

const PasswordModal = (props) => {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUserString = localStorage.getItem("user");
    const storedUser = JSON.parse(storedUserString);
    if (storedUser.password !== password) {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    }
    alert("로그인이 되었습니다.");
    props.setPasswordModal(false);
    props.setIsLoggedIn(true);
  };

  return (
    <div className="passwordModalWrap">
      <div className="passwordModalDiv">
        <span
          className="passwordModalClose"
          onClick={() => {
            props.setLoginModal(true);
            props.setPasswordModal(false);
          }}>
          {"<"}
        </span>
        <h1 className="passwordModalH1">이메일로 로그인</h1>

        <div className="passwordModalDiv1">
          <span className="passwordModalSpan1">비밀번호</span>
        </div>
        <input
          type="password"
          className="passwordModalInput"
          placeholder="비밀번호를 입력해주세요."
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          type="submit"
          className="passwordModalButton"
          onClick={handleLogin}>
          <span className="passwordModalSpan2">다음</span>
        </button>

        <div className="passwordModalDiv2">비밀번호 초기화/변경</div>
      </div>
    </div>
  );
};

export default PasswordModal;

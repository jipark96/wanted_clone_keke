import React from "react";

const PasswordModal = () => {
  return (
    <div className="passwordModalWrap">
      <div className="passwordModalDiv">
        <span>{"<"}</span>
        <h1>이메일로 로그인</h1>
        <div className="joinModal_div1">
          <span className="joinModal_span">비밀번호</span>
        </div>
        <input
          type="password"
          className="joinModal_input2"
          placeholder="비밀번호를 입력해주세요."
        />
        <button type="submit" className="joinModal_button2">
          <span className="joinModal_span8">다음</span>
        </button>
      </div>
    </div>
  );
};

export default PasswordModal;

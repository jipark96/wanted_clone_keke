import { useState } from "react";
import JoinModalCheckBox from "./JoinModalCheckBox";
import { useDispatch, useSelector } from "react-redux";
import { setJoinModal, setLoginModal } from "../../store";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function JoinModal(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useDispatch();

  const handleJoinModal = (state) => {
    dispatch(setJoinModal(state));
  };

  const handleLoginModal = (state) => {
    dispatch(setLoginModal(state));
  };

  const handleJoin = () => {
    const user = {
      email: props.email,
      name: name,
      phone: phone,
      password: password,
    };
    // 로컬 스토리지에 회원 정보 저장
    localStorage.setItem("user", JSON.stringify(user));
    setShowAlert(true);
    handleJoinModal(false);
    handleLoginModal(false);
  };

  let [country, setCountry] = useState([
    "South Korea +82",
    "Japan +81",
    "Taiwan +886",
    "Hong Kong +852",
    "Singapore +65",
    "Afghanistan +93",
  ]);

  return (
    <div className="joinModal">
      {showAlert && (
        <Alert showAlert={showAlert} variant="success">
          <Alert.Heading>회원가입 완료되었습니다.</Alert.Heading>
          <div className="d-flex justify-content-center">
            <Button
              onClick={() => setShowAlert(false)}
              variant="outline-success">
              Close me
            </Button>
          </div>
        </Alert>
      )}
      <div className="joinModal_content">
        <span className="joinModal_close" onClick={handleJoinModal}>
          &times;
        </span>
        <h1 className="joinModal_h1">회원가입</h1>
        <div className="joinModal_div1">
          <span className="joinModal_span">이메일</span>
        </div>
        <input
          type="text"
          className="joinModal_input"
          placeholder={props.email}
          disabled
        />
        <div className="joinModal_div1">
          <span className="joinModal_span">이름</span>
        </div>
        <input
          type="text"
          className="joinModal_input2"
          placeholder="이름을 입력해 주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="joinModal_div1">
          <span className="joinModal_span">휴대폰 번호</span>
        </div>
        <div>
          <div className="joinModal_div2">
            <select className="joinModal_select">
              {country.map((a, i) => {
                return <option>{country[i]}</option>;
              })}
            </select>
          </div>
          <div className="joinModal_div3">
            <input
              type="text"
              className="joinModal_input3"
              placeholder="(예시)01012345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button className="joinModal_button1">
              <span className="joinModal_span2">인증번호 받기</span>
            </button>
          </div>
          <div className="joinModal_div4">
            <input
              type="text"
              className="joinModal_input"
              placeholder="인증번호를 입력해주세요."
            />
          </div>
        </div>
        <div className="joinModal_div1">
          <span className="joinModal_span">비밀번호</span>
        </div>
        <input
          type="password"
          className="joinModal_input2"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="joinModal_input2"
          placeholder="비밀번호를 다시 한번 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ marginTop: 5 }}>
          <p className="joinModal_p">
            영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자
            이하로 입력해주세요.
          </p>
        </div>
        <JoinModalCheckBox />
        <div className="joinModal_div8">
          <div className="joinModal_div9"></div>
          <button
            type="submit"
            className="joinModal_button2"
            onClick={handleJoin}>
            <span className="joinModal_span8">가입하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinModal;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginModal, setPasswordModal } from "../../store";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const PasswordModal = (props) => {
  const [password, setPassword] = useState("");
  const [showAlertIncorrect, setShowAlertIncorrect] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);

  const dispatch = useDispatch();

  const handleLoginModal = () => {
    dispatch(setLoginModal(false));
  };
  const handlePasswordModal = () => {
    dispatch(setPasswordModal(false));
  };
  const handleLogin = () => {
    const storedUserString = localStorage.getItem("user");
    const storedUser = JSON.parse(storedUserString);
    if (storedUser.password !== password) {
      setShowAlertIncorrect(true);
      handleLoginModal();
      return false;
    } else {
      setShowAlertSuccess(true);
      // handlePasswordModal();
      handleLoginModal();
      props.setIsLoggedIn(true);
    }
  };

  return (
    <>
      <div className="passwordModalWrap">
        {showAlertIncorrect && (
          <Alert variant="danger">
            <Alert.Heading>비밀번호가 일치하지 않습니다.</Alert.Heading>
            <div className="d-flex justify-content-center">
              <Button
                onClick={() => setShowAlertIncorrect(false)}
                variant="outline-success">
                Close me
              </Button>
            </div>
          </Alert>
        )}
        {showAlertSuccess && (
          <Alert variant="success">
            <Alert.Heading>로그인이 되었습니다.</Alert.Heading>
            <div className="d-flex justify-content-center">
              <Button
                onClick={() => setShowAlertSuccess(false)}
                variant="outline-success">
                Close me
              </Button>
            </div>
          </Alert>
        )}
        <div className="passwordModalDiv">
          <span
            className="passwordModalClose"
            onClick={() => {
              handleLoginModal();
              handlePasswordModal(false);
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
    </>
  );
};

export default PasswordModal;

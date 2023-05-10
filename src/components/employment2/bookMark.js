import { useNavigate } from "react-router-dom";

function BookMark() {
  const navigate = useNavigate();
  return (
    <div className="bookMark">
      <button
        className="bookMark_btn1"
        onClick={() => {
          navigate("/bookmark");
        }}>
        <span className="bookMark_span1">북마크 모아보기 {">"}</span>
      </button>
    </div>
  );
}

export default BookMark;

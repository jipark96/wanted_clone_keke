import React, { useEffect } from "react";

const { kakao } = window;

const EmploymentDetailCompany = () => {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.546, 127.0618), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  return (
    <div className="employmentDetailCompany">
      <div className="employmentDetailCompany_div1">
        <span className="employmentDetailCompany_span1">마감일</span>
        <span className="employmentDetailCompany_span2">상시</span>
      </div>
      <div className="employmentDetailCompany_div1">
        <span className="employmentDetailCompany_span1">근무지역</span>
        <span className="employmentDetailCompany_span2">
          서울시 성동구 성수동 2가 277-47, 무신사 캠퍼스 N1
        </span>
      </div>
      <div id="map" className="employmentDetailCompany_img"></div>
    </div>
  );
};

export default EmploymentDetailCompany;

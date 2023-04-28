import { useState } from "react";
import { slideImgData } from "../../data";
import * as S from "./SlideImgStyles";

function SlideImg() {
  let [slideImg, setSlideImg] = useState(slideImgData);
  let [index, setIndex] = useState(0);

  const prevClick = () => {
    if (index > 0) {
      // index가 0보다 크면 index 값을 1 감소
      setIndex(index - 1);
    } else {
      // 첫 번째 이미지에서 왼쪽 버튼 클릭 시, 마지막 이미지로 이동
      setIndex(slideImg.length - 1);
    }
  };

  const nextClick = () => {
    if (index < slideImg.length - 1) {
      // index가 button1 배열의 길이보다 작으면 index 값을 1 증가
      setIndex(index + 1);
    } else {
      // 마지막 이미지에서 오른쪽 버튼 클릭 시, 첫 번째 이미지로 이동
      setIndex(0);
    }
  };

  return (
    <S.SlideImg>
      <S.SlideImgButton1 onClick={prevClick}>{"<"}</S.SlideImgButton1>
      <S.SlideImgButton2 onClick={nextClick}>{">"}</S.SlideImgButton2>
      <S.SlideImgContainer>
        {slideImg.slice(index, index + slideImg.length).map((data, i) => {
          return (
            <S.SlideImgWrap>
              <S.SlideImgImg src={data.img} alt="" />
              <S.SlideImgDiv3>
                <S.SlideImgDiv4>
                  <S.SlideImgP1>{data.title}</S.SlideImgP1>
                  <S.SlideImgP2>{data.content}</S.SlideImgP2>
                </S.SlideImgDiv4>
                <S.SlideImgDiv5>
                  <S.SlideImgP3>바로가기 </S.SlideImgP3>
                </S.SlideImgDiv5>
              </S.SlideImgDiv3>
            </S.SlideImgWrap>
          );
        })}
      </S.SlideImgContainer>
    </S.SlideImg>
  );
}

export default SlideImg;

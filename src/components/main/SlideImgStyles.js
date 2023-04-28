import styled from "styled-components";

export const SlideImg = styled.div`
  display: flex;
  height: 300px;
  position: relative;
  align-items: center;
  margin: 0 auto;
  padding-top: 80px;
  overflow-x: hidden;
`;

export const SlideImgContainer = styled.div`
  display: flex;
  width: 1060px;
  gap: 25px;
  margin: 0 auto;
  position: relative;
`;

export const SlideImgButton1 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  z-index: 10;
  left: 250px;
  top: 200px;
  border: 1px solid #fff;
  cursor: pointer;
`;

export const SlideImgButton2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  z-index: 10;
  right: 250px;
  top: 200px;
  border: 1px solid #fff;
  cursor: pointer;
`;

export const SlideImgWrap = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SlideImgImg = styled.img`
  &&& {
    border-radius: 5px;
    width: 1060px;
    height: 300px;
  }
`;

export const SlideImgDiv3 = styled.div`
  display: flex;
  position: absolute;
  background-color: white;
  width: 330px;
  height: 145px;
  border-radius: 4px;
  margin: 130px 40px 0px 23px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

export const SlideImgDiv4 = styled.div`
  display: flex;
  width: 290px;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 20px 20px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SlideImgP1 = styled.div`
  font-size: 20px;
  font-weight: 650;
  text-align: start;
  color: #333;
`;

export const SlideImgP2 = styled.div`
  font-size: 14px;
  color: #333;
`;

export const SlideImgDiv5 = styled.div`
  display: flex;
  margin-left: 20px;
`;

export const SlideImgP3 = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #36f;
  cursor: pointer;
  margin-bottom: 5px;
`;

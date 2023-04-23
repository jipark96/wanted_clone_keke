import React from 'react'

const MainAside = (props) => {
  return (
    <div className="mainInsite_aside">
          <div>
          <span className="mainInsite_aside_close" onClick={() => {
            props.setShowAside(false);
          }}>&times;</span>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&w=144&q=90"
              className="mainInsite_aside_div1"
              alt=""
            ></img>
            
          </div>
          <div className="mainInsite_aside_h2">
            <div className="mainInsite_aside_h3">즐겨보는</div>
            <div className="mainInsite_aside_h3">크리에이터의 글도</div>
            <div className="mainInsite_aside_h3">추천하고 싶다면?</div>
          </div>
          <div className="mainInsite_aside_p">크리에이트 추천</div>
        </div>
  )
}

export default MainAside
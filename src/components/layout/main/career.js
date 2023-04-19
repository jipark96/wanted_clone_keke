function Career () {
    return (
      <>
      <div className="career">
          <div className="career_div1">
            <div className="career_div2">
              <button className="career_btn1">
              <span>{'<'}</span>
              </button>
              <div className="career_title">
                  <h2 className="career_h2">커리어 성장을 위한 맞춤 이벤트</h2>
                  <div className="career_a">이벤트 전체보기 {'>'} </div>
              </div>
              <button className="career_btn2">
                <span>{'>'}</span>
              </button>
            </div>
            <div className="career_wrap">
            <div>
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2748%2F5418397f.jpg&w=1200&q=100"
                className="career_item" 
                alt=""/>
                <div className="career_a2">아티클</div>
                <div className="career_h3">&Workers | 채용 브랜딩에 필요한 4가지 전략</div>
              </div>
              <div>
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2669%2F22da8214.jpg&w=1200&q=100"
                className="career_item" 
                alt=""/>
                <div className="career_a2">아티클</div>
                <div className="career_h3">채용 담당자를 사로잡는 경력직 이력서 쓰는 법</div>
              </div>
            </div>
            </div>
        </div>
        <hr style={{width:1060, marginTop:80}}/>
        </>
    )
  }
  export default Career;
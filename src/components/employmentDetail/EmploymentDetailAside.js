import React from 'react'

function EmploymentDetailAside () {
  return (
    <div className="employmentDetailAside">
                    <div>
                        <header className="employmentDetailAside_header">
                            <div>
                                <p className="employmentDetailAside_p1">채용보상금</p>
                                <ul className="employmentDetailAside_ui">
                                    <li className="employmentDetailAside_li">
                                        <p className="employmentDetailAside_p2">추천인</p>
                                        <p className="employmentDetailAside_p3">500,000원</p>
                                    </li>
                                    <li className="employmentDetailAside_li">
                                        <p className="employmentDetailAside_p2">지원자</p>
                                        <p className="employmentDetailAside_p3">500,000원</p>
                                    </li>
                                </ul>
                                <button className="employmentDetailAside_btn">
                                    <span className="employmentDetailAside_span">
                                    ✣
                                    </span>
                                </button>
                            </div>
                            <button className="employmentDetailAside_btn2">
    
                                <p style={{paddingLeft: 10}}>북마크하기</p>
                            </button>
                            <button className="employmentDetailAside_btn3">
                                지원하기
                            </button>
                            <div className="employmentDetailAside_div1">
                                <button className="employmentDetailAside_btn4">
                                    <span className="employmentDetailAside_span2">
                                    ♥
                                    </span>
                                    <span className="employmentDetailAside_p4">11</span>
                                </button>
                                <button className="employmentDetailAside_btn5">
                                    <ui className="employmentDetailAside_ul2">
                                        <li className="employmentDetailAside_li2"></li>
                                        <li className="employmentDetailAside_li3"></li>
                                    </ui>
                                </button>
                            </div>
                        </header>
                    </div>
                </div>
  )
}

export default EmploymentDetailAside;
import React, { useState } from 'react'

const EmploymentDetailInfo = () => {
    let [benefit,setBenefit] = useState(["#자율복장","#주차","#건강검진","#복지포인트","#자기계발","#재택근무"])
  return (
    <div class="employmentDetailInfo">
                <h2 class="employmentDetailInfo_h2">프론트엔드 시니어 개발자</h2>
                <div className='employmentDetailInfo_div'>
                    <p class="employmentDetailInfo_p1">29CM(무신사)</p>
                    <div class="employmentDetailInfo_div1">
                    <span class="employmentDetailInfo_p2">응답률 높음</span>
                    <span class="employmentDetailInfo_span1">|</span>
                    <span class="employmentDetailInfo_span2">서울·한국</span>
                </div>
                </div>
                <div class="employmentDetailInfo_div2">
                    <ul class="employmentDetailInfo_ui">
                        {
                            benefit.map((a,i) => {
                                return (
                                    <li class="employmentDetailInfo_li">{benefit[i]}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
  )
}

export default EmploymentDetailInfo
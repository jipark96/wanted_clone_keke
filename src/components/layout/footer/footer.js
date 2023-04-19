import "./footer.module.css";

function Footer() {
  return (
    <>
      <hr />
      <div className="footer_wrap">
        <img
          src="https://static.wanted.co.kr/favicon/180x180.png"
          className="footer_img1"
          alt=""
        />
        <div className="footer_div1">wanted</div>
        <div className="footer_div2">
          <div className="footer_p">기업소개</div>
          <div className="footer_p">이용약관</div>
          <div className="footer_p">고객센터</div>
          <div className="footer_p" style={{ fontWeight: 600 }}>
            개인정보 처리방침
          </div>
        </div>
        <div className="footer_div3">
          <div>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&w=20&q=100"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&w=25&q=100"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&w=20&q=100"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&w=20&q=100"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&w=17&q=100"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&w=17&q=100"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr style={{ width: 1060, marginTop: 25 }} />
      <div className="footer_wrap2">
        <div className="footer_div4">
          <div>
            (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
            롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
          </div>
          <div>
            유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 |
            사업자등록번호 : 299-86-00021 | 02-539-7118
          </div>
          <div>© Wantedlab, Inc.</div>
        </div>
      </div>
    </>
  );
}
export default Footer;

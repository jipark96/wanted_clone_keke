import "./App.css";
import Header from "./components/layout/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <SlideImg />
      <Insite />
    </div>
  );
}

function SlideImg() {
  return (
    <div className="section1">
      <div className="section1_div1" onclick="">
        <svg className="section1_svg" viewBox="0 0 18 18">
          <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
        </svg>
      </div>
      <div className="section1_div2" onclick="">
        <svg className="section1_svg" viewBox="0 0 18 18">
          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
        </svg>
      </div>
      <div className="section1_container">
        <div id="first_item" className="section1_wrap">
          <img
            className="section1_img"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1993%2F16ebbe65.thumb_1006_280.jpg&w=1060&q=100"
            alt=""
          ></img>
          <div className="section1_div3">
            <div className="section1_div4">
              <div className="section1_p1">프리온보딩 프론트엔드 인턴십</div>
              <div className="section1_p2">
                기업이 진짜 원하는 프론트엔드 주니어
              </div>
            </div>
            <div className="section1_div5">
              <div className="section1_p3">바로가기 </div>
            </div>
          </div>
        </div>
        <div className="section1_wrap">
          <img
            className="section1_img"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2011%2F982a3738.jpg&w=1060&q=100"
            alt=""
          ></img>
          <div className="section1_div3">
            <div className="section1_div4">
              <div className="section1_p1">프리온보딩 프론트엔드 인턴십</div>
              <div className="section1_p2">
                기업이 진짜 원하는 프론트엔드 주니어
              </div>
            </div>
            <div className="section1_div5">
              <div className="section1_p3">바로가기 </div>
            </div>
          </div>
        </div>
        <div className="section1_wrap">
          <img
            className="section1_img"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2002%2F68e95300.jpg&w=1060&q=100"
            alt=""
          ></img>
          <div className="section1_div3">
            <div className="section1_div4">
              <div className="section1_p1">프리온보딩 프론트엔드 인턴십</div>
              <div className="section1_p2">
                기업이 진짜 원하는 프론트엔드 주니어
              </div>
            </div>
            <div className="section1_div5">
              <div className="section1_p3">바로가기 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Insite() {
  return (
    <div className="section2">
      <div className="section2_title">나에게 필요한 커리어 인사이트</div>
      <div className="section2_cotainer">
        <div className="section2_wrap">
          <div className="section2_button_start">
            <button className="section2_button1">
              <i className="fa-solid fa-less-than fa-sm"></i>
            </button>
          </div>
          <div className="section2_button_end">
            <button className="section2_button1">
              <i className="fa-solid fa-greater-than fa-sm"></i>
            </button>
          </div>
          <button className="section2_Btn">데이터</button>
          <button className="section2_Btn">개발</button>
          <button className="section2_Btn">커리어고민</button>
          <button className="section2_Btn">취업/이직</button>
          <button className="section2_Btn">IT/기술</button>
          <button className="section2_Btn">인간관계</button>
          <button className="section2_Btn">라이프스타일</button>
          <button className="section2_Btn">MD</button>
          <button className="section2_Btn">마케팅</button>
          <button className="section2_Btn">콘텐츠 제작</button>
          <button className="section2_Btn">노무</button>
          <button className="section2_Btn">브랜딩</button>
          <button className="section2_Btn">경영/전략</button>
          <button className="section2_Btn">리더십</button>
        </div>
        <span>
          <button className="section2_button2">
            <i className="fa-solid fa-ellipsis fa-sm"></i>
          </button>
        </span>
      </div>
      <aside className="section2_aside">
        <div>
          <i className="fa-solid fa-x fa-xs"></i>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&w=144&q=90"
            className="section2_aside_div1"
            alt=""
          ></img>
        </div>
        <div className="section2_aside_h2">
          <div className="section2_aside_h3">즐겨보는</div>
          <div className="section2_aside_h3">크리에이터의 글도</div>
          <div className="section2_aside_h3">추천하고 싶다면?</div>
        </div>
        <div className="section2_aside_p">크리에이트 추천</div>
      </aside>
      <ul className="section2_ul">
        <li className="section2_li2">
          <img
            src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FeyW6%2Fimage%2F1Vg4cW7sgrY6HgRkkosXiE9PDV8.png&w=750&q=100"
            className="section2_li"
            alt=""
          />
          <div className="section2_li_div">
            <div className="section2_li_div1">거기 숫자 뒤에 사람 있어요!</div>
            <div className="section2_li_div2">
              요즘 자기네 회사는 데이터 드리븐 UX(Data Driven UX)를 활용한다는
              이야기를 종종 듣곤 합니다. 막상 깊이 들어보면 A/B 테스트나 지표를
              보고 의사결정을 하다 보니 확신이 생긴다고는 하는데 … 이야기를 듣다
              보면 정작 그 숫자를 제대로 ‘이해’하고 쓰는지 의문이 들더군요 여기
              아주 소소하지만 이해하기 쉬운 예를 하나 들어드릴게요. 십여 년{" "}
            </div>
            <div>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
                className="section2_li_div3"
                alt=""
              ></img>
              <span className="section2_li_span">Aiden</span>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210809%2F1%2F04517561.jpg&w=750&q=100"
            className="section2_li"
            alt=""
          />
          <div className="section2_li_div">
            <div className="section2_li_div1">태블로로 대시보드 만들기 1</div>
            <div className="section2_li_div2">
              회사에서 데이터를 볼 때 어떤 도구를 사용하시나요? 이번 영상에서는
              태블로로 대시보드 만들기 기초를 소개합니다. 태블로의 기본 기능을
              알아보고 대시보드를 만들기 위해 필요한 기본기를 익힙니다. DB에서
              데이터를 연결하고, 원하는 형태로 데이터를 출력하며, 만든
              대시보드를 공유하는 방법에 대해 알아봅니다.
            </div>
            <div>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
                className="section2_li_div3"
                alt=""
              ></img>
              <span className="section2_li_span">Aiden</span>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2F65lKaReFEYA%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%26rs%3DAOn4CLADj-2SGsYzk8ndt47c4EL3lDeNIQ&w=750&q=100"
            className="section2_li"
            alt=""
          />
          <div className="section2_li_div">
            <div className="section2_li_div1">거기 숫자 뒤에 사람 있어요!</div>
            <div className="section2_li_div2">
              요즘 자기네 회사는 데이터 드리븐 UX(Data Driven UX)를 활용한다는
              이야기를 종종 듣곤 합니다. 막상 깊이 들어보면 A/B 테스트나 지표를
              보고 의사결정을 하다 보니 확신이 생긴다고는 하는데 … 이야기를 듣다
              보면 정작 그 숫자를 제대로 ‘이해’하고 쓰는지 의문이 들더군요 여기
              아주 소소하지만 이해하기 쉬운 예를 하나 들어드릴게요. 십여 년{" "}
            </div>
            <div>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
                className="section2_li_div3"
                alt=""
              ></img>
              <span className="section2_li_span">Aiden</span>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220704%2F2%2F15684025.jpg&w=750&q=100"
            className="section2_li"
            alt=""
          />
          <div className="section2_li_div">
            <div className="section2_li_div1">태블로로 대시보드 만들기 1</div>
            <div className="section2_li_div2">
              회사에서 데이터를 볼 때 어떤 도구를 사용하시나요? 이번 영상에서는
              태블로로 대시보드 만들기 기초를 소개합니다. 태블로의 기본 기능을
              알아보고 대시보드를 만들기 위해 필요한 기본기를 익힙니다. DB에서
              데이터를 연결하고, 원하는 형태로 데이터를 출력하며, 만든
              대시보드를 공유하는 방법에 대해 알아봅니다.
            </div>
            <div>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
                className="section2_li_div3"
                alt=""
              ></img>
              <span className="section2_li_span">Aiden</span>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F1oxf%2Fimage%2FTqrYw97DyNtSyzehUlpD34Ik-Gs.jpg&w=750&q=100"
            className="section2_li"
            alt=""
          />
          <div className="section2_li_div">
            <div className="section2_li_div1">거기 숫자 뒤에 사람 있어요!</div>
            <div className="section2_li_div2">
              요즘 자기네 회사는 데이터 드리븐 UX(Data Driven UX)를 활용한다는
              이야기를 종종 듣곤 합니다. 막상 깊이 들어보면 A/B 테스트나 지표를
              보고 의사결정을 하다 보니 확신이 생긴다고는 하는데 … 이야기를 듣다
              보면 정작 그 숫자를 제대로 ‘이해’하고 쓰는지 의문이 들더군요 여기
              아주 소소하지만 이해하기 쉬운 예를 하나 들어드릴게요. 십여 년{" "}
            </div>
            <div>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
                className="section2_li_div3"
                alt=""
              ></img>
              <span className="section2_li_span">Aiden</span>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2195%2Fd7389609.jpg&w=1200&q=90"
            className="section2_li"
            alt=""
          />
          <div className="section2_li_div">
            <div className="section2_li_div1">태블로로 대시보드 만들기 1</div>
            <div className="section2_li_div2">
              회사에서 데이터를 볼 때 어떤 도구를 사용하시나요? 이번 영상에서는
              태블로로 대시보드 만들기 기초를 소개합니다. 태블로의 기본 기능을
              알아보고 대시보드를 만들기 위해 필요한 기본기를 익힙니다. DB에서
              데이터를 연결하고, 원하는 형태로 데이터를 출력하며, 만든
              대시보드를 공유하는 방법에 대해 알아봅니다.
            </div>
            <div>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
                className="section2_li_div3"
                alt=""
              ></img>
              <span className="section2_li_span">Aiden</span>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2FUfVaKnaAmFI%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%26rs%3DAOn4CLDDke5GDTTto7PtBwyGLAGY4weFug&w=750&q=100"
            className="section2_li"
            alt=""
          />
          <div className="section2_li_div">
            <div className="section2_li_div1">거기 숫자 뒤에 사람 있어요!</div>
            <div className="section2_li_div2">
              요즘 자기네 회사는 데이터 드리븐 UX(Data Driven UX)를 활용한다는
              이야기를 종종 듣곤 합니다. 막상 깊이 들어보면 A/B 테스트나 지표를
              보고 의사결정을 하다 보니 확신이 생긴다고는 하는데 … 이야기를 듣다
              보면 정작 그 숫자를 제대로 ‘이해’하고 쓰는지 의문이 들더군요 여기
              아주 소소하지만 이해하기 쉬운 예를 하나 들어드릴게요. 십여 년{" "}
            </div>
            <div>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
                className="section2_li_div3"
                alt=""
              ></img>
              <span className="section2_li_span">Aiden</span>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220516%2F17%2F78349463.jpg&w=750&q=100"
            className="section2_li"
            alt=""
          />
          <div className="section2_li_div">
            <div className="section2_li_div1">태블로로 대시보드 만들기 1</div>
            <div className="section2_li_div2">
              회사에서 데이터를 볼 때 어떤 도구를 사용하시나요? 이번 영상에서는
              태블로로 대시보드 만들기 기초를 소개합니다. 태블로의 기본 기능을
              알아보고 대시보드를 만들기 위해 필요한 기본기를 익힙니다. DB에서
              데이터를 연결하고, 원하는 형태로 데이터를 출력하며, 만든
              대시보드를 공유하는 방법에 대해 알아봅니다.
            </div>
            <div>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
                className="section2_li_div3"
                alt=""
              ></img>
              <span className="section2_li_span">Aiden</span>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2666%2Fe9c422a6.jpg&w=1200&q=90"
            className="section2_li"
            alt=""
          />
          <div className="section2_li_div">
            <div className="section2_li_div1">거기 숫자 뒤에 사람 있어요!</div>
            <div className="section2_li_div2">
              요즘 자기네 회사는 데이터 드리븐 UX(Data Driven UX)를 활용한다는
              이야기를 종종 듣곤 합니다. 막상 깊이 들어보면 A/B 테스트나 지표를
              보고 의사결정을 하다 보니 확신이 생긴다고는 하는데 … 이야기를 듣다
              보면 정작 그 숫자를 제대로 ‘이해’하고 쓰는지 의문이 들더군요 여기
              아주 소소하지만 이해하기 쉬운 예를 하나 들어드릴게요. 십여 년{" "}
            </div>
            <div>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
                className="section2_li_div3"
                alt=""
              ></img>
              <span className="section2_li_span">Aiden</span>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220307%2F9%2F93662568.jpg&w=750&q=100"
            className="section2_li"
            alt=""
          />
          <div className="section2_li_div">
            <div className="section2_li_div1">태블로로 대시보드 만들기 1</div>
            <div className="section2_li_div2">
              회사에서 데이터를 볼 때 어떤 도구를 사용하시나요? 이번 영상에서는
              태블로로 대시보드 만들기 기초를 소개합니다. 태블로의 기본 기능을
              알아보고 대시보드를 만들기 위해 필요한 기본기를 익힙니다. DB에서
              데이터를 연결하고, 원하는 형태로 데이터를 출력하며, 만든
              대시보드를 공유하는 방법에 대해 알아봅니다.
            </div>
            <div>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
                className="section2_li_div3"
                alt=""
              ></img>
              <span className="section2_li_span">Aiden</span>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220228%2F5%2F12657416.jpg&w=750&q=100"
            className="section2_li"
            alt=""
          />
          <div className="section2_li_div">
            <div className="section2_li_div1">거기 숫자 뒤에 사람 있어요!</div>
            <div className="section2_li_div2">
              요즘 자기네 회사는 데이터 드리븐 UX(Data Driven UX)를 활용한다는
              이야기를 종종 듣곤 합니다. 막상 깊이 들어보면 A/B 테스트나 지표를
              보고 의사결정을 하다 보니 확신이 생긴다고는 하는데 … 이야기를 듣다
              보면 정작 그 숫자를 제대로 ‘이해’하고 쓰는지 의문이 들더군요 여기
              아주 소소하지만 이해하기 쉬운 예를 하나 들어드릴게요. 십여 년{" "}
            </div>
            <div>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
                className="section2_li_div3"
                alt=""
              ></img>
              <span className="section2_li_span">Aiden</span>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FLkk%2Fimage%2F1vYpfFQ-SAuxHWYueg2SMfVmoL0.png&w=750&q=100"
            className="section2_li"
            alt=""
          />
          <div className="section2_li_div">
            <div className="section2_li_div1">태블로로 대시보드 만들기 1</div>
            <div className="section2_li_div2">
              회사에서 데이터를 볼 때 어떤 도구를 사용하시나요? 이번 영상에서는
              태블로로 대시보드 만들기 기초를 소개합니다. 태블로의 기본 기능을
              알아보고 대시보드를 만들기 위해 필요한 기본기를 익힙니다. DB에서
              데이터를 연결하고, 원하는 형태로 데이터를 출력하며, 만든
              대시보드를 공유하는 방법에 대해 알아봅니다.
            </div>
            <div>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
                className="section2_li_div3"
                alt=""
              ></img>
              <span className="section2_li_span">Aiden</span>
            </div>
          </div>
        </li>
      </ul>
      <div className="section2_div1">
        <button className="section2_Btn2">더 많은 콘텐츠 보기 </button>
      </div>
    </div>
  );
}

export default App;

export const money = (number) => {
  return number.toLocaleString(); //지역화된 형식에 맞추어 숫자를 문자열로 변환하므로, 천 단위마다 쉼표가 자동으로 추가
};

// const compensation1 = 1000000;
// const compensation2 = money(compensation1);

export let companyData = [
  {
    id: 0,
    img: process.env.PUBLIC_URL + "/company0.png",
    job: "웹디자이너",
    name: "무신사",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 1,
    img: process.env.PUBLIC_URL + "/company1.png",
    job: "채용 담당자",
    name: "우아한청년들",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 2,
    img: process.env.PUBLIC_URL + "/company2.png",
    job: "프론트엔드",
    name: "원티드",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 3,
    img: process.env.PUBLIC_URL + "/company3.png",
    job: "백엔드",
    name: "삼성",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 4,
    img: process.env.PUBLIC_URL + "/company1.png",
    job: "웹디자이너",
    name: "무신사",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 5,
    img: process.env.PUBLIC_URL + "/company0.png",
    job: "프론트엔드",
    name: "원티드",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 6,
    img: process.env.PUBLIC_URL + "/company1.png",
    job: "웹디자이너",
    name: "무신사",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 7,
    img: process.env.PUBLIC_URL + "/company3.png",
    job: "웹디자이너",
    name: "무신사",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 8,
    img: process.env.PUBLIC_URL + "/company3.png",
    job: "웹디자이너",
    name: "무신사",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 9,
    img: process.env.PUBLIC_URL + "/company0.png",
    job: "웹디자이너",
    name: "무신사",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 10,
    img: process.env.PUBLIC_URL + "/company2.png",
    job: "웹디자이너",
    name: "무신사",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 11,
    img: process.env.PUBLIC_URL + "/company1.png",
    job: "웹디자이너",
    name: "무신사",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 12,
    img: process.env.PUBLIC_URL + "/company2.png",
    job: "웹디자이너",
    name: "무신사",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 14,
    img: process.env.PUBLIC_URL + "/company3.png",
    job: "웹디자이너",
    name: "무신사",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 15,
    img: process.env.PUBLIC_URL + "/company0.png",
    job: "웹디자이너",
    name: "무신사",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 16,
    img: process.env.PUBLIC_URL + "/company1.png",
    job: "웹디자이너",
    name: "무신사",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 17,
    img: process.env.PUBLIC_URL + "/company0.png",
    job: "웹디자이너",
    name: "무신사",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 18,
    img: process.env.PUBLIC_URL + "/company3.png",
    job: "웹디자이너",
    name: "무신사",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 19,
    img: process.env.PUBLIC_URL + "/company2.png",
    job: "웹디자이너",
    name: "무신사",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
  {
    id: 20,
    img: process.env.PUBLIC_URL + "/company1.png",
    job: "웹디자이너",
    name: "무신사",
    speed: "응답률 매우 높음",
    region: "서울·한국",
    compensation: `채용보상금 ${money(1000000)}원`,
  },
];

export let socialData = [
  {
    img: process.env.PUBLIC_URL + "/apple.png",
    name: "Apple",
  },
  {
    img: process.env.PUBLIC_URL + "/facebook.png",
    name: "Facebook",
  },
  {
    img: process.env.PUBLIC_URL + "/google.png",
    name: "Google",
  },
  {
    img: process.env.PUBLIC_URL + "/kakao.png",
    name: "Kakao",
  },
];

export let slideImgData = [
  {
    img: process.env.PUBLIC_URL + "/slideImg0.png",
    title: "프리온보딩 프론트엔드 인턴십",
    content: "기업이 진짜 원하는 프론트엔드 주니어",
  },
  {
    img: process.env.PUBLIC_URL + "/slideImg1.png",
    title: "프리온보딩 프론트엔드 인턴십",
    content: "기업이 진짜 원하는 프론트엔드 주니어",
  },
  {
    img: process.env.PUBLIC_URL + "/slideImg2.png",
    title: "프리온보딩 프론트엔드 인턴십",
    content: "기업이 진짜 원하는 프론트엔드 주니어",
  },
  {
    img: process.env.PUBLIC_URL + "/slideImg3.png",
    title: "프리온보딩 프론트엔드 인턴십",
    content: "기업이 진짜 원하는 프론트엔드 주니어",
  },
];

export let insiteData = [
  {
    id: 0,
    img: process.env.PUBLIC_URL + "/insite0.png",
    title: "거기 숫자 뒤에 사람 있어요!",
    content:
      "요즘 자기네 회사는 데이터 드리븐 UX(Data Driven UX)를 활용한다는 이야기를 종종 듣곤 합니다. 막상 깊이 들어보면 A/B 테스트나 지표를 보고 의사결정을 하다 보니 확신이 생긴다고는 하는데 … 이야기를 듣다 보면 정작 그 숫자를 제대로 ‘이해’하고 쓰는지 의문이 들더군요 여기 아주 소소하지만 이해하기 쉬운 예를 하나 들어드릴게요. 십여 년",
    img2: process.env.PUBLIC_URL + "/insiteImg0.png",
    name: "Aiden",
  },
  {
    id: 1,
    img: process.env.PUBLIC_URL + "/insite1.png",
    title: "만국 직장인들의 공통점은?",
    content:
      "즐거운 놀이 문화가 가득한 베를린의 직장인들은 퇴근 후 무엇을 할까. 그들만의 특별한 여가 활동이 무엇인지 들여다 보자.",
    img2: process.env.PUBLIC_URL + "/insiteImg1.png",
    name: "Wanted",
  },
  {
    id: 2,
    img: process.env.PUBLIC_URL + "/insite2.png",
    title: "내 인생은 내 인생대로!",
    content:
      "취업 준비 중인 나는 요즘 친구들과 만나지 않는 건 물론이고, 연락도 거의 하지 않았다. 의미 없는 연락을 이어 나가는 게 조금 지쳤다고나 할까. 이야기 나누거나 보는 사람은 가족뿐인 좁디좁은 반경에서 지내니 누군가와 비교할 것도 없었다. 그러다 공부를 하고 있는 친구에게 오랜만에 연락이 와서 정부지원사업 평가 진행을 보조하는 단기 알바를 하게 되었다.  ",
    img2: process.env.PUBLIC_URL + "/insiteImg0.png",
    name: "KeKe",
  },
  {
    id: 3,
    img: process.env.PUBLIC_URL + "/insite3.png",
    title: "어쩌다 보니 서른!",
    content:
      "2022년 서른이 된 사람들은 어떤 생각을 하고 있을까요? 기대했던 서른의 모습이 되어 만족하고 있을까요, 아니면 아쉬움을 가진 채 후회하고 있을까요. 어쩌다 보니 올해 '서른'이 되어버린 다섯 명의 이야기를 들어봤습니다.",
    img2: process.env.PUBLIC_URL + "/insiteImg1.png",
    name: "JiHyun",
  },
  {
    id: 4,
    img: process.env.PUBLIC_URL + "/insite0.png",
    title: "거기 숫자 뒤에 사람 있어요!",
    content:
      "요즘 자기네 회사는 데이터 드리븐 UX(Data Driven UX)를 활용한다는 이야기를 종종 듣곤 합니다. 막상 깊이 들어보면 A/B 테스트나 지표를 보고 의사결정을 하다 보니 확신이 생긴다고는 하는데 … 이야기를 듣다 보면 정작 그 숫자를 제대로 ‘이해’하고 쓰는지 의문이 들더군요 여기 아주 소소하지만 이해하기 쉬운 예를 하나 들어드릴게요. 십여 년",
    img2: process.env.PUBLIC_URL + "/insiteImg0.png",
    name: "Aiden",
  },
  {
    id: 5,
    img: process.env.PUBLIC_URL + "/insite1.png",
    title: "만국 직장인들의 공통점은?",
    content:
      "즐거운 놀이 문화가 가득한 베를린의 직장인들은 퇴근 후 무엇을 할까. 그들만의 특별한 여가 활동이 무엇인지 들여다 보자.",
    img2: process.env.PUBLIC_URL + "/insiteImg1.png",
    name: "Wanted",
  },
  {
    id: 6,
    img: process.env.PUBLIC_URL + "/insite2.png",
    title: "내 인생은 내 인생대로!",
    content:
      "취업 준비 중인 나는 요즘 친구들과 만나지 않는 건 물론이고, 연락도 거의 하지 않았다. 의미 없는 연락을 이어 나가는 게 조금 지쳤다고나 할까. 이야기 나누거나 보는 사람은 가족뿐인 좁디좁은 반경에서 지내니 누군가와 비교할 것도 없었다. 그러다 공부를 하고 있는 친구에게 오랜만에 연락이 와서 정부지원사업 평가 진행을 보조하는 단기 알바를 하게 되었다.  ",
    img2: process.env.PUBLIC_URL + "/insiteImg0.png",
    name: "KeKe",
  },
  {
    id: 7,
    img: process.env.PUBLIC_URL + "/insite3.png",
    title: "어쩌다 보니 서른!",
    content:
      "2022년 서른이 된 사람들은 어떤 생각을 하고 있을까요? 기대했던 서른의 모습이 되어 만족하고 있을까요, 아니면 아쉬움을 가진 채 후회하고 있을까요. 어쩌다 보니 올해 '서른'이 되어버린 다섯 명의 이야기를 들어봤습니다.",
    img2: process.env.PUBLIC_URL + "/insiteImg1.png",
    name: "JiHyun",
  },
  {
    id: 8,
    img: process.env.PUBLIC_URL + "/insite0.png",
    title: "거기 숫자 뒤에 사람 있어요!",
    content:
      "요즘 자기네 회사는 데이터 드리븐 UX(Data Driven UX)를 활용한다는 이야기를 종종 듣곤 합니다. 막상 깊이 들어보면 A/B 테스트나 지표를 보고 의사결정을 하다 보니 확신이 생긴다고는 하는데 … 이야기를 듣다 보면 정작 그 숫자를 제대로 ‘이해’하고 쓰는지 의문이 들더군요 여기 아주 소소하지만 이해하기 쉬운 예를 하나 들어드릴게요. 십여 년",
    img2: process.env.PUBLIC_URL + "/insiteImg0.png",
    name: "Aiden",
  },
  {
    id: 9,
    img: process.env.PUBLIC_URL + "/insite1.png",
    title: "만국 직장인들의 공통점은?",
    content:
      "즐거운 놀이 문화가 가득한 베를린의 직장인들은 퇴근 후 무엇을 할까. 그들만의 특별한 여가 활동이 무엇인지 들여다 보자.",
    img2: process.env.PUBLIC_URL + "/insiteImg1.png",
    name: "Wanted",
  },
  {
    id: 10,
    img: process.env.PUBLIC_URL + "/insite2.png",
    title: "내 인생은 내 인생대로!",
    content:
      "취업 준비 중인 나는 요즘 친구들과 만나지 않는 건 물론이고, 연락도 거의 하지 않았다. 의미 없는 연락을 이어 나가는 게 조금 지쳤다고나 할까. 이야기 나누거나 보는 사람은 가족뿐인 좁디좁은 반경에서 지내니 누군가와 비교할 것도 없었다. 그러다 공부를 하고 있는 친구에게 오랜만에 연락이 와서 정부지원사업 평가 진행을 보조하는 단기 알바를 하게 되었다.  ",
    img2: process.env.PUBLIC_URL + "/insiteImg0.png",
    name: "KeKe",
  },
  {
    id: 11,
    img: process.env.PUBLIC_URL + "/insite3.png",
    title: "어쩌다 보니 서른!",
    content:
      "2022년 서른이 된 사람들은 어떤 생각을 하고 있을까요? 기대했던 서른의 모습이 되어 만족하고 있을까요, 아니면 아쉬움을 가진 채 후회하고 있을까요. 어쩌다 보니 올해 '서른'이 되어버린 다섯 명의 이야기를 들어봤습니다.",
    img2: process.env.PUBLIC_URL + "/insiteImg1.png",
    name: "JiHyun",
  },
  {
    id: 12,
    img: process.env.PUBLIC_URL + "/insite0.png",
    title: "거기 숫자 뒤에 사람 있어요!",
    content:
      "요즘 자기네 회사는 데이터 드리븐 UX(Data Driven UX)를 활용한다는 이야기를 종종 듣곤 합니다. 막상 깊이 들어보면 A/B 테스트나 지표를 보고 의사결정을 하다 보니 확신이 생긴다고는 하는데 … 이야기를 듣다 보면 정작 그 숫자를 제대로 ‘이해’하고 쓰는지 의문이 들더군요 여기 아주 소소하지만 이해하기 쉬운 예를 하나 들어드릴게요. 십여 년",
    img2: process.env.PUBLIC_URL + "/insiteImg0.png",
    name: "Aiden",
  },
  {
    id: 13,
    img: process.env.PUBLIC_URL + "/insite1.png",
    title: "만국 직장인들의 공통점은?",
    content:
      "즐거운 놀이 문화가 가득한 베를린의 직장인들은 퇴근 후 무엇을 할까. 그들만의 특별한 여가 활동이 무엇인지 들여다 보자.",
    img2: process.env.PUBLIC_URL + "/insiteImg1.png",
    name: "Wanted",
  },
  {
    id: 14,
    img: process.env.PUBLIC_URL + "/insite2.png",
    title: "내 인생은 내 인생대로!",
    content:
      "취업 준비 중인 나는 요즘 친구들과 만나지 않는 건 물론이고, 연락도 거의 하지 않았다. 의미 없는 연락을 이어 나가는 게 조금 지쳤다고나 할까. 이야기 나누거나 보는 사람은 가족뿐인 좁디좁은 반경에서 지내니 누군가와 비교할 것도 없었다. 그러다 공부를 하고 있는 친구에게 오랜만에 연락이 와서 정부지원사업 평가 진행을 보조하는 단기 알바를 하게 되었다.  ",
    img2: process.env.PUBLIC_URL + "/insiteImg0.png",
    name: "KeKe",
  },
  {
    id: 15,
    img: process.env.PUBLIC_URL + "/insite3.png",
    title: "어쩌다 보니 서른!",
    content:
      "2022년 서른이 된 사람들은 어떤 생각을 하고 있을까요? 기대했던 서른의 모습이 되어 만족하고 있을까요, 아니면 아쉬움을 가진 채 후회하고 있을까요. 어쩌다 보니 올해 '서른'이 되어버린 다섯 명의 이야기를 들어봤습니다.",
    img2: process.env.PUBLIC_URL + "/insiteImg1.png",
    name: "JiHyun",
  },
];

export let detailImg = [
  {
    img: process.env.PUBLIC_URL + "/musinsa0.png",
  },
  {
    img: process.env.PUBLIC_URL + "/musinsa4.png",
  },
  {
    img: process.env.PUBLIC_URL + "/musinsa2.png",
  },
  {
    img: process.env.PUBLIC_URL + "/musinsa3.png",
  },
];

export let careerData = [
  {
    id: 0,
    img: process.env.PUBLIC_URL + "career0.png",
    title: "아티클",
    content: "&Workers | 채용 브랜딩에 필요한 4가지 전략",
  },
  {
    id: 1,
    img: process.env.PUBLIC_URL + "career1.png",
    title: "아티클",
    content: "채용 담당자를 사로잡는 경력직 이력서 쓰는 법",
  },
  {
    id: 2,
    img: process.env.PUBLIC_URL + "career2.png",
    title: "아티클",
    content: "폴인ㅣ와디즈ㅣ아웃스탠딩ㅣ롱블랙ㅣ29CM",
  },
  {
    id: 3,
    img: process.env.PUBLIC_URL + "career3.png",
    title: "아티클",
    content: "디자인 소스 제대로 사용하는 다섯 가지 팁",
  },
];

export let searchRanking = [
  {
    id: 1,
    name: "서비스 기획자",
  },
  {
    id: 2,
    name: "UIUX디자이너",
  },
  {
    id: 3,
    name: "배달의민족",
  },
  {
    id: 4,
    name: "프론트엔드",
  },
  {
    id: 5,
    name: "서비스기획",
  },
  {
    id: 6,
    name: "백엔드",
  },
  {
    id: 7,
    name: "데이터 엔지니어",
  },
  {
    id: 8,
    name: "데이터 분석",
  },
];

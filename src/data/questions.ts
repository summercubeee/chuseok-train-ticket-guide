export interface QSection {
  heading?: string;
  body: string;
}

export interface MiniFaq {
  q: string;
  a: string;
}

export interface Question {
  slug: string;
  category: string;
  question: string;
  dateAnswered: string;
  intro: string;
  sections: QSection[];
  miniFaq: MiniFaq[];
  relatedSlugs: string[];
  sources: { title: string; url: string }[];
}

// 2026-08-23 기준 취합. 코레일 발표를 인용한 언론보도 기반. 예매 전 공식 채널 재확인 필요.
export const questions: Question[] = [
  {
    slug: "korail-srt-membership-transfer-how-to",
    category: "예매 방법",
    question: "SRT만 가입했었는데 지금 어떻게 해야 하나요",
    dateAnswered: "2026-08-23",
    intro: "SRT 계정만 있던 경우, 통합회원 전환 웹사이트에서 코레일 신규가입 절차와 기존 이용실적, 혜택 이관 절차를 함께 진행해야 합니다.",
    sections: [
      {
        heading: "가입 상태별로 다릅니다",
        body: "코레일에만 가입돼 있었다면 자동 전환돼 별도 조치가 필요 없습니다. 코레일과 SRT 둘 다 가입했다면 통합회원으로 자동 전환되지만, SRT 구매 이력과 할인쿠폰을 새 계정으로 옮기려면 전환 웹사이트에서 동의 절차를 거쳐야 합니다. SRT에만 가입했던 경우가 가장 손이 많이 가며, 신규가입과 실적 이관을 모두 해야 합니다.",
      },
      {
        heading: "미리 해두는 게 안전합니다",
        body: "예매 시작일(교통약자 9월 3일, 일반 9월 7일) 직전에 몰려서 전환하면 시간을 뺏길 수 있으니, 최소 며칠 전에 전환 웹사이트나 코레일톡, SRT 앱에서 미리 절차를 마쳐두는 걸 추천합니다.",
      },
    ],
    miniFaq: [],
    relatedSlugs: ["ticket-cancellation-penalty-fee", "advance-booking-fail-what-to-do"],
    sources: [
      { title: "SRT 고객들, 코레일 회원으로 통합 전환하세요, 서울경제", url: "https://www.sedaily.com/article/20067116" },
    ],
  },
  {
    slug: "ticket-cancellation-penalty-fee",
    category: "환불/취소",
    question: "예매했는데 못 가면 위약금 얼마나 내나요",
    dateAnswered: "2026-08-23",
    intro: "출발 3시간 전까지는 평일 무료, 주말/공휴일 10%이며, 그 이후로는 최대 20%까지 위약금이 붙습니다. 명절 기간에는 위약금이 더 높게 적용된 사례도 있습니다.",
    sections: [
      {
        heading: "일반 환불 규정",
        body: "평일은 출발 3시간 전까지 무료 취소, 이후 5% 위약금이 발생합니다. 주말이나 공휴일은 3시간 전까지 10%, 그 이후 20%가 부과됩니다.",
      },
      {
        heading: "명절 기간은 더 엄격합니다",
        body: "노쇼(예약 부도)와 승차권 선점을 막기 위해 명절 기간 위약금이 강화된 사례가 있어(예: 설 명절 3시간 전 환불 20%로 상향), 추석에도 유사하게 강화된 기준이 적용될 수 있습니다. 정확한 추석 위약금율은 예매 전 코레일 공식 공지로 확인하세요.",
      },
    ],
    miniFaq: [
      { q: "출발 시각이 지난 뒤에도 환불받을 수 있나요?", a: "네, 출발 후 20분 이내 30%, 20~60분 40%, 60분 이후 70% 위약금이 차감된 후 환불됩니다. 출발 후에는 역에서 신청해야 합니다." },
    ],
    relatedSlugs: ["korail-srt-membership-transfer-how-to"],
    sources: [
      { title: "설 승차권 환불 위약금 2배 상향, 뉴스1", url: "https://www.news1.kr/realestate/general/5651529" },
      { title: "승차권 구매/환불/분실, 코레일(공식)", url: "https://www.korail.com/ticket/reserve/guide/pay" },
    ],
  },
  {
    slug: "pet-companion-train-boarding-rules",
    category: "예매 방법",
    question: "반려동물 데리고 기차 탈 수 있나요",
    dateAnswered: "2026-08-23",
    intro: "가능합니다. 다만 이동장에 넣어야 하고, 광견병 등 예방접종 증명서류를 준비해야 합니다.",
    sections: [
      {
        heading: "기본 규정",
        body: "탑승 가능한 반려동물은 개, 고양이 등 소형 동물이며(투견, 맹금류, 뱀 등은 불가), 1인당 이동장 1개, 최대 2마리까지 가능합니다. 이동장을 포함한 크기가 다른 승객의 좌석이나 통로를 침해하지 않아야 합니다.",
      },
      {
        heading: "요금은 별도입니다",
        body: "반려동물용 좌석은 별도로 성인 요금을 결제해야 합니다. 명절 성수기에는 반려동물 동반 좌석도 빠르게 매진될 수 있어 일찍 예매하는 게 좋습니다.",
      },
    ],
    miniFaq: [],
    relatedSlugs: [],
    sources: [
      { title: "다가오는 추석, 반려동물과 대중교통 이용할 수 있나요, 정책브리핑(공식)", url: "https://www.korea.kr/multi/visualNewsView.do?newsId=148905592" },
    ],
  },
  {
    slug: "one-person-max-ticket-count",
    category: "예매 방법",
    question: "1인당 몇 장까지 예매할 수 있나요",
    dateAnswered: "2026-08-23",
    intro: "명절 승차권은 1인당 최대 12매까지 예매할 수 있고, 한 번에 예매할 수 있는 매수는 6매 이내입니다.",
    sections: [
      {
        body: "가족 여러 명의 표를 한 번에 예매하려면 6매 제한에 걸리지 않는지 확인하고, 필요하면 나눠서 예매해야 합니다.",
      },
    ],
    miniFaq: [],
    relatedSlugs: ["ticket-cancellation-penalty-fee"],
    sources: [
      { title: "2026 추석 KTX, SRT 예매 일정, 트립닷컴", url: "https://kr.trip.com/blog/srt-chuseok-reservation/" },
    ],
  },
  {
    slug: "route-booking-date-missed-what-happens",
    category: "노선별 일정",
    question: "노선별 예매일을 놓치면 그 노선은 못 사나요",
    dateAnswered: "2026-08-23",
    intro: "아닙니다. 노선별 날짜는 순차적으로 열리는 것이라, 예매 종료일(9월 11일)까지는 계속 시도할 수 있습니다.",
    sections: [
      {
        body: "다만 인기 노선이나 시간대는 해당 노선의 예매 시작일 첫날 빠르게 소진되는 경우가 많습니다. 본인 노선이 열리는 날 예매 시간(오전 7시~오후 1시)에 접속하는 게 가장 유리합니다.",
      },
    ],
    miniFaq: [],
    relatedSlugs: ["advance-booking-fail-what-to-do"],
    sources: [
      { title: "2026년 추석 KTX 열차 승차권 예매 일정 발표, 국제뉴스", url: "https://www.gukjenews.com/news/articleView.html?idxno=3665461" },
    ],
  },
  {
    slug: "advance-booking-fail-what-to-do",
    category: "매진 대응",
    question: "예매에 실패했어요, 표를 구할 방법이 없나요",
    dateAnswered: "2026-08-23",
    intro: "잔여석 판매와 자동취소된 좌석을 노리는 게 가장 현실적인 방법입니다.",
    sections: [
      {
        heading: "언제 다시 풀리나요",
        body: "일반예매 종료 직후인 9월 11일 오후 3시부터 팔리지 않은 잔여석이 풀립니다. 또한 결제기한(9월 15일, 사전예매는 9월 18일)을 넘겨 자동 취소되는 좌석도 꾸준히 나오므로, 그 다음 날 코레일+ 앱에서 취소표를 확인하는 게 유효한 전략입니다.",
      },
      {
        heading: "대안 교통수단도 함께 보세요",
        body: "입석/자유석이 있는 열차, 무궁화호 등 상대적으로 여유 있는 노선, 고속버스나 시외버스도 함께 확인하면 선택지가 넓어집니다.",
      },
    ],
    miniFaq: [],
    relatedSlugs: ["route-booking-date-missed-what-happens", "one-person-max-ticket-count"],
    sources: [
      { title: "2026 추석 기차표 예매일정 및 예매방법, 코레일톡", url: "https://korailtalk.co.kr/korea-holiday-train-booking/" },
    ],
  },
  {
    slug: "transit-vulnerable-advance-booking-proof",
    category: "노선별 일정",
    question: "경로, 장애인 사전예매는 어떻게 증빙하나요",
    dateAnswered: "2026-08-23",
    intro: "9월 3~4일 교통약자 사전예매 대상은 65세 이상 경로, 등록 장애인, 국가유공자(교통지원 대상), 2026년 새로 포함된 임산부입니다.",
    sections: [
      {
        body: "온라인 예매 시 회원정보에 등록된 생년월일이나 복지카드, 유공자증 등록 정보로 자동 확인되는 경우가 많고, 정확한 증빙 방법은 예매 전 코레일톡, SRT 앱 공지사항에서 확인하는 걸 권장합니다.",
      },
    ],
    miniFaq: [],
    relatedSlugs: ["route-booking-date-missed-what-happens"],
    sources: [
      { title: "2026년 추석 승차권 예매 일정, 금강일보", url: "https://www.ggilbo.com/news/articleView.html?idxno=1176474" },
    ],
  },
  {
    slug: "weekday-off-peak-easier-ticket",
    category: "매진 대응",
    question: "추석 연휴 아닌 평일에 이동하면 표 구하기 쉬운가요",
    dateAnswered: "2026-08-23",
    intro: "특별수송기간(9월 23일~27일)을 살짝 벗어난 날짜로 일정을 옮기면 상대적으로 여유가 있는 경우가 많습니다.",
    sections: [
      {
        body: "귀성, 귀경 날짜를 하루이틀 앞당기거나 늦추는 것만으로도 예매 성공률이 크게 달라질 수 있습니다. 연휴 전날, 다음 날 근처 날짜도 함께 검색해보는 걸 추천합니다.",
      },
    ],
    miniFaq: [],
    relatedSlugs: ["advance-booking-fail-what-to-do"],
    sources: [
      { title: "2026 추석 KTX SRT 기차표 예매 일정과 선예매 꿀팁, 씽크넥션", url: "https://thinknection.idelighter.com/2026/07/2026-chuseok-ktx-srt.html" },
    ],
  },
  {
    slug: "ktx-first-class-vs-standard-difference",
    category: "예매 방법",
    question: "KTX 특실이랑 일반실, 뭐가 다른가요",
    dateAnswered: "2026-08-23",
    intro: "좌석 배치와 간격, 서비스, 요금이 다릅니다. 특실은 전 좌석이 순방향이고 좌석 간격이 넓으며 간단한 스낵, 음료 서비스가 포함됩니다.",
    sections: [
      {
        body: "일반실은 순방향과 역방향 좌석이 섞여 있지만 특실은 전 좌석이 순방향입니다. 요금은 구간마다 다르지만 대체로 일반실보다 40% 안팎 비쌉니다. 예를 들어 서울, 부산 구간은 일반실이 약 5만9,800원, 특실이 약 8만3,700원 수준입니다. 명절엔 특실이 상대적으로 늦게까지 남아있는 경우가 있어, 일반실이 매진됐다면 특실도 확인해볼 만합니다.",
      },
    ],
    miniFaq: [],
    relatedSlugs: ["advance-booking-fail-what-to-do"],
    sources: [
      { title: "KTX 특실 일반실 차이는, 좌석 서비스 가격, 이즐 블로그", url: "https://blog.myezl.com/ktx-%ED%8A%B9%EC%8B%A4-%EC%9D%BC%EB%B0%98%EC%8B%A4-%EC%B0%A8%EC%9D%B4-%EC%A2%8C%EC%84%9D-%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B0%80%EA%B2%A9-%EC%99%84%EB%B2%BD-%EA%B0%80%EC%9D%B4%EB%93%9C/" },
    ],
  },
  {
    slug: "macro-ticket-scalping-punishment",
    category: "환불/취소",
    question: "매크로로 예매하면 처벌받나요",
    dateAnswered: "2026-08-23",
    intro: "네, 코레일은 매크로를 이용한 부정예매, 암표 거래를 업무방해죄 등으로 수사의뢰하며 단속을 강화하고 있습니다.",
    sections: [
      {
        heading: "실제 단속 규모",
        body: "코레일의 매크로 탐지 시스템은 하루 평균 약 1만 건, 연간 약 160만 건의 비정상적 접근을 차단하고 있습니다. 지난 설 명절에는 171만~3,100만 건에 이르는 불법 접속을 시도한 피의자 6명이 업무방해 혐의로 검찰에 송치되기도 했습니다.",
      },
      {
        heading: "일반 이용자가 알아둘 점",
        body: "정상적인 매수 제한(1인당 12매, 1회 6매) 안에서 여러 계정이나 자동화 프로그램을 이용해 반복 접속하는 행위는 적발 대상이 될 수 있습니다. 가족 표를 나눠서 여러 번 정상 절차로 예매하는 것과는 다른 문제입니다.",
      },
    ],
    miniFaq: [],
    relatedSlugs: ["one-person-max-ticket-count"],
    sources: [
      { title: "매크로 악용 철도 승차권 불법 거래, 시사저널e", url: "https://www.sisajournal-e.com/news/articleView.html?idxno=223535" },
      { title: "추석 기차 승차권 매크로 예매 단속, 정책브리핑(공식)", url: "https://www.korea.kr/multi/visualNewsView.do?newsId=148949369&repCode=B00002&repCodeType=%EC%A0%95%EB%B6%80%EB%B6%80%EC%B2%98&pWise=main&pWiseMain=T1_4&pWiseMinistry=ministryNews" },
    ],
  },
  {
    slug: "korail-app-not-working-alternative-booking",
    category: "접속 장애",
    question: "코레일 앱·홈페이지 먹통이면 표 못 구하나요",
    dateAnswered: "2026-08-27",
    intro: "작년 추석(2025년) 예매 첫날에도 접속 폭주로 코레일 앱과 홈페이지가 먹통이 된 사례가 있었습니다. 이럴 때 실제로 통했던 대안은 온라인이 아니라 역 매표 창구였습니다.",
    sections: [
      {
        heading: "역 매표 창구는 정상 운영됐습니다",
        body: "작년 추석 연휴 기차표 예매 첫날, 온라인 예매 시작 직후부터 코레일 앱과 웹사이트가 접속 폭주로 지연됐지만, 전국 역 매표 창구에서는 승차권이 정상적으로 발매됐습니다(아래 출처 참고). 온라인 접속이 계속 안 된다면 새로고침만 반복하기보다 가까운 역 창구를 직접 방문하는 게 더 확실한 방법입니다.",
      },
      {
        heading: "온라인으로 계속 시도한다면",
        body: "코레일 측은 평소 명절보다 늘어난 예매객이 한꺼번에 몰리면서 시스템 장애가 발생했다고 설명했습니다. 무리하게 반복 새로고침을 하기보다 코레일톡 앱과 PC 웹사이트를 함께 열어두고 상황을 보며 시도하는 편이 낫습니다.",
      },
      {
        heading: "매크로·자동화 프로그램은 다른 문제입니다",
        body: "접속이 안 된다고 매크로나 자동 새로고침 프로그램을 쓰는 건 업무방해 등으로 처벌 대상이 될 수 있습니다. 위에서 안내한 역 창구 방문은 정상적인 예매 채널을 이용하는 방법일 뿐, 불법 우회와는 다릅니다.",
      },
    ],
    miniFaq: [
      { q: "왜 매년 예매 첫날마다 이런 일이 반복되나요", a: "예매 시작 시각에 이용자가 한꺼번에 몰리기 때문입니다. 작년에는 전년 대비 이용객이 72% 급증하면서 접속 지연이 발생했다고 코레일이 밝혔습니다." },
    ],
    relatedSlugs: ["advance-booking-fail-what-to-do", "macro-ticket-scalping-punishment", "holiday-booking-screen-stuck-loading-message"],
    sources: [
      { title: "\"접속 폭주로\"...추석 기차표 예매 첫날 '먹통', 서울이코노미뉴스", url: "https://www.seouleconews.com/news/articleView.html?idxno=86354" },
    ],
  },
  {
    slug: "holiday-booking-screen-stuck-loading-message",
    category: "접속 장애",
    question: "\"명절 예매 화면으로 이동 중입니다\"에서 안 넘어가요",
    dateAnswered: "2026-08-27",
    intro: "작년 추석 예매 첫날, 코레일 앱과 홈페이지가 '명절 예매 화면으로 이동 중입니다'라는 문구에서 멈춘 채 다음 화면으로 넘어가지 않는 문제가 있었습니다. 접속 자체가 안 되는 게 아니라 이 화면에서 멈추는 게 특징이었습니다.",
    sections: [
      {
        heading: "이 화면에서 안 넘어가는 건 오류가 아니라 대기 상태입니다",
        body: "작년 사례를 보면 이 문구가 뜬 뒤로는 뒤에서 대기열을 처리하는 중이라, 앱을 껐다 켜거나 새로고침을 반복해도 대기 순서만 초기화될 뿐 더 빨리 넘어가지 않았습니다. 대기 화면으로 넘어간 뒤에도 순서가 수십만 번대까지 밀려 30분 이상 걸린 경우가 많았습니다.",
      },
      {
        heading: "그래도 안 넘어간다면 역 창구로",
        body: "같은 시간, 전국 역 매표 창구에서는 승차권이 정상적으로 발매되고 있었습니다(아래 출처 참고). 화면이 계속 멈춰 있다면 온라인을 붙잡고 있기보다 가까운 역으로 이동해 창구에서 직접 예매하는 게 더 빠를 수 있습니다.",
      },
      {
        heading: "코레일 측 설명",
        body: "코레일은 평소 명절보다 늘어난 연휴 기간에 예매객이 한꺼번에 몰리면서 시스템 장애가 발생했다고 밝혔고, 긴급 조치와 시스템 점검을 진행하겠다고 안내했습니다. 같은 문제가 이번 추석에도 재발할 가능성을 염두에 두고 예매 당일 대안을 미리 알아두는 걸 추천합니다.",
      },
    ],
    miniFaq: [],
    relatedSlugs: ["korail-app-not-working-alternative-booking", "advance-booking-fail-what-to-do"],
    sources: [
      { title: "\"접속 폭주로\"...추석 기차표 예매 첫날 '먹통', 서울이코노미뉴스", url: "https://www.seouleconews.com/news/articleView.html?idxno=86354" },
    ],
  },
];

export function getQuestion(slug: string): Question | undefined {
  return questions.find((q) => q.slug === slug);
}

export interface RouteBookingDate {
  date: string;
  note: string;
}

export interface RouteAlternative {
  title: string;
  body: string;
}

export interface RouteSource {
  title: string;
  url: string;
}

export type CrowdingLevel = "매우 높음" | "높음" | "보통" | "낮음";

export interface TrainRoute {
  slug: string;
  name: string;
  trainTypes: string[];
  summary: string;
  majorStations: string[];
  keyJourneys: { from: string; to: string; duration: string }[];
  bookingDates: RouteBookingDate[];
  frequencyNote: string;
  crowdingLevel: CrowdingLevel;
  crowdingNote: string;
  alternatives: RouteAlternative[];
  sources: RouteSource[];
}

// 2026-08-24 기준 취합. 나무위키/코레일톡/언론보도/코레일 공식 공지 등 공개 자료 교차확인.
// 소요시간, 정차역, 배차 횟수는 시기에 따라 바뀔 수 있어 실제 예매 전 코레일톡 앱, korail.com에서 재확인 필요.
// 혼잡도(crowdingLevel)는 노선 길이/종착지 규모/배차 횟수를 근거로 한 상대적 평가이며, 코레일이 공식 발표한 경쟁률 수치가 아닙니다.
export const routes: TrainRoute[] = [
  {
    slug: "gyeongbu-line",
    name: "경부선",
    trainTypes: ["KTX", "SRT", "무궁화호"],
    summary:
      "서울/수서에서 부산까지 이어지는 대한민국 최대 간선입니다. KTX와 SRT가 함께 다니고 하루 편성이 100회를 넘는 만큼 배차는 가장 촘촘하지만, 그만큼 귀성/귀경 수요도 전 노선 중 가장 많아 인기 시간대는 예매 시작과 동시에 빠르게 매진되는 경향이 있습니다.",
    majorStations: [
      "서울", "수서", "동탄", "지제", "천안아산", "오송", "대전", "김천구미", "동대구", "밀양", "구포", "부산",
    ],
    keyJourneys: [
      { from: "서울", to: "부산", duration: "약 2시간 17분~3시간 25분 (정차역 수에 따라 차이)" },
      { from: "수서", to: "부산", duration: "약 2시간 20분~30분" },
    ],
    bookingDates: [
      { date: "9월 3일(목)", note: "교통약자 사전예매" },
      { date: "9월 10일(수)", note: "일반예매, 수서 출발/도착(옛 SRT 구간)" },
      { date: "9월 11일(금)", note: "일반예매, 서울 출발/도착" },
    ],
    frequencyNote: "서울-부산 구간 KTX/SRT를 합쳐 하루 약 82~83회(요일별 변동) 운행하는, 전국에서 배차가 가장 많은 노선입니다.",
    crowdingLevel: "매우 높음",
    crowdingNote:
      "귀성/귀경 인구가 가장 많이 몰리는 서울-부산 축이라, 배차가 많은데도 명절 특별수송기간에는 좌석 확보 경쟁이 가장 치열합니다. 특히 예매일이 마지막(9월 11일)으로 잡혀 있어, 다른 노선보다 앞서 예매를 시도할 수 없다는 점도 부담입니다.",
    alternatives: [
      {
        title: "서울역/수서역 둘 다 확인하세요",
        body: "같은 경부선이라도 서울 출발 KTX와 수서 출발 SRT/KTX는 예매일이 다르고(9월 10일 vs 11일), 열차 자체도 다르게 운영됩니다. 한쪽이 매진이어도 다른 쪽에 좌석이 남아있을 수 있으니 코레일톡에서 '모든 열차'로 두 출발역을 함께 검색하세요.",
      },
      {
        title: "구포, 밀양, 김천구미 등 중간역 승하차",
        body: "종착역인 서울/부산행 전체 구간이 매진이어도, 구포-부산, 대전-서울처럼 짧은 구간 좌석은 남아있는 경우가 있습니다. 목적지 근처 중간역에서 타고 내리는 방법도 검토해볼 만합니다.",
      },
      {
        title: "경부고속버스/시외버스 병행 확인",
        body: "경부선은 고속버스 노선도 촘촘한 편이라, 기차가 매진이면 코버스, 버스타고 등에서 서울-부산 고속버스도 함께 확인하는 게 현실적인 대안입니다.",
      },
    ],
    sources: [
      { title: "\"서울-부산 KTX, 정차역수 따라 38분 더 걸리는데…요금 똑같아\", 철도경제신문", url: "https://www.redaily.co.kr/news/articleView.html?idxno=14055" },
      { title: "서울역(고속철도)-부산역(고속철도) 열차 시간표, 전국 KTX 열차/기차 운행정보", url: "https://train.asamaru.net/%EC%8B%9C%EA%B0%84%ED%91%9C/%EC%84%9C%EC%9A%B8%EC%97%AD-%EA%B2%BD%EB%B6%80%EC%84%A0-%EA%B3%A0%EC%86%8D%EC%B2%A0%EB%8F%84/%EC%B6%9C%EB%B0%9C/%EB%B6%80%EC%82%B0%EC%97%AD-%EA%B2%BD%EB%B6%80%EC%84%A0-%EA%B3%A0%EC%86%8D%EC%B2%A0%EB%8F%84/%EB%8F%84%EC%B0%A9/" },
      { title: "2026 추석 기차표 예매…9월 11일은 경부선 KTX, 10일은 수서출발 KTX, 부산일보", url: "https://www.busan.com/view/busan/view.php?code=2026081413503392915" },
    ],
  },
  {
    slug: "honam-line",
    name: "호남선",
    trainTypes: ["KTX", "SRT", "무궁화호"],
    summary:
      "서울/용산에서 광주송정을 거쳐 목포까지 이어지는 서남권 최대 간선입니다. 2019년 호남고속철도(광주송정~고막원) 개통으로 고속화됐고, 명절엔 서울/수도권에서 광주, 목포 방향으로 귀성하는 수요가 몰려 경부선 다음으로 경쟁이 치열한 노선으로 꼽힙니다.",
    majorStations: [
      "행신", "서울", "용산", "광명", "천안아산", "오송", "서대전", "계룡", "논산", "익산", "김제", "정읍", "장성", "광주송정", "나주", "목포",
    ],
    keyJourneys: [
      { from: "행신/서울", to: "목포", duration: "약 2시간 30분(최속)~3시간 40분(정차역 많은 열차)" },
    ],
    bookingDates: [
      { date: "9월 4일(금)", note: "교통약자 사전예매" },
      { date: "9월 9일(수)", note: "일반예매, 용산 출발/도착" },
      { date: "9월 10일(목)", note: "일반예매, 수서 출발/도착(옛 SRT 구간)" },
    ],
    frequencyNote: "KTX와 SRT가 함께 투입되지만 경부선보다는 편성 수가 적어, 인기 시간대(귀성 전날 오전, 귀경 당일 오후)는 상대적으로 더 빨리 매진되는 편입니다.",
    crowdingLevel: "매우 높음",
    crowdingNote:
      "광주, 목포는 수도권에서 대체 교통(고속버스 등)도 발달해 있지만, 명절 특별수송기간에는 KTX 좌석 자체의 절대량이 경부선보다 적어 체감 경쟁은 낮지 않습니다. 특히 9일(용산)과 10일(수서)로 예매일이 이틀에 걸쳐 나뉘므로, 본인이 이용할 출발역의 날짜를 놓치지 않는 게 중요합니다.",
    alternatives: [
      {
        title: "용산/수서 둘 다 검색",
        body: "용산 출발 KTX(9일)와 수서 출발 SRT/KTX(10일)는 예매일이 다릅니다. 하루 차이로 좌석 상황이 크게 달라질 수 있어 두 출발역을 모두 확인하세요.",
      },
      {
        title: "무궁화호, 새마을호 계열도 확인",
        body: "호남선은 KTX 외에 일반열차도 운행합니다. KTX가 매진이면 소요시간은 늘어나지만 상대적으로 좌석이 남아있는 일반열차, 입석을 함께 검색해보세요.",
      },
      {
        title: "광주/목포행 고속버스 병행",
        body: "서울-광주, 서울-목포는 고속버스 배차도 많은 구간이라, 기차가 매진이면 버스타고, 코버스 등에서 함께 확인하는 게 유효합니다.",
      },
    ],
    sources: [
      { title: "호남선 KTX 열차시간표, 정차역(서울↔광주,목포), 코레일 정보", url: "https://korailinfo.com/bbs/board.php?bo_table=honam&wr_id=1" },
      { title: "KTX 열차시간표, 광주광역시 교통(공식)", url: "https://www.gwangju.go.kr/traffic/contentsView.do?pageId=traffic20" },
    ],
  },
  {
    slug: "jeolla-line",
    name: "전라선",
    trainTypes: ["KTX", "무궁화호"],
    summary:
      "익산에서 전주, 남원, 구례구, 순천을 지나 여수엑스포까지 이어지는 노선입니다. 용산에서 출발하는 KTX가 직결 운행하며, 여수/순천은 명절 귀성 수요와 함께 관광 수요도 겹쳐 있어 연휴 전후로 좌석 경쟁이 있는 편입니다.",
    majorStations: [
      "용산", "익산", "전주", "남원", "곡성", "구례구", "순천", "여천", "여수엑스포",
    ],
    keyJourneys: [
      { from: "용산", to: "여수엑스포", duration: "약 2시간 44분(최속)~3시간 7분" },
    ],
    bookingDates: [
      { date: "9월 4일(금)", note: "교통약자 사전예매" },
      { date: "9월 9일(수)", note: "일반예매, 용산 출발/도착" },
      { date: "9월 10일(목)", note: "일반예매, 수서 출발/도착(옛 SRT 구간)" },
    ],
    frequencyNote: "익산까지는 호남선과 선로/시간표가 겹치는 구간이 많아, 익산에서 환승하면 선택지가 넓어집니다.",
    crowdingLevel: "높음",
    crowdingNote:
      "순천, 여수는 귀성 수요에 더해 가을 관광 수요까지 겹치는 시기라, 전주/남원 등 중간 구간보다 종착지행 좌석이 먼저 소진되는 경향이 있습니다.",
    alternatives: [
      {
        title: "익산 환승 활용",
        body: "용산-전라선 직결 열차가 매진이어도, 용산-익산(호남선) 구간과 익산-여수(전라선) 구간을 나눠 예매하면 좌석을 찾을 확률이 올라갑니다.",
      },
      {
        title: "순천 이북 중간역 하차",
        body: "여수까지 전 구간이 매진이어도 남원, 곡성, 구례구, 순천 등 중간역까지의 좌석은 남아있는 경우가 있습니다. 목적지 근처에서 버스/자가용으로 연계하는 것도 방법입니다.",
      },
    ],
    sources: [
      { title: "전라선 KTX시간표(용산↔여수엑스포), 코레일톡(공식)", url: "https://korailtalk.co.kr/24/" },
      { title: "전라선, 나무위키", url: "https://namu.wiki/w/%EC%A0%84%EB%9D%BC%EC%84%A0" },
    ],
  },
  {
    slug: "jungang-line",
    name: "중앙선",
    trainTypes: ["KTX-이음", "무궁화호"],
    summary:
      "청량리에서 양평, 원주, 제천, 영주를 지나 안동까지 이어지는 노선으로, KTX-이음 투입 이후 무궁화호 대비 1시간 30분 가까이 단축됐습니다. 최근 부전, 태화강 방향으로 운행 계통이 확대되고 있어 경상권 접근성도 좋아지는 추세입니다.",
    majorStations: [
      "청량리", "양평", "서원주", "원주", "제천", "단양", "풍기", "영주", "안동",
    ],
    keyJourneys: [
      { from: "청량리", to: "안동", duration: "평균 약 2시간 3분(무궁화호 대비 약 1시간 30분 단축)" },
    ],
    bookingDates: [
      { date: "9월 4일(금)", note: "교통약자 사전예매" },
      { date: "9월 8일(토)", note: "일반예매, 서울/청량리 출발/도착" },
    ],
    frequencyNote: "KTX-이음은 하루 왕복 4회 수준으로 편성이 많지 않아, 명절 성수기에는 시간대별 좌석이 빠르게 소진될 수 있습니다.",
    crowdingLevel: "높음",
    crowdingNote:
      "경부/호남선보다 편성 수 자체가 적기 때문에, 절대적인 이용객 수는 적어도 좌석 매진까지 걸리는 시간은 짧은 편입니다. 안동, 영주 방향 귀성객이 몰리는 명절 전날 오전 시간대가 특히 그렇습니다.",
    alternatives: [
      {
        title: "무궁화호 병행 확인",
        body: "중앙선에는 여전히 무궁화호도 다니고 있어, KTX-이음이 매진이면 소요시간은 늘어나지만 무궁화호 좌석을 확인해볼 만합니다.",
      },
      {
        title: "원주, 제천 등 중간역 활용",
        body: "안동/영주까지 전 구간이 매진이어도 원주, 제천까지의 구간 좌석은 남아있을 수 있습니다. 이후 구간은 시외버스로 연계하는 방법도 있습니다.",
      },
    ],
    sources: [
      { title: "청량리역 원주 제천 영주 안동 경주 태화강 부전역 KTX-이음 시간표 요금(중앙선)", url: "https://dataful.kr/528" },
      { title: "중앙선 KTX, 나무위키", url: "https://namu.wiki/w/%EC%A4%91%EC%95%99%EC%84%A0%20KTX" },
    ],
  },
  {
    slug: "gangneung-line",
    name: "강릉선",
    trainTypes: ["KTX-이음"],
    summary:
      "청량리/서울에서 원주, 평창을 거쳐 강릉, 동해까지 이어지는 노선입니다. 2018 평창올림픽에 맞춰 개통된 이후 강원 동해안 최고 인기 노선으로 자리잡았고, 명절 귀성 수요와 가을 여행 수요가 함께 몰리는 구간입니다.",
    majorStations: [
      "청량리", "서울", "행신", "만종", "횡성", "둔내", "평창", "진부(오대산)", "강릉", "동해",
    ],
    keyJourneys: [
      { from: "서울", to: "강릉", duration: "약 2시간(최근 1시간 40분대 편성도 등장)" },
    ],
    bookingDates: [
      { date: "9월 4일(금)", note: "교통약자 사전예매" },
      { date: "9월 8일(토)", note: "일반예매, 서울/청량리 출발/도착" },
    ],
    frequencyNote: "서울-강릉 구간은 하루 약 14회 운행해, 지방 노선 중에서는 배차가 많은 편입니다.",
    crowdingLevel: "높음",
    crowdingNote:
      "귀성 수요에 강릉/동해 관광 수요가 겹치는 대표적인 노선이라, 배차가 많은데도 연휴 전날/당일 오전 시간대는 빠르게 매진됩니다.",
    alternatives: [
      {
        title: "동해행 열차도 함께 검색",
        body: "일부 편성은 강릉이 아닌 동해까지 운행합니다. 강릉행이 매진이어도 동해행에 좌석이 남아있고, 강릉과 동해는 시외버스로 30분 내외 거리라 대안이 될 수 있습니다.",
      },
      {
        title: "횡성, 평창 등 중간역 활용",
        body: "종착지행 전 구간이 매진이어도 중간역까지의 좌석은 남아있는 경우가 많습니다. 목적지 근처 중간역에서 내려 버스로 이동하는 것도 방법입니다.",
      },
    ],
    sources: [
      { title: "강릉선(서울↔강릉,동해) KTX시간표, 코레일톡(공식)", url: "https://korailtalk.co.kr/590/" },
      { title: "서울역(고속철도)-강릉역(고속철도) 열차 시간표, 전국 KTX 열차/기차 운행정보", url: "https://train.asamaru.net/%EC%8B%9C%EA%B0%84%ED%91%9C/%EC%84%9C%EC%9A%B8%EC%97%AD-%EA%B2%BD%EB%B6%80%EC%84%A0-%EA%B3%A0%EC%86%8D%EC%B2%A0%EB%8F%84/%EC%B6%9C%EB%B0%9C/%EA%B0%95%EB%A6%89%EC%97%AD-%EA%B0%95%EB%A6%89%EC%84%A0/%EB%8F%84%EC%B0%A9/" },
    ],
  },
  {
    slug: "gyeongjeon-line",
    name: "경전선",
    trainTypes: ["KTX", "무궁화호"],
    summary:
      "삼랑진에서 마산, 진주를 거쳐 순천, 광주 방향으로 이어지는 노선입니다. 서울에서 창원중앙, 진주까지 KTX가 직결 운행하며, 순천~광주송정 구간은 전철화 사업으로 소요시간이 점차 단축되는 추세입니다.",
    majorStations: [
      "서울", "동대구", "마산", "창원중앙", "진주", "순천", "광양",
    ],
    keyJourneys: [
      { from: "서울", to: "진주", duration: "약 3시간~3시간 30분" },
    ],
    bookingDates: [
      { date: "9월 3일(목)", note: "교통약자 사전예매" },
      { date: "9월 8일(화)", note: "일반예매, 서울/청량리 출발/도착" },
      { date: "9월 10일(목)", note: "일반예매, 수서 출발/도착(옛 SRT 구간)" },
    ],
    frequencyNote: "경전선을 지나는 모든 여객열차가 진주역에 정차해, 진주가 사실상 이 노선의 환승 거점 역할을 합니다.",
    crowdingLevel: "높음",
    crowdingNote:
      "창원, 진주는 경부선만큼은 아니어도 영남권 주요 귀성지라, 명절 성수기 KTX 좌석은 예매 시작 당일 오전에 많이 소진되는 편입니다.",
    alternatives: [
      {
        title: "무궁화호, 목포보성선 경유 확인",
        body: "경전선에는 KTX 외에 무궁화호도 다닙니다. 또 2025년 9월 개통된 목포보성선을 경유하는 열차는 광주송정을 거치지 않는 경로라 시간대에 따라 선택지가 될 수 있습니다.",
      },
      {
        title: "부산/동대구 경유로 우회",
        body: "진주, 창원 방향이 매진이면 경부선으로 부산이나 동대구까지 간 뒤 시외버스로 갈아타는 우회 경로도 고려해볼 만합니다.",
      },
    ],
    sources: [
      { title: "경전선 KTX시간표(서울↔창원중앙, 진주), 코레일톡(공식)", url: "https://korailtalk.co.kr/25/" },
      { title: "경전선, 나무위키", url: "https://namu.wiki/w/%EA%B2%BD%EC%A0%84%EC%84%A0" },
    ],
  },
  {
    slug: "donghae-line",
    name: "동해선",
    trainTypes: ["KTX-이음", "무궁화호"],
    summary:
      "부산 부전에서 울산 태화강, 경주, 포항을 거쳐 동해안을 따라 강릉까지 이어지는 노선입니다. 2025년 12월 KTX-이음이 부전~강릉 전 구간에 투입되면서 기존 ITX-마음 대비 소요시간이 크게 줄었습니다.",
    majorStations: [
      "부전", "태화강", "경주", "포항", "영덕", "울진", "삼척", "동해", "묵호", "정동진", "강릉",
    ],
    keyJourneys: [
      { from: "부전", to: "강릉", duration: "평균 약 3시간 54분(기존 ITX-마음 5시간 4분 대비 약 1시간 10분 단축)" },
      { from: "부전", to: "포항", duration: "약 1시간 30분" },
    ],
    bookingDates: [
      { date: "9월 3일(목)", note: "교통약자 사전예매" },
      { date: "9월 8일(화)", note: "일반예매, 서울/청량리 출발/도착" },
      { date: "9월 10일(목)", note: "일반예매, 수서 출발/도착(옛 SRT 구간)" },
    ],
    frequencyNote: "KTX-이음은 하루 6회(상하행 각 3회) 수준으로 투입 초기라 편성이 많지 않습니다.",
    crowdingLevel: "보통",
    crowdingNote:
      "부산-강릉을 한 번에 잇는 장거리 노선이지만 KTX-이음 편성이 아직 적어, 포항/경주처럼 상대적으로 가까운 구간은 여유가 있어도 강릉까지 가는 장거리 좌석은 명절엔 빠르게 소진될 수 있습니다.",
    alternatives: [
      {
        title: "무궁화호, ITX-마음 병행",
        body: "동해선에는 KTX-이음 외에 무궁화호, 일부 구간 ITX-마음도 다닙니다. KTX-이음이 매진이면 소요시간은 늘지만 이런 열차를 확인해보세요.",
      },
      {
        title: "포항/경주까지만 끊어서 예매",
        body: "부전-강릉 전 구간이 매진이어도 부전-포항, 포항-강릉처럼 구간을 나눠 예매하면 좌석을 찾을 확률이 올라갑니다.",
      },
    ],
    sources: [
      { title: "KTX-이음 동해선 투입, 부산~강릉 '3시간대 철도시대' 포항 경북일보", url: "https://www.kbmaeil.com/article/20251215500278" },
      { title: "KTX 이음 동해선 노선 정차역/소요시간 총정리, KINYU", url: "https://kinyu.blog/ktx-eeum-donghae-line-guide/" },
    ],
  },
  {
    slug: "jungbu-naeryuk-line",
    name: "중부내륙선",
    trainTypes: ["KTX-이음"],
    summary:
      "판교, 이천 부발에서 충주를 거쳐 문경까지 이어지는 비교적 신설 노선입니다. 2021년 부발-충주 구간이 먼저 개통했고 2024년 11월 충주-문경 구간이 연장되면서, 수도권에서 충북/경북 내륙으로 가는 새로운 선택지가 됐습니다.",
    majorStations: [
      "판교", "부발", "가남", "감곡장호원", "앙성온천", "충주", "살미", "수안보온천", "연풍", "문경",
    ],
    keyJourneys: [
      { from: "판교", to: "문경", duration: "약 90분(승용차 대비 30분, 시외버스 대비 90분 이상 단축)" },
    ],
    bookingDates: [
      { date: "9월 3일(목)", note: "교통약자 사전예매" },
      { date: "9월 8일(화)", note: "일반예매, 서울/청량리 출발/도착" },
    ],
    frequencyNote: "충주-문경 연장 이후 하루 왕복 8회로 확대됐지만, 다른 KTX 노선에 비하면 여전히 편성이 적은 편입니다.",
    crowdingLevel: "보통",
    crowdingNote:
      "충주, 문경은 인구 규모가 크지 않아 경부/호남선만큼 경쟁이 치열하지는 않지만, 신설 노선이라 편성 자체가 적어 명절엔 원하는 시간대를 놓치면 다음 열차까지 텀이 길어질 수 있습니다.",
    alternatives: [
      {
        title: "부발역에서 타는 방법도 확인",
        body: "판교 출발분이 매진이어도 부발역 출발 좌석이 남아있을 수 있습니다. 경강선, 수도권 전철로 부발역까지 이동하는 방법도 검토해보세요.",
      },
      {
        title: "충주까지만 우선 예매",
        body: "문경까지 전 구간이 매진이면 충주까지만 예매하고 이후 구간은 시외버스로 연계하는 것도 방법입니다.",
      },
    ],
    sources: [
      { title: "KTX-이음 중부내륙선 충주~문경 30일 개통, 판교→문경까지 90분, 정책브리핑(공식)", url: "https://www.korea.kr/news/policyNewsView.do?newsId=148936722" },
      { title: "중부내륙선 KTX, 나무위키", url: "https://namu.wiki/w/%EC%A4%91%EB%B6%80%EB%82%B4%EB%A5%99%EC%84%A0%20KTX" },
    ],
  },
  {
    slug: "gyeongbuk-line",
    name: "경북선",
    trainTypes: ["무궁화호"],
    summary:
      "김천에서 상주, 점촌, 예천을 거쳐 영주까지 이어지는 경북 내륙 노선입니다. KTX는 다니지 않고 전 구간 무궁화호로 운행되며, 영주에서 중앙선 KTX-이음으로 환승하면 수도권까지 이어갈 수 있습니다.",
    majorStations: [
      "김천", "옥산", "청리", "상주", "함창", "점촌", "용궁", "개포", "예천", "영주",
    ],
    keyJourneys: [
      { from: "김천", to: "영주", duration: "무궁화호로 약 1시간 30분~2시간대(정차역 수에 따라 차이)" },
    ],
    bookingDates: [
      { date: "9월 3일(목)", note: "교통약자 사전예매" },
      { date: "9월 7일(월)", note: "일반예매, 전 노선 일반열차와 함께 시작" },
    ],
    frequencyNote: "무궁화호가 하루 왕복 5회 운행하는, 상대적으로 배차가 적은 지방 노선입니다.",
    crowdingLevel: "낮음",
    crowdingNote:
      "경부/호남선 같은 KTX 간선보다 이용객 절대 수가 적어 좌석 경쟁 자체는 덜한 편이지만, 배차가 하루 5회뿐이라 한 번 놓치면 대안이 많지 않다는 점이 오히려 부담이 될 수 있습니다.",
    alternatives: [
      {
        title: "일반예매 첫날(9월 7일)을 노리세요",
        body: "경북선은 다른 KTX 간선과 달리 일반열차 예매 첫날인 9월 7일부터 예매가 열립니다. 배차가 적은 만큼 이 날 아침 예매를 시도하는 게 가장 유리합니다.",
      },
      {
        title: "김천, 영주에서 환승 경로 활용",
        body: "김천에서는 경부선 KTX로, 영주에서는 중앙선 KTX-이음으로 갈아탈 수 있습니다. 경북선 좌석이 없다면 상주/점촌까지 시외버스로 이동한 뒤 인근 역에서 연계하는 방법도 있습니다.",
      },
    ],
    sources: [
      { title: "경북선(영주~김천) 전구간 무궁화호 열차 정상 운행, 한국일보", url: "https://www.hankookilbo.com/News/Read/A2021072809560001242" },
      { title: "경북선 무궁화호 열차 시간표(영주-예천-개포-용궁-점촌-함창-상주-청리-옥산-김천)", url: "https://pat.im/1643" },
    ],
  },
  {
    slug: "daegu-line",
    name: "대구선",
    trainTypes: ["무궁화호"],
    summary:
      "동대구에서 하양, 영천을 거쳐 포항 방향 동해선과 연결되는 노선입니다. 전 구간 무궁화호로 운행되며, 대구/경북 내에서 짧은 구간을 오가는 지역 노선 성격이 강합니다.",
    majorStations: [
      "동대구", "하양", "영천", "북영천", "신경주", "아화", "서경주", "안강", "포항",
    ],
    keyJourneys: [
      { from: "동대구", to: "포항", duration: "무궁화호로 약 1시간 30분 안팎" },
    ],
    bookingDates: [
      { date: "9월 3일(목)", note: "교통약자 사전예매" },
      { date: "9월 7일(월)", note: "일반예매, 전 노선 일반열차와 함께 시작" },
    ],
    frequencyNote: "무궁화호 중심의 단거리 지역 노선으로, 다른 광역 간선에 비해 편성 수가 많지 않습니다.",
    crowdingLevel: "낮음",
    crowdingNote:
      "장거리 귀성 노선이라기보다 대구/경북 내 단거리 이동에 가까워, 명절 특별수송기간에도 경부선/호남선 같은 극심한 경쟁은 상대적으로 덜한 편입니다.",
    alternatives: [
      {
        title: "동대구역에서 경부선으로 환승",
        body: "대구선 자체 좌석이 부족하면, 경부선 KTX로 동대구까지 이동한 뒤 대구선 무궁화호나 시내/시외버스로 갈아타는 경로도 고려할 만합니다.",
      },
      {
        title: "포항 방향은 동해선도 함께 확인",
        body: "포항까지 간다면 대구선 외에 부전 방향 동해선 KTX-이음 경로도 시간대에 따라 대안이 될 수 있습니다.",
      },
    ],
    sources: [
      { title: "대구선, 나무위키", url: "https://namu.wiki/w/%EB%8C%80%EA%B5%AC%EC%84%A0" },
      { title: "태화강역 무궁화호/누리로 시간표, 대구선 동대구/부전행 운임 및 정차역", url: "https://krailroad.co.kr/%ED%83%9C%ED%99%94%EA%B0%95%EC%97%AD-%EB%AC%B4%EA%B6%81%ED%99%94%ED%98%B8%C2%B7%EB%88%84%EB%A6%AC%EB%A1%9C-%EC%8B%9C%EA%B0%84%ED%91%9C-%EB%8C%80%EA%B5%AC%EC%84%A0-%EB%8F%99%EB%8C%80%EA%B5%AC%C2%B7/" },
    ],
  },
  {
    slug: "chungbuk-line",
    name: "충북선",
    trainTypes: ["무궁화호"],
    summary:
      "대전, 조치원에서 청주, 증평, 충주를 거쳐 제천까지 이어지는 노선입니다. 전 구간 무궁화호로 운행되며, 제천에서 중앙선/태백선과 만나는 환승 거점 역할을 합니다.",
    majorStations: [
      "대전", "신탄진", "조치원", "오송", "청주", "오근장", "청주공항", "증평", "음성", "주덕", "충주", "삼탄", "봉양", "제천",
    ],
    keyJourneys: [
      { from: "충주", to: "제천", duration: "약 1시간 10분" },
    ],
    bookingDates: [
      { date: "9월 3일(목)", note: "교통약자 사전예매" },
      { date: "9월 7일(월)", note: "일반예매, 전 노선 일반열차와 함께 시작" },
    ],
    frequencyNote: "고속화 사업이 논의되고 있지만 현재는 전 구간 무궁화호로만 운행됩니다.",
    crowdingLevel: "낮음",
    crowdingNote:
      "청주, 충주는 자가용/고속버스 이용 비중이 높은 지역이라 기차 좌석 경쟁이 KTX 간선만큼 치열하지 않은 편입니다.",
    alternatives: [
      {
        title: "오송역에서 KTX로 환승",
        body: "대전이나 서울 방향에서는 오송역까지 경부선 KTX로 이동한 뒤 충북선 무궁화호로 갈아타는 경로도 있습니다.",
      },
      {
        title: "청주/충주 시외버스 병행",
        body: "청주, 충주는 수도권/대전과의 시외버스 배차가 많은 편이라, 기차가 여의치 않으면 버스를 함께 확인하는 게 유리합니다.",
      },
    ],
    sources: [
      { title: "충북선 일반열차 시간표(무궁화호)", url: "https://pat.im/1623" },
      { title: "충북선, 나무위키", url: "https://namu.wiki/w/%EC%B6%A9%EB%B6%81%EC%84%A0" },
    ],
  },
  {
    slug: "gyoae-line",
    name: "교외선",
    trainTypes: ["무궁화호(통근형)"],
    summary:
      "고양 대곡에서 원릉, 일영, 장흥, 송추를 거쳐 의정부까지 이어지는 노선으로, 2004년 운행 중단 이후 2024년 1월 20년 만에 재개통됐습니다. 장거리 귀성 노선이라기보다 수도권 서북부 단거리 통근/나들이 성격이 강합니다.",
    majorStations: [
      "대곡", "원릉", "일영", "장흥", "송추", "의정부",
    ],
    keyJourneys: [
      { from: "대곡", to: "의정부", duration: "약 45분" },
    ],
    bookingDates: [
      { date: "9월 3일(목)", note: "교통약자 사전예매" },
      { date: "9월 7일(월)", note: "일반예매, 전 노선 일반열차와 함께 시작" },
    ],
    frequencyNote: "재개통 초기 하루 왕복 8회(상하행 각 4회)로 운행을 시작했습니다.",
    crowdingLevel: "낮음",
    crowdingNote:
      "다른 17개 노선과 달리 장거리 귀성용 노선이 아니라 수도권 서북부 구간 열차라, 명절 기간 좌석 경쟁이라는 개념 자체가 크지 않습니다. 다만 배차가 적어(하루 8회) 원하는 시간대를 놓치면 다음 열차까지 오래 기다릴 수 있습니다.",
    alternatives: [
      {
        title: "경의중앙선/GTX-A 등 대체 전철 확인",
        body: "대곡, 의정부 구간은 경의중앙선이나 3호선, GTX-A 등 예매가 필요 없는 수도권 전철로도 이동할 수 있어, 교외선 좌석이 없어도 크게 불편하지 않은 편입니다.",
      },
      {
        title: "장거리 귀성의 환승 구간으로 활용",
        body: "교외선 자체보다, 의정부/대곡에서 경원선/경의선 등 다른 노선으로 갈아타는 환승 경로로 활용하는 경우가 많습니다.",
      },
    ],
    sources: [
      { title: "20여 년 만에 운행 재개 다시, 교외선, 경기도교통정보센터(공식)", url: "https://gits.gg.go.kr/web/newboard/3386.do?mode=view&schBcode=&schCon=&schStr=&schType=list&pageIndex=1&pageUnit=8&idx=195829734" },
      { title: "대곡~의정부 45분... 20년 만에 달리는 낭만열차, 오마이뉴스", url: "https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0002772015" },
    ],
  },
  {
    slug: "janghang-line",
    name: "장항선",
    trainTypes: ["ITX-마음", "무궁화호"],
    summary:
      "천안/신창에서 예산, 홍성을 거쳐 익산까지 이어지는 충남 서부 노선입니다. 2024년 11월 신창-홍성 구간에 ITX-마음이 새로 투입되면서 서울/수도권 접근성이 크게 좋아졌습니다.",
    majorStations: [
      "용산", "천안", "신창", "신례원", "예산", "홍성", "대천", "장항", "익산",
    ],
    keyJourneys: [
      { from: "용산", to: "홍성", duration: "ITX-마음 약 48분(신창 경유)" },
    ],
    bookingDates: [
      { date: "9월 4일(금)", note: "교통약자 사전예매" },
      { date: "9월 7일(월)", note: "일반예매, 전 노선 일반열차와 함께 시작" },
    ],
    frequencyNote: "신창역에 정차하는 ITX-마음은 하루 왕복 1회(총 2회)로 아직 편성이 매우 적습니다.",
    crowdingLevel: "보통",
    crowdingNote:
      "홍성, 대천 등 서해안 방향 귀성/여행 수요가 꾸준하지만, ITX-마음 신설 편성이 워낙 적어 이 열차만 노리면 명절엔 금방 매진됩니다. 무궁화호 비중이 여전히 높은 노선입니다.",
    alternatives: [
      {
        title: "무궁화호 위주로 검색",
        body: "장항선은 아직 ITX-마음보다 무궁화호 편성이 많습니다. 코레일톡에서 '모든 열차'로 검색해 무궁화호 좌석도 함께 확인하세요.",
      },
      {
        title: "천안/신창에서 경부선 환승",
        body: "천안, 신창 구간은 경부선 KTX/무궁화호와 만나는 지점이라, 서울-천안 구간을 경부선으로 이동한 뒤 장항선으로 갈아타는 경로도 있습니다.",
      },
    ],
    sources: [
      { title: "ITX-마음 장항선(신창-홍성) 개통, 순천향대신문", url: "http://news.sch.ac.kr/news/articleView.html?idxno=1342" },
      { title: "ITX-마음, 위키백과", url: "https://ko.wikipedia.org/wiki/ITX-%EB%A7%88%EC%9D%8C" },
    ],
  },
  {
    slug: "yeongdong-line",
    name: "영동선",
    trainTypes: ["무궁화호"],
    summary:
      "영주에서 봉화, 춘양, 분천, 철암을 거쳐 동해까지 이어지는 강원/경북 산악 노선입니다. 백두대간 협곡을 지나는 구간이 많아 관광 수요와 지역 이동 수요가 함께 있습니다.",
    majorStations: [
      "동해", "동백산", "철암", "석포", "분천", "춘양", "봉화", "영주", "안동", "의성", "북영천", "동대구",
    ],
    keyJourneys: [
      { from: "동해", to: "동대구", duration: "무궁화호로 4시간 안팎(정차역 다수 경유)" },
    ],
    bookingDates: [
      { date: "9월 4일(금)", note: "교통약자 사전예매" },
      { date: "9월 7일(월)", note: "일반예매, 전 노선 일반열차와 함께 시작" },
    ],
    frequencyNote: "무궁화호 1670/1680 등 소수 편성이 동해-동대구 구간을 오가며, 산악 지형이라 배차가 촘촘하지 않습니다.",
    crowdingLevel: "보통",
    crowdingNote:
      "장거리 귀성보다는 강원/경북 산간 지역 간 이동, 백두대간 협곡열차(V-train) 연계 관광 수요가 섞여 있어, 경부/호남선처럼 절대적인 좌석 경쟁은 덜하지만 배차 자체가 적어 여유 있게 예매하는 게 안전합니다.",
    alternatives: [
      {
        title: "동해역에서 강릉선으로 환승",
        body: "강릉 방향으로 가려면 동해역에서 강릉선 KTX-이음이나 누리로 셔틀로 갈아타는 경로가 있습니다.",
      },
      {
        title: "V-train(백두대간협곡열차)도 함께 검토",
        body: "분천-철암 구간은 관광열차 V-train도 지나는 구간이라, 시간대가 맞으면 예매 시스템이 다른 관광열차 쪽을 확인해보는 것도 방법입니다.",
      },
    ],
    sources: [
      { title: "영동선, 위키백과", url: "https://ko.wikipedia.org/wiki/%EC%98%81%EB%8F%99%EC%84%A0" },
      { title: "영동선, 나무위키", url: "https://namu.wiki/w/%EC%98%81%EB%8F%99%EC%84%A0" },
    ],
  },
  {
    slug: "taebaek-line",
    name: "태백선",
    trainTypes: ["무궁화호", "ITX-마음"],
    summary:
      "제천에서 영월, 사북, 고한을 거쳐 태백(백산)까지 이어지는 노선입니다. 청량리에서 출발하는 열차가 중앙선을 거쳐 직결 운행하며, 강원 남부 탄광 지역과 관광지(고한/사북 카지노, 예미 등)를 잇습니다.",
    majorStations: [
      "청량리", "양평", "원주", "제천", "영월", "예미", "민둥산", "사북", "고한", "태백", "도계", "동해",
    ],
    keyJourneys: [
      { from: "제천", to: "태백", duration: "무궁화호로 약 1시간 50분" },
    ],
    bookingDates: [
      { date: "9월 4일(금)", note: "교통약자 사전예매" },
      { date: "9월 7일(월)", note: "일반예매, 전 노선 일반열차와 함께 시작" },
    ],
    frequencyNote: "청량리-동해 계통이 하루 5왕복 수준으로 운행됩니다.",
    crowdingLevel: "보통",
    crowdingNote:
      "고한/사북 카지노, 관광 수요와 귀성 수요가 겹치는 주말/연휴에는 좌석이 빠르게 소진되는 편이지만, 경부/호남선처럼 인구 밀집 구간은 아니라 상대적으로는 여유가 있습니다.",
    alternatives: [
      {
        title: "제천역에서 충북선/중앙선 환승",
        body: "태백선 좌석이 부족하면 제천역까지 중앙선이나 충북선으로 이동한 뒤 갈아타는 경로를 확인해보세요.",
      },
      {
        title: "동해역에서 영동선/강릉선 연계",
        body: "태백선 종점인 동해역에서 영동선, 강릉선으로 갈아탈 수 있어, 목적지에 따라 우회 경로를 짜볼 만합니다.",
      },
    ],
    sources: [
      { title: "태백선, 위키백과", url: "https://ko.wikipedia.org/wiki/%ED%83%9C%EB%B0%B1%EC%84%A0" },
      { title: "태백선 기차 시간표 ITX-마음/무궁화호(동해역~청량리역) 요금 총정리", url: "https://krailroad.co.kr/%ED%83%9C%EB%B0%B1%EC%84%A0-%EA%B8%B0%EC%B0%A8-%EC%8B%9C%EA%B0%84%ED%91%9C-itx-%EB%A7%88%EC%9D%8C-%EB%AC%B4%EA%B6%81%ED%99%94%ED%98%B8-%EB%8F%99%ED%95%B4%EC%97%AD%EC%B2%AD%EB%9F%89%EB%A6%AC%EC%97%AD/" },
    ],
  },
  {
    slug: "seohae-line",
    name: "서해선",
    trainTypes: ["ITX-마음"],
    summary:
      "화성 서화성에서 향남, 안중, 인주, 합덕을 거쳐 홍성까지 이어지는 신설 노선입니다. 2024년 11월 서화성-홍성 구간이 먼저 개통됐고, 서울 도심에서는 현재 장항선 경유(용산-신창-홍성)로 ITX-마음이 직결 운행 중입니다. 대곡까지 잇는 구간은 2027년 개통이 목표입니다.",
    majorStations: [
      "용산", "영등포", "천안", "신창", "서화성", "화성시청", "향남", "안중", "인주", "합덕", "홍성",
    ],
    keyJourneys: [
      { from: "용산", to: "홍성", duration: "장항선 경유 ITX-마음 약 48분~1시간대" },
    ],
    bookingDates: [
      { date: "9월 4일(금)", note: "교통약자 사전예매" },
      { date: "9월 7일(월)", note: "일반예매, 전 노선 일반열차와 함께 시작" },
    ],
    frequencyNote: "신설 노선이라 대곡 연결 전까지는 서울 접근이 장항선 경유 ITX-마음에 의존하고 있어 편성이 많지 않습니다.",
    crowdingLevel: "보통",
    crowdingNote:
      "아직 대곡-서화성 구간이 개통되지 않아 수도권 서부(김포/부천) 쪽에서 곧바로 접근하기는 어렵고, 용산 경유 노선에 수요가 몰리는 구조라 명절엔 좌석이 금방 소진될 수 있습니다.",
    alternatives: [
      {
        title: "용산역 경유 노선을 우선 확인",
        body: "현재는 용산-신창-홍성 경유 ITX-마음이 사실상 서울에서 서해선 축으로 가는 주된 경로입니다. 코레일톡에서 도착역을 홍성으로 두고 검색하세요.",
      },
      {
        title: "홍성역에서 장항선 무궁화호 연계",
        body: "ITX-마음이 매진이면 장항선 무궁화호로 갈아타는 경로도 있습니다. 소요시간은 늘지만 좌석 확보 가능성이 높아집니다.",
      },
    ],
    sources: [
      { title: "서해선축 3개 노선 ITX-마음 구간별 운임 알림, 코레일(공식)", url: "https://www.korail.com/tour/customer/notice/16567" },
      { title: "서해선 KTX, 나무위키", url: "https://namu.wiki/w/%EC%84%9C%ED%95%B4%EC%84%A0%20KTX" },
    ],
  },
  {
    slug: "gyeongchun-line",
    name: "경춘선",
    trainTypes: ["ITX-청춘", "수도권 전철"],
    summary:
      "용산에서 상봉, 청량리를 거쳐 가평, 남춘천, 춘천까지 이어지는 수도권 동북부 노선입니다. 예매가 필요한 급행 ITX-청춘과, 예매 없이 탈 수 있는 수도권 전철 경춘선이 같은 선로를 함께 씁니다.",
    majorStations: [
      "용산", "옥수", "왕십리", "청량리", "상봉", "퇴계원", "평내호평", "마석", "청평", "가평", "강촌", "남춘천", "춘천",
    ],
    keyJourneys: [
      { from: "용산", to: "춘천", duration: "ITX-청춘 약 1시간 20분대" },
    ],
    bookingDates: [
      { date: "9월 4일(금)", note: "교통약자 사전예매" },
      { date: "9월 7일(월)", note: "일반예매, 전 노선 일반열차와 함께 시작" },
    ],
    frequencyNote: "ITX-청춘은 용산-춘천 구간 하루 약 18회 운행합니다.",
    crowdingLevel: "보통",
    crowdingNote:
      "귀성 성격보다는 춘천/가평 방향 나들이, 근교 이동 수요가 큰 노선이라 경부/호남선만큼 명절 특수는 크지 않지만, 연휴 기간 나들이객이 겹치면 ITX-청춘 좌석은 금방 찰 수 있습니다.",
    alternatives: [
      {
        title: "예매 없는 수도권 전철 경춘선 이용",
        body: "ITX-청춘이 매진이어도 같은 구간을 달리는 수도권 전철(입석, 예매 불필요)이 있습니다. 상봉-춘천 약 1시간 20분~1시간 30분대로 시간은 더 걸리지만 명절에도 좌석 걱정 없이 탈 수 있습니다.",
      },
      {
        title: "가평, 남춘천 등 중간역 활용",
        body: "춘천까지 전 구간이 매진이어도 가평, 남춘천까지의 구간 좌석은 남아있을 수 있습니다.",
      },
    ],
    sources: [
      { title: "ITX-청춘, 나무위키", url: "https://namu.wiki/w/ITX-%EC%B2%AD%EC%B6%98" },
      { title: "용산역 경춘선 ITX-청춘 춘천행 열차 시간표/요금표", url: "https://pat.im/1546" },
    ],
  },
  {
    slug: "mokpo-boseong-line",
    name: "목포보성선",
    trainTypes: ["무궁화호", "새마을호"],
    summary:
      "목포 임성리에서 영암, 해남, 강진, 장흥을 거쳐 보성까지 잇는 남해안 신설 노선입니다. 착공 23년 만인 2025년 9월 27일 개통했으며, 기존 경전선(광주송정 경유) 대신 이 노선을 이용하면서 부산-목포 구간 소요시간이 크게 줄었습니다.",
    majorStations: [
      "임성리", "영암", "해남", "강진", "전남장흥", "장동", "신보성", "목포",
    ],
    keyJourneys: [
      { from: "부전", to: "목포", duration: "무궁화호 약 5시간 21분(기존 경전선 경유 6시간 43분 대비 약 1시간 20분 단축)" },
    ],
    bookingDates: [
      { date: "9월 4일(금)", note: "교통약자 사전예매" },
      { date: "9월 7일(월)", note: "일반예매, 전 노선 일반열차와 함께 시작" },
    ],
    frequencyNote: "평일(월~목) 왕복 8회, 주말(금~일) 왕복 10회로 운행합니다.",
    crowdingLevel: "낮음",
    crowdingNote:
      "2025년 9월 개통한 신설 노선이라 아직 인지도가 높지 않고, 해남/강진 등 그동안 철도 접근이 어려웠던 지역이 주요 경유지라 경부/호남선 같은 밀집 경쟁은 없는 편입니다.",
    alternatives: [
      {
        title: "목포역에서 호남선 KTX 환승",
        body: "수도권에서 이 노선으로 오려면 목포역까지 호남선 KTX로 이동한 뒤 목포보성선으로 갈아타는 경로가 일반적입니다.",
      },
      {
        title: "주말 증편 시간대 활용",
        body: "금~일요일에는 평일보다 2회 더 운행하니, 귀성/귀경이 주말과 겹친다면 증편된 시간대를 우선 확인하세요.",
      },
    ],
    sources: [
      { title: "'착공 23년 만에' 목포~보성 남해안철도 27일 개통, 1시간으로 단축, 한국일보", url: "https://www.hankookilbo.com/News/Read/A2025092414490003965" },
      { title: "목포보성선, 위키백과", url: "https://ko.wikipedia.org/wiki/%EB%AA%A9%ED%8F%AC%EB%B3%B4%EC%84%B1%EC%84%A0" },
    ],
  },
  {
    slug: "itx-cheongchun",
    name: "ITX-청춘",
    trainTypes: ["ITX-청춘"],
    summary:
      "경춘선 위를 달리는 전 좌석 지정석 급행 열차입니다. 2012년부터 운행 중이며, 2010년 폐지된 경춘선 무궁화호의 사실상 후신 역할을 하고 있습니다. 향후 GTX-B 개통 시 역할이 대체될 예정이라는 철도 건설 계획 문건도 나와 있어, 지금이 이 열차를 즐길 수 있는 시기라는 시각도 있습니다.",
    majorStations: [
      "용산", "옥수", "왕십리", "청량리", "상봉", "퇴계원", "사릉", "평내호평", "마석", "청평", "가평", "강촌", "남춘천", "춘천",
    ],
    keyJourneys: [
      { from: "용산", to: "춘천", duration: "약 1시간 20분대(경춘선 완행 대비 약 20~30분 단축)" },
    ],
    bookingDates: [
      { date: "9월 4일(금)", note: "교통약자 사전예매(경춘선과 동일)" },
      { date: "9월 7일(월)", note: "일반예매, 전 노선 일반열차와 함께 시작" },
    ],
    frequencyNote: "하루 약 18회 운행하지만, 명절 연휴엔 춘천/가평 방향 나들이 수요와 겹쳐 인기 시간대는 빨리 찹니다.",
    crowdingLevel: "보통",
    crowdingNote:
      "경춘선 노선 자체보다 '지정석, 빠른 급행'이라는 상품성 때문에 몰리는 수요가 있어, 특히 연휴 첫날/마지막날 오전, 오후 시간대는 예매 시작과 함께 빠르게 소진되는 편입니다.",
    alternatives: [
      {
        title: "예매 불필요한 경춘선 전철이 최선의 대안",
        body: "ITX-청춘이 매진이면 같은 선로를 달리는 수도권 전철 경춘선(입석 가능, 예매 불필요)을 타는 게 가장 확실한 대안입니다. 소요시간은 20~30분 더 걸리지만 명절에도 좌석 걱정이 없습니다.",
      },
      {
        title: "상봉/청량리 등 시내 경유 구간에서 갈아타기",
        body: "용산 출발분이 매진이어도 상봉역이나 청량리역에서 출발하는 편에 좌석이 남아있는 경우가 있습니다.",
      },
    ],
    sources: [
      { title: "ITX-청춘, 나무위키", url: "https://namu.wiki/w/ITX-%EC%B2%AD%EC%B6%98" },
      { title: "ITX-청춘/문제점, 나무위키", url: "https://namu.wiki/w/ITX-%EC%B2%AD%EC%B6%98/%EB%AC%B8%EC%A0%9C%EC%A0%90" },
    ],
  },
  {
    slug: "sightseeing-trains",
    name: "관광열차(O-train/V-train)",
    trainTypes: ["관광열차"],
    summary:
      "중부내륙순환열차(O-train)와 백두대간협곡열차(V-train)는 충북/경북/강원의 경치 좋은 구간을 도는 코레일의 대표 관광열차입니다. 중부내륙선, 태백선, 영동선 선로 일부를 함께 쓰며, 매주 월요일 등 정기 운휴일이 있어 일반 명절 예매 일정과는 별도로 확인해야 합니다.",
    majorStations: [
      "청량리/영주", "제천", "분천", "철암", "승부", "양원",
    ],
    keyJourneys: [
      { from: "분천", to: "철암", duration: "V-train 구간 약 40분(관광 목적 저속 운행)" },
    ],
    bookingDates: [
      { date: "명절 특별예매 일정과 무관", note: "일반 승차권과 같은 코레일톡/역 창구에서 예매하되, 정기 운휴일(월요일 등)과 특별 운행 일정은 별도 공지로 확인해야 합니다" },
    ],
    frequencyNote: "일반 KTX/무궁화호보다 하루 운행 횟수 자체가 훨씬 적고, 관광 성격상 정기 운휴일이 있습니다.",
    crowdingLevel: "낮음",
    crowdingNote:
      "귀성/귀경 목적의 노선이 아니라 명절 연휴를 이용한 관광 목적 수요가 대부분이라, 다른 17개 귀성 노선과는 예매 경쟁의 성격 자체가 다릅니다. 다만 연휴 기간 여행객이 몰리면 인기 시간대는 빨리 찰 수 있습니다.",
    alternatives: [
      {
        title: "귀성길 KTX가 매진이어도 대안은 아닙니다",
        body: "관광열차는 저속 운행에 정차가 잦아 이동 목적의 대체 수단으로는 적합하지 않습니다. 태백선/영동선 좌석이 부족할 때, 연휴 자체를 여행 일정으로 바꾸는 경우에 고려할 만합니다.",
      },
      {
        title: "운행 요일을 먼저 확인하세요",
        body: "매주 월요일 등 정기 운휴일이 있어, 명절 연휴 중 특정 요일에는 아예 운행하지 않을 수 있습니다. 예매 전 코레일톡 공지사항을 반드시 확인하세요.",
      },
    ],
    sources: [
      { title: "O-Train, Wikipedia", url: "https://en.wikipedia.org/wiki/O-Train_(Korail)" },
      { title: "백두대간협곡열차(V-train, 브이트레인) 열차시간표와 운임요금, 코레일톡(공식)", url: "https://korailtalk.co.kr/165/" },
      { title: "중부내륙순환열차(O-train, 오트레인) 열차시간표와 운임요금표, 코레일톡(공식)", url: "https://korailtalk.co.kr/164/" },
    ],
  },
];

export function getRoute(slug: string): TrainRoute | undefined {
  return routes.find((r) => r.slug === slug);
}

// schedule.ts의 노선명 텍스트("경부, 경전, 동해, ..." 형태)를 routes.ts 슬러그로 매칭하기 위한 표.
// 노선명이 짧은 접두어(예: "경부")로 표기되는 경우가 많아 별도 매핑을 둡니다.
export const routeNameToSlug: Record<string, string> = {
  "경부": "gyeongbu-line",
  "경부선": "gyeongbu-line",
  "경전": "gyeongjeon-line",
  "경전선": "gyeongjeon-line",
  "동해": "donghae-line",
  "동해선": "donghae-line",
  "중부내륙": "jungbu-naeryuk-line",
  "중부내륙선": "jungbu-naeryuk-line",
  "경북": "gyeongbuk-line",
  "경북선": "gyeongbuk-line",
  "대구": "daegu-line",
  "대구선": "daegu-line",
  "충북": "chungbuk-line",
  "충북선": "chungbuk-line",
  "교외선": "gyoae-line",
  "호남": "honam-line",
  "호남선": "honam-line",
  "전라": "jeolla-line",
  "전라선": "jeolla-line",
  "중앙": "jungang-line",
  "중앙선": "jungang-line",
  "강릉": "gangneung-line",
  "강릉선": "gangneung-line",
  "장항": "janghang-line",
  "장항선": "janghang-line",
  "영동": "yeongdong-line",
  "영동선": "yeongdong-line",
  "태백": "taebaek-line",
  "태백선": "taebaek-line",
  "서해": "seohae-line",
  "서해선": "seohae-line",
  "경춘": "gyeongchun-line",
  "경춘선": "gyeongchun-line",
  "목포보성선": "mokpo-boseong-line",
};

export const metadata = {
  title: "출처, 2026 추석 기차표 예매 총정리",
  description: "이 사이트의 예매 일정 정보에 대한 공식 채널과 참고 기사 출처 목록입니다.",
  openGraph: {
    title: "출처",
    description: "이 사이트의 예매 일정 정보에 대한 공식 채널과 참고 기사 출처 목록입니다.",
  },
};

const officialLinks = [
  { title: "코레일(한국철도공사) 공식 홈페이지", url: "https://www.letskorail.com" },
  { title: "SRT(에스알) 공식 홈페이지", url: "https://etk.srail.kr" },
];

const newsLinks = [
  { title: "2026 추석 KTX SRT 예매 언제, 승차권 일정, 달라진 점 총정리, 아주경제", url: "https://www.ajunews.com/view/20260818084321406" },
  { title: "2026년 추석 KTX 열차 승차권 예매 일정 발표, 국제뉴스", url: "https://www.gukjenews.com/news/articleView.html?idxno=3665461" },
  { title: "KTX, 2026년 추석 승차권 예매 일정 공개, 금강일보", url: "https://www.ggilbo.com/news/articleView.html?idxno=1176474" },
];

const incidentLinks = [
  { title: "\"접속 폭주로\"...추석 기차표 예매 첫날 '먹통', 서울이코노미뉴스(2025-09-17)", url: "https://www.seouleconews.com/news/articleView.html?idxno=86354" },
];

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-2xl font-bold">출처</h1>
      <p className="mb-10 text-zinc-600 dark:text-zinc-400">
        이 사이트의 일정 정보는 코레일 발표를 인용한 언론보도를 취합한 것입니다. 예매 전 반드시
        공식 채널에서 최종 확인하세요.
      </p>

      <h2 className="mb-4 text-lg font-bold">공식 채널(1차 확인용)</h2>
      <ul className="mb-10 grid gap-2 sm:grid-cols-2">
        {officialLinks.map((s) => (
          <li key={s.url}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-zinc-200 px-4 py-2.5 text-sm text-sky-600 hover:bg-zinc-50 hover:underline dark:border-zinc-800 dark:text-sky-400 dark:hover:bg-zinc-900"
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>

      <h2 className="mb-4 text-lg font-bold">참고 기사</h2>
      <ul className="mb-10 space-y-2 text-sm">
        {newsLinks.map((s) => (
          <li key={s.url}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:underline dark:text-sky-400"
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>

      <h2 className="mb-4 text-lg font-bold">접속 장애 관련 출처</h2>
      <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
        예매 당일 접속 폭주·먹통 대응 페이지는 작년(2025년) 추석 예매 첫날 실제 사례를 근거로
        작성했습니다.
      </p>
      <ul className="space-y-2 text-sm">
        {incidentLinks.map((s) => (
          <li key={s.url}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:underline dark:text-sky-400"
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

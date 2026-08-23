import Link from "next/link";

export const metadata = {
  title: "추석 기차표 매진됐을 때, 취소표 잡는 법과 대안 총정리",
  description: "예매에 실패했을 때 취소표를 잡는 시점, 입석/자유석, 대체 교통수단을 정리했습니다.",
};

const strategies = [
  {
    title: "잔여석 풀리는 시점을 노리세요",
    body: "9월 11일 오후 3시부터 팔리지 않은 좌석이 일반판매로 풀립니다. 예매 경쟁이 끝난 직후라 상대적으로 여유가 생기는 시점입니다.",
  },
  {
    title: "결제기한 다음 날 새벽을 확인하세요",
    body: "일반예매분은 9월 15일, 사전예매분은 9월 18일까지 결제해야 하고, 넘기면 좌석이 자동으로 취소되어 다시 풀립니다. 결제기한 다음 날 코레일+ 앱을 열어 취소표를 확인해보세요.",
  },
  {
    title: "입석/자유석이 있는 열차를 확인하세요",
    body: "지정석이 매진이어도 입석이나 자유석 판매를 별도로 하는 열차, 시간대가 있습니다. 장거리보다는 상대적으로 부담이 적은 구간에서 시도해볼 만합니다.",
  },
  {
    title: "무궁화호 등 상대적으로 여유 있는 열차도 고려하세요",
    body: "KTX, SRT 구간에 비해 일반열차(무궁화호 등)는 상대적으로 좌석이 남아있는 경우가 있습니다. 시간은 더 걸리지만 대안이 될 수 있습니다.",
  },
  {
    title: "고속버스, 시외버스도 함께 검색하세요",
    body: "일부 구간은 기차보다 고속/시외버스가 배차 간격이 촘촘해 오히려 표를 구하기 쉬운 경우가 있습니다. 코버스, 버스타고 등에서 함께 확인해보세요.",
  },
];

export default function SoldOutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
        추석 기차표 매진, 그래도 구할 수 있는 방법
      </h1>
      <p className="mb-10 max-w-3xl text-zinc-600 dark:text-zinc-400">
        예매에 실패했다고 포기하지 마세요. 명절 승차권은 결제기한을 넘겨 자동 취소되는 좌석이
        꾸준히 나옵니다.
      </p>

      <div className="space-y-4">
        {strategies.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h2 className="mb-2 font-semibold text-amber-600 dark:text-amber-400">{s.title}</h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm text-zinc-500 dark:text-zinc-400">
        정확한 예매 일정은{" "}
        <Link href="/schedule" className="text-amber-600 hover:underline dark:text-amber-400">
          노선별 일정 페이지
        </Link>
        에서 확인하세요.
      </p>
    </div>
  );
}

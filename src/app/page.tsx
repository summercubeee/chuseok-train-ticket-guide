import Link from "next/link";
import { keyDates, SPECIAL_PERIOD, CHUSEOK_DAY } from "@/data/schedule";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <section className="mb-16 text-center">
        <p className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
          2026년 8월 23일 기준, 언론보도 취합
        </p>
        <h1 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          2026 추석 기차표,{" "}
          <span className="text-amber-500">예매 언제 어떻게 하나요</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
          추석 당일은 {CHUSEOK_DAY}, 특별수송기간은 {SPECIAL_PERIOD}. 코레일과 SRT 예매가
          통합된 첫 명절이라 달라진 점이 많습니다. 날짜, 노선, 방법을 한 번에 정리했습니다.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/schedule"
            className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-600"
          >
            내 노선 예매일 확인하기 →
          </Link>
          <Link
            href="/how-to"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            예매 방법 보기
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-xl font-bold">핵심 일정 한눈에</h2>
        <div className="space-y-3">
          {keyDates.map((d) => (
            <div
              key={d.label}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="mb-1 flex flex-wrap items-baseline gap-2">
                <span className="font-semibold text-amber-600 dark:text-amber-400">{d.label}</span>
                <span className="text-sm text-zinc-500">{d.date}</span>
                {d.time !== "-" && <span className="text-sm text-zinc-400">{d.time}</span>}
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{d.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="mb-3 text-lg font-bold">올해 가장 크게 달라진 점</h2>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          코레일과 SRT의 회원, 예매 시스템이 통합되면서 코레일+ 앱 하나로 KTX와 옛 SRT 노선(수서 출발)을
          함께 예매할 수 있게 됐습니다. SRT에만 가입했던 경우 예매 시작 전에 별도 전환 절차가
          필요할 수 있으니, 미리 확인해두는 걸 추천합니다. 자세한 방법은{" "}
          <Link href="/how-to" className="text-amber-600 hover:underline dark:text-amber-400">
            예매 방법 페이지
          </Link>
          에 정리했습니다.
        </p>
      </section>
    </div>
  );
}

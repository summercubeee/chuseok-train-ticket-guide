import Link from "next/link";
import { routes } from "@/data/routes";

export const metadata = {
  title: "노선별 상세 가이드, 정차역/소요시간/매진 대안 총정리 | 2026 추석 기차표 총정리",
  description: "경부선, 호남선, 강릉선 등 명절 열차 노선별 정차역, 소요시간, 예매일, 매진 시 대안을 한눈에 정리했습니다.",
  openGraph: {
    title: "노선별 상세 가이드",
    description: "경부선, 호남선, 강릉선 등 명절 열차 노선별 정차역, 소요시간, 예매일, 매진 시 대안을 한눈에 정리했습니다.",
  },
};

const crowdingStyle: Record<string, string> = {
  "매우 높음": "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  "높음": "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  "보통": "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  "낮음": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
};

export default function RoutesIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">노선별 상세 가이드</h1>
      <p className="mb-10 max-w-3xl text-zinc-600 dark:text-zinc-400">
        내가 탈 노선의 정차역, 실제 소요시간, 예매일, 명절 혼잡도, 매진됐을 때 그 노선만의
        구체적인 대안까지 한 페이지씩 정리했습니다. 예매 시작 전에 미리 확인해두면 당일 훨씬
        빠르게 움직일 수 있습니다.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {routes.map((r) => (
          <Link
            key={r.slug}
            href={`/routes/${r.slug}`}
            className="block rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-amber-300 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">{r.name}</span>
              <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${crowdingStyle[r.crowdingLevel]}`}>
                {r.crowdingLevel}
              </span>
            </div>
            <p className="mb-2 text-xs text-zinc-400">{r.trainTypes.join(", ")}</p>
            <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{r.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

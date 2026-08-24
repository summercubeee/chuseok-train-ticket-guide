import Link from "next/link";
import { notFound } from "next/navigation";
import { routes, getRoute } from "@/data/routes";

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata(props: PageProps<"/routes/[slug]">) {
  const { slug } = await props.params;
  const r = getRoute(slug);
  if (!r) return {};
  return {
    title: `${r.name} 추석 예매 가이드, 정차역/소요시간/대안 총정리 | 2026 추석 기차표 총정리`,
    description: r.summary,
    openGraph: {
      title: `${r.name} 추석 예매 가이드`,
      description: r.summary,
    },
  };
}

const crowdingStyle: Record<string, string> = {
  "매우 높음": "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  "높음": "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  "보통": "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  "낮음": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
};

export default async function RoutePage(props: PageProps<"/routes/[slug]">) {
  const { slug } = await props.params;
  const r = getRoute(slug);
  if (!r) notFound();

  const related = routes.filter((x) => x.slug !== r.slug).slice(0, 3);

  const routeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${r.name} 추석 예매 가이드`,
    description: r.summary,
    about: r.name,
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routeJsonLd) }}
      />
      <nav className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
        <Link href="/" className="hover:text-amber-600">홈</Link>
        <span className="mx-1">/</span>
        <Link href="/routes" className="hover:text-amber-600">노선별 상세 가이드</Link>
        <span className="mx-1">/</span>
        <span>{r.name}</span>
      </nav>

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <h1 className="text-2xl font-bold leading-snug sm:text-3xl">{r.name}</h1>
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${crowdingStyle[r.crowdingLevel]}`}>
          명절 혼잡도: {r.crowdingLevel}
        </span>
      </div>
      <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
        운행 열차: {r.trainTypes.join(", ")}
      </p>

      <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-zinc-700 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-zinc-300">
        <p className="mb-2 font-semibold text-amber-700 dark:text-amber-400">노선 요약</p>
        <p>{r.summary}</p>
      </div>

      <h2 className="mb-3 text-lg font-bold">정차역</h2>
      <p className="mb-8 leading-relaxed text-zinc-700 dark:text-zinc-300">
        {r.majorStations.join(" - ")}
      </p>

      <h2 className="mb-3 text-lg font-bold">주요 구간 소요시간</h2>
      <div className="mb-8 overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full min-w-[420px] border-collapse text-sm">
          <thead>
            <tr className="bg-zinc-100 text-left dark:bg-zinc-900">
              <th className="p-3 font-semibold">구간</th>
              <th className="p-3 font-semibold">소요시간</th>
            </tr>
          </thead>
          <tbody>
            {r.keyJourneys.map((j) => (
              <tr key={`${j.from}-${j.to}`} className="border-t border-zinc-200 align-top dark:border-zinc-800">
                <td className="p-3 font-medium text-zinc-700 dark:text-zinc-300">{j.from} → {j.to}</td>
                <td className="p-3 text-zinc-600 dark:text-zinc-400">{j.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-8 text-sm text-zinc-500 dark:text-zinc-400">{r.frequencyNote}</p>

      <h2 className="mb-3 text-lg font-bold">2026 추석 예매일</h2>
      <div className="mb-8 space-y-2">
        {r.bookingDates.map((d) => (
          <div
            key={d.date}
            className="rounded-xl border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950"
          >
            <span className="font-semibold text-amber-600 dark:text-amber-400">{d.date}</span>
            <span className="ml-2 text-zinc-600 dark:text-zinc-400">{d.note}</span>
          </div>
        ))}
      </div>

      <h2 className="mb-3 text-lg font-bold">명절엔 이렇게 붐빕니다</h2>
      <p className="mb-8 leading-relaxed text-zinc-700 dark:text-zinc-300">{r.crowdingNote}</p>

      <h2 className="mb-4 text-lg font-bold">매진됐을 때 이 노선만의 대안</h2>
      <div className="mb-10 space-y-4">
        {r.alternatives.map((a) => (
          <div
            key={a.title}
            className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h3 className="mb-2 font-semibold text-amber-600 dark:text-amber-400">{a.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{a.body}</p>
          </div>
        ))}
      </div>

      <div className="mb-10 rounded-2xl border border-zinc-200 bg-white p-5 text-sm dark:border-zinc-800 dark:bg-zinc-950">
        <p className="mb-2 font-semibold text-zinc-700 dark:text-zinc-300">전체 예매 일정과 함께 보기</p>
        <p className="text-zinc-600 dark:text-zinc-400">
          예매 시작/결제기한, 매진 대응법 등 공통 정보는{" "}
          <Link href="/schedule" className="text-amber-600 hover:underline dark:text-amber-400">노선별 일정 페이지</Link>
          와{" "}
          <Link href="/sold-out" className="text-amber-600 hover:underline dark:text-amber-400">매진 대응법 페이지</Link>
          에서 확인하세요.
        </p>
      </div>

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-3 text-lg font-bold">다른 노선도 확인해보세요</h2>
          <ul className="space-y-2">
            {related.map((r2) => (
              <li key={r2.slug}>
                <Link
                  href={`/routes/${r2.slug}`}
                  className="block rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-700 transition-colors hover:border-amber-300 hover:text-amber-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                >
                  {r2.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800">
        <p className="mb-2 font-semibold text-zinc-700 dark:text-zinc-300">출처</p>
        <ul className="space-y-1">
          {r.sources.map((s) => (
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

      <Link href="/routes" className="mt-10 inline-block text-sm text-zinc-500 hover:text-amber-600">
        ← 노선별 상세 가이드 전체 보기
      </Link>
    </div>
  );
}

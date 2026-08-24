import Link from "next/link";
import { keyDates, preBookingRoutes, generalBookingRoutes, SPECIAL_PERIOD } from "@/data/schedule";
import { routeNameToSlug } from "@/data/routes";

export const metadata = {
  title: "2026 추석 기차표 노선별 예매 일정, 내 노선은 언제인가요",
  description: "2026년 추석 KTX, SRT 노선별 예매 가능일을 정리했습니다.",
  openGraph: {
    title: "내 노선은 언제 예매하나요, 노선별 예매 일정",
    description: "2026년 추석 KTX, SRT 노선별 예매 가능일을 정리했습니다.",
  },
};

function RouteLinks({ text }: { text: string }) {
  const parenIndex = text.indexOf("(");
  const mainPart = parenIndex === -1 ? text : text.slice(0, parenIndex).trim();
  const suffix = parenIndex === -1 ? "" : text.slice(parenIndex);
  const tokens = mainPart.split(",").map((t) => t.trim()).filter(Boolean);

  return (
    <>
      {tokens.map((token, i) => {
        const slug = routeNameToSlug[token];
        return (
          <span key={`${token}-${i}`}>
            {slug ? (
              <Link
                href={`/routes/${slug}`}
                className="text-amber-700 hover:underline dark:text-amber-400"
              >
                {token}
              </Link>
            ) : (
              token
            )}
            {i < tokens.length - 1 ? ", " : ""}
          </span>
        );
      })}
      {suffix}
    </>
  );
}

export default function SchedulePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "추석 기차표 예매 대상 기간은 언제인가요",
        acceptedAnswer: { "@type": "Answer", text: `특별수송기간은 ${SPECIAL_PERIOD}에 운행하는 열차가 예매 대상입니다.` },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
        2026 추석 기차표, 내 노선은 언제 예매하나요
      </h1>
      <p className="mb-10 max-w-3xl text-zinc-600 dark:text-zinc-400">
        예매는 노선별로 날짜가 나뉘어 열립니다. 본인 노선 예매일을 놓쳐도 예매 종료일(9월 11일)까지는
        계속 시도할 수 있지만, 인기 노선/시간대는 첫날 빠르게 소진되니 해당 날짜에 접속하는 게 유리합니다.
      </p>

      <h2 className="mb-4 text-lg font-bold">교통약자 사전예매(9월 3일~4일, 오전 9시~오후 3시)</h2>
      <div className="mb-10 overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full min-w-[480px] border-collapse text-sm">
          <thead>
            <tr className="bg-zinc-100 text-left dark:bg-zinc-900">
              <th className="p-3 font-semibold">날짜</th>
              <th className="p-3 font-semibold">해당 노선</th>
            </tr>
          </thead>
          <tbody>
            {preBookingRoutes.map((r) => (
              <tr key={r.date} className="border-t border-zinc-200 align-top dark:border-zinc-800">
                <td className="p-3 font-medium text-zinc-700 dark:text-zinc-300">
                  {r.date}({r.weekday})
                </td>
                <td className="p-3 text-zinc-600 dark:text-zinc-400">
                  <RouteLinks text={r.routes} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-10 text-sm text-zinc-500 dark:text-zinc-400">
        대상: 65세 이상 경로, 등록 장애인, 국가유공자(교통지원 대상), 임산부(2026년 신규 포함)
      </p>

      <h2 className="mb-4 text-lg font-bold">일반예매(9월 7일~11일, 오전 7시~오후 1시)</h2>
      <div className="mb-10 overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full min-w-[480px] border-collapse text-sm">
          <thead>
            <tr className="bg-zinc-100 text-left dark:bg-zinc-900">
              <th className="p-3 font-semibold">날짜</th>
              <th className="p-3 font-semibold">해당 노선</th>
            </tr>
          </thead>
          <tbody>
            {generalBookingRoutes.map((r) => (
              <tr key={r.date} className="border-t border-zinc-200 align-top dark:border-zinc-800">
                <td className="p-3 font-medium text-zinc-700 dark:text-zinc-300">
                  {r.date}({r.weekday})
                </td>
                <td className="p-3 text-zinc-600 dark:text-zinc-400">
                  <RouteLinks text={r.routes} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-10 text-sm text-zinc-500 dark:text-zinc-400">
        진한 색으로 표시된 노선명을 누르면 해당 노선의 정차역, 소요시간, 매진 시 대안을 담은{" "}
        <Link href="/routes" className="text-amber-700 hover:underline dark:text-amber-400">
          노선별 상세 가이드
        </Link>
        로 이동합니다.
      </p>

      <h2 className="mb-4 text-lg font-bold">전체 일정 요약</h2>
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
    </div>
  );
}

import { faq } from "@/data/schedule";

export const metadata = {
  title: "2026 추석 기차표 예매 방법, 코레일 SRT 통합 후 어디서 예매하나요",
  description: "코레일+ 앱 통합 회원전환 방법과 추석 기차표 예매 절차를 정리했습니다.",
};

const steps = [
  {
    title: "코레일+ 앱 통합 회원 상태부터 확인하세요",
    body: "2026년부터 코레일과 SRT 회원, 예매 시스템이 통합됐습니다. 기존 코레일 회원이거나 두 서비스에 모두 가입했던 경우 자동 전환되지만, SRT에만 가입했던 경우 예매 시작 전에 SR 안내에 따라 코레일 신규가입과 이용실적 이관 절차를 밟아야 합니다. 예매 시작일에 몰려서 처리하면 시간을 뺏길 수 있으니 최소 며칠 전에 미리 확인해두세요.",
  },
  {
    title: "본인 대상 예매 유형을 확인하세요",
    body: "65세 이상, 등록 장애인, 국가유공자(교통지원 대상), 임산부라면 9월 3~4일 교통약자 사전예매 대상입니다. 해당하지 않는다면 9월 7~11일 일반예매를 이용해야 합니다.",
  },
  {
    title: "본인 노선 예매일과 시간에 맞춰 접속하세요",
    body: "일반예매는 매일 오전 7시부터 오후 1시까지 진행되며, 노선별로 예매 가능일이 다릅니다. 정확한 날짜는 노선별 일정 페이지에서 확인하세요. 예매 시작 5~10분 전에 미리 앱에 로그인하고 결제수단을 등록해두는 게 좋습니다.",
  },
  {
    title: "결제기한을 놓치지 마세요",
    body: "일반예매로 확보한 좌석은 9월 12일 0시부터 9월 15일 23시 59분까지 결제해야 합니다. 사전예매분은 9월 18일까지입니다. 기한을 넘기면 좌석이 자동으로 취소되어 다른 사람에게 풀립니다.",
  },
  {
    title: "예매를 놓쳤다면 잔여석과 취소표를 노리세요",
    body: "9월 11일 오후 3시부터 팔리지 않은 잔여석이 일반판매로 풀립니다. 결제기한(9월 15일, 9월 18일) 다음 날에도 자동취소된 좌석이 다시 나올 수 있습니다. 자세한 전략은 매진 대응법 페이지에 정리했습니다.",
  },
];

export default function HowToPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
        추석 기차표 예매 방법, 순서대로 정리
      </h1>
      <p className="mb-10 max-w-3xl text-zinc-600 dark:text-zinc-400">
        코레일과 SRT가 통합된 첫 명절이라 예년과 달라진 부분이 있습니다. 순서대로 따라 하면
        헷갈릴 일이 적습니다.
      </p>

      <ol className="mb-12 space-y-5">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                {i + 1}
              </span>
              <h2 className="font-semibold">{step.title}</h2>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{step.body}</p>
          </li>
        ))}
      </ol>

      <h2 className="mb-4 text-lg font-bold">자주 묻는 질문</h2>
      <div className="space-y-3">
        {faq.map((item) => (
          <details
            key={item.q}
            className="group rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <summary className="cursor-pointer list-none font-medium marker:content-none">
              {item.q}
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

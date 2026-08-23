import Link from "next/link";
import { questions } from "@/data/questions";

export const metadata = {
  title: "다들 궁금해하는 질문 | 2026 추석 기차표 총정리",
  description: "추석 기차표 예매를 두고 실제로 많이 헷갈려하는 질문들을 모았습니다.",
  openGraph: {
    title: "다들 궁금해하는 질문",
    description: "추석 기차표 예매를 두고 실제로 많이 헷갈려하는 질문들을 모았습니다.",
  },
};

export default function QuestionsPage() {
  const grouped = questions.reduce<Record<string, typeof questions>>((acc, q) => {
    (acc[q.category] ??= []).push(q);
    return acc;
  }, {});

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">다들 궁금해하는 질문</h1>
      <p className="mb-10 text-zinc-600 dark:text-zinc-400">
        추석 기차표 예매를 두고 실제로 많이 헷갈려하는 질문들을 모았습니다.
      </p>

      <div className="space-y-10">
        {Object.entries(grouped).map(([label, items]) => (
          <div key={label}>
            <h2 className="mb-4 text-lg font-bold text-amber-700 dark:text-amber-400">{label}</h2>
            <ul className="space-y-2">
              {items.map((q) => (
                <li key={q.slug}>
                  <Link
                    href={`/${q.slug}`}
                    className="block rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700 transition-colors hover:border-amber-300 hover:text-amber-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                  >
                    {q.question}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

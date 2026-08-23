"use client";

import { useState } from "react";

type Station = "general" | "seoul-cheongnyangni" | "yongsan" | "suseo" | "seoul-gyeongbu";

const stationOptions: { value: Station; label: string }[] = [
  { value: "general", label: "전국 일반열차(무궁화호 등)" },
  { value: "seoul-cheongnyangni", label: "서울/청량리 출발(경전, 강릉, 동해, 중앙, 중부내륙선)" },
  { value: "yongsan", label: "용산 출발(호남, 전라선)" },
  { value: "suseo", label: "수서 출발(경부, 경전, 동해, 호남, 전라선, 옛 SRT)" },
  { value: "seoul-gyeongbu", label: "서울 출발(경부선)" },
];

const stationDate: Record<Station, string> = {
  general: "9월 7일(월)",
  "seoul-cheongnyangni": "9월 8일(화)",
  yongsan: "9월 9일(수)",
  suseo: "9월 10일(목)",
  "seoul-gyeongbu": "9월 11일(금)",
};

interface Result {
  isVulnerable: boolean;
  bookingDate: string;
  bookingTime: string;
  paymentDeadline: string;
}

export default function MyCaseClient() {
  const [isVulnerable, setIsVulnerable] = useState(false);
  const [station, setStation] = useState<Station>("general");
  const [result, setResult] = useState<Result | null>(null);

  const handleCheck = () => {
    if (isVulnerable) {
      setResult({
        isVulnerable: true,
        bookingDate: "9월 3일(목)~4일(금)",
        bookingTime: "오전 9시~오후 3시",
        paymentDeadline: "9월 18일(금)까지",
      });
    } else {
      setResult({
        isVulnerable: false,
        bookingDate: stationDate[station],
        bookingTime: "오전 7시~오후 1시",
        paymentDeadline: "9월 12일(토) 0시~9월 15일(화) 23시 59분",
      });
    }
  };

  return (
    <div>
      <div className="mb-8 space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={isVulnerable}
            onChange={(e) => setIsVulnerable(e.target.checked)}
            className="h-4 w-4"
          />
          65세 이상, 등록 장애인, 국가유공자(교통지원 대상), 또는 임산부입니다
        </label>

        {!isVulnerable && (
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              주로 이용하는 출발역/노선
            </span>
            <select
              value={station}
              onChange={(e) => setStation(e.target.value as Station)}
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
            >
              {stationOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        )}

        <button
          type="button"
          onClick={handleCheck}
          className="rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-600"
        >
          내 예매일 확인하기
        </button>
      </div>

      {result && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/40 dark:bg-amber-950/20">
          <p className="mb-3 text-sm font-semibold text-amber-700 dark:text-amber-400">
            {result.isVulnerable ? "교통약자 사전예매 대상입니다" : "일반예매 대상입니다"}
          </p>
          <dl className="space-y-2 text-sm">
            <div>
              <dt className="inline font-medium text-zinc-700 dark:text-zinc-300">예매일: </dt>
              <dd className="inline text-zinc-600 dark:text-zinc-400">{result.bookingDate}</dd>
            </div>
            <div>
              <dt className="inline font-medium text-zinc-700 dark:text-zinc-300">시간: </dt>
              <dd className="inline text-zinc-600 dark:text-zinc-400">{result.bookingTime}</dd>
            </div>
            <div>
              <dt className="inline font-medium text-zinc-700 dark:text-zinc-300">결제기한: </dt>
              <dd className="inline text-zinc-600 dark:text-zinc-400">{result.paymentDeadline}</dd>
            </div>
          </dl>
        </div>
      )}

      <p className="mt-6 text-xs text-zinc-400">
        이 결과는 2026년 8월 23일 기준 언론보도를 취합한 참고용입니다. 실제 예매 전 코레일, SRT
        공식 공지로 최종 확인하세요.
      </p>
    </div>
  );
}

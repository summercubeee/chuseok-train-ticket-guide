import MyCaseClient from "./MyCaseClient";

export const metadata = {
  title: "나는 어디 해당되는데? 내 예매일 확인하기 | 2026 추석 기차표 총정리",
  description: "교통약자 여부와 출발역을 입력하면 내가 언제 예매할 수 있는지 알려드립니다.",
  openGraph: {
    title: "나는 어디 해당되는데? 내 예매일 확인하기",
    description: "교통약자 여부와 출발역을 입력하면 내가 언제 예매할 수 있는지 알려드립니다.",
  },
};

export default function MyCasePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">나는 어디 해당되는데?</h1>
      <p className="mb-10 text-zinc-600 dark:text-zinc-400">
        교통약자 여부와 주로 타는 노선을 입력하면 내 예매일과 결제기한을 바로 알려드립니다.
      </p>
      <MyCaseClient />
    </div>
  );
}

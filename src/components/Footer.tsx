export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p>
          이 사이트의 일정은 언론보도로 취합한 정보이며, 실제 예매 전 반드시 코레일(letskorail.com), SRT(srail.kr)
          공식 공지로 최종 확인하시기 바랍니다. 일정은 코레일 발표에 따라 변경될 수 있습니다.
        </p>
        <p className="mt-2">최종 자료 조사일: 2026-08-23</p>
      </div>
    </footer>
  );
}

import { questions } from "@/data/questions";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const items = [
  {
    title: "2026 추석 기차표 예매 일정 총정리",
    link: `${SITE_URL}/schedule`,
    description: "교통약자 사전예매 9월 3~4일, 일반예매 9월 7~11일, 노선별 정확한 날짜를 정리했습니다.",
  },
  {
    title: "2026 추석 기차표 예매 방법, 코레일 SRT 통합 후 어떻게 달라졌나",
    link: `${SITE_URL}/how-to`,
    description: "코레일+ 앱 통합 회원전환 방법과 예매 절차를 정리했습니다.",
  },
  {
    title: "추석 기차표 매진됐을 때 대처법",
    link: `${SITE_URL}/sold-out`,
    description: "취소표 잡는 시점, 입석/자유석, 대체 교통수단까지 정리했습니다.",
  },
];

export async function GET() {
  const lastBuildDate = new Date("2026-08-23").toUTCString();

  const questionItems = questions.map((q) => ({
    title: q.question,
    link: `${SITE_URL}/${q.slug}`,
    description: q.intro,
  }));

  const itemsXml = [...items, ...questionItems]
    .map(
      (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <guid>${item.link}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${lastBuildDate}</pubDate>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>ko-kr</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, WavyUnderline, GradientLine } from "@/components/ui/fade-in";
import { CaseExamples } from "@/components/knowledge/CaseExamples";
import { LINE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "訪問看護を知る | 訪問看護ステーションミライズ",
  description:
    "訪問看護とは何か、ミライズの5つの特長、対象となる疾患・症状、ご利用までの流れをご紹介します。富山市・射水市・砺波市対応。",
};

/* ─── データ：5つの特徴（トップページと同じ） ─── */
const features = [
  { icon: "/icon-clock.png", title: "24時間365日の\n安心サポート", desc: "夜間・休日の急な体調変化も電話一本で看護師につながり、必要時は緊急訪問します。" },
  { icon: "/icon-stethoscope.png", title: "精神科で培った\n専門性", desc: "観察力・コミュニケーション力・多職種連携を活かし、小児から高齢者まで幅広く対応します。" },
  { icon: "/icon-sparkle.png", title: "「したい」を\n叶えるケア", desc: "外出・外食など“したい”を目標に、生活に合わせた最適なプログラムを専門職が提案します。" },
  { icon: "/icon-hands-heart.png", title: "ご家族の休息も\n大切に", desc: "介護を担うご家族をケアのパートナーと考え、休息と笑顔も一緒に守ります。" },
  { icon: "/icon-location.png", title: "地域密着の\n連携力", desc: "富山市上袋を拠点に、主治医やケアマネジャー・相談員と密に連携します。" },
];

/* ─── データ：対象となる疾患・症状 ─── */
// 診断・病名など（医療的な側面）
const conditions = [
  "発達障害（ASD・ADHD・LD など）",
  "知的障害",
  "気分障害（うつ・双極性障害）",
  "統合失調症",
  "不安障害・パニック障害",
  "適応障害・摂食障害",
  "認知症",
  "難病・医療的ケア",
];
// 状態・行動など（生活・療育の側面）
const behaviors = [
  "不登校ぎみ・外出や登校がむずかしい",
  "癇癪やパニックを起こしやすい",
  "感覚の過敏や、強いこだわりがある",
  "集団生活・対人関係が苦手",
  "睡眠や生活リズムが乱れやすい",
  "気持ちの浮き沈みが大きい",
  "衝動的な行動が出やすい",
  "就労や通学の継続がむずかしい",
];

/* ─── 目次 ─── */
const toc = [
  { label: "訪問看護って？", href: "#about-nursing" },
  { label: "ミライズの訪問看護 5つの特長", href: "#strength" },
  { label: "対象となる疾患・症状", href: "#conditions" },
  { label: "利用例のご紹介", href: "#cases" },
  { label: "ご利用までの流れ", href: "#flow" },
  { label: "お問い合わせ", href: "#contact-cta" },
];

/* ─── ご利用までの流れ 5ステップ ─── */
const flowSteps = [
  { label: "お問い合わせ", color: "#F58BC8" },
  { label: "初回面談の調整", color: "#DB8FE0" },
  { label: "ヒアリング・ご提案", color: "#B79BF0" },
  { label: "関係機関との連携", color: "#8FB4FF" },
  { label: "訪問看護の開始", color: "#62C5FF" },
];

/* ─── 募集職種タグ（やさしいパステルのピル）CSS：トップページと同じ ─── */
const JOB_TAG_CSS = `
.recruit-job-tag {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 160px;
  height: 56px;
  padding: 0 30px;
  border-radius: 9999px;
  background: linear-gradient(180deg, #F6F3FF 0%, #F1ECFD 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.8), 0 4px 14px rgba(170,150,220,.12);
  overflow: hidden;
  white-space: nowrap;
}
.recruit-job-tag::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #EEE7FD;
  opacity: 0;
  transition: opacity .2s ease;
}
.recruit-job-tag:hover::before { opacity: 1; }
.recruit-job-tag > span {
  position: relative;
  z-index: 1;
  font-family: var(--font-zen-maru-gothic);
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  background: linear-gradient(90deg, #9A7AD0, #8C6CCB, #8263C3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
@media (max-width: 639px) {
  .recruit-job-tag { padding: 0 16px; min-width: 0; width: 100%; }
  .recruit-job-tag > span { font-size: 16px; }
}
`;

/* ─── 見出し横の××飾り罫（トップページと同じ） ─── */
function CrossBand({ color = "#B3AEDB" }: { color?: string }) {
  const stroke = color.replace("#", "%23");
  return (
    <span
      aria-hidden
      className="flex-1 h-[42px] opacity-60"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='14'%20height='28'%3E%3Cpath%20d='M0%203.5L7%2010.5M7%203.5L0%2010.5M7%2017.5L14%2024.5M14%2017.5L7%2024.5'%20stroke='${stroke}'%20stroke-width='1.2'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "14px 28px",
      }}
    />
  );
}

/* ─── 特徴1つ分（トップページと同じ） ─── */
function FeatureCard({ f }: { f: { icon: string; title: string; desc: string } }) {
  return (
    <div className="px-6 sm:px-8 py-8 flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-5 lg:gap-4 h-full">
      <Image src={f.icon} alt="" width={56} height={56} className="w-16 h-16 lg:w-20 lg:h-20 object-contain shrink-0" />
      <div className="flex flex-col gap-3 lg:gap-4 lg:items-center">
        <p className="text-xl font-bold text-[#231F20] leading-snug whitespace-pre-line" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
          {f.title}
        </p>
        <p className="text-xs sm:text-sm text-[#6b6b6b] leading-relaxed">{f.desc}</p>
      </div>
    </div>
  );
}

/* ─── セクション見出し（英字ラベル＋和文サブ＋大見出し） ─── */
function SectionHead({
  label,
  title,
}: {
  label: string;
  title: React.ReactNode;
}) {
  return (
    <>
      <p className="text-lg sm:text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-zen-maru-gothic)", color: "#E576B8" }}>
        {label}
      </p>
      <h2 className="text-[1.7rem] sm:text-[3rem] font-bold text-[#231F20] leading-[1.45] mb-8" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
        {title}
      </h2>
    </>
  );
}

export default function KnowledgePage() {
  return (
    <div
      className="pt-[100px] overflow-x-clip"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FAF6FE 12%, #F1EBFB 42%, #DECEF4 64%, #C4AAEA 83%, #A688D6 100%)" }}
    >
      <div className="pb-4">
        {/* ════════ 1. タイトル ════════ */}
        <section className="relative overflow-hidden px-[5%] pt-10 sm:pt-16 pb-12 sm:pb-20">
          {/* 右：rainbow-road（PCのみ・右に配置） */}
          <div aria-hidden className="hidden lg:block absolute z-0 right-[-10%] top-[54%] -translate-y-1/2 w-[min(60vw,800px)] pointer-events-none">
            <Image src="/rainbow-road.png" alt="" width={1036} height={1024} priority className="w-full h-auto" />
          </div>
          {/* 装飾（光の粒・星） */}
          <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg className="absolute" style={{ top: "18%", left: "8%", color: "#DCCEF8" }} width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 l1.3 8.7 L22 12 l-8.7 1.3 L12 22 l-1.3-8.7 L2 12 l8.7-1.3 Z" /></svg>
            <svg className="absolute" style={{ bottom: "16%", left: "16%", color: "#FFD8F1" }} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 l1.3 8.7 L22 12 l-8.7 1.3 L12 22 l-1.3-8.7 L2 12 l8.7-1.3 Z" /></svg>
          </div>

          <div className="relative z-10 max-w-[1100px] mx-auto">
            {/* パンくず */}
            <p className="text-sm text-[#9a9a9a] mb-6" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
              ホーム ー 訪問看護を知る
            </p>
            <div className="max-w-[680px]">
              <FadeIn direction="up" duration={2.0}>
                <p className="text-lg sm:text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-zen-maru-gothic)", color: "#E576B8" }}>
                  訪問看護を知る
                </p>
                <h1
                  className="relative z-10 text-[1.7rem] sm:text-[3.6rem] font-bold text-[#231F20] leading-[1.4]"
                  style={{
                    fontFamily: "var(--font-zen-maru-gothic)",
                    textShadow: "0 0 6px rgba(255,255,255,0.95), 0 0 16px rgba(255,255,255,0.8)",
                  }}
                >
                  乳幼児から成人まで、
                  <br />
                  途切れない訪問看護を。
                </h1>
                {/* 携帯：rainbow-road（右寄り・右ブリード・タイトルと少し重ねる／トップABOUTと同じ） */}
                <div aria-hidden className="lg:hidden relative z-0 -mr-[22%] -mt-16 mb-8 pointer-events-none">
                  <FadeIn direction="left" duration={2.0}>
                    <Image src="/rainbow-road.png" alt="" width={1694} height={1527} priority className="w-[75%] h-auto ml-auto" />
                  </FadeIn>
                </div>
                <p
                  className="mt-6 text-xl sm:text-2xl font-bold text-[#8a7fb5]"
                  style={{
                    fontFamily: "var(--font-zen-maru-gothic)",
                    textShadow: "0 0 6px rgba(255,255,255,0.95), 0 0 14px rgba(255,255,255,0.85)",
                  }}
                >
                  医療とメンタル、両面から寄り添うケアを。
                </p>
                <p
                  className="mt-6 text-xs sm:text-base text-[#5a5a5a] leading-loose max-w-[620px]"
                  style={{ textShadow: "0 0 6px rgba(255,255,255,0.9)" }}
                >
                  ミライズは、精神・知的の分野に特化した富山の訪問看護ステーションです。乳幼児から成人まで、ライフステージが変わっても途切れないケアを。ご本人はもちろん、ご家族や地域ともつながるトータルサポートで、あなたの「自分らしい暮らし」を支えます。
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ════════ 2. 目次 ════════ */}
        <section className="relative px-[5%] pb-16 sm:pb-24">
          <div className="max-w-[860px] mx-auto">
            <FadeIn direction="up" duration={1.8}>
              <div className="rounded-[28px] bg-white/85 border border-[rgba(180,190,220,0.5)] shadow-[0_18px_50px_rgba(130,110,180,0.10)] px-6 sm:px-12 py-10 sm:py-12">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#EC99D0" }} />
                  <p className="text-lg sm:text-2xl font-bold text-[#231F20] tracking-wide" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                    目次
                  </p>
                  <span className="w-2 h-2 rounded-full" style={{ background: "#84D3F4" }} />
                </div>
                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1">
                  {toc.map((t, i) => (
                    <li key={t.href}>
                      <a
                        href={t.href}
                        className="group flex items-center gap-4 py-4 border-b border-dotted border-[#dcd2ee] hover:border-[#C9A9DF] transition-colors"
                      >
                        <span
                          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                          style={{ backgroundImage: "var(--brand-gradient)", fontFamily: "var(--font-lora)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 text-base font-bold text-[#3a3a3a] group-hover:text-[#8263C3] transition-colors leading-snug" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                          {t.label}
                        </span>
                        <span className="text-[#C9A9DF] group-hover:translate-x-0.5 transition-transform">›</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ════════ 3＋4：共有の白パネル（左フルブリード／右が少し切れる・角丸） ════════ */}
        <div className="relative">
          <div aria-hidden className="absolute inset-y-0 left-0 right-[6%] lg:right-[12%] bg-white rounded-r-[44px]" />

        {/* ════════ 3. 訪問看護って？ ════════ */}
        <section id="about-nursing" className="relative z-10 overflow-hidden px-[5%] lg:pr-[17%] py-12 sm:py-20 scroll-mt-[110px]">
          <div className="max-w-[1000px] mx-auto">
            <FadeIn direction="up" duration={2.0}>
              <SectionHead label="訪問看護って？" title={<>ご本人だけでなく、<br className="sm:hidden" />ご家族ごと。<br />医療とメンタルの両面から支えます。</>} />
            </FadeIn>
            <FadeIn direction="up" delay={0.15} duration={2.0}>
              <div className="space-y-5 text-xs sm:text-base text-[#4a4a4a] leading-loose max-w-[760px] pr-[7%] lg:pr-0">
                <p>
                  発達や知的の特性、不登校・ひきこもり、気分の落ち込みや不眠など、乳幼児から成人まで、ご本人やご家族が抱える生きづらさに寄り添います。精神・知的の分野に特化した看護師やリハビリ職（作業療法士・理学療法士・言語聴覚士）がご自宅を訪問し、主治医の指示のもと、健康や生活の両面からサポートします。
                </p>
                <p>
                  支えるのは、ご本人だけではありません。「どう対応すればいいか分からない」「見守ることに限界を感じている」——そんなご家族の不安や負担にも寄り添います。親御さんのこころのケアや、お子さまの突発的な衝動の原因を一緒に考えながら、ご家庭ごと支えます。在宅で最大週3回まで、成長やライフステージが変わっても途切れないケアを続けられます。
                </p>
                <p className="text-sm text-[#9a9a9a] pt-2">※ ご利用いただけるか気になる方も、まずはお気軽にご相談ください。</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ════════ 4. ミライズの訪問看護 5つの特長（トップページと同じ） ════════ */}
        <section id="strength" className="relative z-10 pt-8 pb-16 sm:pb-24 scroll-mt-[110px]">
          {/* 見出し：×× を白パネルの左端〜右端いっぱいに伸ばす（右は白パネルの切れ目に合わせる） */}
          <FadeIn direction="up" duration={2.0}>
            <div className="flex flex-col items-center text-center mb-12 sm:mb-16 pr-[6%] lg:pr-[12%]">
              <div className="flex items-center gap-4 sm:gap-8 w-full">
                <CrossBand />
                <h2
                  className="text-2xl sm:text-5xl font-bold leading-tight sm:whitespace-nowrap px-1"
                  style={{
                    fontFamily: "var(--font-zen-maru-gothic)",
                    backgroundImage: "var(--brand-gradient)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  ミライズの訪問看護 <br className="sm:hidden" />5つの特長
                </h2>
                <CrossBand />
              </div>
            </div>
          </FadeIn>

          {/* カード：パネル内で中央寄せ */}
          <div className="px-[5%] lg:pr-[17%]">
          <div className="relative max-w-[1040px] mx-auto">
            {/* 上段3つ */}
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {features.slice(0, 3).map((f, i) => (
                <FadeIn key={f.title} direction="up" delay={i * 0.25} duration={1.8} className={`border-b border-dotted border-[#ada2cc] sm:border-b-0 ${i < 2 ? "sm:border-r sm:border-dotted sm:border-[#ada2cc]" : ""}`}>
                  <FeatureCard f={f} />
                </FadeIn>
              ))}
            </div>
            <div className="hidden sm:block border-t border-dotted border-[#ada2cc] my-4" />
            {/* 下段2つ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:max-w-[640px] mx-auto">
              {features.slice(3, 5).map((f, i) => (
                <FadeIn key={f.title} direction="up" delay={i * 0.25} duration={1.8} className={i < 1 ? "border-b border-dotted border-[#ada2cc] sm:border-b-0 sm:border-r sm:border-dotted sm:border-[#ada2cc]" : ""}>
                  <FeatureCard f={f} />
                </FadeIn>
              ))}
            </div>
          </div>
          </div>
        </section>
        </div>{/* 白パネル 終わり */}

        {/* ════════ 5. 対象となる疾患・症状 ════════ */}
        <section id="conditions" className="relative overflow-hidden px-[5%] py-12 sm:py-20 scroll-mt-[110px]">
          {/* 中央×× 見出し */}
          <FadeIn direction="up" duration={2.0}>
            <div className="flex items-center gap-4 sm:gap-8 max-w-[1100px] mx-auto mb-8 sm:mb-10">
              <CrossBand color="#F58BC8" />
              <h2
                className="text-[1.6rem] sm:text-4xl font-bold whitespace-nowrap px-1 leading-none"
                style={{ fontFamily: "var(--font-zen-maru-gothic)", color: "#E576B8" }}
              >
                対象となる疾患・症状
              </h2>
              <CrossBand color="#F58BC8" />
            </div>
          </FadeIn>

          {/* 導入文 */}
          <FadeIn direction="up" delay={0.1} duration={2.0}>
            <p className="max-w-[880px] mx-auto text-center text-xs sm:text-base text-[#5a5a5a] leading-loose mb-10 sm:mb-12">
              ミライズでは、精神・知的の分野を中心に、乳幼児から成人まで幅広く対応しています。
              <br className="hidden sm:block" />
              以下は一例です。記載のない疾患・症状や、診断がついていない場合も、まずはお気軽にご相談ください。
            </p>
          </FadeIn>

          {/* インラインのドット箇条書きカード（2カテゴリを縦に） */}
          <FadeIn direction="up" delay={0.15} duration={2.0}>
            <div className="max-w-[1000px] mx-auto space-y-6">
              {/* 疾患・症状 */}
              <div className="rounded-[24px] bg-white shadow-[0_16px_44px_rgba(130,110,180,0.10)] px-6 sm:px-10 py-8 sm:py-9">
                <p className="text-base font-bold text-[#231F20] mb-5" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>疾患・症状</p>
                <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3">
                  {conditions.map((c) => (
                    <span key={c} className="inline-flex items-center gap-2 text-xs sm:text-base text-[#4a4a4a]" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "#EC99D0" }} />
                      {c}
                    </span>
                  ))}
                  <span className="text-sm text-[#9a9a9a] self-end">など</span>
                </div>
              </div>

              {/* こんな状態・こんな時 */}
              <div className="rounded-[24px] bg-white shadow-[0_16px_44px_rgba(130,110,180,0.10)] px-6 sm:px-10 py-8 sm:py-9">
                <p className="text-base font-bold text-[#231F20] mb-5" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>こんな状態・こんな時</p>
                <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3">
                  {behaviors.map((b) => (
                    <span key={b} className="inline-flex items-center gap-2 text-xs sm:text-base text-[#4a4a4a]" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "#84D3F4" }} />
                      {b}
                    </span>
                  ))}
                  <span className="text-sm text-[#9a9a9a] self-end">など</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ════════ 6. 利用例のご紹介 ════════ */}
        <section id="cases" className="relative overflow-hidden px-[5%] py-12 sm:py-20 scroll-mt-[110px]">
          <div className="max-w-[1400px] mx-auto">
            {/* 中央×× 見出し */}
            <FadeIn direction="up" duration={2.0}>
              <div className="flex items-center gap-4 sm:gap-8 max-w-[1100px] mx-auto mb-8 sm:mb-10">
                <CrossBand color="#F58BC8" />
                <h2
                  className="text-[1.6rem] sm:text-4xl font-bold whitespace-nowrap px-1 leading-none"
                  style={{ fontFamily: "var(--font-zen-maru-gothic)", color: "#E576B8" }}
                >
                  利用例のご紹介
                </h2>
                <CrossBand color="#F58BC8" />
              </div>
            </FadeIn>

            {/* 導入文 */}
            <FadeIn direction="up" delay={0.1} duration={2.0}>
              <p className="max-w-[880px] mx-auto text-center text-xs sm:text-base text-[#5a5a5a] leading-loose mb-10 sm:mb-12">
                実際の関わりをもとにした、ミライズの訪問看護の事例をご紹介します。
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.15} duration={2.0}>
              {/* 3枚のカード＋ホバー「詳細を見る」＋クリックでポップアップ（中身は仮） */}
              <CaseExamples />
            </FadeIn>
          </div>
        </section>

        {/* ════════ 7＋8：ご利用までの流れ ＋ お問い合わせ（共通背景） ════════ */}
        <div className="relative rounded-t-[44px]" style={{ background: "linear-gradient(180deg, #FCF8FE 0%, #F4EDFC 50%, #EBE1F8 100%)" }}>
        {/* ── ご利用までの流れ ── */}
        <section
          id="flow"
          className="relative py-16 sm:py-24 px-[5%] scroll-mt-[110px]"
        >
          <div className="max-w-[1100px] mx-auto">
            {/* 見出し（虹グラデーション文字・中央） */}
            <FadeIn direction="up" duration={2.0}>
              <h2
                className="text-center text-[1.7rem] sm:text-5xl font-bold leading-tight mb-5 tracking-[0.04em]"
                style={{
                  fontFamily: "var(--font-zen-maru-gothic)",
                  backgroundImage: "var(--brand-gradient)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                ご利用までの流れ
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.1} duration={2.0}>
              <p className="text-center text-xs sm:text-lg text-[#5a5a5a] leading-loose mb-14 sm:mb-20">
                ご相談から訪問開始までのステップをご紹介します。
                <br className="hidden sm:block" />
                安心してご利用いただけるよう、丁寧にサポートいたします。
              </p>
            </FadeIn>

            {/* 5ステップ */}
            <div className="relative">
              {/* ── 携帯：縦並び（番号は丸の中・内容は右・丸を縦線でつなぐ） ── */}
              <div className="md:hidden relative max-w-[440px] mx-auto">
                {/* 円をつなぐ縦の虹グラデーション線 */}
                <span
                  aria-hidden
                  className="absolute left-[35px] top-[36px] bottom-[36px] w-[2px] rounded-full"
                  style={{ backgroundImage: "var(--brand-gradient)", opacity: 0.6 }}
                />
                <div className="relative flex flex-col gap-6">
                  {flowSteps.map((step, i) => (
                    <FadeIn key={i} direction="up" delay={i * 0.12} duration={1.2}>
                      <div className="flex items-center gap-5">
                        <div
                          className="relative z-10 shrink-0 rounded-full bg-[#FCFAFF] flex items-center justify-center w-[72px] h-[72px] shadow-[0_10px_26px_rgba(150,130,210,0.16)]"
                          style={{ border: `2px solid ${step.color}` }}
                        >
                          <span className="text-3xl font-bold leading-none" style={{ fontFamily: "var(--font-lora)", color: step.color }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <span className="text-base font-bold text-[#5a5a5a] leading-snug" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                          {step.label}
                        </span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>

              {/* ── PC：横並び（丸の中に番号＋内容・横線でつなぐ） ── */}
              <div className="hidden md:block relative">
                <GradientLine
                  className="absolute left-[8%] right-[8%] top-[calc(50%-1px)] h-[2px] rounded-full"
                  style={{ backgroundImage: "var(--brand-gradient)", opacity: 0.75 }}
                  duration={1.6}
                  delay={0.1}
                />
                <div className="relative flex flex-row items-center justify-between gap-2">
                  {flowSteps.map((step, i) => (
                    <FadeIn key={i} direction="up" delay={i * 0.2} duration={1.4}>
                      <div
                        className="rounded-full bg-[#FCFAFF] flex flex-col items-center justify-center text-center w-[134px] h-[134px] lg:w-[176px] lg:h-[176px] shadow-[0_10px_26px_rgba(150,130,210,0.16)]"
                        style={{ border: `2px solid ${step.color}` }}
                      >
                        <span className="text-4xl font-bold leading-none" style={{ fontFamily: "var(--font-lora)", color: step.color }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span aria-hidden className="block w-8 border-t border-dotted my-2.5 opacity-70" style={{ borderColor: step.color }} />
                        <span className="text-sm font-bold text-[#5a5a5a] px-2 leading-tight whitespace-nowrap" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                          {step.label}
                        </span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>

            {/* ボタン */}
            <div className="flex justify-center mt-12">
              <Link href="/flow" className="brand-btn text-base sm:text-lg" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                詳しいご利用の流れはこちら
                <span className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center text-sm">›</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ════════ 8. CONTACT（トップページと同じ） ════════ */}
        <section id="contact-cta" className="relative overflow-hidden py-20 sm:py-28 px-[5%] scroll-mt-[110px]">
          <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
            <span className="absolute rounded-full blur-2xl" style={{ width: 200, height: 200, top: "-4%", right: "4%", background: "rgba(220,206,248,0.4)" }} />
            <svg className="absolute" style={{ bottom: "12%", left: "6%", color: "#FFD8F1" }} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2 l1.3 8.7 L22 12 l-8.7 1.3 L12 22 l-1.3-8.7 L2 12 l8.7-1.3 Z" />
            </svg>
          </div>

          <div className="relative max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <FadeIn direction="up" duration={2.0}>
                <p className="text-lg sm:text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-zen-maru-gothic)", color: "#E576B8" }}>
                  お問い合わせ
                </p>
                <h2 className="text-[1.7rem] sm:text-[3rem] font-bold text-[#231F20] leading-[1.45] mb-7" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                  利用に関する
                  <br />
                  ご相談・お問い合わせ
                </h2>
                <p className="text-xs sm:text-base text-[#5a5a5a] leading-loose">
                  一人で悩まず、まずは「ミライズ」とお話ししてみませんか？
                  <br />
                  ご相談・見学・採用への応募、医療機関・関連機関からの連携まで、LINEまたはお電話でお気軽にご連絡ください。
                  <br />
                  富山市・射水市・砺波市。あなたの街のすぐそばに、私たちがいます。
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.15} duration={2.0}>
                <div className="space-y-5">
                  {/* LINE */}
                  <a
                    href={LINE_URL}
                    target={LINE_URL === "#" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 sm:gap-6 min-h-[148px] rounded-[26px] bg-white shadow-[0_20px_50px_rgba(180,160,230,0.16)] px-7 sm:px-8 py-7 sm:py-8 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#06C755]"
                  >
                    <span className="w-16 h-16 rounded-2xl bg-[#06C755] flex items-center justify-center text-white shrink-0 transition-colors group-hover:bg-white group-hover:text-[#06C755]" style={{ boxShadow: "0 10px 24px rgba(6,199,85,0.32)" }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.7 6.2-.2.6-.6 2.1-.8 2.6-.1.3.1.4.3.3.3-.1 2.6-1.7 3.6-2.4.9.2 1.9.3 3.2.3 5.5 0 10-3.6 10-8s-4.5-8-10-8Z" />
                      </svg>
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xl sm:text-2xl font-bold text-[#231F20] transition-colors group-hover:text-white" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>LINEで相談する</p>
                      <p className="text-xs sm:text-sm text-[#9a9a9a] mt-1 transition-colors group-hover:text-white/90">お気軽にご相談ください</p>
                    </div>
                    <span className="w-10 h-10 rounded-full border border-[#C9A9DF] hidden sm:flex items-center justify-center text-[#B3AEDB] text-lg shrink-0 transition-colors group-hover:bg-white/20 group-hover:border-white group-hover:text-white">›</span>
                  </a>

                  {/* 電話 */}
                  <a
                    href="tel:076-461-3501"
                    className="group flex items-center gap-5 sm:gap-6 min-h-[148px] rounded-[26px] bg-white shadow-[0_20px_50px_rgba(180,160,230,0.16)] px-7 sm:px-8 py-7 sm:py-8 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B99AE8]"
                  >
                    <span className="w-16 h-16 rounded-2xl bg-[#EFEAFB] flex items-center justify-center text-[#8a7fb5] shrink-0 transition-colors group-hover:bg-white group-hover:text-[#8a7fb5]" style={{ boxShadow: "0 10px 24px rgba(150,130,210,0.25)" }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2Z" />
                      </svg>
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xl sm:text-2xl font-bold text-[#231F20] transition-colors group-hover:text-white" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>お問い合わせ</p>
                      <p className="text-xs text-[#9a9a9a] mt-1 transition-colors group-hover:text-white/90">受付時間：24時間受付</p>
                    </div>
                    <span className="w-10 h-10 rounded-full border border-[#C9A9DF] hidden sm:flex items-center justify-center text-[#B3AEDB] text-lg shrink-0 transition-colors group-hover:bg-white/20 group-hover:border-white group-hover:text-white">›</span>
                  </a>
                </div>
              </FadeIn>
            </div>

            <p className="text-xs text-[#9a9a9a] mt-6 lg:mt-8 lg:text-right">※ いただいたご相談内容は、個人情報に十分配慮して対応いたします。</p>
          </div>
        </section>
        </div>{/* 流れ＋お問い合わせ 共通背景 終わり */}

        {/* ════════ 9. RECRUIT（採用情報）※トップページと同じ ════════ */}
        <section
          id="recruit"
          className="relative overflow-hidden pt-20 sm:pt-28 pb-24 px-[5%]"
          style={{ background: "linear-gradient(165deg, #CFBAF0 0%, #BEA6E9 55%, #AD94DF 100%)" }}
        >
          {/* 装飾：雲・ラベンダー・キラキラ */}
          <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
            <span className="absolute rounded-full blur-3xl" style={{ width: 300, height: 300, top: "-6%", right: "2%", background: "rgba(180,215,244,0.20)" }} />
            <span className="absolute rounded-full blur-3xl" style={{ width: 230, height: 230, top: "26%", left: "-60px", background: "rgba(179,174,219,0.16)" }} />
            <span className="absolute rounded-full hidden sm:block" style={{ width: 96, height: 96, top: "12%", left: "4%", background: "rgba(205,196,240,0.34)" }} />
            <span className="absolute rounded-full hidden sm:block" style={{ width: 56, height: 56, top: "9%", right: "7%", background: "rgba(165,224,250,0.40)" }} />
            <span className="absolute rounded-full hidden sm:block" style={{ width: 130, height: 130, top: "46%", left: "6%", background: "rgba(245,182,222,0.24)" }} />
            <span className="absolute rounded-full hidden sm:block" style={{ width: 66, height: 66, top: "54%", right: "5%", background: "rgba(205,196,240,0.34)" }} />
            <span className="absolute rounded-full hidden sm:block" style={{ width: 52, height: 52, bottom: "12%", left: "11%", background: "rgba(165,224,250,0.38)" }} />
            <span className="absolute rounded-full hidden sm:block" style={{ width: 100, height: 100, bottom: "8%", right: "13%", background: "rgba(245,182,222,0.26)" }} />
            <svg className="absolute" style={{ top: "10%", left: "30%", color: "#DCCEF8" }} width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 l1.3 8.7 L22 12 l-8.7 1.3 L12 22 l-1.3-8.7 L2 12 l8.7-1.3 Z" /></svg>
            <svg className="absolute" style={{ top: "44%", right: "5%", color: "#CDE8FF" }} width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 l1.3 8.7 L22 12 l-8.7 1.3 L12 22 l-1.3-8.7 L2 12 l8.7-1.3 Z" /></svg>
            <svg className="absolute" style={{ bottom: "26%", left: "16%", color: "#DFF8EE" }} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 l1.3 8.7 L22 12 l-8.7 1.3 L12 22 l-1.3-8.7 L2 12 l8.7-1.3 Z" /></svg>
          </div>

          {/* カード上のタグライン＋波線 */}
          <FadeIn direction="up" duration={1.8}>
            <div className="relative text-center mb-16">
              <p className="text-sm sm:text-2xl font-bold text-white whitespace-nowrap" style={{ fontFamily: "var(--font-zen-maru-gothic)", textShadow: "0 2px 14px rgba(70,45,110,0.5)" }}>
                「利用者様も、職員も、自分らしく」を叶える
              </p>
              <WavyUnderline className="mx-auto mt-5 w-[200px] sm:w-[345px]" color="#FFFFFF" />
            </div>
          </FadeIn>

          {/* カード（中央寄せ＋右にスタッフイラスト） */}
          <FadeIn direction="up" delay={0.1} duration={2.0}>
            <div className="relative overflow-hidden max-w-[1040px] mx-auto rounded-[32px] bg-white border border-[rgba(180,190,220,0.5)] shadow-[0_22px_60px_rgba(130,110,180,0.1)] px-6 py-12 sm:px-14 sm:py-16">
              <span aria-hidden className="absolute top-0 left-0 right-0" style={{ height: 7, background: "var(--brand-gradient)" }} />

              <div aria-hidden className="hidden lg:block absolute top-[6%] right-[4%] w-[28%] max-w-[280px] pointer-events-none">
                <Image src="/recruit-staff.png" alt="" width={640} height={520} className="relative w-full h-auto" />
              </div>

              <div className="relative text-center max-w-[820px] mx-auto">
                <div className="flex flex-col items-center gap-1 mb-6">
                  <p className="leading-none font-bold tracking-[0.04em] text-4xl sm:text-6xl select-none" style={{ fontFamily: "var(--font-lora)", backgroundImage: "var(--brand-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    RECRUIT
                  </p>
                  <p className="text-sm sm:text-base font-bold text-[#9a9a9a]" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>採用情報</p>
                </div>

                <h2 className="text-[1.3rem] sm:text-[2.7rem] font-bold text-[#231F20] leading-[1.5] mb-6" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                  あなたの経験で、
                  <br />
                  ともに未来を描きませんか？
                </h2>

                <p className="text-[10px] sm:text-base text-[#5a5a5a] leading-loose mb-8 max-w-[720px] mx-auto">
                  「看護師である前に、一人の人間として」を大切に、<br className="sm:hidden" />あなたらしい柔軟な働き方を応援します。
                  <br />
                  副業・ダブルワークや、未経験・ブランクの方も歓迎です。
                </p>

                {/* 募集職種（左にラベル＋右にピルタグ） */}
                <style dangerouslySetInnerHTML={{ __html: JOB_TAG_CSS }} />
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 mb-9">
                  {/* ラベル：募集職種（上下に短い線） */}
                  <div className="flex flex-col items-center shrink-0">
                    <span aria-hidden className="block w-14 h-[2px] rounded-full" style={{ background: "#E576B8" }} />
                    <span className="py-2 sm:py-4 text-lg font-bold whitespace-nowrap" style={{ color: "#E576B8", fontFamily: "var(--font-zen-maru-gothic)" }}>募集職種</span>
                    <span aria-hidden className="block w-14 h-[2px] rounded-full" style={{ background: "#E576B8" }} />
                  </div>
                  {/* 職種ピル */}
                  <div className="grid grid-cols-2 justify-items-center sm:flex sm:flex-wrap sm:justify-start gap-3 sm:gap-3.5">
                    {["看護師", "理学療法士", "作業療法士", "言語聴覚士"].map((j) => (
                      <span key={j} className="recruit-job-tag">
                        <span>{j}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/recruit"
                  className="brand-btn text-base sm:text-lg"
                  style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  採用情報を見る
                  <span className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center text-sm">›</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </div>
  );
}

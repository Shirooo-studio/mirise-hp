import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import { VisionSectionItem } from "@/components/sections/VisionSectionItem";
import { AnimatedKeyMessage } from "@/components/ui/AnimatedKeyMessage";

export const metadata: Metadata = {
  title: "ミライズについて | 訪問看護ステーション ミライズ",
  description:
    "ミライズのビジョン・理念・代表メッセージをご紹介します。乳幼児から成人まで、富山で精神・知的障害に特化した訪問看護を提供しています。",
};

/* ─────────────────────────────────────────
   Vision / Mission / Message セクション定義
───────────────────────────────────────── */
const visionSections = [
  {
    label: "ビジョン",
    script: "Vision",
    color: "#EC99D0",
    borderColor: "rgba(236,153,208,0.65)",
    content: (
      <p className="text-base text-[#4a4a4a] leading-loose">
        精神・知的障害があっても、その人らしく生きられる社会へ。
        <br className="hidden sm:block" />
        私たちは、障害のある方やそのご家族が「ここに頼んでよかった」と思える場所でありたいと考えています。
        <br className="hidden sm:block" />
        富山で、途切れることのない専門的なケアを届けること。それがミライズのビジョンです。
      </p>
    ),
  },
  {
    label: "理念",
    script: "Mission",
    color: "#B3AEDB",
    borderColor: "rgba(179,174,219,0.65)",
    content: (
      <ol className="space-y-4 text-base text-[#4a4a4a] leading-loose list-none">
        {[
          "乳幼児から成人まで、ライフステージを超えて寄り添い続けます。",
          "医療・メンタル両面から、精神・知的障害に特化した専門的なケアを提供します。",
          "困りごとを解決するだけでなく、その人の強みを見つけ、可能性を一緒に広げます。",
          "ご本人だけでなく、親御さん・ご家族も含めた、家族全体を支える支援を行います。",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="flex-shrink-0 font-bold text-sm mt-1" style={{ color: "#B3AEDB" }}>
              {i + 1}.
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    ),
  },
  {
    label: "メッセージ",
    script: "Message",
    color: "#3d9e8c",
    borderColor: "rgba(61,158,140,0.55)",
    content: (
      <div className="space-y-5 text-base text-[#4a4a4a] leading-loose">
        <p>
          ミライズという名前には、「利用者の未来を一緒に描いて、歩んでいく」という想いが込められています。ロゴに使われている無限大（∞）のマークは、その人が持つ可能性に限りがないことを表しています。
        </p>
        <p>
          乳幼児のころ、小学校、中学校、高校、そして成人になっても——ミライズはずっとそこにいたいと思っています。
        </p>
        <p>
          療育施設が満員で順番が来ない。小学校に上がったらケアが受けられなくなった。そんな「空白」が、富山にはまだたくさんあります。私たちは、訪問看護という形でその空白を埋めたいと考えています。
        </p>
        <p>
          「どうすればいいかわからない」でも大丈夫です。丸ごと頼っていただいて構いません。ご本人のケアをしながら、疲れた親御さんの気持ちにも寄り添います。原因がわかれば、対処できる。私たちはそう信じています。
        </p>
      </div>
    ),
  },
];

/* ─────────────────────────────────────────
   代表メッセージ ブロック定義
───────────────────────────────────────── */
const messageBlocks = [
  {
    text: "私がこの仕事を選んだのは、精神・知的障害を持つ方やそのご家族が、どれほど多くの困りごとを抱えながら生活しているかを、現場で目の当たりにしてきたからです。「どこに相談すればいいかわからない」「富山には専門に見てくれる場所がない」——そんな声を、何度も聞いてきました。",
    align: "left" as const,
    bg: "rgba(236,153,208,0.13)",
  },
  {
    text: "療育施設が満員で入れない。小学校に上がった途端にケアが途切れる。そうした「空白」の中で、疲れ果てているご家族を見てきました。訪問看護なら、自宅に専門職が行くことができる。精神・知的に特化した看護師が関わることで、医療的なケアもメンタルのサポートも、両方届けられる。その確信からミライズを立ち上げました。",
    align: "right" as const,
    bg: "rgba(179,174,219,0.16)",
  },
  {
    text: "どんな小さなことでも、気軽に声をかけてください。「使えるかどうかわからない」という段階でも大丈夫です。一緒に考え、一緒に歩んでいくことで、ご本人とご家族が「ここに頼んでよかった」と思えるような支援を、これからも届けていきます。",
    align: "left" as const,
    bg: "rgba(158,222,208,0.18)",
  },
];

/* ─────────────────────────────────────────
   会社概要 テーブルデータ
───────────────────────────────────────── */
const companyRows = [
  { label: "法人名", value: "○○合同会社" },
  { label: "事業所名", value: "訪問看護ステーション ミライズ" },
  { label: "所在地", value: "〒XXX-XXXX\n富山県富山市○○X-X-X" },
  { label: "設立", value: "20XX年XX月XX日" },
  { label: "代表者", value: "○○ ○○" },
  { label: "電話番号", value: "0XX-XXXX-XXXX" },
  { label: "受付時間", value: "9:00〜18:00（緊急時24時間対応）" },
  { label: "事業内容", value: "訪問看護ステーションの運営" },
  { label: "対応エリア", value: "富山市およびその周辺地域" },
];

/* モザイク背景用カラー */
const mosaicColors = [
  "#fce8f4", "#ebe9f7", "#e0f3fd", "#e2f6ef",
  "#f5d6ee", "#dcd8f0", "#cce9f8", "#d4f2e8",
  "#fce8f4", "#ebe9f7", "#e0f3fd", "#e2f6ef",
  "#f5d6ee", "#dcd8f0", "#cce9f8", "#d4f2e8",
];

/* ─────────────────────────────────────────
   Page Component
───────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div>

      {/* ══════════════════════════════
          HERO — 背景なし・タイトルのみ
      ══════════════════════════════ */}
      <section
        className="px-[5%] pt-20 pb-16 sm:pt-[240px] sm:pb-[240px]"
      >
        <div className="max-w-[900px] mx-auto w-full">
          <FadeIn direction="up" duration={1.6}>
            <h1
              className="text-2xl sm:text-5xl font-bold text-[#231F20]"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              ミライズについて
            </h1>
          </FadeIn>
        </div>
      </section>


      {/* ══════════════════════════════
          ここから白背景（本文エリア）
      ══════════════════════════════ */}
      <div className="bg-white">

      {/* キーメッセージ */}
      <section className="py-20 sm:py-28 px-[5%]">
        <div className="max-w-[1100px] mx-auto text-center">
          <AnimatedKeyMessage />
        </div>
      </section>


      {/* ══════════════════════════════
          Vision / Mission / Message
      ══════════════════════════════ */}
      <section className="py-6 px-[5%] bg-white/70 overflow-x-hidden">
        <div className="max-w-[1100px] mx-auto">
          {visionSections.map((sec, i) => (
            <VisionSectionItem key={i} sec={sec} index={i} />
          ))}
        </div>
      </section>


      {/* ══════════════════════════════
          代表紹介 + メッセージ
      ══════════════════════════════ */}
      <section
        id="message"
        className="py-20 px-[5%]"
        style={{
          background:
            "linear-gradient(160deg, rgba(253,242,250,0.75) 0%, rgba(237,246,255,0.75) 100%)",
        }}
      >
        <div className="max-w-[900px] mx-auto">

          <FadeIn direction="up" duration={1.6}>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#231F20] mb-12"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              代表紹介
            </h2>
          </FadeIn>

          {/* プロフィール */}
          <FadeIn direction="up" duration={1.6} delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mb-16">
              {/* 写真プレースホルダー */}
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div
                  className="w-[180px] h-[220px] rounded-2xl flex items-center justify-center text-sm text-white/60 shadow-sm"
                  style={{
                    background: "linear-gradient(135deg, rgba(236,153,208,0.5), rgba(179,174,219,0.5))",
                  }}
                >
                  写真
                </div>
              </div>

              {/* テキスト情報 */}
              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm text-[#6b6b6b] mb-1">管理者 / 看護師</p>
                <p
                  className="text-3xl sm:text-4xl font-bold text-[#231F20] mb-1"
                  style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  （代表者名）
                </p>
                <p
                  className="text-sm text-[#aaa] mb-8 italic"
                  style={{ fontFamily: "var(--font-lora)" }}
                >
                  （ローマ字）
                </p>
                <p
                  className="text-xs font-bold tracking-widest text-[#B3AEDB] mb-3"
                  style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  経歴
                </p>
                <ol className="space-y-2 text-left">
                  {[
                    "（経歴1　例：〇〇病院 勤務 2015年〜2020年）",
                    "（経歴2　例：〇〇法人 勤務 2020年〜2023年）",
                    "訪問看護ステーション ミライズ 開設・管理者（202○年○月〜）",
                  ].map((career, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#4a4a4a] leading-relaxed">
                      <span className="flex-shrink-0 font-bold text-xs mt-0.5" style={{ color: "#B3AEDB" }}>
                        {i + 1}.
                      </span>
                      <span>{career}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </FadeIn>

          {/* 代表からのメッセージ */}
          <FadeIn direction="up" duration={1.6} delay={0.2}>
            <h3
              className="text-xl sm:text-2xl font-bold text-[#231F20] mb-10"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              代表からのメッセージ
            </h3>
          </FadeIn>

          <div className="space-y-5">
            {messageBlocks.map((block, i) => (
              <FadeIn key={i} direction="up" duration={1.6} delay={0.1 + i * 0.15}>
                <div
                  className={`max-w-[82%] rounded-2xl px-7 py-6 text-base text-[#4a4a4a] leading-loose shadow-sm ${
                    block.align === "right" ? "ml-auto" : ""
                  }`}
                  style={{ background: block.bg }}
                >
                  {block.text}
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════
          会社概要
      ══════════════════════════════ */}
      <section className="py-0 px-[5%] bg-white/70">
        <div className="max-w-[900px] mx-auto py-20">

          {/* モザイクヘッダー */}
          <FadeIn direction="up" duration={1.6}>
            <div className="rounded-2xl overflow-hidden mb-12 relative h-[100px]">
              {/* カラータイル */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-2">
                {mosaicColors.map((c, i) => (
                  <div key={i} style={{ backgroundColor: c }} />
                ))}
              </div>
              {/* 白いモヤ（タイトルを読みやすく） */}
              <div className="absolute inset-0 bg-white/30" />
              {/* タイトル */}
              <div className="absolute inset-0 flex items-center px-8">
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#231F20]"
                  style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  会社概要
                </h2>
              </div>
            </div>
          </FadeIn>

          {/* テーブル */}
          <FadeIn direction="up" duration={1.6} delay={0.1}>
            <dl className="px-2 sm:px-10">
              {companyRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-16 py-5 ${
                    i < companyRows.length - 1 ? "border-b border-[#efefef]" : ""
                  }`}
                >
                  <dt
                    className="flex-shrink-0 sm:w-40 font-bold text-lg text-[#231F20]"
                    style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                  >
                    {row.label}
                  </dt>
                  <dd className="text-lg text-[#4a4a4a] leading-relaxed whitespace-pre-line">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>

        </div>
      </section>

      </div>{/* end 白背景エリア */}

    </div>
  );
}

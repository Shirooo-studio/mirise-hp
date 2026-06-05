import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import { ApplicationForm } from "@/components/recruit/ApplicationForm";

export const metadata: Metadata = {
  title: "採用情報 | 訪問看護ステーション ミライズ",
  description:
    "精神・療育に特化した訪問看護ステーション ミライズの採用情報。子どもから大人まで、利用者様の未来に寄り添う仲間を募集しています。",
};

/* ─── 見出し共通カラー（H2/H3・項目見出し） ─── */
const H_COLOR = "#c9559e";

/* ─── 働く魅力（参考画像に合わせて短く） ─── */
const appealPoints = [
  {
    color: H_COLOR,
    title: "精神・療育の専門性が深まる",
    body: "利用者の約8割が精神・発達・知的障害の方。専門知識と実践力が自然と身につきます。",
  },
  {
    color: H_COLOR,
    title: "子どもからご家族まで長く寄り添える",
    body: "乳幼児から成人まで、ご本人はもちろん、疲れた親御さんも含めて長期的に支えられます。",
  },
  {
    color: H_COLOR,
    title: "原因を探す看護ができる",
    body: "行動の背景を一緒に探り、原因がわかれば対処法も見えてきます。",
  },
];

/* ─── 求める人物像（4項目に絞る） ─── */
const wantedItems = [
  "こどもとご家族に寄り添い、チームで支援できる方",
  "精神・療育分野に関心があり、専門性を深めたい方",
  "利用者の「未来」を一緒に考えたい方",
  "経験より人柄や想いを大切にしたい方",
];

/* ─── 採用情報 ─── */
/* 募集職種（チップ表示） */
const jobTypes = ["看護師", "作業療法士", "言語聴覚士", "理学療法士"];

/* 募集要項（ラベル：値） */
const requirements = [
  { label: "雇用形態", value: "正社員 / パートタイム" },
  { label: "勤務地",   value: "富山県富山市および周辺地域" },
  { label: "勤務時間", value: "シフト制（相談可）" },
  { label: "給与",     value: "経験や資格に応じて決定します。" },
  { label: "待遇",     value: "交通費支給、社会保険完備" },
];

/* 応募方法（番号リスト） */
const applySteps = [
  { text: "LINE公式アカウント または 下記応募フォームからご連絡ください" },
  { text: "採用担当より、面接・見学のご案内をいたします" },
];

/* ─── H1 グラデーション（濃いめ・目立つ色） ─── */
const H1_GRADIENT: React.CSSProperties = {
  background: "linear-gradient(135deg, #c9559e 0%, #7B6BBE 55%, #2d8fbf 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function RecruitPage() {
  return (
    <div>

      {/* ══════════════════════════════════════════════════════
          【連続背景エリア】Hero → サブコピー → メッセージ → 魅力
          ・グラデーション背景を一枚で通す
          ・丸を全体に散りばめる
      ══════════════════════════════════════════════════════ */}
      {/* -mt-[100px] でヘッダーの裏まで背景を伸ばす */}
      <div
        className="relative overflow-hidden -mt-[100px]"
        style={{
          background:
            "linear-gradient(160deg, rgba(252,232,244,0.97) 0%, rgba(238,235,250,0.95) 40%, rgba(222,240,255,0.94) 75%, rgba(228,248,244,0.93) 100%)",
        }}
      >

        {/* ── 散りばめた装飾丸 ── */}

        {/* 右上エリア（Hero） */}
        <div className="absolute right-[-60px] top-[-40px] w-[280px] h-[280px] rounded-full pointer-events-none hidden sm:block"
          style={{ background: "rgba(179,174,219,0.22)" }} />
        <div className="absolute right-[90px] top-[110px] w-[110px] h-[110px] rounded-full pointer-events-none hidden sm:block"
          style={{ background: "rgba(132,211,244,0.28)" }} />
        <div className="absolute right-[215px] top-[195px] w-[55px] h-[55px] rounded-full pointer-events-none hidden sm:block"
          style={{ background: "rgba(236,153,208,0.32)" }} />

        {/* 左サイド（サブコピーあたり） */}
        <div className="absolute left-[-70px] top-[38%] w-[320px] h-[320px] rounded-full pointer-events-none"
          style={{ background: "rgba(236,153,208,0.1)" }} />
        <div className="absolute left-[5%] top-[44%] w-[100px] h-[100px] rounded-full pointer-events-none hidden sm:block"
          style={{ background: "rgba(179,174,219,0.18)" }} />

        {/* 右サイド（メッセージあたり） */}
        <div className="absolute right-[-40px] top-[55%] w-[260px] h-[260px] rounded-full pointer-events-none hidden sm:block"
          style={{ background: "rgba(132,211,244,0.14)" }} />
        <div className="absolute right-[8%] top-[62%] w-[80px] h-[80px] rounded-full pointer-events-none hidden sm:block"
          style={{ background: "rgba(236,153,208,0.2)" }} />

        {/* 左下（魅力セクション上部） */}
        <div className="absolute left-[-30px] top-[78%] w-[180px] h-[180px] rounded-full pointer-events-none"
          style={{ background: "rgba(179,174,219,0.15)" }} />
        <div className="absolute left-[12%] top-[85%] w-[65px] h-[65px] rounded-full pointer-events-none hidden sm:block"
          style={{ background: "rgba(132,211,244,0.22)" }} />


        {/* ════════════════════════
            HERO
        ════════════════════════ */}
        <section className="relative px-[5%] pt-[212px] pb-16 sm:pt-[270px] sm:pb-20">
          {/* ウォーターマーク "Recruit" */}
          <span
            className="absolute bottom-0 left-[2%] leading-none pointer-events-none select-none
                       text-[120px] sm:text-[210px]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "rgba(61,158,140,0.12)",
              lineHeight: 0.9,
            }}
          >
            Recruit
          </span>

          <div className="max-w-[860px] mx-auto relative z-10">
            <FadeIn direction="up" duration={1.6}>
              <p
                className="text-xs font-bold tracking-widest mb-5"
                style={{ color: H_COLOR, fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                採用情報
              </p>
              <h1
                className="text-3xl sm:text-5xl font-bold leading-[1.7]"
                style={{ ...H1_GRADIENT, fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                精神・療育に特化した訪問看護で
                <br />
                未来を描く仲間を募集しています。
              </h1>
            </FadeIn>
          </div>
        </section>


        {/* ════════════════════════
            サブコピー（横長・さりげなく）
        ════════════════════════ */}
        <section className="py-10 sm:py-16 px-[5%] relative z-10">
          <FadeIn direction="up" duration={1.8}>
            <div className="max-w-[860px] mx-auto">
              <p className="text-base sm:text-lg text-[#5a5a5a] leading-[2]">
                ミライズは、精神・知的障害のある方とそのご家族を支えることに特化した、富山の訪問看護ステーションです。利用者の約8割は精神障害・発達障害・知的障害を持つ方で、乳幼児から成人まで幅広くケアを届けています。「療育施設に入れない」「小学校に上がったらケアが途切れた」——そんな富山の空白を、専門看護師の訪問という形で埋めていきたいと考えています。
              </p>
            </div>
          </FadeIn>
        </section>


        {/* ════════════════════════
            代表メッセージ
        ════════════════════════ */}
        <section className="relative py-16 sm:py-20 px-[5%] z-10">
          <div className="max-w-[760px] mx-auto">
            <FadeIn direction="up" duration={1.6}>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                style={{ ...H1_GRADIENT, fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                未来を描く看護を
              </h2>
            </FadeIn>

            <div className="space-y-7 text-base sm:text-lg text-[#4a4a4a] leading-loose">
              <FadeIn direction="up" duration={1.6} delay={0.1}>
                <p
                  className="text-lg sm:text-xl font-bold text-[#231F20] leading-loose"
                  style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  私たちは、
                  <span style={{ color: "#EC99D0" }}>「できない」を支えるのではなく、</span>
                  <br />
                  <span style={{ color: "#B3AEDB" }}>「未来を一緒に描く」看護をしています。</span>
                </p>
              </FadeIn>
              <FadeIn direction="up" duration={1.6} delay={0.15}>
                <p>
                  突発的なイライラや衝動には、必ずと言っていいほど原因があります。食後の血糖値の変化、服薬の状況、職場や学校でのストレス——私たちはその行動の背景にある原因を一緒に探します。原因がわかれば、対処方法も見えてくる。症状だけを見るのではなく、その人の「なぜ」を大切にする看護を、ミライズは目指しています。
                </p>
              </FadeIn>
              <FadeIn direction="up" duration={1.6} delay={0.2}>
                <p>
                  訪問看護なら通院不要で在宅でケアが受けられ、週最大3回まで訪問できます。服薬・血糖値・血圧などの医療的なサポートから、本人のメンタルケア、疲れた親御さんへの寄り添いまで、丸ごと届けられるのが訪問看護の強みです。乳幼児から小学校・中学校・高校・成人へと、その人の人生に長く関わり続けることがミライズの看護です。
                </p>
              </FadeIn>
            </div>
          </div>
        </section>


        {/* ════════════════════════════════════════════
            働く魅力 ＋ 求める人物像
            ── PC: 2つの大きな円の中にコンテンツ ──
        ════════════════════════════════════════════ */}
        <section className="relative py-16 sm:py-24 px-[5%] z-10">
          <div className="max-w-[1100px] mx-auto">

            {/* ── PC（lg以上）：重なる2つの大円 ── */}
            <FadeIn direction="up" duration={1.6}>
            <div className="hidden lg:block relative" style={{ height: "640px" }}>

              {/* ──────────────────────────────────────────
                  層構造
                  z=0  最背面グロー（塗り・縁なし）
                  z=1  左メイン白円（塗りのみ・縁なし）
                  z=2  右メイン白円（塗りのみ・縁なし）
                  z=3  左コンテンツ
                  z=4  左縁だけ円（前面・白円よりずれた位置）
                  z=5  右縁だけ円（前面・白円よりずれた位置）
                  z=6  右コンテンツ
              ────────────────────────────────────────── */}

              {/* z=0：最背面グロー円（塗りのみ・縁なし） */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "700px", height: "700px",
                  background: "rgba(236,153,208,0.2)",
                  left: "240px", top: "-40px",
                  zIndex: 0,
                }}
              />

              {/* z=1：左メイン白円（縁なし・塗りのみ） */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "630px", height: "630px",
                  background: "rgba(255,255,255,0.76)",
                  left: 0, top: 0,
                  zIndex: 1,
                }}
              />

              {/* z=2：右メイン白円（縁なし・塗りのみ・左円に重なる） */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "530px", height: "530px",
                  background: "rgba(255,255,255,0.76)",
                  right: 0, top: "55px",
                  zIndex: 2,
                }}
              />

              {/* z=3：左コンテンツ */}
              <div
                className="absolute"
                style={{ width: "630px", left: 0, top: 0, padding: "120px 50px 50px 72px", zIndex: 3 }}
              >
                <h2
                  className="text-4xl font-bold mb-7 text-center"
                  style={{ ...H1_GRADIENT, fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  ミライズで働く魅力
                </h2>
                <div className="space-y-5">
                  {appealPoints.map((point, i) => (
                    <div key={i}>
                      <span
                        className="inline-block text-lg font-bold pb-[2px] mb-1"
                        style={{
                          color: point.color,
                          borderBottom: `1.5px solid ${point.color}`,
                          fontFamily: "var(--font-zen-maru-gothic)",
                        }}
                      >
                        {point.title}
                      </span>
                      <p className="text-base text-[#5a5a5a] leading-relaxed ml-3">
                        {point.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* z=4：左縁だけ円（前面・白円の左上にずらして配置） */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "630px", height: "630px",
                  background: "transparent",
                  border: "1.5px solid rgba(236,153,208,0.6)",
                  left: "-18px", top: "-18px",
                  zIndex: 4,
                }}
              />

              {/* z=5：右縁だけ円（前面・白円の右上にずらして配置） */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "530px", height: "530px",
                  background: "transparent",
                  border: "1.5px solid rgba(179,174,219,0.6)",
                  right: "-16px", top: "38px",
                  zIndex: 5,
                }}
              />

              {/* z=6：右コンテンツ（白円の中） */}
              <div
                className="absolute"
                style={{ width: "530px", right: 0, top: "55px", padding: "108px 75px 50px 60px", zIndex: 6 }}
              >
                <h3
                  className="text-4xl font-bold mb-6 text-center"
                  style={{ ...H1_GRADIENT, fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  求める人物像
                </h3>
                <ul className="space-y-4">
                  {wantedItems.map((item, i) => (
                    <li key={i} className="text-base text-[#4a4a4a] leading-relaxed text-center">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-[#8a8a8a] text-center leading-loose">
                  ※経験・資格は問いません。人柄や想いを大切にしています。
                </p>
              </div>

            </div>
            </FadeIn>

            {/* ── SP（lg未満）：通常スタック ── */}
            <div className="lg:hidden space-y-12">
              <FadeIn direction="up" duration={1.6}>
                <div
                  className="rounded-3xl p-8"
                  style={{
                    background: "rgba(255,240,252,0.85)",
                    border: "1.5px solid rgba(236,153,208,0.4)",
                  }}
                >
                  <h2
                    className="text-3xl font-bold mb-6 text-center"
                    style={{ ...H1_GRADIENT, fontFamily: "var(--font-zen-maru-gothic)" }}
                  >
                    ミライズで働く魅力
                  </h2>
                  <div className="space-y-5">
                    {appealPoints.map((point, i) => (
                      <div key={i}>
                        <span
                          className="inline-block text-base font-bold pb-[2px] mb-1"
                          style={{
                            color: point.color,
                            borderBottom: `1.5px solid ${point.color}`,
                            fontFamily: "var(--font-zen-maru-gothic)",
                          }}
                        >
                          {point.title}
                        </span>
                        <p className="text-base text-[#4a4a4a] leading-relaxed ml-1">
                          {point.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="up" duration={1.6} delay={0.1}>
                <div
                  className="rounded-3xl p-8"
                  style={{
                    background: "rgba(243,240,255,0.85)",
                    border: "1.5px solid rgba(179,174,219,0.4)",
                  }}
                >
                  <h3
                    className="text-3xl font-bold mb-6 text-center"
                    style={{ ...H1_GRADIENT, fontFamily: "var(--font-zen-maru-gothic)" }}
                  >
                    求める人物像
                  </h3>
                  <ul className="space-y-3">
                    {wantedItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-base text-[#4a4a4a]">
                        <div
                          className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full"
                          style={{ background: "linear-gradient(135deg, #EC99D0, #B3AEDB)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm text-[#8a8a8a]">
                    ※経験・資格は問いません。人柄や想いを大切にしています。
                  </p>
                </div>
              </FadeIn>
            </div>

          </div>
        </section>

      </div>{/* ／連続背景エリア */}


      {/* ══════════════════════════════
          採用情報テーブル
      ══════════════════════════════ */}
      <section
        className="relative overflow-hidden py-16 sm:py-24 px-[5%]"
        style={{ background: "rgba(255,255,255,0.65)" }}
      >
        {/* 散りばめた装飾円 */}
        <div className="absolute -left-20 top-[6%] w-[260px] h-[260px] rounded-full pointer-events-none"
          style={{ background: "rgba(236,153,208,0.12)" }} />
        <div className="absolute left-[8%] top-[3%] w-[70px] h-[70px] rounded-full pointer-events-none hidden sm:block"
          style={{ background: "rgba(132,211,244,0.16)" }} />
        <div className="absolute right-[-50px] top-[20%] w-[220px] h-[220px] rounded-full pointer-events-none"
          style={{ background: "rgba(179,174,219,0.13)" }} />
        <div className="absolute right-[12%] top-[16%] w-[55px] h-[55px] rounded-full pointer-events-none hidden sm:block"
          style={{ background: "rgba(158,221,201,0.18)" }} />
        <div className="absolute left-[-40px] top-[52%] w-[190px] h-[190px] rounded-full pointer-events-none"
          style={{ background: "rgba(132,211,244,0.1)" }} />
        <div className="absolute left-[14%] top-[60%] w-[60px] h-[60px] rounded-full pointer-events-none hidden sm:block"
          style={{ background: "rgba(236,153,208,0.14)" }} />
        <div className="absolute right-[-30px] bottom-[10%] w-[240px] h-[240px] rounded-full pointer-events-none"
          style={{ background: "rgba(236,153,208,0.1)" }} />
        <div className="absolute right-[20%] bottom-[6%] w-[80px] h-[80px] rounded-full pointer-events-none hidden sm:block"
          style={{ background: "rgba(179,174,219,0.16)" }} />
        <div className="absolute left-[40%] bottom-[2%] w-[45px] h-[45px] rounded-full pointer-events-none hidden sm:block"
          style={{ background: "rgba(158,221,201,0.16)" }} />

        <div className="max-w-[860px] mx-auto space-y-14 relative z-10">

          {/* ── 募集職種 ── */}
          <FadeIn direction="up" duration={1.6}>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ ...H1_GRADIENT, fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              募集職種
            </h2>
            <div className="flex flex-wrap gap-4">
              {jobTypes.map((job) => (
                <span
                  key={job}
                  className="inline-flex items-center justify-center rounded-xl border px-7 py-3 text-base sm:text-lg font-bold text-[#231F20]"
                  style={{
                    borderColor: H_COLOR,
                    fontFamily: "var(--font-zen-maru-gothic)",
                  }}
                >
                  {job}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* ── 募集要項 ── */}
          <FadeIn direction="up" duration={1.6} delay={0.1}>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ ...H1_GRADIENT, fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              募集要項
            </h2>
            <ul className="space-y-4 pl-1">
              {requirements.map((row) => (
                <li
                  key={row.label}
                  className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6"
                >
                  <span
                    className="flex-shrink-0 sm:w-36 font-bold text-base sm:text-lg text-[#231F20] flex items-start gap-2"
                    style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                  >
                    <span className="text-[#c9559e] leading-7">•</span>
                    {row.label}：
                  </span>
                  <span className="text-base sm:text-lg text-[#4a4a4a] leading-7">
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* ── 応募方法 ── */}
          <FadeIn direction="up" duration={1.6} delay={0.2}>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ ...H1_GRADIENT, fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              応募方法
            </h2>
            <ol className="space-y-5">
              {applySteps.map((step, i) => (
                <li key={i} className="text-base sm:text-lg text-[#4a4a4a] leading-7">
                  <span className="font-bold text-[#231F20] mr-2">{i + 1}.</span>
                  {step.text}
                  {step.note && (
                    <span className="block text-sm sm:text-base text-[#8a8a8a] mt-2 ml-6">
                      （{step.note}）
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </FadeIn>

          {/* ── 応募フォーム ── */}
          <FadeIn direction="up" duration={1.6} delay={0.2}>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ ...H1_GRADIENT, fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              応募フォーム
            </h2>
            <ApplicationForm />
          </FadeIn>

        </div>
      </section>

    </div>
  );
}

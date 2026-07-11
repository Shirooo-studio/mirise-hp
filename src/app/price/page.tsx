import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { PriceTabs } from "@/components/price/PriceTabs";

export const metadata: Metadata = {
  title: "ご利用料金",
  description:
    "訪問看護ステーションミライズのご利用料金をご案内します。医療保険・介護保険・自立支援医療・自費など各種保険に対応しています。",
  alternates: { canonical: "/price" },
};

/* ─── このページのメインカラー（ブルー） ─── */
const MAIN = "#3f9fd0";
const HEAD_BG = "#6cb6dd";
const CELL_BG = "#eef5fa";

const tableHeaders = ["利用方法", "負担割合", "1回あたりの自己負担額", "特徴"];
const tableRows: ReactNode[][] = [
  ["医療保険", "1〜3割", "約800円〜2,400円", "小児・難病・障がい者など"],
  ["子ども医療費助成", "なし", "0円", "18歳以下対象、富山県内"],
  ["自立支援医療", "1割", "0円〜上限あり", <>精神疾患・発達障がい<br className="hidden lg:block" />・知的障がい対象</>],
  ["介護保険", "1〜3割", "約300円〜3,000円", "65歳以上・要介護認定が必要"],
  ["自費", "全額負担", "1回8,000円〜", "保険適用外、オーダーメイド対応"],
];

const COLS =
  "minmax(0,1.1fr) minmax(0,0.7fr) minmax(0,1.5fr) minmax(0,1.5fr)";

export default function PricePage() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('/watercolor-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ════════ ヘッダー：水彩背景を見せる帯 ════════ */}
      <section className="px-[5%] pt-12 sm:pt-20 pb-20 sm:pb-28">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn direction="up" duration={1.6}>
            <h1
              className="text-3xl sm:text-5xl font-bold text-[#3a3a3a] leading-[1.4]"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              ご利用料金
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ════════ セクション①：料金一覧（白バンド） ════════ */}
      <div className="relative z-10 bg-white rounded-t-[40px] -mt-6 shadow-[0_-10px_30px_rgba(0,0,0,0.04)]">
        <section className="px-[5%] pt-16 sm:pt-20 pb-20 sm:pb-28">
          <div className="max-w-[1000px] mx-auto">
            <FadeIn direction="up" duration={1.4}>
              {/* セクション見出し */}
              <div className="flex items-center gap-3 mb-3">
                <span className="w-1.5 h-7 rounded-full" style={{ background: MAIN }} />
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#231F20]"
                  style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  料金一覧
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#5a5a5a] leading-relaxed mb-8">
                ミライズの訪問看護は、各種保険・公費が適用されるため、自己負担を抑えてご利用いただけます。
              </p>

              {/* 表（全サイズ共通・セル内で折り返し） */}
              <div>
                {/* ヘッダー行 */}
                <div className="grid gap-1.5 sm:gap-2 mb-1.5 sm:mb-2" style={{ gridTemplateColumns: COLS }}>
                  {tableHeaders.map((h) => (
                    <div
                      key={h}
                      className="rounded-md px-2 sm:px-4 py-3 sm:py-4 text-center text-white font-bold text-sm sm:text-base leading-snug flex items-center justify-center"
                      style={{ background: HEAD_BG, fontFamily: "var(--font-zen-maru-gothic)" }}
                    >
                      {h}
                    </div>
                  ))}
                </div>
                {/* データ行 */}
                {tableRows.map((row, ri) => (
                  <div
                    key={ri}
                    className="grid gap-1.5 sm:gap-2 mb-1.5 sm:mb-2"
                    style={{ gridTemplateColumns: COLS }}
                  >
                    {row.map((cell, ci) => (
                      <div
                        key={ci}
                        className="rounded-md px-2 sm:px-4 py-4 sm:py-5 text-center text-sm sm:text-base leading-snug flex items-center justify-center"
                        style={
                          ci === 0
                            ? {
                                background: MAIN,
                                color: "#fff",
                                fontWeight: 700,
                                fontFamily: "var(--font-zen-maru-gothic)",
                              }
                            : { background: CELL_BG, color: "#4a4a4a" }
                        }
                      >
                        {cell}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      </div>

      {/* ════════ セクション②：保険・公費別の詳細（薄ブルーバンド） ════════ */}
      <div className="bg-[#e8f1fa]/85">
        <section className="px-[5%] pt-20 sm:pt-28 pb-28 sm:pb-36">
          <div className="max-w-[1000px] mx-auto">
            <FadeIn direction="up" duration={1.4}>
              {/* セクション見出し */}
              <div className="flex items-center gap-3 mb-3 justify-start sm:justify-center">
                <span className="w-1.5 h-7 rounded-full" style={{ background: MAIN }} />
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#231F20]"
                  style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  保険・公費別のご案内
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#5a5a5a] leading-relaxed mb-10 sm:text-center">
                ご利用方法を選ぶと、対象となる方や詳しい料金をご覧いただけます。
              </p>
            </FadeIn>

            <FadeIn direction="up" duration={1.4} delay={0.05}>
              <PriceTabs />
            </FadeIn>

            {/* ── 注意書き ── */}
            <FadeIn direction="up" duration={1.4} delay={0.1}>
              <p className="text-sm text-[#8a8a8a] leading-relaxed mt-16 max-w-[760px] sm:mx-auto">
                ※記載の料金は目安です。訪問の時間・頻度・内容、保険の種類や負担割合によって異なります。詳しくはお気軽にお問い合わせください。
              </p>
            </FadeIn>
          </div>
        </section>
      </div>
    </div>
  );
}

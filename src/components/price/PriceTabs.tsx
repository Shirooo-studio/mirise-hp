"use client";

import { useState } from "react";

const MAIN = "#3f9fd0";
const MAIN_BAR = "linear-gradient(90deg, #3f9fd0 0%, rgba(63,159,208,0.45) 100%)";

/* 自己負担額テーブルのクリーム配色（参考画像に合わせる） */
const CREAM_HEAD = "#ead9a0";
const CREAM_LABEL = "#f1e7c8";
const CREAM_VALUE = "#fbf7ec";

type Row = { label: string; value: string; valueNote?: string };
type Category = {
  tab: string;
  title: string;
  target: string;
  targetNote?: string;
  base?: string;
  breakdownHeader?: string;
  rows: Row[];
  bullets?: string[];
  note?: string;
};

const categories: Category[] = [
  {
    tab: "医療保険をご利用の場合",
    title: "医療保険をご利用の場合",
    target: "介護保険対象外の方（難病・小児・障がいなど）",
    base: "約8,000円〜",
    breakdownHeader: "訪問1回（約30分）につき",
    rows: [
      { label: "医療保険適用（1割負担）", value: "約800円〜" },
      { label: "医療保険適用（3割負担）", value: "約2,400円〜" },
    ],
  },
  {
    tab: "0歳から18歳の小児訪問看護（富山県内）",
    title: "0歳から18歳の小児訪問看護（富山県内）",
    target: "18歳未満で医療証をお持ちの方",
    targetNote: "※18歳に達した日以後における最初の3月31日まで",
    base: "0円",
    breakdownHeader: "訪問1回（約30分）につき",
    rows: [{ label: "子ども医療費助成制度適用", value: "0円" }],
    bullets: [
      "自己負担0円でご利用いただけます",
      "医療費の心配なく、継続的なケアが可能",
    ],
  },
  {
    tab: "18歳以上の障がい者医療（自立支援医療制度）",
    title: "18歳以上の障がい者医療（自立支援医療制度）",
    target: "精神疾患・発達障がい・知的障がいなど",
    base: "約8,000円〜",
    breakdownHeader: "訪問1回（約30分）につき",
    rows: [
      {
        label: "自立支援医療（精神通院医療）適用（原則1割負担）",
        value: "0円〜",
        valueNote: "※所得に応じた月額自己負担上限あり",
      },
    ],
    bullets: [
      "定期的な訪問でも費用負担を抑えられる",
      "利用可能な方は市町村の窓口で申請が必要",
    ],
  },
  {
    tab: "介護保険をご利用の場合",
    title: "介護保険をご利用の場合",
    target: "要介護認定を受けた方（要支援・要介護）",
    base: "約8,000円〜",
    breakdownHeader: "訪問1回（約30分）につき",
    rows: [
      { label: "介護保険適用（1割負担）", value: "約800円〜" },
      { label: "介護保険適用（2割負担）", value: "約1,600円〜" },
      { label: "介護保険適用（3割負担）", value: "約2,400円〜" },
    ],
    note: "介護保険の支給限度額を超えた分は全額自己負担となります。",
  },
  {
    tab: "自費で訪問看護を受ける場合",
    title: "自費で訪問看護を受ける場合",
    target: "保険適用外の方（介護保険や医療保険の対象にならない方）",
    base: "約8,000円〜",
    breakdownHeader: "訪問1回（約60分）につき",
    rows: [
      { label: "看護師訪問", value: "8,000円（税込）〜" },
      { label: "看護＋リハビリ（作業療法士・言語聴覚士）", value: "10,000円（税込）〜" },
    ],
    bullets: ["完全オーダーメイドのケアが可能", "定期訪問だけでなく、単発利用もOK！"],
  },
];

export function PriceTabs() {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <div>
      {/* タブボタン */}
      <div className="flex flex-wrap justify-start sm:justify-center gap-3 sm:gap-4 mb-10">
        {categories.map((c, i) => {
          const on = i === active;
          return (
            <button
              key={c.tab}
              type="button"
              onClick={() => setActive(i)}
              className="rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold border-2 transition-colors"
              style={{
                fontFamily: "var(--font-zen-maru-gothic)",
                background: on ? MAIN : "#ffffff",
                color: on ? "#ffffff" : MAIN,
                borderColor: MAIN,
              }}
            >
              {c.tab}
            </button>
          );
        })}
      </div>

      {/* 詳細パネル */}
      <div className="max-w-[760px] sm:mx-auto">
        {/* ヘッダーバー */}
        <div className="rounded-xl px-6 py-4 mb-6" style={{ background: MAIN_BAR }}>
          <h3
            className="text-lg sm:text-xl font-bold text-white"
            style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
          >
            {cat.title}
          </h3>
        </div>

        {/* 対象となる方 */}
        <div className="px-2 mb-7">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base sm:text-lg">
            <span className="font-bold text-[#231F20]" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
              対象となる方
            </span>
            <span style={{ color: MAIN }}>▶</span>
            <span className="text-[#4a4a4a]">{cat.target}</span>
          </div>
          {cat.targetNote && (
            <p className="text-sm sm:text-base text-[#8a8a8a] mt-1 pl-1">{cat.targetNote}</p>
          )}
        </div>

        {/* 基本料金（グレー） */}
        {cat.base && (
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8 rounded-lg bg-[#f3f3f3] px-5 sm:px-7 py-5 mb-8">
            <span className="font-bold text-[#231F20] sm:w-36 shrink-0" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
              基本料金
            </span>
            <span className="text-lg sm:text-xl text-[#231F20] font-bold">{cat.base}</span>
          </div>
        )}

        {/* 自己負担額（クリームのテーブル） */}
        {cat.rows.length > 0 && (
          <div className="grid grid-cols-2 gap-[3px] bg-white rounded-lg overflow-hidden">
            {/* ヘッダー行 */}
            <div
              className="px-5 py-4 font-bold text-[#5b4a26] text-base"
              style={{ background: CREAM_HEAD, fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              自己負担額
            </div>
            <div
              className="px-5 py-4 font-bold text-[#5b4a26] text-base"
              style={{ background: CREAM_HEAD }}
            >
              {cat.breakdownHeader}
            </div>
            {/* データ行 */}
            {cat.rows.map((r) => (
              <div key={r.label} className="contents">
                <div
                  className="px-5 py-5 text-base text-[#4a4a4a] flex items-center"
                  style={{ background: CREAM_LABEL }}
                >
                  {r.label}
                </div>
                <div
                  className="px-5 py-5 flex flex-col justify-center"
                  style={{ background: CREAM_VALUE }}
                >
                  <span className="text-base sm:text-lg font-bold text-[#231F20]">{r.value}</span>
                  {r.valueNote && (
                    <span className="text-sm text-[#8a8a8a] mt-1">{r.valueNote}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ポイント（オレンジの丸） */}
        {cat.bullets && (
          <ul className="mt-7 space-y-3.5">
            {cat.bullets.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span
                  className="w-4 h-4 rounded-full shrink-0"
                  style={{ background: "radial-gradient(circle at 35% 35%, #ffe08a, #f1a92e)" }}
                />
                <span className="text-base sm:text-lg text-[#3a3a3a]">{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* 注記 */}
        {cat.note && (
          <p className="text-sm sm:text-base text-[#6b6b6b] leading-relaxed mt-6 px-1">
            ※{cat.note}
          </p>
        )}
      </div>
    </div>
  );
}

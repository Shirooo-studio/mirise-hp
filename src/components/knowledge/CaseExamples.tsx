"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* ─── 利用例データ（内容は仮。あとで差し替え） ─── */
type CaseItem = {
  no: number;
  title: string;
  color: string;
  subject: string[];
  /** カード写真（public/ 配下） */
  image: string;
  /** 詳細（見出し＋箇条書き）※仮テキスト */
  detail: { heading: string; items: string[] }[];
};

const cases: CaseItem[] = [
  {
    no: 1,
    title: "退院後の生活を安定させたい",
    color: "#EC99D0",
    subject: ["難病・点滴・褥瘡・吸痰・酸素管理・血糖管理・入浴介助など"],
    image: "/case-1.png",
    detail: [
      {
        heading: "こんなお悩み",
        items: [
          "退院は決まったけれど、家でこれまで通りの生活ができるか不安",
          "医療機器の管理や体調の変化に、ご家族だけでの対応に限界を感じている",
        ],
      },
      {
        heading: "ミライズの関わり",
        items: ["医療機器の管理や体調管理を行い、住み慣れた環境で安心して過ごせるよう調整します。"],
      },
      {
        heading: "その後の変化",
        items: [
          "体調が安定して安心して自宅で過ごせるようになった。",
          "急なときの相談先ができ、ご家族の不安がやわらぎました。",
          "24時間対応なので安心して任せられる。",
        ],
      },
    ],
  },
  {
    no: 2,
    title: "就労やデイの送り出しを支えてほしい",
    color: "#B3AEDB",
    subject: ["精神疾患・知的障害・発達障害"],
    image: "/case-2.png",
    detail: [
      {
        heading: "こんなお悩み",
        items: [
          "内服薬の紛失や定期で内服ができていない",
          "家族への暴言・暴力がある",
          "引きこもり自宅から出ようとしない",
        ],
      },
      {
        heading: "ミライズの関わり",
        items: [
          "薬局と連携を図り、お薬カレンダー、一包化、訪問時にお薬補充や残薬確認など内服管理を行う。",
          "家族への負担を減らすために、デイサービス、就労支援、ショートステイなどを利用できるよう支援する。",
          "生活リズムを把握し、まずは部屋を出るところから始めます。",
        ],
      },
      {
        heading: "その後の変化",
        items: [
          "内服への意識が向上し、精神状態や身体状態が安定した。",
          "外部サービスを利用することで家族への心身的な負担を減らすことができた。",
          "看護師が来た時は部屋から出てゲームをしたり、散歩をしながらポケモンGOをしたり屋外へ出ることができるようになった。",
        ],
      },
    ],
  },
  {
    no: 3,
    title: "お子様の成長を支えてほしい",
    color: "#84D3F4",
    subject: ["ASD・ADHD・その他発達障害・ダウン症・脳性麻痺など"],
    image: "/case-3.png",
    detail: [
      {
        heading: "こんなお悩み",
        items: [
          "食事を手で掴んで食べてしまう",
          "自転車に乗れない",
          "足の力が弱くよく転んでしまう",
          "癇癪がおさまらず困っている",
          "自傷や他害をしてしまう",
          "ひとり親で預け先がなく外出できないときがある",
          "外出や出張の際、子どもの預け先がない",
        ],
      },
      {
        heading: "ミライズの関わり",
        items: [
          "環境を調整し、テレビやiPadを片付け、椅子の高さを変えて食事に集中できるように整える。食事内容に合わせて箸・スプーン・フォークを選び、うまくできたら褒めることを繰り返す。",
          "体幹機能やバランス感覚の低下がみられるため、体幹強化とバランス練習を行う。",
          "麻痺があり足に力が入りにくいため、遊びの中で楽しみながら足の力や体幹を鍛える。",
          "癇癪の原因を把握し、癇癪や自傷・他害が起こらないよう落ち着ける場所へ誘導する。落ち着いた後に、どうすればよかったかを一緒に整理する。",
          "家族のレスパイトのため、放課後等デイサービスやショートステイの紹介、サービス利用までの支援を行う。ご自宅はもちろん、放課後等デイサービス等への訪問を通じて、お子様の個性を伸ばし、集団生活を支えるお手伝いをします。",
        ],
      },
      {
        heading: "その後の変化",
        items: [
          "エジソン箸やスプーン、フォークを使って食事ができるようになり、学校でも箸を使えるようになった。",
          "自転車に乗れるようになり、家族で公園などへ出かけられるようになった。",
          "歩いて登校できるようになった。",
          "癇癪への対応が明確になり、起きてもスムーズに対応できるようになった。",
          "放課後等デイサービス・ショートステイ・訪問看護の利用で、親御様の時間を確保できるようになった。",
        ],
      },
    ],
  },
];

export function CaseExamples() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? cases[openIndex] : null;

  // モーダル表示中はEscで閉じる＋背面スクロール固定
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openIndex]);

  return (
    <>
      {/* ── カード（携帯：縦積み3枚 ／ PC：横スクロール5枚） ── */}
      <div
        className="flex flex-col sm:flex-row gap-5 sm:gap-6 sm:overflow-x-auto pb-3 [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
      >
        {cases.map((c, i) => (
          <button
            key={c.no}
            type="button"
            onClick={() => setOpenIndex(i)}
            style={{ scrollSnapAlign: "start" }}
            className={`group relative flex-none w-full sm:w-[min(85vw,420px)] text-left rounded-[20px] bg-white shadow-[0_16px_44px_rgba(130,110,180,0.10)] overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${i >= 3 ? "hidden sm:block" : ""}`}
          >
            {/* Case タグ（付箋風） */}
            <span
              className="absolute top-4 left-4 z-10 -rotate-3 rounded-md px-3 py-1 text-sm font-bold text-white shadow-sm"
              style={{ background: c.color, fontFamily: "var(--font-lora)" }}
            >
              Case {c.no}
            </span>

            {/* テキスト部 */}
            <div className="px-6 pt-14 pb-6">
              <p className="text-xl font-bold leading-snug" style={{ color: c.color, fontFamily: "var(--font-zen-maru-gothic)" }}>
                {c.title}
              </p>
              <span className="block w-16 h-0.5 rounded-full my-4" style={{ background: c.color }} />
              <div className="text-xs sm:text-base sm:min-h-[3.25rem] text-[#4a4a4a] leading-relaxed" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                {c.subject.map((s, k) => (
                  <p key={k}>{s}</p>
                ))}
              </div>
            </div>

            {/* 画像部＋ホバーで「詳細を見る」 */}
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={c.image}
                alt={c.title}
                width={420}
                height={280}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* 白の半透明オーバーレイ（少しだけ淡く） */}
              <div className="absolute inset-0 bg-white/25" />
              {/* ホバーオーバーレイ */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold tracking-wide" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                  詳細を見る ›
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* スワイプ／スクロールのヒント（PCのみ） */}
      <div className="hidden sm:flex justify-end items-center gap-3 mt-4">
        <span className="text-sm tracking-[0.2em] text-[#bbb]">Scroll</span>
        <div className="h-px w-16 bg-[#bbb]" />
        <span className="text-lg text-[#bbb]">›</span>
      </div>

      {/* ── モーダル（ポップアップ） ── */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/50 px-4 py-8 sm:py-12"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-[720px] rounded-[20px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <div className="flex justify-end px-5 pt-5">
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                className="inline-flex items-center gap-2 rounded-full border border-[#C9A9DF] px-5 py-2 text-sm font-bold text-[#8263C3] hover:bg-[#f4eefb] transition-colors"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                CLOSE ✕
              </button>
            </div>

            <div className="px-6 sm:px-10 pb-10">
              {/* Case タグ＋色付き見出しバー */}
              <div className="relative mt-2">
                <span
                  className="absolute -top-3 left-4 z-10 -rotate-3 rounded-md px-3 py-1 text-sm font-bold text-white shadow-sm"
                  style={{ background: active.color, fontFamily: "var(--font-lora)" }}
                >
                  Case {active.no}
                </span>
                <div className="rounded-xl px-6 py-6 pt-8" style={{ background: active.color }}>
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                    {active.title}
                  </p>
                </div>
              </div>

              {/* 対象（色付きヘッダーバー） */}
              <div className="mt-6 rounded-xl border border-black/[0.06] overflow-hidden">
                <div className="px-5 py-2.5 text-sm sm:text-base font-bold text-white" style={{ background: active.color, fontFamily: "var(--font-zen-maru-gothic)" }}>
                  対象
                </div>
                <div className="px-5 py-4 bg-white flex flex-wrap gap-x-6 gap-y-1">
                  {active.subject.map((s, k) => (
                    <p key={k} className="text-base font-bold text-[#231F20]" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                      {s}
                    </p>
                  ))}
                </div>
              </div>

              {/* 詳細（各セクション：色付きヘッダーバー＋本文） */}
              <div className="mt-5 space-y-5">
                {active.detail.map((d) => (
                  <div key={d.heading} className="rounded-xl border border-black/[0.06] overflow-hidden">
                    <div
                      className="px-5 py-2.5 text-sm sm:text-base font-bold text-[#231F20]"
                      style={{ background: `${active.color}26`, fontFamily: "var(--font-zen-maru-gothic)" }}
                    >
                      {d.heading}
                    </div>
                    <div className="px-5 py-4 bg-white">
                      <ul className="space-y-2.5">
                        {d.items.map((it, k) => (
                          <li key={k} className="flex items-start gap-3 text-base text-[#4a4a4a] leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: active.color }} />
                            <span style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

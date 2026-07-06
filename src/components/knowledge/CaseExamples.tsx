"use client";

import { useState, useEffect } from "react";

/* ─── 利用例データ（内容は仮。あとで差し替え） ─── */
type CaseItem = {
  no: number;
  title: string;
  color: string;
  subject: string[];
  /** 詳細（見出し＋箇条書き）※仮テキスト */
  detail: { heading: string; items: string[] }[];
};

const cases: CaseItem[] = [
  {
    no: 1,
    title: "退院後の生活を安定させたい",
    color: "#EC99D0",
    subject: ["難病・一般看護"],
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
          "医療機器の扱いにご家族も慣れ、通院回数を抑えながら在宅で落ち着いて過ごせるように。",
          "急なときの相談先ができ、ご家族の不安がやわらぎました。",
        ],
      },
    ],
  },
  {
    no: 2,
    title: "就労やデイの送り出しを支えてほしい",
    color: "#B3AEDB",
    subject: ["精神・就労支援"],
    detail: [
      {
        heading: "こんなお悩み",
        items: [
          "就労がなかなか続かない、通所の送り出しがむずかしい",
          "精神的に不安定になりやすく、生活リズムが乱れがち",
        ],
      },
      {
        heading: "ミライズの関わり",
        items: ["精神状態や体調の管理を行い、就労やデイサービスを安心して続けられるよう支援します。"],
      },
      {
        heading: "その後の変化",
        items: [
          "生活リズムが整い、就労やデイサービスへの通所が続くように。",
          "不調のサインに早めに気づけるようになり、休職や再入院を防げています。",
        ],
      },
    ],
  },
  {
    no: 3,
    title: "お子様の成長を支えてほしい",
    color: "#84D3F4",
    subject: ["小児・放デイ連携"],
    detail: [
      {
        heading: "こんなお悩み",
        items: [
          "子どもの発達や集団生活のことで悩んでいる",
          "療育施設に通いづらい／小学校以降にケアが続かず不安",
        ],
      },
      {
        heading: "ミライズの関わり",
        items: [
          "ご自宅はもちろん、放課後等デイサービス等への訪問を通じて、お子様の個性を伸ばし、集団生活を支えるお手伝いをします。",
        ],
      },
      {
        heading: "その後の変化",
        items: [
          "できることが少しずつ増え、集団生活での困りごとが減ってきました。",
          "ご家族も関わり方のコツをつかみ、家庭でも落ち着いて過ごせる時間が増えました。",
        ],
      },
    ],
  },
  {
    no: 4,
    title: "自分らしい生活リズムを取り戻したい",
    color: "#9EDED0",
    subject: ["精神・社会参加"],
    detail: [
      {
        heading: "こんなお悩み",
        items: [
          "引きこもりがちで、外出や社会とのつながりが希薄になっている",
          "生活のリズムが乱れ、一歩を踏み出しづらい",
        ],
      },
      {
        heading: "ミライズの関わり",
        items: ["定期的にお伺いしてお話を伺い、社会とのつながりを保ちながら、少しずつ活動範囲を広げていきます。"],
      },
      {
        heading: "その後の変化",
        items: [
          "訪問を楽しみに待てるようになり、外出や人との関わりが少しずつ増えています。",
          "生活リズムが安定し、自分のペースで一歩を踏み出せるようになりました。",
        ],
      },
    ],
  },
  {
    no: 5,
    title: "家族だけでの対応に限界を感じている",
    color: "#C9914A",
    subject: ["ご家族・レスパイト"],
    detail: [
      {
        heading: "こんなお悩み",
        items: [
          "ご家族だけでの介護・看護に、心身の負担が大きくなっている",
          "誰に相談すればよいか分からず、ひとりで抱え込んでいる",
        ],
      },
      {
        heading: "ミライズの関わり",
        items: ["ご家族の負担を分かち合い、休息と笑顔を取り戻すお手伝いをします。お悩みもじっくり伺います。"],
      },
      {
        heading: "その後の変化",
        items: [
          "ご家族が休息を取れるようになり、気持ちに余裕が生まれました。",
          "悩みを共有できる相手ができ、ご家庭に笑顔が増えました。",
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
              <div className="text-xs sm:text-base text-[#4a4a4a] leading-relaxed" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                {c.subject.map((s, k) => (
                  <p key={k}>{s}</p>
                ))}
              </div>
            </div>

            {/* 画像部（写真は後で差し替え）＋ホバーで「詳細を見る」 */}
            <div className="relative aspect-[3/2] overflow-hidden">
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: `linear-gradient(160deg, ${c.color}22, ${c.color}11)` }}
              >
                <span className="text-sm text-[#9a9a9a]">写真</span>
              </div>
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

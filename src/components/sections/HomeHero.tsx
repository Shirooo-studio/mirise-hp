"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * トップページ ファーストビュー（FV）
 *
 * 左：ポエム「大丈夫。ひとりで背負わなくて、いいんですよ。」
 * 右：虹色の葉をもつ木（RainbowTree）
 *
 * 下端の矢印から次セクション（ABOUT）へ流れる。
 */

const EASE = [0.22, 1, 0.36, 1] as const;

/* ポエム：一部の語を色付け */
const poemLines: { t: string; c?: string }[][] = [
  [{ t: "大丈夫。" }],
  [{ t: "ひとりで背負わなくて" }],
  [{ t: "いいんですよ。" }],
];

/* ヒーロー下の3つの円バッジ（アイコン画像は後で public/ に保存して差し替え） */
const badges = [
  { label: ["ご自宅で安心の", "訪問ケア"], color: "#8E86C9", icon: "/icon-home.png" },
  { label: ["ご家族まるごと", "サポート"], color: "#E47BB8", icon: "/icon-family.png" },
  { label: ["自分らしい未来を", "一緒に"], color: "#5BAEE0", icon: "/icon-future.png" },
];

export function HomeHero() {
  return (
    <section className="relative min-h-[calc(100vh-100px)] lg:min-h-[820px] flex items-start overflow-hidden px-[5%] py-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-0 mb-8 lg:mb-24">

      {/* ══════ 背景装飾：虹のかけら・光の粒・星・グラデの丸 ══════ */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* グラデの丸 */}
        <span className="absolute rounded-full blur-md" style={{ width: 120, height: 120, bottom: "10%", left: "3%", background: "rgba(220,206,248,0.30)" }} />
        <span className="absolute rounded-full" style={{ width: 44, height: 44, top: "16%", left: "22%", background: "rgba(223,248,238,0.5)" }} />
        {/* 光の粒 */}
        <span className="absolute rounded-full" style={{ width: 8, height: 8, top: "26%", left: "10%", background: "rgba(255,216,241,0.9)" }} />
        <span className="absolute rounded-full" style={{ width: 6, height: 6, top: "44%", left: "30%", background: "rgba(205,232,255,0.95)" }} />
        <span className="absolute rounded-full" style={{ width: 5, height: 5, bottom: "28%", left: "9%", background: "rgba(223,248,238,1)" }} />
        {/* 星 */}
        <svg className="absolute" style={{ top: "13%", left: "38%", color: "#DCCEF8" }} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 l1.3 8.7 L22 12 l-8.7 1.3 L12 22 l-1.3-8.7 L2 12 l8.7-1.3 Z" />
        </svg>
        <svg className="absolute" style={{ bottom: "30%", left: "28%", color: "#FFD8F1" }} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 l1.3 8.7 L22 12 l-8.7 1.3 L12 22 l-1.3-8.7 L2 12 l8.7-1.3 Z" />
        </svg>
      </div>

      {/* ══════ 右奥のイラスト（PCのみ・背面・右詰・大きめ／モバイルは文章下にブロック配置） ══════ */}
      <motion.div
        className="hidden lg:block absolute z-0 top-[2%] sm:top-[2%] right-0 lg:right-[2%] pointer-events-none"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 3.2, ease: EASE }}
      >
        <Image
          src="/hero-visual.png"
          alt="看護師とお子さま"
          width={1024}
          height={1024}
          priority
          className="w-[min(72vw,900px)] h-auto"
        />
      </motion.div>

      {/* ══════ 山と雲（ヒーロー右下・PCのみ） ══════ */}
      <motion.div
        aria-hidden
        className="hidden lg:block absolute z-0 -bottom-8 -right-16 pointer-events-none"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: 3.2, ease: EASE }}
      >
        <Image src="/mountain-cloud.png" alt="" width={1200} height={520} className="w-[min(76vw,800px)] h-auto" />
      </motion.div>

      {/* ══════ 雲＋ラベンダーの装飾（ポエム下・左下・PCのみ） ══════ */}
      <motion.div
        aria-hidden
        className="hidden lg:block absolute z-0 bottom-4 left-0 w-[min(54vw,760px)] pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 3.2, ease: EASE }}
      >
        <Image src="/cloud-decor.png" alt="" width={1200} height={520} className="w-full h-auto" />
      </motion.div>

      {/* ══════ ポエム（前面・左寄せ・改行させない） ══════ */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto">
        <div className="max-w-[720px]">
          <h1
            className="font-bold text-[#231F20] leading-[1.7] text-[2rem] sm:text-[3.9rem] sm:whitespace-nowrap"
            style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
          >
            {poemLines.map((line, i) => (
              <motion.span
                key={i}
                className="block"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 0.4 + i * 0.9, ease: EASE }}
              >
                {line.map((seg, k) => (
                  <span key={k} style={seg.c ? { color: seg.c } : undefined}>
                    {seg.t}
                  </span>
                ))}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-8 text-xs sm:text-lg text-[#5a5a5a] leading-loose max-w-lg"
            style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 3.2, ease: EASE }}
          >
            ご本人・ご家族、そしてお子様の
            <br className="lg:hidden" />
            「自分らしい未来」を、
            <br />
            富山で、ミライズがそばで支えます。
          </motion.p>

          {/* モバイル：ヒーローのシーン（hero-visual＋mountain-cloud＋cloud-decor を同じ位置関係で配置） */}
          <motion.div
            className="lg:hidden relative mx-auto -mt-6 w-full max-w-[480px] aspect-[7/6]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 3.4, ease: EASE }}
          >
            {/* 雲＋ラベンダー（左下・背面） */}
            <Image src="/cloud-decor.png" alt="" width={1200} height={520} className="absolute z-0 bottom-[4%] -left-[7%] w-[66%] h-auto" />
            {/* 山と雲（右下・背面） */}
            <Image src="/mountain-cloud.png" alt="" width={1200} height={520} className="absolute z-20 bottom-0 -right-[20%] w-[84%] h-auto" />
            {/* 看護師とお子さま（前面・右上） */}
            <Image src="/hero-visual.png" alt="看護師とお子さま" width={1024} height={1024} className="absolute -z-10 -top-[6%] -right-[10%] w-[98%] h-auto" />
          </motion.div>

          {/* 3つの円バッジ（一時的に非表示：false && で無効化。戻すときは false を true に、または {false && ( )} の囲みを外す） */}
          {false && (
          <motion.div
            className="mt-9 sm:mt-11 flex gap-3 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 2.4, ease: EASE }}
          >
            {badges.map((b) => (
              <div
                key={b.label.join("")}
                className="w-[108px] h-[108px] sm:w-[136px] sm:h-[136px] rounded-full shadow-sm flex flex-col items-center justify-center gap-1 sm:gap-1.5 px-2"
                style={{
                  background:
                    "linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(135deg, #FFD8F1, #DCCEF8, #CDE8FF, #DFF8EE) border-box",
                  border: "1.5px solid transparent",
                }}
              >
                {/* アイコン画像：public/ に保存後に表示されます（円の中・上） */}
                <Image src={b.icon} alt="" width={80} height={80} className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
                {/* テキスト（円の中・下） */}
                <p className="text-[10px] sm:text-xs font-bold leading-tight text-center" style={{ color: "#231F20", fontFamily: "var(--font-zen-maru-gothic)" }}>
                  {b.label.map((l, k) => (
                    <span key={k} className="block">
                      {l}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </motion.div>
          )}
        </div>
      </div>

      {/* ══════ 下端：次セクションへの流れ ══════ */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 3.8, ease: EASE }}
      >
        <span
          className="w-px h-14 sm:h-16"
          style={{ background: "linear-gradient(to bottom, rgba(179,174,219,0) 0%, rgba(179,174,219,0.55) 60%, rgba(236,153,208,0.7) 100%)" }}
        />
        <motion.div
          className="-mt-1 mb-2"
          style={{ color: "#EC99D0" }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="2 3 11 11 20 3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

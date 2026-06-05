"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function AnimatedKeyMessage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // sm ブレークポイント（640px）以上かどうかを検出
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // デスクトップは2段階遅く
  const mainDuration    = isDesktop ? 4.8 : 3.2;
  const subtitleDelay   = isDesktop ? 2.2 : 1.6;
  const subtitleDuration = isDesktop ? 3.5 : 2.0;

  return (
    <div ref={ref}>
      {/* マスクが左→右へスライドしてテキストを露出 */}
      <motion.h2
        className="text-4xl sm:text-6xl font-bold sm:whitespace-nowrap leading-[1.4] mb-8"
        style={{
          fontFamily: "var(--font-noto-serif-jp)",
          background:
            "linear-gradient(135deg, #EC99D0 0%, #B3AEDB 55%, #84D3F4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
        animate={
          isInView
            ? { clipPath: "inset(0 0% 0 0)", opacity: 1 }
            : { clipPath: "inset(0 100% 0 0)", opacity: 0 }
        }
        transition={{
          duration: mainDuration,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        あなたの未来を、
        <br className="sm:hidden" />
        一緒に描く。
      </motion.h2>

      {/* テキスト露出後にサブタイトルをフェードイン */}
      <motion.p
        className="text-sm sm:text-base text-[#aaa] tracking-widest"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: subtitleDuration,
          delay: subtitleDelay,
          ease: "easeOut",
        }}
      >
        乳幼児から成人まで、ずっと寄り添う。富山の訪問看護ステーション。
      </motion.p>
    </div>
  );
}

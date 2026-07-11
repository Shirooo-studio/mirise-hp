"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LINE_URL } from "@/lib/site";

/* ── 公式Instagram（未開設の間は "#"。URLが決まったら差し替え） ── */
const INSTAGRAM_URL: string = "https://www.instagram.com/hokan_mirise";

/* メニュー：3セクション（Services / About / Info）。すべて実在ページへのリンク */
const menuSections = [
  {
    title: "Services",
    links: [
      { label: "ご利用の流れ", href: "/flow" },
      { label: "ご利用料金", href: "/price" },
      { label: "よくあるご質問", href: "/faq" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "ミライズについて", href: "/about" },
      { label: "代表からのご挨拶", href: "/about#message" },
      { label: "会社概要", href: "/about#company" },
    ],
  },
  {
    title: "Info",
    links: [
      { label: "お問い合わせ", href: "/contact" },
      { label: "採用情報", href: "/recruit" },
    ],
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // インラインナビを出すページ（トップ／訪問看護を知る）だけ true
  const isNavPage = pathname === "/" || pathname === "/knowledge" || pathname === "/knowledge/";
  // 未スクロール かつ 対象ページ のときだけナビ表示（それ以外・スクロール時はハンバーガーのみ）
  const showNav = isNavPage && !scrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[100px] flex items-center px-5 sm:px-8">
      <div className="flex items-center justify-between w-full">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="MIRISEロゴ"
            width={80}
            height={80}
            className="h-16 w-auto object-contain"
          />
          <p
            className="hidden sm:block text-base font-bold text-[#231F20] tracking-wide"
            style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
          >
            訪問看護ステーション ミライズ
          </p>
        </Link>

        {/* ── 右側：インラインナビ（トップ表示）＋ハンバーガー（スクロール時） ── */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* インラインナビ：TOP / 訪問看護を知る / 働きたい方へ / お問い合わせ（PC・対象ページ・トップ時のみ） */}
          <nav
            className={`hidden lg:flex items-center gap-5 xl:gap-7 transition-all duration-500 ease-out ${
              showNav ? "lg:opacity-100 lg:translate-y-0" : "lg:opacity-0 lg:-translate-y-1 lg:pointer-events-none"
            }`}
            style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
          >
            <Link href="/" className="text-lg font-bold text-[#3a3a3a] hover:text-[#8263C3] transition-colors">
              TOP
            </Link>
            <Link href="/knowledge" className="text-lg font-bold text-[#3a3a3a] hover:text-[#8263C3] transition-colors">
              訪問看護を知る
            </Link>
            <Link
              href="/recruit"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full text-white font-bold text-base shadow-[0_10px_26px_rgba(201,145,74,0.30)] transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #E0A85E, #C9914A)" }}
            >
              働きたい方へ
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full text-white font-bold text-base shadow-[0_10px_26px_rgba(150,130,210,0.30)] transition-all duration-300 hover:-translate-y-0.5"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              お問い合わせ
            </Link>
          </nav>

          {/* ── ハンバーガーメニュー（常に表示） ── */}
          <div className="block">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <button
                className="relative inline-flex items-center justify-center h-14 w-14 rounded-xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #EC99D0, #B3AEDB, #84D3F4) padding-box, linear-gradient(135deg, #EC99D0, #B3AEDB, #84D3F4) border-box",
                  border: "2.5px solid transparent",
                }}
                onMouseEnter={() => setMenuHovered(true)}
                onMouseLeave={() => setMenuHovered(false)}
                aria-label="メニューを開く"
              />
            }
          >
            {/* グラデーション塗りオーバーレイ — ゆっくりフェードイン */}
            <span
              className="absolute inset-0 pointer-events-none transition-opacity duration-700"
              style={{
                background: "#ffffff",
                opacity: menuHovered ? 1 : 0,
              }}
            />
            {/* 3本線：グラデーション↔白をゆっくり切り替え */}
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
              <defs>
                <linearGradient id="menuGrad" x1="0" y1="0" x2="28" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#EC99D0" />
                  <stop offset="50%" stopColor="#B3AEDB" />
                  <stop offset="100%" stopColor="#84D3F4" />
                </linearGradient>
              </defs>
              <g style={{ opacity: menuHovered ? 1 : 0, transition: "opacity 0.7s ease" }}>
                <rect y="0"    width="28" height="2.5" rx="1.25" fill="url(#menuGrad)" />
                <rect y="8.75" width="28" height="2.5" rx="1.25" fill="url(#menuGrad)" />
                <rect y="17.5" width="28" height="2.5" rx="1.25" fill="url(#menuGrad)" />
              </g>
              <g style={{ opacity: menuHovered ? 0 : 1, transition: "opacity 0.7s ease" }}>
                <rect y="0"    width="28" height="2.5" rx="1.25" fill="white" />
                <rect y="8.75" width="28" height="2.5" rx="1.25" fill="white" />
                <rect y="17.5" width="28" height="2.5" rx="1.25" fill="white" />
              </g>
            </svg>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-full sm:w-[92vw] lg:w-[80vw] max-w-[1100px] p-0 overflow-y-auto"
            style={{ background: "linear-gradient(160deg, #fdf2fa 0%, #edf6ff 100%)" }}
          >
            {/* ── ロゴ（中央） ── */}
            <SheetHeader className="pt-12 pb-10">
              <SheetTitle className="flex flex-col items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="MIRISEロゴ"
                  width={120}
                  height={120}
                  className="h-20 w-auto object-contain"
                />
                <span
                  className="text-base font-bold text-[#231F20]"
                  style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  訪問看護ステーション ミライズ
                </span>
              </SheetTitle>
            </SheetHeader>

            {/* ── メニュー本体（上：主要ナビ／下：3セクション） ── */}
            <nav
              className="mx-auto max-w-[900px] px-8 sm:px-12 pb-16"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              {/* ── 主要ナビ（上部・目立たせる） ── */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3 sm:gap-4 mb-12 pb-10 border-b border-[#e3d7ef]">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center h-14 px-8 rounded-full text-lg font-bold text-[#3a3a3a] bg-white border border-[#e6ddf2] shadow-sm hover:text-[#8263C3] transition-colors"
                >
                  TOP
                </Link>
                <Link
                  href="/knowledge"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center h-14 px-8 rounded-full text-lg font-bold text-[#3a3a3a] bg-white border border-[#e6ddf2] shadow-sm hover:text-[#8263C3] transition-colors"
                >
                  訪問看護を知る
                </Link>
                <Link
                  href="/recruit"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center h-14 px-8 rounded-full text-white font-bold text-lg shadow-[0_10px_26px_rgba(201,145,74,0.30)] transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #E0A85E, #C9914A)" }}
                >
                  働きたい方へ
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center h-14 px-8 rounded-full text-white font-bold text-lg shadow-[0_10px_26px_rgba(150,130,210,0.30)] transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ backgroundImage: "var(--brand-gradient)" }}
                >
                  お問い合わせ
                </Link>
              </div>

              {/* ── 3セクション（Services / About / Info） ── */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-8">
                {menuSections.map((section) => (
                  <div key={section.title}>
                    <p
                      className="text-sm font-bold tracking-[0.18em] mb-2 pb-2 border-b-2 border-[#f0d9ea]"
                      style={{ color: "#E576B8", fontFamily: "var(--font-lora)" }}
                    >
                      {section.title}
                    </p>
                    <div>
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="block text-lg text-[#3a3a3a] hover:text-[#EC99D0] py-4 border-b border-[#e9e3f1] transition-colors leading-snug"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* ── SNS ── */}
              <div className="flex items-center gap-4 pt-10">
                <a
                  href={LINE_URL}
                  target={LINE_URL === "#" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label="公式LINE"
                  className="w-12 h-12 rounded-2xl bg-[#06C755] flex items-center justify-center text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.7 6.2-.2.6-.6 2.1-.8 2.6-.1.3.1.4.3.3.3-.1 2.6-1.7 3.6-2.4.9.2 1.9.3 3.2.3 5.5 0 10-3.6 10-8s-4.5-8-10-8Z" />
                  </svg>
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target={INSTAGRAM_URL === "#" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label="公式Instagram"
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(45deg, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5)" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

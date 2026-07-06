import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "訪問看護を知る", href: "/knowledge" },
  { label: "ご利用の流れ", href: "/flow" },
  { label: "ご利用料金", href: "/price" },
  { label: "よくあるご質問", href: "/faq" },
];

const aboutLinks = [
  { label: "ミライズについて", href: "/about" },
  { label: "代表からのご挨拶", href: "/about#message" },
  { label: "会社概要", href: "/about#company" },
];

const infoLinks = [
  { label: "お問い合わせ", href: "/contact" },
  { label: "採用情報", href: "/recruit" },
  { label: "プライバシーポリシー", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="text-white/60" style={{ background: "linear-gradient(160deg, #1e1830, #162630)" }}>
      {/* グラデーションライン（上部） */}
      <div
        className="h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, #84D3F4, #B3AEDB, #EC99D0, #F1F0CA, #9EDDC9)",
        }}
      />

      <div className="max-w-[1100px] mx-auto px-[5%] pt-14 pb-6">
        {/* メインフッターグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-white/10">
          {/* ブランド情報 */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="MIRISEロゴ"
                width={40}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <div>
                <p className="text-sm font-bold text-white leading-snug">
                  訪問看護ステーションミライズ
                </p>
              </div>
            </div>
            <address className="not-italic text-[13px] leading-loose text-white/50">
              合同会社ライフケアステーション富山<br />
              〒939-8071 富山県富山市上袋650<br />
              サンコレクトG.SECONDビル2階204号室<br />
              TEL: 076-461-3501　FAX: 076-461-3502
            </address>
          </div>

          {/* サービス */}
          <div>
            <h4 className="text-[11px] font-bold text-white/70 tracking-widest uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/45 hover:text-[#EC99D0] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ミライズについて */}
          <div>
            <h4 className="text-[11px] font-bold text-white/70 tracking-widest uppercase mb-4">
              About
            </h4>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/45 hover:text-[#EC99D0] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ご案内 */}
          <div>
            <h4 className="text-[11px] font-bold text-white/70 tracking-widest uppercase mb-4">
              Info
            </h4>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/45 hover:text-[#EC99D0] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-5">
          <p className="text-[11px] text-white/25">
            © {new Date().getFullYear()} 訪問看護ステーションミライズ
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-[11px] text-white/25 hover:text-white/50 transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/about#company"
              className="text-[11px] text-white/25 hover:text-white/50 transition-colors"
            >
              会社概要
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

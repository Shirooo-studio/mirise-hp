import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Zen_Maru_Gothic, Lora, Cormorant_Garamond, Zen_Kurenaido } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-zen-maru-gothic",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
  variable: "--font-cormorant",
  display: "swap",
});

// ヒーローのポエム見出し用（硬筆・手書き風／やさしく語りかけるトーン）
const zenKurenaido = Zen_Kurenaido({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-zen-kurenaido",
  display: "swap",
});

const SITE_DESCRIPTION =
  "富山市・射水市・砺波市対応の訪問看護ステーション ミライズ。児童・思春期から成人まで、精神・知的・発達障害に特化。ご本人とご家族を医療とメンタルの両面から支えます。24時間365日サポート。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "訪問看護ステーションミライズ｜富山の精神・療育専門訪問看護",
    template: "%s｜訪問看護ステーションミライズ（富山）",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "訪問看護",
    "訪問看護ステーション",
    "ミライズ",
    "富山",
    "富山市 訪問看護",
    "富山 訪問看護ステーション",
    "精神科訪問看護",
    "児童 思春期 訪問看護",
    "発達障害 訪問看護",
    "在宅医療",
    "療育",
    "レスパイト",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "訪問看護ステーションミライズ｜富山の精神・療育専門訪問看護",
    description: SITE_DESCRIPTION,
    images: [{ url: "/logo.png", width: 512, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary",
    title: "訪問看護ステーションミライズ｜富山",
    description: SITE_DESCRIPTION,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // ★Google Search Console 登録後、確認コードを設定してください
  // verification: { google: "xxxxxxxxxxxxxxxx" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} ${zenMaruGothic.variable} ${lora.variable} ${cormorant.variable} ${zenKurenaido.variable}`}
    >
      <body className="font-[var(--font-noto-sans-jp)] antialiased text-[#231F20] min-h-screen flex flex-col">
        {/* ── 背景：白〜薄紫のやわらかいグラデーション（デザインコンセプト基調） ── */}
        <div
          className="fixed inset-0 pointer-events-none select-none"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #FBF8FF 42%, #F4EEFF 100%)",
            zIndex: -2,
          }}
        />
        {/* ── 上部にほんのり虹のにじみ ── */}
        <div
          className="fixed inset-x-0 top-0 h-[55vh] pointer-events-none select-none"
          style={{
            background:
              "radial-gradient(120% 80% at 80% 0%, rgba(255,216,241,0.30), rgba(205,232,255,0.18) 45%, rgba(223,248,238,0) 70%)",
            zIndex: -1,
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

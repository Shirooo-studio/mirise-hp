/**
 * サイト共通設定
 *
 * ここに公式LINEのURLを書き込むと、サイト内すべての
 * 「公式LINEから問い合わせ」ボタンの遷移先が一括で切り替わります。
 *
 * 例: export const LINE_URL = "https://lin.ee/xxxxxxx";
 */
export const LINE_URL: string = "https://lin.ee/Oixemn1";

/**
 * お問い合わせ・採用応募フォームの送信先（Web3Forms）。
 *
 * ▼ 送信先メールの登録／変更フロー
 *   1. https://web3forms.com を開く
 *   2. 「受信したいメールアドレス」を入力して Access Key を取得（無料・登録任意）
 *   3. 届いたキー（例: "a1b2c3d4-...") を下の "" の中に貼り付ける
 *   4. commit → push でデプロイ完了。以降フォーム送信はそのメールに届きます。
 *
 * ※このキーはフロント（ブラウザ）に露出しますが、Web3Formsは公開前提のキー設計なので問題ありません。
 * ※送信先を変えたいときは、新しいメールでキーを取り直してここを差し替えるだけ。
 */
export const WEB3FORMS_ACCESS_KEY: string = "4955c14d-a56e-4b20-b27b-59e3ee87e8f9";

/**
 * ★★★ 公開前に必ず実際の本番ドメインへ変更してください ★★★
 * metadataBase / canonical / OGP / sitemap.xml / robots.txt / 構造化データ
 * すべてこのURLを基準に生成されます。末尾スラッシュなし。
 */
export const SITE_URL = "https://houkan-mirise.com";

export const SITE_NAME = "訪問看護ステーションミライズ";

/** 事業所情報（構造化データ・SEOで共有） */
export const BUSINESS = {
  legalName: "合同会社ライフケアステーション富山",
  name: "訪問看護ステーション ミライズ",
  telephone: "076-461-3501",
  faxNumber: "076-461-3502",
  postalCode: "939-8071",
  addressRegion: "富山県",
  addressLocality: "富山市",
  streetAddress: "上袋650 サンコレクトG.SECONDビル2階204号室",
  founder: "庄司正樹",
  foundingDate: "2024-12",
  areaServed: ["富山市", "射水市", "砺波市", "滑川市", "魚津市", "黒部市"],
  geo: { latitude: 36.6668, longitude: 137.2015 }, // ★目安。Googleマップの正確な座標に更新推奨
} as const;

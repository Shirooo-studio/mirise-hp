"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/* ミライズの情報が入る部分（後で差し替え） */
const STATION_NAME = "（事業所名を記入）";
const COMPANY_NAME = "（会社名を記入）";
const CONTACT_PERSON = "（担当者名を記入）";
const CONTACT_TEL = "（電話番号を記入）";
const CONTACT_EMAIL = "（メールアドレスを記入）";

/** 記入待ちのプレースホルダー表示 */
function Blank({ children }: { children: React.ReactNode }) {
  return <span className="text-[#b88] bg-[#fbeef4] rounded px-1">{children}</span>;
}

export function PrivacyConsentDialog() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button type="button" className="text-[#3b82c4] underline" />
        }
      >
        個人情報の取扱いに関する同意書
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto bg-white text-[#3a3a3a]">
        <DialogHeader>
          <DialogTitle
            className="text-xl font-bold text-[#231F20]"
            style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
          >
            個人情報の取扱いに関する同意書
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 text-[15px] leading-7 pr-1">
          <p>
            <Blank>{STATION_NAME}</Blank>
            （以下、「当ステーション」といいます）は、応募者の皆様の個人情報を適切に取り扱うため、以下の内容をご確認いただき、同意の上でご提供くださいますようお願いいたします。
          </p>

          <section>
            <h3 className="font-bold text-[#231F20] mb-1">1. 個人情報の収集目的</h3>
            <p>
              当ステーションは、採用活動における選考および採用後の連絡、手続きのために必要な範囲で、応募者から提供された個人情報を利用します。
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#231F20] mb-1">2. 収集する情報の範囲</h3>
            <p className="mb-2">以下の情報を収集し、管理します。</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>氏名、住所、連絡先（電話番号、メールアドレス等）</li>
              <li>生年月日、性別</li>
              <li>学歴、職歴、資格、免許等</li>
              <li>応募書類（履歴書、職務経歴書等）に記載された情報</li>
              <li>応募に関する問い合わせ内容</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-[#231F20] mb-1">3. 個人情報の利用目的</h3>
            <p className="mb-2">収集した個人情報は、以下の目的でのみ利用します。</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>採用選考の実施</li>
              <li>応募者との連絡</li>
              <li>採用選考の記録管理</li>
              <li>採用後の手続きに関する業務</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-[#231F20] mb-1">4. 個人情報の第三者提供</h3>
            <p className="mb-2">
              当ステーションは、以下の場合を除き、応募者の個人情報を第三者に提供することはありません。
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>応募者の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>
                応募者または第三者の生命、身体、財産を保護するために必要がある場合で、本人の同意を得ることが困難な場合
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-[#231F20] mb-1">5. 個人情報の管理</h3>
            <p>
              当ステーションは、応募者の個人情報を安全に管理し、紛失、漏洩、改ざん、不正アクセス等を防止するため、適切な安全対策を講じます。
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#231F20] mb-1">6. 個人情報の保管期間</h3>
            <p>
              採用活動終了後、不採用となった場合の個人情報は、採用選考終了から6か月以内に適切に廃棄・消去いたします。ただし、本人の同意がある場合は別途保管することがあります。
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#231F20] mb-1">7. 個人情報に関する権利</h3>
            <p className="mb-2">応募者は、自身の個人情報に関して以下の権利を有します。</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>開示の請求</li>
              <li>訂正、削除の請求</li>
              <li>利用停止の請求</li>
            </ul>
            <p className="mt-2">
              これらの権利を行使する場合は、以下の連絡先までご連絡ください。
            </p>

            <div className="mt-4 rounded-lg bg-[#faf6f9] px-5 py-4 space-y-1">
              <p className="font-bold text-[#231F20] mb-1">【お問い合わせ先】</p>
              <p>
                会社名：<Blank>{COMPANY_NAME}</Blank>
              </p>
              <p>
                担当：<Blank>{CONTACT_PERSON}</Blank>
              </p>
              <p>
                電話番号：<Blank>{CONTACT_TEL}</Blank>
              </p>
              <p>
                メールアドレス：<Blank>{CONTACT_EMAIL}</Blank>
              </p>
            </div>
          </section>

          <section>
            <h3 className="font-bold text-[#231F20] mb-1">8. 同意について</h3>
            <p>
              上記の内容をご確認の上、同意いただける場合は、「同意しました」にチェックを入れたうえで応募情報をご提出ください。
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

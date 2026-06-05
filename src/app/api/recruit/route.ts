import { NextResponse } from "next/server";

/**
 * 採用応募フォームの送信先。
 * 環境変数 RECRUIT_TO_EMAIL で送信先メールアドレスを設定できます。
 * 実際にメールを送るには RESEND_API_KEY（Resend のAPIキー）が必要です。
 * 未設定の場合は内容をサーバーログに出力するだけになります（開発用）。
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      lastName,
      firstName,
      lastNameKana,
      firstNameKana,
      email,
      phone,
      address,
      jobType,
      agree,
    } = data ?? {};

    // 必須チェック
    if (
      !lastName ||
      !firstName ||
      !lastNameKana ||
      !firstNameKana ||
      !email ||
      !phone ||
      !jobType ||
      !agree
    ) {
      return NextResponse.json(
        { ok: false, error: "必須項目が入力されていません。" },
        { status: 400 }
      );
    }

    const to = process.env.RECRUIT_TO_EMAIL || "recruit@example.com";
    const subject = `【採用応募】${lastName} ${firstName} 様より`;
    const body = [
      "訪問看護ステーション ミライズ 採用応募フォームより応募がありました。",
      "",
      `お名前：${lastName} ${firstName}`,
      `ふりがな：${lastNameKana} ${firstNameKana}`,
      `メールアドレス：${email}`,
      `電話番号：${phone}`,
      `住所：${address || "（未入力）"}`,
      `応募職種：${jobType}`,
      "",
      "─────────────────────",
      "このメールは採用応募フォームから自動送信されています。",
    ].join("\n");

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RECRUIT_FROM_EMAIL || "onboarding@resend.dev",
          to: [to],
          reply_to: email,
          subject,
          text: body,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("[recruit] メール送信失敗:", errText);
        return NextResponse.json(
          { ok: false, error: "送信に失敗しました。時間をおいて再度お試しください。" },
          { status: 502 }
        );
      }
    } else {
      // メールサービス未設定：開発用にログ出力のみ
      console.log("[recruit] 送信先:", to);
      console.log(body);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[recruit] エラー:", err);
    return NextResponse.json(
      { ok: false, error: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}

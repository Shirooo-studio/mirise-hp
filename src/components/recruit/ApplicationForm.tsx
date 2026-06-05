"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PrivacyConsentDialog } from "@/components/recruit/PrivacyConsentDialog";

const JOB_OPTIONS = [
  "看護師（正看護師・准看護師）",
  "理学療法士（PT）",
  "作業療法士（OT）",
  "言語聴覚士（ST）",
  "その他",
];

type Status = "idle" | "submitting" | "success" | "error";

const initialState = {
  lastName: "",
  firstName: "",
  lastNameKana: "",
  firstNameKana: "",
  email: "",
  phone: "",
  address: "",
};

export function ApplicationForm() {
  const [values, setValues] = useState(initialState);
  const [jobType, setJobType] = useState("");
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update =
    (key: keyof typeof initialState) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const isValid =
    values.lastName &&
    values.firstName &&
    values.lastNameKana &&
    values.firstNameKana &&
    values.email &&
    values.phone &&
    jobType &&
    agree;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid || status === "submitting") return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/recruit/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, jobType, agree }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "送信に失敗しました。");
      }
      setStatus("success");
      setValues(initialState);
      setJobType("");
      setAgree(false);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "送信に失敗しました。");
    }
  }

  const req = <span className="text-[#e0588e]"> *</span>;
  const inputCls = "h-12 text-base rounded-md bg-white border-[#8f8f8f] text-[#1f1f1f] placeholder:text-[#9a9a9a]";
  const labelCls = "text-[#2a2a2a] font-bold";

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white px-6 sm:px-10 py-14 text-center">
        <p
          className="text-2xl font-bold mb-4"
          style={{ color: "#c9559e", fontFamily: "var(--font-zen-maru-gothic)" }}
        >
          ご応募ありがとうございます
        </p>
        <p className="text-base text-[#5a5a5a] leading-loose">
          内容を確認のうえ、担当者より折り返しご連絡いたします。
          <br />
          今しばらくお待ちください。
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white px-6 sm:px-10 py-8 sm:py-10 space-y-7"
    >
      {/* 姓・名 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="lastName" className={labelCls}>
            姓（例：山田）{req}
          </Label>
          <Input id="lastName" name="lastName" value={values.lastName} onChange={update("lastName")} required className={inputCls} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="firstName" className={labelCls}>
            名（例：花子）{req}
          </Label>
          <Input id="firstName" name="firstName" value={values.firstName} onChange={update("firstName")} required className={inputCls} />
        </div>
      </div>

      {/* ふりがな */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="lastNameKana" className={labelCls}>
            姓 ふりがな（例：やまだ）{req}
          </Label>
          <Input id="lastNameKana" name="lastNameKana" value={values.lastNameKana} onChange={update("lastNameKana")} required className={inputCls} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="firstNameKana" className={labelCls}>
            名 ふりがな（例：はなこ）{req}
          </Label>
          <Input id="firstNameKana" name="firstNameKana" value={values.firstNameKana} onChange={update("firstNameKana")} required className={inputCls} />
        </div>
      </div>

      {/* メール・電話 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="email" className={labelCls}>
            メールアドレス{req}
          </Label>
          <Input id="email" name="email" type="email" value={values.email} onChange={update("email")} required className={inputCls} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className={labelCls}>
            電話番号{req}
          </Label>
          <Input id="phone" name="phone" type="tel" inputMode="tel" placeholder="090-0000-0000" value={values.phone} onChange={update("phone")} required className={inputCls} />
        </div>
      </div>

      {/* 住所 */}
      <div className="space-y-2">
        <Label htmlFor="address" className={labelCls}>
          住所
        </Label>
        <Input id="address" name="address" value={values.address} onChange={update("address")} className={inputCls} />
      </div>

      {/* 応募職種 */}
      <div className="space-y-3">
        <Label className={labelCls}>応募職種{req}</Label>
        <RadioGroup
          value={jobType}
          onValueChange={(v) => setJobType(String(v))}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3"
        >
          {JOB_OPTIONS.map((job) => (
            <label key={job} className="flex items-center gap-3 cursor-pointer text-base text-[#2a2a2a]">
              <RadioGroupItem value={job} className="border-[#8f8f8f]" />
              {job}
            </label>
          ))}
        </RadioGroup>
      </div>

      {/* 同意チェック */}
      <div className="flex items-start gap-3 text-base text-[#2a2a2a] leading-relaxed">
        <span className="mt-1">
          <Checkbox checked={agree} onCheckedChange={(c) => setAgree(c === true)} className="border-[#8f8f8f]" />
        </span>
        <span>
          <span className="cursor-pointer" onClick={() => setAgree((a) => !a)}>
            ※当社の「
          </span>
          <PrivacyConsentDialog />
          <span className="cursor-pointer" onClick={() => setAgree((a) => !a)}>
            」を確認し、内容に同意しました。
          </span>
          {req}
        </span>
      </div>

      {status === "error" && (
        <p className="text-sm text-[#d14343]">{errorMsg}</p>
      )}

      {/* 送信 */}
      <button
        type="submit"
        disabled={!isValid || status === "submitting"}
        className="w-full rounded-full py-4 text-white font-bold text-base shadow-md transition-opacity disabled:cursor-not-allowed disabled:opacity-100"
        style={{
          fontFamily: "var(--font-zen-maru-gothic)",
          background: isValid
            ? "linear-gradient(135deg, #EC99D0 0%, #B3AEDB 55%, #84D3F4 100%)"
            : "#888888",
        }}
      >
        {status === "submitting" ? "送信中..." : "送信"}
      </button>
    </form>
  );
}

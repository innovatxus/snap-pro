/**
 * UI chrome strings used by the locale switcher, draft banners, regional strip,
 * and footer columns. Page-level body content lives in `lib/legal/content/*`.
 */

export type Locale = "en" | "ar";

export const LOCALE_COOKIE = "snap-locale";
export const LOCALE_STORAGE_KEY = "snap-locale";

export const DIR: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

export const LANG_LABEL: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

export const UI = {
  draftBanner: {
    title: {
      en: "Draft — pending legal review",
      ar: "مسودة — قيد المراجعة القانونية",
    },
    body: {
      en: "This page is a structural draft prepared by Snap Pro. Final copy will be published after review by qualified counsel and is not legally binding in this preview state.",
      ar: "هذه الصفحة مسودة هيكلية أعدّتها سناب برو. سيتم نشر الصياغة النهائية بعد مراجعتها من قِبل مستشار قانوني مختص، وهي غير ملزِمة قانونياً في هذه الحالة الأولية.",
    },
  },
  lastReviewed: { en: "Last reviewed", ar: "آخر مراجعة" },
  effective: { en: "Effective", ar: "ساري المفعول" },
  contents: { en: "On this page", ar: "في هذه الصفحة" },
  related: { en: "Related", ar: "ذات صلة" },
  primaryCTA: { en: "Continue", ar: "متابعة" },
  switcher: {
    aria: { en: "Change language", ar: "تغيير اللغة" },
    en: { en: "English", ar: "الإنجليزية" },
    ar: { en: "Arabic", ar: "العربية" },
  },
  footer: {
    headings: {
      product: { en: "Product", ar: "المنتج" },
      solutions: { en: "Solutions", ar: "الحلول" },
      resources: { en: "Resources", ar: "المصادر" },
      support: { en: "Support", ar: "الدعم" },
      company: { en: "Company", ar: "الشركة" },
      trustLegal: { en: "Trust & Legal", ar: "الثقة والقانونية" },
    },
    newsletter: {
      eyebrow: { en: "Stay in the loop", ar: "ابقَ على اطلاع" },
      placeholder: { en: "you@business.com", ar: "بريدك@عملك.كوم" },
      cta: { en: "Subscribe", ar: "اشترك" },
      consent: {
        en: "By subscribing you accept our Privacy Policy and Cookie Policy.",
        ar: "بالاشتراك، فإنك توافق على سياسة الخصوصية وسياسة ملفات تعريف الارتباط.",
      },
    },
    regional: {
      title: { en: "Regional disclosures", ar: "إفصاحات إقليمية" },
      egypt: {
        en: "Egypt: PDPL Notice · Commercial Registration · VAT",
        ar: "مصر: إشعار قانون حماية البيانات · السجل التجاري · ضريبة القيمة المضافة",
      },
      iraq: {
        en: "Iraq: Consumer Rights · E-commerce Disclosure",
        ar: "العراق: حقوق المستهلك · إفصاح التجارة الإلكترونية",
      },
      global: {
        en: "Global: International Transfers · Government Requests",
        ar: "عالمياً: نقل البيانات الدولي · طلبات الحكومات",
      },
    },
    rights: {
      en: "All rights reserved",
      ar: "جميع الحقوق محفوظة",
    },
    statusOk: { en: "All systems normal", ar: "جميع الأنظمة طبيعية" },
  },
} as const;

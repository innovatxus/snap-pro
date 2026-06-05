import type { LegalPage } from "../types";

/**
 * Legal pages mounted under /legal/[slug].
 *
 * Bilingual content. Pages marked `status: "draft"` render a banner asking
 * counsel for final review. All paragraphs and bullet lists are paired
 * 1-to-1 in EN/AR; the article shell renders the entry matching the user's
 * locale.
 */

export const LEGAL_PAGES: LegalPage[] = [
  // ─────────────────────────────────────────────────────────────── L01 PRIVACY
  {
    slug: "privacy",
    tree: "legal",
    status: "draft",
    updated: "2026-06-05",
    title: {
      en: "Privacy Policy — Snap Pro",
      ar: "سياسة الخصوصية — سناب برو",
    },
    meta: {
      en: "How Snap Pro collects, processes, stores, and protects your data, AI uploads, and account information. PDPL, GDPR, and Stripe compliant.",
      ar: "كيف تقوم سناب برو بجمع بياناتك وملفاتك المرفوعة ومعالجتها وحفظها وحمايتها. متوافقة مع قانون حماية البيانات المصري واللائحة الأوروبية ومتطلبات سترايب.",
    },
    h1: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
    summary: {
      en: "We collect the minimum data needed to run Snap Pro, never sell it, never train production AI models on your customer uploads without explicit consent, and give you full control through the privacy portal.",
      ar: "نقوم بجمع الحد الأدنى من البيانات اللازمة لتشغيل سناب برو، ولا نبيعها أبداً، ولا ندرّب نماذج الذكاء الاصطناعي الإنتاجية على ملفات عملائك دون موافقة صريحة، ونمنحك تحكماً كاملاً عبر بوابة الخصوصية.",
    },
    sections: [
      {
        id: "who-we-are",
        heading: { en: "Who we are", ar: "من نحن" },
        paragraphs: {
          en: [
            'Snap Pro, Inc. ("Snap Pro", "we", "us") operates the Snap Pro AI photo studio at snappro.app. Our Egyptian operating entity is registered under the commercial registry described on our Business Information page.',
            "Our Data Protection Officer can be reached at privacy@snappro.app.",
          ],
          ar: [
            'تشغّل شركة سناب برو، إنك. ("سناب برو"، "نحن") استوديو سناب برو للذكاء الاصطناعي على الموقع snappro.app. كياننا التشغيلي في مصر مُسجَّل في السجل التجاري الموضح في صفحة معلومات الشركة.',
            "يمكن التواصل مع مسؤول حماية البيانات لدينا عبر privacy@snappro.app.",
          ],
        },
      },
      {
        id: "what-we-collect",
        heading: { en: "Information we collect", ar: "المعلومات التي نجمعها" },
        bullets: {
          en: [
            "Account: name, email, password hash, business profile, billing address.",
            "Uploads & generated content: images you upload, prompts, edited outputs.",
            "Usage: pages viewed, services used, credits consumed, device & browser metadata.",
            "Cookies & analytics: see our Cookie Policy.",
            "Payment metadata: last 4 digits, brand, country — not the full card number, which goes directly to Stripe / Paymob.",
            "Support communications: any messages or attachments you send to support.",
          ],
          ar: [
            "بيانات الحساب: الاسم، البريد الإلكتروني، تجزئة كلمة المرور، الملف التجاري، عنوان الفوترة.",
            "الملفات المرفوعة والمحتوى المُنشَأ: الصور التي ترفعها، الأوامر النصية، المخرجات المعدّلة.",
            "الاستخدام: الصفحات التي تتم مشاهدتها، الخدمات المستخدمة، الأرصدة المستهلكة، بيانات الجهاز والمتصفح.",
            "ملفات تعريف الارتباط والتحليلات: راجع سياسة ملفات تعريف الارتباط.",
            "بيانات الدفع: آخر أربعة أرقام، الجهة المُصدرة، الدولة — لا نحتفظ برقم البطاقة كاملاً؛ يتم تمريره مباشرة إلى سترايب/بيموب.",
            "اتصالات الدعم: أي رسائل أو مرفقات ترسلها إلى فريق الدعم.",
          ],
        },
      },
      {
        id: "lawful-bases",
        heading: { en: "Lawful bases", ar: "الأسس القانونية للمعالجة" },
        bullets: {
          en: [
            "Contract — to deliver the service you signed up for.",
            "Consent — for marketing emails, AI training opt-in, optional analytics cookies.",
            "Legitimate interest — security, fraud prevention, product improvement (you can object).",
            "Legal obligation — tax records, lawful disclosures.",
          ],
          ar: [
            "العقد — لتقديم الخدمة التي اشتركت فيها.",
            "الموافقة — للرسائل التسويقية، وتدريب نماذج الذكاء الاصطناعي عند اختيارك، وملفات تعريف الارتباط الاختيارية.",
            "المصلحة المشروعة — الأمن، ومنع الاحتيال، وتحسين المنتج (يحق لك الاعتراض).",
            "الالتزام القانوني — السجلات الضريبية والإفصاحات القانونية.",
          ],
        },
      },
      {
        id: "how-we-use",
        heading: { en: "How we use information", ar: "كيف نستخدم المعلومات" },
        bullets: {
          en: [
            "Deliver and operate the AI services you request.",
            "Authenticate you and protect your account.",
            "Process payments via Stripe and Paymob (and any regional gateway you select).",
            "Provide customer support and respond to legal requests.",
            "Improve our models and product — never on customer uploads without explicit opt-in.",
            "Send service announcements (you cannot opt out of these), and marketing if you opted in.",
          ],
          ar: [
            "تقديم وتشغيل خدمات الذكاء الاصطناعي التي تطلبها.",
            "التحقق من هويتك وحماية حسابك.",
            "معالجة المدفوعات عبر سترايب وبيموب (أو أي بوابة إقليمية تختارها).",
            "تقديم الدعم للعملاء والاستجابة للطلبات القانونية.",
            "تحسين نماذجنا ومنتجنا — لا نستخدم ملفات العملاء أبداً دون موافقة صريحة.",
            "إرسال إشعارات الخدمة (لا يمكن إلغاء الاشتراك بها)، والرسائل التسويقية في حال موافقتك.",
          ],
        },
      },
      {
        id: "ai-processing",
        heading: { en: "AI processing", ar: "معالجة الذكاء الاصطناعي" },
        paragraphs: {
          en: [
            "When you upload an image, we send it to the AI capability you selected (e.g. background removal, ghost mannequin). For details of which models and providers handle each capability, see the AI Provider Disclosure page.",
            "By default we do not retain your uploads for model training. You can review and revoke any training-related opt-ins on the AI Training Opt-Out page.",
          ],
          ar: [
            "عندما ترفع صورة، نرسلها إلى قدرة الذكاء الاصطناعي التي اخترتها (مثل إزالة الخلفية أو المانيكان الشبحي). لمعرفة النماذج والمزوّدين المعنيين بكل قدرة، راجع صفحة الإفصاح عن مزوّدي الذكاء الاصطناعي.",
            "بشكل افتراضي لا نحتفظ بملفاتك لأغراض تدريب النماذج. يمكنك مراجعة موافقاتك وسحبها من صفحة الانسحاب من تدريب الذكاء الاصطناعي.",
          ],
        },
      },
      {
        id: "sharing",
        heading: {
          en: "Sharing & third parties",
          ar: "المشاركة والأطراف الثالثة",
        },
        paragraphs: {
          en: [
            "We share data only with vendors needed to run the service (hosting, payments, AI providers, analytics). The complete current list is published on our Sub-processors page and updated whenever a vendor changes.",
            "We may disclose data to comply with valid legal process. See our Government Requests page for our disclosure principles and annual transparency report.",
          ],
          ar: [
            "نشارك البيانات فقط مع مورّدين ضروريين لتشغيل الخدمة (الاستضافة، المدفوعات، مزوّدو الذكاء الاصطناعي، التحليلات). القائمة الحالية الكاملة منشورة في صفحة المُعالجين الفرعيين ويتم تحديثها عند أي تغيير.",
            "قد نُفصِح عن البيانات للامتثال لإجراء قانوني صحيح. راجع صفحة طلبات الحكومات لمعرفة مبادئنا وتقرير الشفافية السنوي.",
          ],
        },
      },
      {
        id: "international-transfers",
        heading: { en: "International transfers", ar: "النقل الدولي للبيانات" },
        paragraphs: {
          en: [
            "Snap Pro is built on global infrastructure. Data may be processed in the United States, the European Union, and within the MENA region. We rely on Standard Contractual Clauses, adequacy decisions where available, and PDPL-aligned safeguards for cross-border flows.",
          ],
          ar: [
            "تعتمد سناب برو على بنية تحتية عالمية. قد تتم معالجة البيانات في الولايات المتحدة والاتحاد الأوروبي ومنطقة الشرق الأوسط وشمال إفريقيا. نعتمد على البنود التعاقدية القياسية وقرارات الكفاية حيثما توفّرت، وضمانات متوافقة مع قانون حماية البيانات المصري للنقل العابر للحدود.",
          ],
        },
      },
      {
        id: "retention",
        heading: { en: "How long we keep data", ar: "مدة الاحتفاظ بالبيانات" },
        table: {
          head: {
            en: ["Category", "Retention"],
            ar: ["الفئة", "مدة الاحتفاظ"],
          },
          rows: [
            {
              en: ["Account profile", "Lifetime of account + 30 days"],
              ar: ["ملف الحساب", "طوال مدة الحساب + 30 يوماً"],
            },
            {
              en: ["Uploaded images", "30 days unless saved to your library"],
              ar: ["الصور المرفوعة", "30 يوماً ما لم تحفظها في مكتبتك"],
            },
            {
              en: ["Generated outputs", "Until you delete them"],
              ar: ["المخرجات المُنشَأة", "حتى تقوم بحذفها"],
            },
            {
              en: ["Billing & tax records", "10 years (Egypt e-invoicing)"],
              ar: [
                "السجلات المالية والضريبية",
                "10 سنوات (الفوترة الإلكترونية المصرية)",
              ],
            },
            {
              en: ["Server access logs", "90 days"],
              ar: ["سجلات الوصول إلى الخوادم", "90 يوماً"],
            },
          ],
        },
      },
      {
        id: "your-rights",
        heading: { en: "Your rights", ar: "حقوقك" },
        bullets: {
          en: [
            "Access — request a copy of the data we hold about you.",
            "Rectification — correct inaccurate or incomplete information.",
            "Erasure — delete your account and associated data (subject to legal retention).",
            "Portability — export your data in a machine-readable format.",
            "Object & restrict — object to legitimate-interest processing.",
            "Withdraw consent — at any time, without affecting prior lawful processing.",
            "Lodge a complaint — with Egypt's PDP Center, your local DPA, or our DPO.",
          ],
          ar: [
            "الوصول — طلب نسخة من البيانات التي نحتفظ بها عنك.",
            "التصحيح — تصحيح المعلومات غير الدقيقة أو الناقصة.",
            "المحو — حذف حسابك وبياناتك (مع مراعاة الاحتفاظ القانوني).",
            "النقل — تصدير بياناتك بصيغة قابلة للقراءة آلياً.",
            "الاعتراض والتقييد — الاعتراض على المعالجة القائمة على المصلحة المشروعة.",
            "سحب الموافقة — في أي وقت، دون التأثير على المعالجة السابقة المشروعة.",
            "تقديم شكوى — إلى مركز حماية البيانات الشخصية في مصر، أو هيئتك المحلية، أو مسؤول حماية البيانات لدينا.",
          ],
        },
      },
      {
        id: "children",
        heading: { en: "Children", ar: "الأطفال" },
        paragraphs: {
          en: [
            "Snap Pro is not intended for users under 16 years of age. We do not knowingly collect data from children. If you believe a child has created an account, contact privacy@snappro.app and we will delete it.",
          ],
          ar: [
            "سناب برو ليست مخصّصة للمستخدمين دون السادسة عشرة. ولا نقوم عن علم بجمع بيانات من الأطفال. إذا كنت تعتقد أن طفلاً أنشأ حساباً، تواصل مع privacy@snappro.app وسنقوم بحذفه.",
          ],
        },
      },
      {
        id: "security",
        heading: { en: "Security", ar: "الأمن" },
        paragraphs: {
          en: [
            "Encryption in transit (TLS 1.3) and at rest (AES-256), least-privilege access, MFA for staff, vendor risk reviews, and continuous monitoring. See our Security Overview for full details.",
          ],
          ar: [
            "تشفير أثناء النقل (TLS 1.3) وأثناء التخزين (AES-256)، وصول بالحد الأدنى من الصلاحيات، مصادقة ثنائية للموظفين، مراجعة مخاطر الموردين، ومراقبة مستمرة. راجع نظرة عامة على الأمن لمزيد من التفاصيل.",
          ],
        },
      },
      {
        id: "changes",
        heading: { en: "Changes", ar: "التغييرات" },
        paragraphs: {
          en: [
            "We will post any material changes here and notify you by email at least 30 days before they take effect.",
          ],
          ar: [
            "سننشر أي تغييرات جوهرية هنا ونُعلمك بالبريد الإلكتروني قبل 30 يوماً على الأقل من سريانها.",
          ],
        },
      },
      {
        id: "contact",
        heading: { en: "Contact", ar: "تواصل معنا" },
        paragraphs: {
          en: [
            "Privacy office: privacy@snappro.app · Egypt DPO: see our Egypt PDPL Notice · Postal address: see our Business Information page.",
          ],
          ar: [
            "مكتب الخصوصية: privacy@snappro.app · مسؤول حماية البيانات في مصر: راجع إشعار قانون حماية البيانات · العنوان البريدي: صفحة معلومات الشركة.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/legal/cookies",
        label: { en: "Cookie Policy", ar: "سياسة ملفات تعريف الارتباط" },
      },
      {
        href: "/legal/dpa",
        label: {
          en: "Data Processing Agreement",
          ar: "اتفاقية معالجة البيانات",
        },
      },
      {
        href: "/legal/sub-processors",
        label: { en: "Sub-processors", ar: "المُعالجون الفرعيون" },
      },
      {
        href: "/policies/ai-training-opt-out",
        label: {
          en: "AI Training Opt-Out",
          ar: "الانسحاب من تدريب الذكاء الاصطناعي",
        },
      },
      {
        href: "/legal/egypt-pdpl",
        label: {
          en: "Egypt PDPL Notice",
          ar: "إشعار قانون حماية البيانات المصري",
        },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────── L02 TERMS
  {
    slug: "terms",
    tree: "legal",
    status: "draft",
    updated: "2026-06-05",
    title: { en: "Terms of Service — Snap Pro", ar: "شروط الخدمة — سناب برو" },
    meta: {
      en: "The contract between you and Snap Pro. Account rules, AI content ownership, payments, refunds, and dispute resolution.",
      ar: "العقد بينك وبين سناب برو: قواعد الحساب، ملكية محتوى الذكاء الاصطناعي، المدفوعات، الاسترداد، وحل النزاعات.",
    },
    h1: { en: "Terms of Service", ar: "شروط الخدمة" },
    summary: {
      en: "By using Snap Pro you agree to these Terms. They cover what you can and can't do on the platform, who owns the content you create, how billing works, and what happens if there's a dispute.",
      ar: "باستخدامك سناب برو فإنك توافق على هذه الشروط. تغطّي ما يمكنك وما لا يمكنك القيام به على المنصة، ومن يملك المحتوى الذي تُنشئه، وآلية الفوترة، وما يحدث في حال وجود نزاع.",
    },
    sections: [
      {
        id: "acceptance",
        heading: { en: "1. Acceptance", ar: "1. القبول" },
        paragraphs: {
          en: [
            "These Terms form a binding contract between you and Snap Pro. You must be at least 18 years old, or the age of majority in your jurisdiction, and have legal capacity to enter into this contract.",
          ],
          ar: [
            "تُشكّل هذه الشروط عقداً ملزماً بينك وبين سناب برو. يجب أن تكون بسن 18 على الأقل أو سن الرشد في نطاقك القضائي، وأن تتمتع بالأهلية القانونية لإبرام هذا العقد.",
          ],
        },
      },
      {
        id: "service",
        heading: { en: "2. The service", ar: "2. الخدمة" },
        paragraphs: {
          en: [
            "Snap Pro provides AI-powered photo editing services for e-commerce, retail, social media and creative use. Some features are labeled as Beta and may change or be discontinued.",
          ],
          ar: [
            'تقدّم سناب برو خدمات تحرير صور قائمة على الذكاء الاصطناعي للتجارة الإلكترونية والتجزئة ووسائل التواصل والاستخدام الإبداعي. بعض الميزات قد تظهر بعلامة "تجريبية" وقد تتغيّر أو تتوقّف.',
          ],
        },
      },
      {
        id: "accounts",
        heading: { en: "3. Accounts & security", ar: "3. الحسابات والأمن" },
        paragraphs: {
          en: [
            "You are responsible for the activity on your account and for keeping your credentials confidential. Notify us immediately if you suspect unauthorized access.",
          ],
          ar: [
            "أنت مسؤول عن النشاط على حسابك وعن الحفاظ على سرية بيانات الدخول. أبلِغنا فوراً إذا اشتبهت في وصول غير مصرّح به.",
          ],
        },
      },
      {
        id: "user-content",
        heading: { en: "4. Your content", ar: "4. محتواك" },
        paragraphs: {
          en: [
            "You retain ownership of all content you upload to Snap Pro. By uploading, you grant Snap Pro a worldwide, non-exclusive, royalty-free license to host, store, transmit and process that content for the sole purpose of operating the service for you.",
          ],
          ar: [
            "تحتفظ بملكية كافة المحتويات التي ترفعها إلى سناب برو. بالرفع، فإنك تمنح سناب برو ترخيصاً عالمياً غير حصري ومجانياً لاستضافة هذا المحتوى وتخزينه ونقله ومعالجته فقط لأغراض تشغيل الخدمة لصالحك.",
          ],
        },
      },
      {
        id: "ai-output",
        heading: {
          en: "5. AI-generated output",
          ar: "5. مخرجات الذكاء الاصطناعي",
        },
        paragraphs: {
          en: [
            "Subject to applicable law, you own the AI-generated output produced from your prompts and uploads. See our AI Content Ownership Policy for details and jurisdictional caveats.",
          ],
          ar: [
            "بموجب القانون المعمول به، تملك المخرجات المُنشَأة بالذكاء الاصطناعي الناتجة من أوامرك وملفاتك. راجع سياسة ملكية محتوى الذكاء الاصطناعي للتفاصيل والاعتبارات القضائية.",
          ],
        },
      },
      {
        id: "aup",
        heading: { en: "6. Acceptable use", ar: "6. الاستخدام المقبول" },
        paragraphs: {
          en: [
            "You agree to comply with our Acceptable Use Policy. Violations may result in suspension or termination without refund.",
          ],
          ar: [
            "توافق على الالتزام بسياسة الاستخدام المقبول. أي انتهاك قد يؤدي إلى التعليق أو الإنهاء دون استرداد.",
          ],
        },
      },
      {
        id: "billing",
        heading: { en: "7. Billing & taxes", ar: "7. الفوترة والضرائب" },
        paragraphs: {
          en: [
            "Subscriptions auto-renew unless you cancel before the renewal date. Prices are shown inclusive of applicable taxes (e.g., 14% VAT in Egypt). See our Subscription Terms for full billing details.",
          ],
          ar: [
            "تتجدّد الاشتراكات تلقائياً ما لم تُلغِها قبل تاريخ التجديد. تُعرض الأسعار شاملة الضرائب المعمول بها (مثل ضريبة القيمة المضافة 14% في مصر). راجع شروط الاشتراك للتفاصيل الكاملة.",
          ],
        },
      },
      {
        id: "refunds",
        heading: { en: "8. Refunds", ar: "8. الاسترداد" },
        paragraphs: {
          en: [
            "Refunds are governed by our Refund Policy. Egyptian customers retain their statutory 14-day cooling-off right under Consumer Protection Law 181/2018, subject to its conditions.",
          ],
          ar: [
            "يخضع الاسترداد لسياسة الاسترداد لدينا. يحتفظ العملاء في مصر بحقّ التراجع القانوني خلال 14 يوماً بموجب قانون حماية المستهلك رقم 181/2018، وفقاً لأحكامه.",
          ],
        },
      },
      {
        id: "third-party",
        heading: {
          en: "9. Third-party services",
          ar: "9. خدمات الأطراف الثالثة",
        },
        paragraphs: {
          en: [
            "Snap Pro integrates with third-party services (e.g. Stripe, Paymob, AI providers, integrations such as Shopify and Salla). Your use of those services is governed by their own terms.",
          ],
          ar: [
            "تتكامل سناب برو مع خدمات أطراف ثالثة (مثل سترايب، بيموب، مزوّدي الذكاء الاصطناعي، تكاملات مثل شوبيفاي وسلة). استخدامك لتلك الخدمات يخضع لشروطها الخاصة.",
          ],
        },
      },
      {
        id: "ip",
        heading: {
          en: "10. Snap Pro intellectual property",
          ar: "10. الملكية الفكرية لسناب برو",
        },
        paragraphs: {
          en: [
            "The Snap Pro platform, brand, software, models we own, and documentation are protected by copyright, trademark, and other intellectual-property laws. We grant you a limited, revocable, non-transferable license to use the service.",
          ],
          ar: [
            "منصّة سناب برو وعلامتها التجارية وبرمجياتها والنماذج التي نملكها ووثائقها محمية بقوانين حقوق النشر والعلامات التجارية وغيرها. نمنحك ترخيصاً محدوداً وقابلاً للإلغاء وغير قابل للتحويل لاستخدام الخدمة.",
          ],
        },
      },
      {
        id: "disclaimers",
        heading: { en: "11. Disclaimers", ar: "11. إخلاء المسؤولية" },
        paragraphs: {
          en: [
            "The service is provided AS IS and AS AVAILABLE. We disclaim all implied warranties to the maximum extent allowed by law. AI outputs may contain inaccuracies; you are responsible for reviewing them before commercial use.",
          ],
          ar: [
            'تُقدَّم الخدمة "كما هي" و"حسب التوفّر". نُخلي مسؤوليتنا من جميع الضمانات الضمنية إلى أقصى حدّ يسمح به القانون. قد تتضمّن مخرجات الذكاء الاصطناعي عدم دقّة؛ وتقع عليك مسؤولية مراجعتها قبل الاستخدام التجاري.',
          ],
        },
      },
      {
        id: "liability",
        heading: {
          en: "12. Limitation of liability",
          ar: "12. تحديد المسؤولية",
        },
        paragraphs: {
          en: [
            "To the maximum extent allowed by law, Snap Pro's aggregate liability arising from these Terms is limited to the greater of (a) the fees you paid us in the 12 months before the claim, or (b) USD 100. We are not liable for indirect, incidental, or consequential damages.",
          ],
          ar: [
            "إلى أقصى حد يسمح به القانون، تُحدَّد مسؤولية سناب برو الإجمالية الناشئة عن هذه الشروط بأكبر القيمتين: (أ) الرسوم التي دفعتها لنا خلال 12 شهراً قبل المطالبة، أو (ب) 100 دولار أمريكي. لسنا مسؤولين عن أضرار غير مباشرة أو عرضية أو تبعية.",
          ],
        },
      },
      {
        id: "termination",
        heading: { en: "13. Termination", ar: "13. الإنهاء" },
        paragraphs: {
          en: [
            "You may close your account at any time. We may suspend or terminate accounts that violate these Terms, our Acceptable Use Policy, or applicable law.",
          ],
          ar: [
            "يمكنك إغلاق حسابك في أي وقت. ويحقّ لنا تعليق أو إنهاء الحسابات التي تنتهك هذه الشروط أو سياسة الاستخدام المقبول أو القانون المعمول به.",
          ],
        },
      },
      {
        id: "law",
        heading: { en: "14. Governing law", ar: "14. القانون الحاكم" },
        paragraphs: {
          en: [
            "Customers in Egypt: Egyptian law and Cairo courts. Customers in Iraq: Iraqi law. Other customers: laws of the State of Delaware, USA. Enterprise customers may negotiate DIFC-seat arbitration in their order form.",
          ],
          ar: [
            "العملاء في مصر: القانون المصري ومحاكم القاهرة. العملاء في العراق: القانون العراقي. العملاء الآخرون: قوانين ولاية ديلاوير الأمريكية. يجوز لعملاء الشركات التفاوض على تحكيم مقرّه مركز دبي المالي العالمي ضمن نموذج الطلب.",
          ],
        },
      },
      {
        id: "changes",
        heading: { en: "15. Changes", ar: "15. التغييرات" },
        paragraphs: {
          en: [
            "We may update these Terms from time to time. We will notify you of material changes at least 30 days in advance and post the updated Terms on this page.",
          ],
          ar: [
            "قد نقوم بتحديث هذه الشروط من حين لآخر. سنُخطرك بالتغييرات الجوهرية قبل 30 يوماً على الأقل، وسنقوم بنشر النسخة المُحدَّثة في هذه الصفحة.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/legal/privacy",
        label: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
      },
      {
        href: "/legal/acceptable-use",
        label: { en: "Acceptable Use Policy", ar: "سياسة الاستخدام المقبول" },
      },
      {
        href: "/legal/refunds",
        label: { en: "Refund Policy", ar: "سياسة الاسترداد" },
      },
      {
        href: "/legal/subscription",
        label: { en: "Subscription Terms", ar: "شروط الاشتراك" },
      },
      {
        href: "/policies/ai-content-ownership",
        label: {
          en: "AI Content Ownership",
          ar: "ملكية محتوى الذكاء الاصطناعي",
        },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────── L03 COOKIES
  {
    slug: "cookies",
    tree: "legal",
    status: "draft",
    updated: "2026-06-05",
    title: {
      en: "Cookie Policy — Snap Pro",
      ar: "سياسة ملفات تعريف الارتباط — سناب برو",
    },
    meta: {
      en: "Which cookies Snap Pro uses, why, how long they last, and how to manage your preferences. Compliant with ePrivacy and Egyptian PDPL Article 12.",
      ar: "ملفات تعريف الارتباط التي تستخدمها سناب برو، أسباب استخدامها، مدة بقائها، وكيفية إدارتها. متوافقة مع ePrivacy والمادة 12 من قانون حماية البيانات المصري.",
    },
    h1: { en: "Cookie Policy", ar: "سياسة ملفات تعريف الارتباط" },
    summary: {
      en: "We use a small set of cookies and similar storage to keep you signed in, secure your account, measure performance, and improve the product. You can change your choices at any time.",
      ar: "نستخدم مجموعة صغيرة من ملفات تعريف الارتباط ووسائل التخزين المماثلة للحفاظ على تسجيل دخولك وحماية حسابك وقياس الأداء وتحسين المنتج. يمكنك تغيير اختياراتك في أي وقت.",
    },
    sections: [
      {
        id: "what",
        heading: { en: "What cookies are", ar: "ما هي ملفات تعريف الارتباط" },
        paragraphs: {
          en: [
            "Cookies are small text files placed on your device by websites you visit. We also use similar technologies such as localStorage and pixels.",
          ],
          ar: [
            "ملفات تعريف الارتباط هي ملفات نصية صغيرة تضعها المواقع التي تزورها على جهازك. نستخدم أيضاً تقنيات مماثلة مثل localStorage والبكسلات.",
          ],
        },
      },
      {
        id: "categories",
        heading: { en: "Categories we use", ar: "الفئات التي نستخدمها" },
        defs: [
          {
            term: { en: "Strictly necessary", ar: "ضرورية تماماً" },
            meaning: {
              en: "Required to operate the service — e.g. authentication, CSRF protection, load balancing.",
              ar: "ضرورية لتشغيل الخدمة — مثل المصادقة والحماية من تزوير الطلبات وتوزيع الأحمال.",
            },
          },
          {
            term: { en: "Functional", ar: "وظيفية" },
            meaning: {
              en: "Remember your preferences such as language and theme.",
              ar: "تتذكّر تفضيلاتك مثل اللغة والمظهر.",
            },
          },
          {
            term: { en: "Analytics", ar: "تحليلية" },
            meaning: {
              en: "Help us understand which features are used and where to invest engineering effort.",
              ar: "تساعدنا على فهم الميزات الأكثر استخداماً وأين نوجّه جهود التطوير.",
            },
          },
          {
            term: { en: "Marketing", ar: "تسويقية" },
            meaning: {
              en: "Used only with your explicit consent to measure campaign performance.",
              ar: "تُستخدم فقط بموافقتك الصريحة لقياس أداء الحملات التسويقية.",
            },
          },
        ],
      },
      {
        id: "table",
        heading: { en: "Cookie list", ar: "قائمة ملفات تعريف الارتباط" },
        table: {
          head: {
            en: ["Name", "Purpose", "Duration", "Category"],
            ar: ["الاسم", "الغرض", "المدة", "الفئة"],
          },
          rows: [
            {
              en: ["snap-session", "Authentication", "30 days", "Necessary"],
              ar: ["snap-session", "المصادقة", "30 يوماً", "ضرورية"],
            },
            {
              en: ["snap-csrf", "CSRF protection", "Session", "Necessary"],
              ar: ["snap-csrf", "الحماية من CSRF", "الجلسة", "ضرورية"],
            },
            {
              en: [
                "snap-locale",
                "Language preference",
                "1 year",
                "Functional",
              ],
              ar: ["snap-locale", "تفضيل اللغة", "سنة", "وظيفية"],
            },
            {
              en: [
                "snap-analytics",
                "Aggregated usage stats",
                "1 year",
                "Analytics",
              ],
              ar: [
                "snap-analytics",
                "إحصاءات الاستخدام المجمّعة",
                "سنة",
                "تحليلية",
              ],
            },
          ],
        },
      },
      {
        id: "managing",
        heading: { en: "Managing your choices", ar: "إدارة اختياراتك" },
        paragraphs: {
          en: [
            "You can change your preferences any time via the Cookie Settings link in our footer or by clearing cookies in your browser. Disabling necessary cookies will prevent the service from functioning.",
          ],
          ar: [
            "يمكنك تغيير تفضيلاتك في أي وقت عبر رابط إعدادات ملفات تعريف الارتباط في تذييل الموقع أو بمسحها من متصفّحك. قد يمنع تعطيل الملفات الضرورية الخدمة من العمل.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/legal/privacy",
        label: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────── L04 AUP
  {
    slug: "acceptable-use",
    tree: "legal",
    status: "draft",
    updated: "2026-06-05",
    title: {
      en: "Acceptable Use Policy — Snap Pro",
      ar: "سياسة الاستخدام المقبول — سناب برو",
    },
    meta: {
      en: "Rules for using Snap Pro safely and legally. Covers prohibited content, prohibited activities, enforcement, and reporting.",
      ar: "قواعد استخدام سناب برو بأمان وقانونية: المحتوى المحظور، الأنشطة المحظورة، الإنفاذ، والإبلاغ.",
    },
    h1: { en: "Acceptable Use Policy", ar: "سياسة الاستخدام المقبول" },
    summary: {
      en: "Use Snap Pro for legitimate creative and commercial purposes. Don't generate harmful, illegal, or deceptive content. Don't abuse the platform or other users.",
      ar: "استخدم سناب برو للأغراض الإبداعية والتجارية المشروعة. لا تُنشئ محتوى ضاراً أو غير قانوني أو مضلِّلاً. ولا تسيء استخدام المنصّة أو المستخدمين الآخرين.",
    },
    sections: [
      {
        id: "prohibited-content",
        heading: { en: "Prohibited content", ar: "المحتوى المحظور" },
        bullets: {
          en: [
            "Child sexual abuse material (CSAM) — reported immediately to the relevant authorities and NCMEC.",
            'Non-consensual intimate imagery (NCII) and "deepfake" pornography.',
            "Deepfakes of identifiable individuals without their explicit, documented consent.",
            "Election or political deepfakes intended to deceive.",
            "Hate speech, harassment, threats, or content that incites violence.",
            "Content that infringes copyright, trademark, or other intellectual-property rights.",
            "Malware, phishing kits, or content designed to defraud.",
            "Fake reviews, fake testimonials, or other deceptive commercial content.",
            "Medical, legal, or financial advice presented as factual.",
          ],
          ar: [
            "مواد الاعتداء الجنسي على الأطفال — يتم الإبلاغ عنها فوراً إلى الجهات المختصة والمنظمات الدولية المعنية.",
            'الصور الحميمة دون رضا أصحابها، والمحتوى الإباحي القائم على "التزييف العميق".',
            "أي تزييف عميق لأفراد معروفين دون موافقتهم الصريحة الموثّقة.",
            "تزييف انتخابي أو سياسي يهدف إلى التضليل.",
            "خطاب كراهية، تحرّش، تهديد، أو تحريض على العنف.",
            "محتوى ينتهك حقوق النشر أو العلامات التجارية أو غيرها من حقوق الملكية الفكرية.",
            "برمجيات خبيثة أو أدوات تصيّد أو محتوى هدفه الاحتيال.",
            "مراجعات وشهادات مزوّرة أو أي محتوى تجاري مضلِّل.",
            "نصائح طبية أو قانونية أو مالية تُقدَّم باعتبارها وقائع.",
          ],
        },
      },
      {
        id: "prohibited-activities",
        heading: { en: "Prohibited activities", ar: "الأنشطة المحظورة" },
        bullets: {
          en: [
            "Reverse-engineering, decompiling, or attempting to bypass safety filters.",
            "Sharing your account or selling generated credits to third parties outside team plans.",
            "Automated scraping or excessive load that affects other users.",
            "Using Snap Pro to compete by training a substitute AI service.",
            "Probing security without using our Vulnerability Disclosure program.",
          ],
          ar: [
            "الهندسة العكسية أو فك التجميع أو محاولة تجاوز فلاتر الأمان.",
            "مشاركة الحساب أو بيع الأرصدة المُولَّدة لأطراف ثالثة خارج خطط الفِرق.",
            "الاستخراج الآلي أو الضغط الزائد بما يؤثّر على بقية المستخدمين.",
            "استخدام سناب برو لتدريب خدمة ذكاء اصطناعي منافسة.",
            "اختبار الأمن دون اللجوء إلى برنامج الإفصاح عن الثغرات.",
          ],
        },
      },
      {
        id: "enforcement",
        heading: { en: "Enforcement", ar: "الإنفاذ" },
        paragraphs: {
          en: [
            "We may warn, restrict features, suspend, or terminate accounts that violate this policy. Severe violations (e.g. CSAM) result in immediate termination and reporting to authorities. We may also bar repeat violators from creating new accounts.",
          ],
          ar: [
            "قد نُصدر تحذيرات أو نُقيّد الميزات أو نُعلّق أو نُنهي الحسابات التي تنتهك هذه السياسة. تؤدي الانتهاكات الجسيمة (مثل المواد المتعلقة بالأطفال) إلى إنهاء فوري وإبلاغ الجهات المختصة. كما قد نمنع المخالفين المتكرّرين من إنشاء حسابات جديدة.",
          ],
        },
      },
      {
        id: "reporting",
        heading: { en: "Reporting abuse", ar: "الإبلاغ عن الإساءة" },
        paragraphs: {
          en: [
            "Report content that violates this policy via our AI Abuse Reporting page. Copyright complaints follow our DMCA / Takedown process.",
          ],
          ar: [
            "بلِّغ عن أي محتوى يُخالف هذه السياسة عبر صفحة الإبلاغ عن إساءة استخدام الذكاء الاصطناعي. تُعالَج شكاوى حقوق النشر عبر إجراءاتنا الخاصة بإزالة المحتوى.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/policies/ai-abuse",
        label: {
          en: "AI Abuse Reporting",
          ar: "الإبلاغ عن إساءة الذكاء الاصطناعي",
        },
      },
      {
        href: "/legal/dmca",
        label: { en: "DMCA / Takedown", ar: "إزالة المحتوى المنتهِك" },
      },
      {
        href: "/legal/terms",
        label: { en: "Terms of Service", ar: "شروط الخدمة" },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────── L05 REFUNDS
  {
    slug: "refunds",
    tree: "legal",
    status: "draft",
    updated: "2026-06-05",
    title: {
      en: "Refund & Cancellation Policy — Snap Pro",
      ar: "سياسة الاسترداد والإلغاء — سناب برو",
    },
    meta: {
      en: "How and when Snap Pro issues refunds, the 14-day cooling-off rights for Egyptian and EU consumers, and how to cancel.",
      ar: "متى وكيف نُصدر استرداداً، حق التراجع خلال 14 يوماً للعملاء في مصر والاتحاد الأوروبي، وكيفية الإلغاء.",
    },
    h1: { en: "Refund & Cancellation Policy", ar: "سياسة الاسترداد والإلغاء" },
    summary: {
      en: "Cancel anytime from your account. Egyptian and EU customers may withdraw within 14 days under their respective consumer-protection laws, subject to those laws' conditions.",
      ar: "ألغِ في أي وقت من حسابك. يحقّ للعملاء في مصر والاتحاد الأوروبي التراجع خلال 14 يوماً بموجب قوانين حماية المستهلك، وفقاً لأحكامها.",
    },
    sections: [
      {
        id: "subscriptions",
        heading: { en: "Subscriptions", ar: "الاشتراكات" },
        paragraphs: {
          en: [
            "You can cancel your subscription at any time from Account → Billing. Cancellation takes effect at the end of your current billing period; you keep access until then.",
          ],
          ar: [
            "يمكنك إلغاء اشتراكك في أي وقت من الحساب ← الفوترة. يسري الإلغاء في نهاية فترة الفوترة الحالية، مع احتفاظك بالوصول حتى ذلك التاريخ.",
          ],
        },
      },
      {
        id: "egypt-14",
        heading: {
          en: "Egypt — 14-day cooling-off",
          ar: "مصر — حق التراجع خلال 14 يوماً",
        },
        paragraphs: {
          en: [
            "Under Egyptian Consumer Protection Law 181/2018, you may withdraw from a digital-service contract within 14 days of purchase unless the service has been performed (i.e. credits used) with your prior express consent.",
          ],
          ar: [
            "وفقاً لقانون حماية المستهلك المصري رقم 181/2018، يحقّ لك التراجع عن عقد الخدمة الرقمية خلال 14 يوماً من الشراء، ما لم يكن قد تمّ تنفيذ الخدمة (أي استهلاك الأرصدة) بموافقتك الصريحة المسبقة.",
          ],
        },
      },
      {
        id: "eu-14",
        heading: {
          en: "EU — 14-day cooling-off",
          ar: "الاتحاد الأوروبي — التراجع خلال 14 يوماً",
        },
        paragraphs: {
          en: [
            "If you reside in the EU/EEA, you have 14 days to withdraw from a contract for digital services unless you expressly waived that right when the service began.",
          ],
          ar: [
            "إذا كنت مقيماً في الاتحاد الأوروبي/المنطقة الاقتصادية الأوروبية، فلديك 14 يوماً للانسحاب من العقد ما لم تكن قد تنازلت عن هذا الحق صراحةً عند بدء الخدمة.",
          ],
        },
      },
      {
        id: "credits",
        heading: { en: "Credit packs", ar: "حزم الأرصدة" },
        paragraphs: {
          en: [
            "Used credits are non-refundable. Unused, untouched credit packs are refundable within 7 days of purchase.",
          ],
          ar: [
            "لا يمكن استرداد الأرصدة المستخدَمة. أما حزم الأرصدة التي لم تُمَس فيمكن استرداد قيمتها خلال 7 أيام من الشراء.",
          ],
        },
      },
      {
        id: "chargeback",
        heading: { en: "Chargebacks", ar: "ردّ المبالغ المدفوعة" },
        paragraphs: {
          en: [
            "Please contact support before initiating a chargeback. We process refunds via the original payment method (Stripe / Paymob / regional gateway) within 5–10 business days; bank settlement times may vary.",
          ],
          ar: [
            "يُرجى التواصل مع الدعم قبل بدء أي إجراء لردّ المبالغ. نُعالج الاسترداد عبر وسيلة الدفع الأصلية (سترايب/بيموب/البوابة الإقليمية) خلال 5 إلى 10 أيام عمل، مع تفاوت أوقات التسوية بين البنوك.",
          ],
        },
      },
      {
        id: "request",
        heading: { en: "How to request a refund", ar: "كيفية طلب الاسترداد" },
        paragraphs: {
          en: [
            "Email support@snappro.app with your account email, order number, and reason. We respond within 2 business days.",
          ],
          ar: [
            "أرسل إلى support@snappro.app بريد حسابك ورقم الطلب وسبب الاسترداد. نردّ خلال يومي عمل.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/legal/subscription",
        label: { en: "Subscription Terms", ar: "شروط الاشتراك" },
      },
      {
        href: "/legal/terms",
        label: { en: "Terms of Service", ar: "شروط الخدمة" },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────── L06 SUBSCRIPTION
  {
    slug: "subscription",
    tree: "legal",
    status: "draft",
    updated: "2026-06-05",
    title: {
      en: "Subscription Terms — Snap Pro",
      ar: "شروط الاشتراك — سناب برو",
    },
    meta: {
      en: "Plans, billing cycles, auto-renewal, price changes, taxes, and how downgrades and credits work.",
      ar: "الخطط، دورات الفوترة، التجديد التلقائي، تغيّرات الأسعار، الضرائب، وآلية تخفيض الخطط والأرصدة.",
    },
    h1: { en: "Subscription Terms", ar: "شروط الاشتراك" },
    summary: {
      en: "Subscriptions auto-renew. We give you at least 30 days' notice before any price increase. Taxes are shown at checkout. You can downgrade, upgrade, or cancel anytime.",
      ar: "تتجدّد الاشتراكات تلقائياً. نُخطرك بأيّ زيادة سعرية قبل 30 يوماً على الأقل. تُعرض الضرائب عند الدفع. يمكنك تخفيض الخطة أو ترقيتها أو إلغاؤها في أي وقت.",
    },
    sections: [
      {
        id: "auto-renew",
        heading: { en: "Auto-renewal", ar: "التجديد التلقائي" },
        paragraphs: {
          en: [
            "Your plan will renew automatically at the end of each billing cycle (monthly or annual) using your saved payment method. We send a renewal reminder 7 days before each renewal.",
          ],
          ar: [
            "ستتجدّد خطّتك تلقائياً عند انتهاء كل دورة فوترة (شهرية أو سنوية) باستخدام وسيلة الدفع المحفوظة. نُرسل تذكيراً قبل التجديد بسبعة أيام.",
          ],
        },
      },
      {
        id: "price-changes",
        heading: { en: "Price changes", ar: "تغيير الأسعار" },
        paragraphs: {
          en: [
            "We will give you at least 30 days' notice via email and an in-app notice before any price change takes effect. You may cancel before the change applies.",
          ],
          ar: [
            "سنُخطرك بالبريد الإلكتروني وداخل التطبيق قبل 30 يوماً على الأقل من سريان أي تغيير سعري. يحقّ لك الإلغاء قبل تطبيق التغيير.",
          ],
        },
      },
      {
        id: "taxes",
        heading: { en: "Taxes", ar: "الضرائب" },
        paragraphs: {
          en: [
            "Prices on our pricing page are shown with applicable taxes for your billing country: 14% VAT in Egypt, EU VAT, GCC VAT where applicable. Iraqi customers will see prices net of taxes that may apply locally.",
          ],
          ar: [
            "تُعرض الأسعار في صفحة التسعير شاملةً الضرائب المعمول بها وفقاً لبلد الفوترة: 14% في مصر، وضريبة القيمة المضافة الأوروبية، وضرائب القيمة المضافة في دول الخليج عند الانطباق. يرى العملاء في العراق الأسعار صافيةً من الضرائب المحلية.",
          ],
        },
      },
      {
        id: "credits",
        heading: { en: "Credits roll-over", ar: "ترحيل الأرصدة" },
        paragraphs: {
          en: [
            "Plan credits roll over for one billing cycle, then expire. Add-on credit packs do not expire.",
          ],
          ar: [
            "تُرحَّل أرصدة الخطة لدورة فوترة واحدة فقط ثم تنتهي صلاحيتها. أما حزم الأرصدة الإضافية فلا تنتهي.",
          ],
        },
      },
      {
        id: "downgrade",
        heading: { en: "Downgrades & upgrades", ar: "التخفيض والترقية" },
        paragraphs: {
          en: [
            "Upgrades take effect immediately and are prorated. Downgrades take effect at the next billing cycle.",
          ],
          ar: [
            "تُطبَّق الترقية فوراً مع تقسيط الفارق. أمّا التخفيض فيسري عند بدء دورة الفوترة التالية.",
          ],
        },
      },
      {
        id: "grace",
        heading: { en: "Grace period", ar: "فترة السماح" },
        paragraphs: {
          en: [
            "If your payment fails we retry for 7 days and your account remains active. After 7 days the account is paused. We never delete your data without 30 additional days of notice.",
          ],
          ar: [
            "إذا فشلت عملية الدفع، نُعيد المحاولة على مدى 7 أيام مع بقاء الحساب نشطاً. بعد 7 أيام يتم إيقاف الحساب مؤقتاً. لا نحذف بياناتك مطلقاً قبل إخطارك بـ30 يوماً إضافية.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/legal/refunds",
        label: { en: "Refund Policy", ar: "سياسة الاسترداد" },
      },
      { href: "/pricing", label: { en: "Pricing", ar: "الأسعار" } },
    ],
  },

  // ─── REMAINING LEGAL — STRUCTURAL DRAFTS ──────────────────────────────────
  {
    slug: "dpa",
    tree: "legal",
    status: "draft",
    updated: "2026-06-05",
    title: {
      en: "Data Processing Agreement — Snap Pro",
      ar: "اتفاقية معالجة البيانات — سناب برو",
    },
    meta: {
      en: "Snap Pro's DPA for enterprise customers — controller-processor terms, sub-processing, security, audit rights, and SCC annexes.",
      ar: "اتفاقية معالجة البيانات لعملاء الشركات — أحكام المعالج والمراقب، المعالجة الفرعية، الأمن، حقوق التدقيق، وملاحق البنود التعاقدية القياسية.",
    },
    h1: { en: "Data Processing Agreement", ar: "اتفاقية معالجة البيانات" },
    summary: {
      en: "When we process personal data on your behalf, this DPA governs that processing. It can be signed electronically and incorporates SCCs, PDPL, UK IDTA, and Swiss FADP addenda.",
      ar: "عندما نُعالج البيانات الشخصية بالنيابة عنك، تحكم هذه الاتفاقية تلك المعالجة. يمكن توقيعها إلكترونياً وتشمل ملاحق البنود التعاقدية القياسية وقانون حماية البيانات المصري والملحق البريطاني والسويسري.",
    },
    sections: [
      {
        id: "scope",
        heading: { en: "Scope & roles", ar: "النطاق والأدوار" },
        paragraphs: {
          en: [
            "Final clauses to be drafted by external counsel based on the standard EU SCCs (2021/914) and PDPL Article 12 obligations.",
          ],
          ar: [
            "الصياغة النهائية ستُعدّها استشارات قانونية خارجية استناداً إلى البنود التعاقدية القياسية الأوروبية (2021/914) والمادة 12 من قانون حماية البيانات المصري.",
          ],
        },
      },
      {
        id: "subprocessors",
        heading: { en: "Sub-processing", ar: "المعالجة الفرعية" },
        paragraphs: {
          en: [
            "Sub-processors are listed in our public Sub-processors page; customers can subscribe to changes.",
          ],
          ar: [
            "يتم إدراج المعالجين الفرعيين في صفحة المعالجين الفرعيين العامة، ويمكن للعملاء الاشتراك في تنبيهات التغيير.",
          ],
        },
      },
      {
        id: "security",
        heading: { en: "Security measures", ar: "التدابير الأمنية" },
        paragraphs: {
          en: ["See Annex II — derived from our Security Overview."],
          ar: ["راجع الملحق الثاني — مستمدّ من نظرة الأمن العامة لدينا."],
        },
      },
      {
        id: "annex-i",
        heading: {
          en: "Annex I — Processing details",
          ar: "الملحق الأول — تفاصيل المعالجة",
        },
        paragraphs: { en: ["To be drafted."], ar: ["سيتم صياغته."] },
      },
      {
        id: "annex-ii",
        heading: {
          en: "Annex II — Technical & organizational measures",
          ar: "الملحق الثاني — التدابير التقنية والتنظيمية",
        },
        paragraphs: { en: ["To be drafted."], ar: ["سيتم صياغته."] },
      },
      {
        id: "annex-iii",
        heading: {
          en: "Annex III — Sub-processors",
          ar: "الملحق الثالث — المعالجون الفرعيون",
        },
        paragraphs: {
          en: ["See live sub-processors page."],
          ar: ["راجع الصفحة الحيّة للمعالجين الفرعيين."],
        },
      },
    ],
    cta: {
      label: {
        en: "Request a counter-signed DPA",
        ar: "طلب اتفاقية موقّعة من الجهتين",
      },
      href: "/contact?topic=dpa",
    },
    related: [
      {
        href: "/legal/sub-processors",
        label: { en: "Sub-processors", ar: "المعالجون الفرعيون" },
      },
      {
        href: "/trust/security",
        label: { en: "Security Overview", ar: "نظرة عامة على الأمن" },
      },
    ],
  },
  {
    slug: "sub-processors",
    tree: "legal",
    status: "draft",
    updated: "2026-06-05",
    title: {
      en: "Sub-processors — Snap Pro",
      ar: "المعالجون الفرعيون — سناب برو",
    },
    meta: {
      en: "Live list of vendors that process personal data on Snap Pro's behalf, with region and transfer mechanism. Subscribe for change alerts.",
      ar: "قائمة محدّثة بالمورّدين الذين يعالجون البيانات الشخصية بالنيابة عن سناب برو، مع المنطقة وآلية النقل. اشترك للحصول على تنبيهات التغيير.",
    },
    h1: { en: "Sub-processors", ar: "المعالجون الفرعيون" },
    summary: {
      en: "We engage third-party providers for hosting, payments, AI processing, analytics, and support. The table below is the authoritative current list.",
      ar: "نتعاقد مع مزوّدين خارجيين للاستضافة والمدفوعات ومعالجة الذكاء الاصطناعي والتحليلات والدعم. الجدول أدناه هو القائمة المرجعية الحالية.",
    },
    sections: [
      {
        id: "current",
        heading: {
          en: "Current sub-processors",
          ar: "المعالجون الفرعيون الحاليون",
        },
        table: {
          head: {
            en: ["Vendor", "Purpose", "Region", "Transfer mechanism"],
            ar: ["المورّد", "الغرض", "المنطقة", "آلية النقل"],
          },
          rows: [
            {
              en: ["Stripe Inc.", "Card processing", "US / EU", "SCCs"],
              ar: [
                "سترايب",
                "معالجة البطاقات",
                "الولايات المتحدة/أوروبا",
                "البنود التعاقدية القياسية",
              ],
            },
            {
              en: [
                "Paymob",
                "Regional payments",
                "Egypt / GCC",
                "PDPL safeguards",
              ],
              ar: [
                "بيموب",
                "مدفوعات إقليمية",
                "مصر/الخليج",
                "ضمانات قانون حماية البيانات",
              ],
            },
            {
              en: ["Cloudflare", "CDN, WAF, DDoS", "Global", "SCCs"],
              ar: [
                "كلاودفلير",
                "CDN وWAF وحماية من DDoS",
                "عالمياً",
                "البنود التعاقدية القياسية",
              ],
            },
            {
              en: ["Vercel", "Hosting & edge", "Global", "SCCs"],
              ar: [
                "فيرسل",
                "الاستضافة والحافة",
                "عالمياً",
                "البنود التعاقدية القياسية",
              ],
            },
          ],
        },
      },
      {
        id: "subscribe",
        heading: { en: "Change alerts", ar: "تنبيهات التغيير" },
        paragraphs: {
          en: [
            "Email subprocessors@snappro.app to receive 30-day advance notice of any addition or replacement.",
          ],
          ar: [
            "راسِل subprocessors@snappro.app للحصول على إشعار قبل 30 يوماً من أي إضافة أو استبدال.",
          ],
        },
      },
    ],
  },
  {
    slug: "international-transfers",
    tree: "legal",
    status: "draft",
    title: {
      en: "International Data Transfers — Snap Pro",
      ar: "نقل البيانات الدولي — سناب برو",
    },
    meta: {
      en: "How Snap Pro transfers data across borders, the safeguards we apply, and the adequacy / SCC framework we rely on.",
      ar: "كيف تنقل سناب برو البيانات عبر الحدود، الضمانات المطبَّقة، وإطار قرارات الكفاية والبنود التعاقدية القياسية.",
    },
    h1: { en: "International Data Transfers", ar: "نقل البيانات الدولي" },
    sections: [
      {
        id: "framework",
        heading: { en: "Legal framework", ar: "الإطار القانوني" },
        paragraphs: {
          en: [
            "Standard Contractual Clauses (EU 2021/914), UK IDTA, Swiss FADP addendum, and PDPL-aligned safeguards for transfers outside Egypt.",
          ],
          ar: [
            "البنود التعاقدية القياسية الأوروبية (2021/914)، الملحق البريطاني، ملحق قانون حماية البيانات السويسري، وضمانات متوافقة مع قانون حماية البيانات المصري للنقل خارج مصر.",
          ],
        },
      },
      {
        id: "regions",
        heading: { en: "Where data flows", ar: "أين تتحرّك البيانات" },
        paragraphs: {
          en: [
            "Primary processing in EU and US regions. MENA region edge cache for static assets.",
          ],
          ar: [
            "المعالجة الأساسية في مناطق الاتحاد الأوروبي والولايات المتحدة. ذاكرة حافة في منطقة الشرق الأوسط للأصول الثابتة.",
          ],
        },
      },
    ],
  },
  {
    slug: "government-requests",
    tree: "legal",
    status: "draft",
    title: {
      en: "Government Requests — Snap Pro",
      ar: "طلبات الحكومات — سناب برو",
    },
    meta: {
      en: "How Snap Pro handles legal process from government authorities and the principles we apply when responding.",
      ar: "كيف تتعامل سناب برو مع الإجراءات القانونية من السلطات الحكومية، والمبادئ التي نطبّقها عند الردّ.",
    },
    h1: { en: "Government Requests", ar: "طلبات الحكومات" },
    sections: [
      {
        id: "principles",
        heading: { en: "Principles", ar: "المبادئ" },
        paragraphs: {
          en: [
            "We require valid legal process, narrow each disclosure, notify users where lawful, and publish an annual transparency report.",
          ],
          ar: [
            "نشترط إجراءً قانونياً صحيحاً، ونحصر كل إفصاح بالحد الأدنى، ونُخطر المستخدمين متى أمكن قانوناً، ونُصدر تقرير شفافية سنوياً.",
          ],
        },
      },
      {
        id: "report",
        heading: {
          en: "Annual transparency report",
          ar: "تقرير الشفافية السنوي",
        },
        paragraphs: {
          en: [
            "The first report will be published 12 months after general availability launch.",
          ],
          ar: ["سيُنشر التقرير الأول بعد 12 شهراً من الإطلاق العام."],
        },
      },
    ],
  },
  {
    slug: "egypt-pdpl",
    tree: "legal",
    status: "draft",
    title: {
      en: "Egypt — PDPL Notice",
      ar: "مصر — إشعار قانون حماية البيانات",
    },
    meta: {
      en: "Egyptian Personal Data Protection Law 151/2020 disclosures, data-subject rights, and the route to file a complaint.",
      ar: "إفصاحات قانون حماية البيانات الشخصية المصري رقم 151/2020، حقوق أصحاب البيانات، وآلية تقديم الشكوى.",
    },
    h1: {
      en: "Egyptian Data Protection Notice",
      ar: "إشعار حماية البيانات للعملاء في مصر",
    },
    summary: {
      en: "If you reside in Egypt, this page summarizes how PDPL Law 151/2020 applies to your use of Snap Pro and how to exercise your rights.",
      ar: "إذا كنت مقيماً في مصر، تلخّص هذه الصفحة كيف يُطبَّق قانون حماية البيانات الشخصية رقم 151/2020 على استخدامك سناب برو وكيف تمارس حقوقك.",
    },
    sections: [
      {
        id: "controller",
        heading: { en: "Controller status", ar: "صفة المراقب" },
        paragraphs: {
          en: [
            "Snap Pro is the data controller for Egyptian users in respect of account data and a processor for content uploaded by enterprise customers.",
          ],
          ar: [
            "سناب برو هي المراقب على بيانات المستخدمين في مصر لما يتعلق ببيانات الحساب، ومعالج لمحتوى عملاء الشركات.",
          ],
        },
      },
      {
        id: "rights",
        heading: {
          en: "Your rights under PDPL",
          ar: "حقوقك بموجب قانون حماية البيانات",
        },
        bullets: {
          en: [
            "Access, rectification, erasure, restriction, objection, data portability, withdraw consent.",
            "Lodge a complaint with the Personal Data Protection Center.",
          ],
          ar: [
            "الوصول، التصحيح، المحو، التقييد، الاعتراض، نقل البيانات، سحب الموافقة.",
            "تقديم شكوى إلى مركز حماية البيانات الشخصية.",
          ],
        },
      },
      {
        id: "dsr",
        heading: {
          en: "Data-subject request portal",
          ar: "بوابة طلبات أصحاب البيانات",
        },
        paragraphs: {
          en: [
            "Submit a request via privacy@snappro.app with proof of identity. We respond within 30 days.",
          ],
          ar: [
            "قدّم طلبك عبر privacy@snappro.app مع إثبات هوية. نردّ خلال 30 يوماً.",
          ],
        },
      },
      {
        id: "dpo",
        heading: {
          en: "DPO & supervisory authority",
          ar: "مسؤول حماية البيانات والجهة الإشرافية",
        },
        paragraphs: {
          en: [
            "DPO contact: privacy@snappro.app. Supervisory authority: Personal Data Protection Center, Ministry of Communications and Information Technology.",
          ],
          ar: [
            "جهة الاتصال: privacy@snappro.app. الجهة المختصة: مركز حماية البيانات الشخصية، وزارة الاتصالات وتكنولوجيا المعلومات.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/legal/privacy",
        label: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
      },
      {
        href: "/legal/business-info",
        label: { en: "Business Information", ar: "معلومات الشركة" },
      },
    ],
  },
  {
    slug: "iraq-consumer",
    tree: "legal",
    status: "draft",
    title: {
      en: "Iraq — Consumer Rights & E-commerce Disclosure",
      ar: "العراق — حقوق المستهلك وإفصاح التجارة الإلكترونية",
    },
    meta: {
      en: "Disclosures for customers in Iraq under Consumer Protection Law No. 1 of 2010 — pricing, cancellation, complaints, and merchant identity.",
      ar: "الإفصاحات للعملاء في العراق وفقاً لقانون حماية المستهلك رقم 1 لسنة 2010 — التسعير، الإلغاء، الشكاوى، وهوية التاجر.",
    },
    h1: {
      en: "Information for Customers in Iraq",
      ar: "معلومات للعملاء في العراق",
    },
    sections: [
      {
        id: "merchant",
        heading: { en: "Merchant identity", ar: "هوية التاجر" },
        paragraphs: {
          en: [
            "Snap Pro, Inc., operating Snap Pro AI photo studio. See our Business Information page for legal entity details.",
          ],
          ar: [
            "سناب برو، إنك.، مشغّل استوديو سناب برو للذكاء الاصطناعي. راجع صفحة معلومات الشركة لتفاصيل الكيان القانوني.",
          ],
        },
      },
      {
        id: "pricing",
        heading: { en: "Total price", ar: "السعر الإجمالي" },
        paragraphs: {
          en: [
            "Prices are displayed in IQD with USD reference rate. Any local taxes that may apply are your responsibility.",
          ],
          ar: [
            "تُعرض الأسعار بالدينار العراقي مع سعر مرجعي بالدولار. أي ضرائب محلية تنطبق تقع على عاتقك.",
          ],
        },
      },
      {
        id: "cancellation",
        heading: { en: "Cancellation rights", ar: "حقوق الإلغاء" },
        paragraphs: {
          en: [
            "You may cancel from your account dashboard. See Refund Policy for full terms.",
          ],
          ar: [
            "يمكنك الإلغاء من لوحة الحساب. راجع سياسة الاسترداد للأحكام الكاملة.",
          ],
        },
      },
      {
        id: "complaints",
        heading: { en: "Complaints", ar: "الشكاوى" },
        paragraphs: {
          en: [
            "Email support@snappro.app. If unresolved within 30 days you may escalate to the Iraqi consumer-protection authorities.",
          ],
          ar: [
            "راسِل support@snappro.app. وإذا لم يتم الحلّ خلال 30 يوماً يمكنك التصعيد إلى السلطات العراقية المعنية بحماية المستهلك.",
          ],
        },
      },
    ],
  },
  {
    slug: "business-info",
    tree: "legal",
    status: "draft",
    title: {
      en: "Business & Registration Information",
      ar: "معلومات الشركة والتسجيل",
    },
    meta: {
      en: "Snap Pro's legal entity, commercial registration number, tax ID, registered address, and electronic invoicing status.",
      ar: "الكيان القانوني لسناب برو، السجل التجاري، الرقم الضريبي، العنوان المسجل، وحالة الفوترة الإلكترونية.",
    },
    h1: {
      en: "Business & Registration Information",
      ar: "معلومات الشركة والتسجيل",
    },
    summary: {
      en: "Required commercial disclosures for Egyptian e-commerce regulations and broader transparency.",
      ar: "إفصاحات تجارية مطلوبة بموجب لوائح التجارة الإلكترونية المصرية وللشفافية بشكل عام.",
    },
    sections: [
      {
        id: "entity",
        heading: { en: "Legal entity", ar: "الكيان القانوني" },
        table: {
          head: { en: ["Field", "Value"], ar: ["الحقل", "القيمة"] },
          rows: [
            {
              en: ["Legal name", "Snap Pro, Inc."],
              ar: ["الاسم القانوني", "سناب برو، إنك."],
            },
            {
              en: ["Commercial Registration", "[CR number — pending counsel]"],
              ar: ["السجل التجاري", "[رقم السجل — قيد إعداد المستشار]"],
            },
            {
              en: ["Tax card", "[tax card number — pending]"],
              ar: ["البطاقة الضريبية", "[رقم البطاقة — قيد الإعداد]"],
            },
            {
              en: ["Registered address", "[address — pending]"],
              ar: ["العنوان المسجل", "[العنوان — قيد الإعداد]"],
            },
            {
              en: ["E-invoicing status", "Active (Egyptian Tax Authority)"],
              ar: ["الفوترة الإلكترونية", "نشطة (مصلحة الضرائب المصرية)"],
            },
          ],
        },
      },
    ],
  },
  {
    slug: "dmca",
    tree: "legal",
    status: "draft",
    title: {
      en: "DMCA / Takedown — Snap Pro",
      ar: "إزالة المحتوى المنتهِك — سناب برو",
    },
    meta: {
      en: "How to report copyright infringement on Snap Pro under the DMCA and analogous laws in Egypt, Iraq, and the EU.",
      ar: "كيفية الإبلاغ عن انتهاك حقوق النشر على سناب برو وفقاً لقانون DMCA الأمريكي والأنظمة المماثلة في مصر والعراق والاتحاد الأوروبي.",
    },
    h1: { en: "DMCA / Takedown", ar: "DMCA / إزالة المحتوى" },
    sections: [
      {
        id: "agent",
        heading: { en: "Designated agent", ar: "الوكيل المعتمد" },
        paragraphs: {
          en: ["Snap Pro Copyright Agent · copyright@snappro.app"],
          ar: ["وكيل حقوق النشر في سناب برو · copyright@snappro.app"],
        },
      },
      {
        id: "what-to-include",
        heading: { en: "What to include", ar: "ما يجب تضمينه في البلاغ" },
        bullets: {
          en: [
            "Identification of the work claimed to be infringed.",
            "Identification of the material on Snap Pro that is allegedly infringing (URL).",
            "Your contact information.",
            "A statement of good-faith belief.",
            "A statement under penalty of perjury.",
            "Your physical or electronic signature.",
          ],
          ar: [
            "تحديد العمل المدّعى انتهاك حقوقه.",
            "تحديد المادة على سناب برو المُدَّعى أنها منتهِكة (الرابط).",
            "بيانات اتصالك.",
            "إقرار بحُسن النيّة.",
            "إقرار تحت طائلة المسؤولية القانونية.",
            "توقيعك المادي أو الإلكتروني.",
          ],
        },
      },
      {
        id: "counter",
        heading: { en: "Counter-notification", ar: "إشعار مضاد" },
        paragraphs: {
          en: [
            "If your content was removed and you believe in good faith that the removal is mistaken, you may submit a counter-notice to copyright@snappro.app.",
          ],
          ar: [
            "إذا أُزيل محتواك وكنت تعتقد بحُسن نيّة أن الإزالة خاطئة، يمكنك تقديم إشعار مضاد إلى copyright@snappro.app.",
          ],
        },
      },
      {
        id: "repeat",
        heading: {
          en: "Repeat-infringer policy",
          ar: "سياسة المخالفين المتكرّرين",
        },
        paragraphs: {
          en: [
            "Accounts subject to repeated valid takedowns may be terminated.",
          ],
          ar: ["قد يتمّ إنهاء الحسابات الخاضعة لطلبات إزالة صحيحة متكرّرة."],
        },
      },
    ],
  },
];

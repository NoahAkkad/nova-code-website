import { Container } from "@/components/Container";

const services = [
  {
    title: "تطوير المنتجات الرقمية",
    description:
      "منصات ويب وتطبيقات سحابية مصممة خصيصًا لتناسب احتياجات عملك وتكبر معك بدون تعقيد.",
    icon: "🚀",
  },
  {
    title: "تصميم واجهات وتجربة مستخدم",
    description:
      "واجهات حديثة بأدق التفاصيل، لتضمن تجربة سلسة ولغة بصرية متناسقة عبر كل القنوات.",
    icon: "🎨",
  },
  {
    title: "تكامل الأنظمة والأتمتة",
    description:
      "نربط الأدوات الحالية ونبني مسارات عمل مؤتمتة لتقليل التكاليف وتسريع عملياتك.",
    icon: "🤖",
  },
  {
    title: "التحليلات وتحسين الأداء",
    description:
      "لوحات بيانات قابلة للتنفيذ واختبارات أداء لتحسين السرعة واستقرار المنتجات الرقمية.",
    icon: "📊",
  },
];

const projects = [
  {
    title: "منصة إدارة سلاسل الإمداد",
    sector: "الشحن واللوجستيات",
    result: "تقليل وقت التسليم بنسبة 32% عبر الأتمتة والذكاء الاصطناعي.",
  },
  {
    title: "تطبيق عضوية رقمي",
    sector: "التجزئة والترفيه",
    result: "زيادة الاحتفاظ بالعملاء 2.4× من خلال تجربة مخصصة وحملات ذكية.",
  },
  {
    title: "لوحة تحكم لمبيعات SaaS",
    sector: "الشركات الناشئة B2B",
    result: "توحيد البيانات من 6 أدوات وتقديم تنبيهات فورية للفرص الساخنة.",
  },
];

const steps = [
  {
    title: "جلسة اكتشاف مركّزة",
    text: "نفهم أهدافك، التحديات، ومؤشرات النجاح لنحدد خارطة طريق عملية.",
  },
  {
    title: "نماذج سريعة وواضحة",
    text: "تصاميم أولية تفاعلية لضمان توافق الرؤية مع فريقك وأصحاب المصلحة.",
  },
  {
    title: "تطوير رشاق",
    text: "سبرنتات أسبوعية، ملاحظات مستمرة، وتسليمات قابلة للإطلاق في كل مرحلة.",
  },
  {
    title: "إطلاق ودعم مستمر",
    text: "نراقب الأداء، نهيئ البنية التحتية، ونقدّم تحسينات متواصلة بعد الإطلاق.",
  },
];

const stats = [
  { label: "مشاريع مكتملة", value: "+120" },
  { label: "معدل رضا العملاء", value: "98%" },
  { label: "بلدان نخدمها", value: "9" },
  { label: "وقت البدء", value: "10 أيام" },
];

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-gray-50">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#c7d2fe,transparent_35%),radial-gradient(circle_at_80%_0%,#e0f2fe,transparent_30%),radial-gradient(circle_at_50%_80%,#ede9fe,transparent_30%)]" />
        <Container className="relative flex flex-col gap-10 py-16 lg:flex-row lg:items-center lg:py-24">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm ring-1 ring-indigo-100">
              شريكك التقني الشامل
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
              حلول برمجية تبني منتجاتك بسرعة، وتُبقي فريقك واثقًا من كل إطلاق.
            </h1>
            <p className="max-w-2xl text-lg text-gray-600">
              في نوفا كود نجمع بين الخبرة التقنية والتصميم المتمحور حول المستخدم
              لنحوّل الأفكار إلى منتجات رقمية جاهزة للنمو، مع تواصل شفاف وجدول زمني واضح.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                احجز استشارة سريعة
              </a>
              <a
                href="#services"
                className="rounded-lg border border-indigo-200 bg-white px-6 py-3 text-indigo-700 transition hover:border-indigo-400 hover:text-indigo-800"
              >
                استعرض خدماتنا
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm shadow-indigo-100 backdrop-blur"
                >
                  <div className="text-3xl font-semibold text-indigo-700">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl bg-white/80 p-8 shadow-2xl shadow-indigo-100 backdrop-blur">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
              <div className="space-y-4">
                <p className="text-sm font-semibold text-indigo-700">لوحة تحكم حية</p>
                <h3 className="text-2xl font-semibold text-gray-900">
                  نماذج أولية سريعة قبل أن نكتب سطر كود واحد.
                </h3>
                <p className="text-gray-600">
                  نشاركك تصاميم تفاعلية وخرائط رحلة المستخدم مبكرًا لتقليل المخاطر،
                  وضمان أن كل خطوة في التطوير تضيف قيمة قابلة للقياس.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="rounded-xl bg-indigo-50 p-4">
                    <p className="font-semibold text-indigo-700">تجربة مسار العميل</p>
                    <p className="mt-2 text-gray-600">سيناريوهات حقيقية، مؤشرات أداء، وتنبيهات فورية.</p>
                  </div>
                  <div className="rounded-xl bg-cyan-50 p-4">
                    <p className="font-semibold text-cyan-700">جاهزية البنية التحتية</p>
                    <p className="mt-2 text-gray-600">تتبُّع نشر فوري، مراقبة صحية، وقابلية توسع تلقائية.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="py-16 lg:py-24">
        <Container className="space-y-12">
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">ما نقدمه</p>
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">خدمات عملية تُنهي الانتظار</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              نعمل كجزء من فريقك لنطلق منتجك بسرعة، مع مسار واضح من الفكرة إلى التشغيل الفعلي.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-white opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
                  {service.icon}
                </div>
                <h3 className="relative mt-4 text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="relative mt-2 text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="projects" className="bg-white py-16 lg:py-24">
        <Container className="space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">أعمال مختارة</p>
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">نتائج ملموسة لفرق سريعة</h2>
              <p className="max-w-2xl text-gray-600">
                نبني حلولًا تقيس النجاح بالأرقام: سرعة الإطلاق، رضا العملاء، وتكاليف التشغيل.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-indigo-200 px-4 py-3 text-sm font-semibold text-indigo-700 transition hover:border-indigo-500"
            >
              ناقش مشروعك القادم
              <span aria-hidden>→</span>
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-indigo-50/40 p-6 shadow-sm"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
                  {project.sector}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{project.result}</p>
                <div className="mt-auto pt-6 text-sm font-semibold text-indigo-700">تسليم خلال 8 أسابيع</div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="process" className="py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">طريقتنا</p>
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">مسار واضح من اليوم الأول</h2>
            <p className="max-w-2xl text-gray-600">
              نبدأ بخطوات صغيرة لكن محسوبة، مع تحديثات أسبوعية ولوحات تقدم شفافة تبقي فريقك مطمئنًا طوال دورة التطوير.
            </p>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-base font-semibold text-indigo-700">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-cyan-500 p-8 text-white shadow-2xl">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">شراكة مستمرة</p>
              <h3 className="text-2xl font-semibold">نصبح فريقك التقني عند الحاجة</h3>
              <p className="text-sm text-white/80">
                دعم ما بعد الإطلاق، مراقبة مؤشرات الأداء، وتجربة A/B دورية لتحسين معدلات التحويل.
              </p>
              <div className="grid gap-3 text-sm">
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
                  <span className="text-lg">📡</span>
                  <div>
                    <div className="font-semibold">تنبيهات مباشرة</div>
                    <p className="text-white/80">نراقب الأداء لحظيًا ونبلغك عند وجود فرص أو أعطال.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
                  <span className="text-lg">🛠️</span>
                  <div>
                    <div className="font-semibold">تحسينات شهرية</div>
                    <p className="text-white/80">خطط صيانة وتحسين أداء تواكب نموك.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
                  <span className="text-lg">🤝</span>
                  <div>
                    <div className="font-semibold">تواصل شفاف</div>
                    <p className="text-white/80">اجتماعات سريعة، تقارير تقدم مختصرة، وقنوات مفتوحة مع الفريق.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="bg-white py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">فلنبدأ</p>
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">موعدك الأول خلال 48 ساعة</h2>
            <p className="max-w-xl text-gray-600">
              أخبرنا عن فكرتك أو منتجك الحالي، وسنرسل خطة عمل وخيارات تسعير مرنة خلال يومين عمل.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-lg text-indigo-600">✓</span>
                <span>تقدير زمني واضح لكل مرحلة تطوير.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-lg text-indigo-600">✓</span>
                <span>فريق متعدد التخصصات: تطوير، تصميم، وضمان جودة.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-lg text-indigo-600">✓</span>
                <span>بوابة تواصل موحدة لتتبع القرارات والمهام.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-inner">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">الاسم الكامل</label>
                <input
                  type="text"
                  placeholder="محمد أحمد"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">وصف مختصر للمشروع</label>
                <textarea
                  rows={4}
                  placeholder="ما التحدي أو الفكرة التي نساعدك في بنائها؟"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <button
                type="button"
                className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                أرسل طلبك
              </button>
              <p className="text-xs text-gray-500">سنعود إليك بجدول زمني وخيارات تعاون خلال يومي عمل.</p>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}

export type Language = "en" | "se";

type TranslationValue = any;

export const translations: Record<Language, Record<string, TranslationValue>> = {
  en: {
    common: {
      skip: "Skip to main content",
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        products: "Products",
        contact: "Contact",
      },
      headerTagline: "Premium software company",
      languageToggle: {
        en: "EN",
        se: "SE",
      },
      quickLinks: "Quick Links",
      legal: "Legal",
      follow: "Follow",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      skipNavLabel: "Toggle navigation",
    },
    home: {
      heroTitle: "We Build Smart Digital Products",
      heroSubtitle: "Software Development | Mobile Apps | Digital Solutions",
      heroDescription:
        "Software development Sweden specialists delivering mobile app development in Göteborg, SaaS platforms, and custom software solutions that keep your business performing fast.",
      exploreWork: "Explore Our Work",
      bookCall: "Book a call",
      highlights: {
        heading: "Highlights",
        foundedLabel: "Founded",
        foundedValue: "2025",
        locationLabel: "Location",
        locationValue: "Gothenburg, Sweden",
        focusLabel: "Focus",
        focusValue: "Digital Products",
        teamLabel: "Team",
        teamValue: "Design & Engineering",
      },
      aboutPreview: {
        badge: "About Preview",
        heading: "Who we are",
        description:
          "Nova Code AB is a Swedish software development company specializing in modern, scalable, and user-centered digital products. We build mobile apps, web applications, SaaS platforms, and custom software solutions with teams based in Göteborg.",
        secondary:
          "Learn more about our story, team, and approach to mobile app development in Göteborg on the dedicated About page.",
        button: "About Nova Code AB",
        serviceCard: "Sharp execution, transparent delivery, and products built for growth.",
        viewAll: "View all services",
      },
      featuredProduct: {
        badge: "Featured Product",
        heading: "Nova Play — Mobile Gaming Application",
        description:
          "Nova Play is our flagship mobile gaming platform designed to deliver fun, interactive, and reward-based experiences for Android users in Sweden and beyond.",
        bullets: [
          "Immersive, high-performance mobile experience.",
          "Reward mechanisms that keep players engaged.",
          "Built with scalable cloud-first infrastructure.",
        ],
        download: "Download on Google Play",
        promiseHeading: "Our promise",
        promiseCopy:
          "We design and engineer every Nova Code AB product to feel premium: minimalistic visuals, precise motion, and resilient technology layers that scale with your audience.",
      },
      reviews: {
        badge: "App Reviews",
        heading: "What Our Users Say",
        description:
          "Users around the world enjoy Nova Play for its fun experience, smooth performance, and rewarding system. Here are some of the latest reviews from our community.",
        cta: "See More Reviews on Google Play",
        list: [
          { text: "Amazing app! Smooth experience and really fun to use.", user: "– Sarah J." },
          {
            text: "Nova Play is definitely one of the best reward apps I’ve tried. Highly recommended!",
            user: "– David M.",
          },
          { text: "Great design, easy to use, and the rewards actually work.", user: "– Lina R." },
          { text: "I love the interface and the performance. Very enjoyable experience!", user: "– Alex P." },
        ],
      },
      servicePreview: ["Mobile App Development", "Web Applications & SaaS", "Custom Software Solutions"],
    },
    about: {
      badge: "About",
      heading: "About Nova Code AB",
      intro:
        "Nova Code AB is a Swedish software development company focused on building high-performance digital products. Founded in 2025, our mission is to deliver innovative, user-focused solutions using modern technologies.",
      location: "Location: Gothenburg, Sweden",
      detail:
        "As a Göteborg tech company, we specialize in mobile app development, SaaS development in Sweden, and custom software solutions that align design, engineering, and product strategy for growing teams.",
      missionHeading: "Mission",
      missionCopy:
        "To craft smart, scalable, and user-centered software that unlocks new growth for businesses and creates meaningful experiences for their customers.",
      visionHeading: "Vision",
      visionCopy:
        "To be recognized as the premium Swedish software company known for modern engineering, precise design, and reliable delivery.",
      valuesHeading: "Values",
      values: ["Innovation", "Quality", "Scalability", "Transparency"],
    },
    services: {
      badge: "Services",
      heading: "Services",
      intro:
        "End-to-end teams that design, build, and support modern digital products with clarity and speed. We lead software development Sweden projects with battle-tested engineering, product strategy, and secure delivery.",
      list: [
        {
          title: "Mobile App Development (Android/iOS)",
          description:
            "We build high-performance mobile applications tailored to your business goals. Our team designs and develops scalable Android and iOS apps with seamless UX, modern architecture, and reliable backend integrations. From concept to launch, we deliver mobile products that are fast, secure, and user-focused.",
        },
        {
          title: "Web Applications & SaaS Platforms",
          description:
            "We create robust, cloud-ready web applications and custom SaaS platforms. Our solutions are designed for scalability, security, and long-term maintainability, ensuring your business can grow without limitations. We handle everything from UI/UX to API development and cloud deployment.",
        },
        {
          title: "Custom Software Development",
          description:
            "We develop fully customized software solutions built around your specific workflows, challenges, and strategic goals. Whether you need internal tools, automation systems, or end-to-end digital platforms, we deliver precise, scalable software designed to improve performance and efficiency.",
        },
        {
          title: "UI/UX Design & Prototyping",
          description:
            "We create clean, intuitive, and user-centered digital experiences. Our design process includes research, wireframing, prototyping, and high-fidelity UI design tailored to your brand. The result: interfaces that look great, feel natural, and improve user engagement.",
        },
        {
          title: "Backend Development & API Systems",
          description:
            "We build secure, efficient backend systems and scalable APIs to power your applications. Our team specializes in Node.js, .NET, cloud-native architecture, microservices, and database optimization. We ensure your backend is fast, stable, and ready for high-traffic workloads.",
        },
        {
          title: "Cloud Solutions (AWS, Azure)",
          description:
            "We deliver cloud solutions that enhance reliability, reduce costs, and scale with demand. Our services include cloud migration, DevOps automation, CI/CD pipelines, serverless functions, and infrastructure setup on AWS or Azure. We help you achieve high availability and performance with modern cloud architecture.",
        },
      ],
      planHeading: "Plan your next release with us",
      planCopy:
        "Whether you need an app development company to ship a new Android build or a partner to modernize SaaS infrastructure, Nova Code AB aligns to your roadmap and keeps every stakeholder informed.",
      planCta: "Talk to our team",
    },
    products: {
      badge: "Products",
      heading: "Nova Play — Mobile Gaming Application",
      intro:
        "Nova Play is our flagship mobile gaming platform designed to deliver fun, interactive, and reward-based experiences.",
      detail:
        "Built by our app development company in Sweden, Nova Play combines mobile gaming, SaaS-backed infrastructure, and custom software solutions to ensure reliable performance at scale.",
      download: "Download on Google Play",
      featuresHeading: "Features",
      features: [
        "Reward-based gameplay loops",
        "Real-time performance tuned for mobile",
        "Secure user profiles and progress sync",
        "Cloud-native infrastructure for scale",
      ],
      technologyHeading: "Technology",
      technology: ["React Native", "TypeScript", "Node.js APIs", "Cloud services on AWS/Azure"],
      hearHeading: "Hear from our users",
      hearCopy: "Explore the latest community feedback and see why players love Nova Play.",
      hearCta: "View App Reviews",
    },
    contact: {
      badge: "Contact",
      heading: "Get in touch",
      intro: "Tell us about your next product or feature. We reply to every message within two business days.",
      detailsHeading: "Contact details",
      nameLabel: "Company Name: {{name}}",
      locationLabel: "Location: {{city}}, {{region}}, {{country}}",
      phoneLabel: "Phone:",
      emailLabel: "Email:",
      detailsCopy:
        "Our Göteborg tech company helps businesses across Sweden with mobile app development, SaaS development, and custom software solutions tailored to their market.",
    },
    contactForm: {
      hiddenSubject: "New message from Nova Code website",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      nameError: "Name is required.",
      emailLabel: "Email",
      emailPlaceholder: "Your email",
      emailErrorRequired: "Email is required.",
      emailErrorInvalid: "Enter a valid email address.",
      subjectLabel: "Subject",
      subjectPlaceholder: "Project subject",
      subjectError: "Subject is required.",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your goals",
      messageError: "Message cannot be empty.",
      submit: "Submit",
      success: "Thanks for reaching out! We will respond within two business days.",
      error: "Something went wrong. Please try again.",
    },
    footer: {
      description:
        "Swedish software development company delivering premium, modern, and scalable digital products for ambitious teams.",
      address:
        "Location: Grevegårdsvägen 152, 421 61 Västra Frölunda, Göteborg, Sweden · Phone: +46 736 156 631 · Email: info@novacode.se",
      copyright: "© 2025 Nova Code AB. All rights reserved.",
    },
  },
  se: {
    common: {
      skip: "Hoppa till huvudinnehåll",
      nav: {
        home: "Hem",
        about: "Om oss",
        services: "Tjänster",
        products: "Produkter",
        contact: "Kontakt",
      },
      headerTagline: "Premium mjukvarubolag",
      languageToggle: {
        en: "EN",
        se: "SE",
      },
      quickLinks: "Snabblänkar",
      legal: "Juridik",
      follow: "Följ oss",
      privacy: "Integritetspolicy",
      terms: "Användarvillkor",
      skipNavLabel: "Öppna meny",
    },
    home: {
      heroTitle: "Vi bygger smarta digitala produkter",
      heroSubtitle: "Mjukvaruutveckling | Mobilappar | Digitala lösningar",
      heroDescription:
        "Specialister på mjukvaruutveckling i Sverige som levererar apputveckling i Göteborg, SaaS-plattformar och skräddarsydda mjukvarulösningar som håller ditt företag snabbt och effektivt.",
      exploreWork: "Utforska vårt arbete",
      bookCall: "Boka ett samtal",
      highlights: {
        heading: "Höjdpunkter",
        foundedLabel: "Grundat",
        foundedValue: "2025",
        locationLabel: "Plats",
        locationValue: "Göteborg, Sverige",
        focusLabel: "Fokus",
        focusValue: "Digitala produkter",
        teamLabel: "Team",
        teamValue: "Design & engineering",
      },
      aboutPreview: {
        badge: "Om oss i korthet",
        heading: "Vem vi är",
        description:
          "Nova Code AB är ett svenskt mjukvarubolag som fokuserar på moderna, skalbara och användarcentrerade digitala produkter. Vi bygger mobilappar, webbapplikationer, SaaS-plattformar och skräddarsydd programvara med team baserade i Göteborg.",
        secondary:
          "Läs mer om vår historia, vårt team och vårt arbetssätt för apputveckling i Göteborg på sidan Om oss.",
        button: "Om Nova Code AB",
        serviceCard: "Skarp leverans, transparent samarbete och produkter byggda för tillväxt.",
        viewAll: "Visa alla tjänster",
      },
      featuredProduct: {
        badge: "Utvalt produkt",
        heading: "Nova Play — Mobil spelapplikation",
        description:
          "Nova Play är vår flaggskeppsplattform som levererar roliga, interaktiva och belöningsbaserade upplevelser för Android-användare i Sverige och internationellt.",
        bullets: [
          "Uppslukande, högpresterande mobilupplevelse.",
          "Belöningsmekanismer som håller spelare engagerade.",
          "Byggd med skalbar, molnförst infrastruktur.",
        ],
        download: "Ladda ned på Google Play",
        promiseHeading: "Vårt löfte",
        promiseCopy:
          "Vi designar och utvecklar varje Nova Code AB-produkt för att kännas premium: minimalistiska visuella uttryck, precisa rörelser och robust teknik som skalar med din publik.",
      },
      reviews: {
        badge: "Apprecensioner",
        heading: "Det här säger våra användare",
        description:
          "Användare världen över uppskattar Nova Play för den roliga upplevelsen, mjuka prestandan och belöningssystemet. Här är några av de senaste recensionerna från vår community.",
        cta: "Se fler recensioner på Google Play",
        list: [
          { text: "Fantastisk app! Smidig upplevelse och verkligen rolig att använda.", user: "– Sarah J." },
          {
            text: "Nova Play är definitivt en av de bästa belöningsapparna jag har testat. Rekommenderas varmt!",
            user: "– David M.",
          },
          { text: "Snygg design, enkel att använda och belöningarna fungerar verkligen.", user: "– Lina R." },
          { text: "Jag älskar gränssnittet och prestandan. En väldigt bra upplevelse!", user: "– Alex P." },
        ],
      },
      servicePreview: ["Apputveckling", "Webbapplikationer & SaaS", "Skräddarsydd programvara"],
    },
    about: {
      badge: "Om oss",
      heading: "Om Nova Code AB",
      intro:
        "Nova Code AB är ett svenskt mjukvarubolag med fokus på högpresterande digitala produkter. Grundat 2025 med målet att leverera innovativa, användarfokuserade lösningar med modern teknik.",
      location: "Plats: Göteborg, Sverige",
      detail:
        "Som ett göteborgskt techbolag specialiserar vi oss på apputveckling, SaaS-utveckling i Sverige och skräddarsydd programvara som förenar design, ingenjörskap och produktstrategi för växande team.",
      missionHeading: "Mission",
      missionCopy:
        "Att skapa smart, skalbar och användarcentrerad mjukvara som låser upp ny tillväxt för företag och ger meningsfulla upplevelser för deras kunder.",
      visionHeading: "Vision",
      visionCopy:
        "Att bli erkända som det främsta svenska mjukvarubolaget känt för modern ingenjörskonst, exakt design och pålitlig leverans.",
      valuesHeading: "Värderingar",
      values: ["Innovation", "Kvalitet", "Skalbarhet", "Transparens"],
    },
    services: {
      badge: "Tjänster",
      heading: "Tjänster",
      intro:
        "Helhetsteam som designar, bygger och stöttar moderna digitala produkter med tydlighet och tempo. Vi leder mjukvaruprojekt i Sverige med beprövad ingenjörskonst, produktstrategi och säker leverans.",
      list: [
        {
          title: "Apputveckling (Android/iOS)",
          description:
            "Vi bygger högpresterande mobilappar anpassade efter dina affärsmål. Teamet designar och utvecklar skalbara Android- och iOS-appar med sömlös UX, modern arkitektur och tillförlitliga backend-integrationer. Från idé till lansering levererar vi snabba, säkra och användarfokuserade produkter.",
        },
        {
          title: "Webbapplikationer & SaaS-plattformar",
          description:
            "Vi skapar robusta, molnklara webbapplikationer och skräddarsydda SaaS-plattformar. Lösningarna är byggda för skalbarhet, säkerhet och långsiktig förvaltning så att ditt företag kan växa utan begränsningar. Vi hanterar allt från UX/UI till API-utveckling och molndrift.",
        },
        {
          title: "Skräddarsydd mjukvaruutveckling",
          description:
            "Vi utvecklar helt anpassade mjukvarulösningar efter dina arbetsflöden, utmaningar och strategiska mål. Oavsett om du behöver interna verktyg, automationssystem eller kompletta digitala plattformar levererar vi exakt och skalbar mjukvara som förbättrar prestanda och effektivitet.",
        },
        {
          title: "UI/UX-design & prototyper",
          description:
            "Vi tar fram rena, intuitiva och användarcentrerade upplevelser. Vår designprocess omfattar research, wireframes, prototyper och pixelperfekt UI anpassat till ditt varumärke. Resultatet är gränssnitt som ser bra ut, känns naturliga och ökar engagemanget.",
        },
        {
          title: "Backendutveckling & API-system",
          description:
            "Vi bygger säkra, effektiva backend-system och skalbara API:er som driver dina applikationer. Teamet är specialiserat på Node.js, .NET, molnnativ arkitektur, mikrotjänster och databasanpassning. Vi ser till att backend är snabbt, stabilt och redo för hög trafik.",
        },
        {
          title: "Molnlösningar (AWS, Azure)",
          description:
            "Vi levererar molnlösningar som ökar driftsäkerhet, minskar kostnader och skalar med efterfrågan. Våra tjänster inkluderar molnmigrering, DevOps-automation, CI/CD, serverless-funktioner och infrastruktur på AWS eller Azure. Vi hjälper dig att nå hög tillgänglighet och prestanda med modern molnarkitektur.",
        },
      ],
      planHeading: "Planera din nästa release med oss",
      planCopy:
        "Oavsett om du behöver ett appteam som skickar en ny Android-release eller en partner som moderniserar SaaS-infrastruktur anpassar sig Nova Code AB till din roadmap och håller alla intressenter uppdaterade.",
      planCta: "Prata med vårt team",
    },
    products: {
      badge: "Produkter",
      heading: "Nova Play — Mobil spelapplikation",
      intro:
        "Nova Play är vår flaggskeppsplattform som levererar roliga, interaktiva och belöningsbaserade upplevelser.",
      detail:
        "Byggd av vårt appteam i Sverige kombinerar Nova Play mobilspel, SaaS-stödd infrastruktur och skräddarsydd programvara för tillförlitlig prestanda i skala.",
      download: "Ladda ned på Google Play",
      featuresHeading: "Funktioner",
      features: [
        "Belöningsbaserade spellopp",
        "Realtidsoptimerad prestanda för mobil",
        "Säkra användarprofiler och synkad progress",
        "Molnnativ infrastruktur för skala",
      ],
      technologyHeading: "Teknik",
      technology: ["React Native", "TypeScript", "Node.js API:er", "Molntjänster på AWS/Azure"],
      hearHeading: "Lyssna på våra användare",
      hearCopy: "Utforska den senaste feedbacken och se varför spelare gillar Nova Play.",
      hearCta: "Visa apprecensioner",
    },
    contact: {
      badge: "Kontakt",
      heading: "Hör av dig",
      intro: "Berätta om nästa produkt eller funktion. Vi svarar på varje meddelande inom två arbetsdagar.",
      detailsHeading: "Kontaktuppgifter",
      nameLabel: "Företagsnamn: {{name}}",
      locationLabel: "Plats: {{city}}, {{region}}, {{country}}",
      phoneLabel: "Telefon:",
      emailLabel: "E-post:",
      detailsCopy:
        "Vårt techbolag i Göteborg hjälper företag i hela Sverige med apputveckling, SaaS-utveckling och skräddarsydd programvara anpassad efter deras marknad.",
    },
    contactForm: {
      hiddenSubject: "Nytt meddelande från Nova Code-webbplatsen",
      nameLabel: "Namn",
      namePlaceholder: "Ditt namn",
      nameError: "Namn är obligatoriskt.",
      emailLabel: "E-post",
      emailPlaceholder: "Din e-post",
      emailErrorRequired: "E-post är obligatoriskt.",
      emailErrorInvalid: "Ange en giltig e-postadress.",
      subjectLabel: "Ämne",
      subjectPlaceholder: "Projektämne",
      subjectError: "Ämne är obligatoriskt.",
      messageLabel: "Meddelande",
      messagePlaceholder: "Berätta om dina mål",
      messageError: "Meddelandet kan inte vara tomt.",
      submit: "Skicka",
      success: "Tack för ditt meddelande! Vi återkommer inom två arbetsdagar.",
      error: "Något gick fel. Försök igen.",
    },
    footer: {
      description:
        "Svenskt mjukvarubolag som levererar premium, moderna och skalbara digitala produkter för ambitiösa team.",
      address:
        "Plats: Grevegårdsvägen 152, 421 61 Västra Frölunda, Göteborg, Sweden · Telefon: +46 736 156 631 · E-post: info@novacode.se",
      copyright: "© 2025 Nova Code AB. Alla rättigheter förbehållna.",
    },
  },
};

export function t(language: Language, key: string): any {
  const parts = key.split(".");
  let value: TranslationValue | undefined = translations[language];

  for (const part of parts) {
    if (value && typeof value === "object" && part in value) {
      value = (value as Record<string, TranslationValue>)[part];
    } else {
      return key;
    }
  }

  return value ?? key;
}

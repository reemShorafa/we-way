import {
  Brain,
  Camera,
  Compass,
  FileText,
  MapPin,
  MessageCircle,
  Route,
  ShieldCheck,
  Wallet,
  Users,
} from "lucide-react";

import saudiTrip from "../img/trips/saudi-trip.png";
import turkeyTrip from "../img/trips/turkey-trip.jfif";
import dubaiTrip from "../img/trips/dubai-trip.jfif";

export const images = {
  hero: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  north:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
  istanbul:
    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
  sea: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
  dubai:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
};

export const copy = {
  ar: {
    nav: ["الرئيسية", "المميزات", "كيف نعمل", "رحلاتنا", "آراء عملائنا "],
    dl: "حمل التطبيق",
    tag: "انطلقوا معاً واجعلوا كل طريق ذكرى لا تُنسى",
    hero: "رحلتكم على الخريطة، مصروفاتكم في المحفظة، كل لحظة موثقة مع WeWay",
    desc: "تطبيق 'weway' يجمع الأصدقاء في وجهة واحدة؛ تتبع مباشر للجميع على الخريطة، محفظة جماعية لتسجيل وتوزيع المصاريف بدقة، شات جماعي لأعضاء الرحلة، وبرنامج مقترح لرحلتك، وكل تفاصيل الرحلة بين يديك لتستمتع بالمغامرة بلا قلق.",
    motto: "انطلقوا معاً واجعلوا كل طريق ذكرى لا تُنسى.",
    work: "كيف يعمل WeWay؟",
    features: "كل ما تحتاجه لرحلة جماعية لا تُنسى",
    fsub: "نظموا وجهاتكم، وابقوا على اتصال ومسار واحد مع أصدقائكم لحظة بلحظة.",
    how: "خطوات بسيطة لتنظيم رحلتك الجماعية",
    hsub: "من اختيار الوجهة وحتى ساعة الصفر؛ دليلك المختصر لترتيب أجمل رحلة مع أصدقائك.",
    mem: "لحظات موثقة.. وذكريات تدوم للأبد",
    msub: "لا تترك ذكريات رحلتك تضيع؛ وثّق كل ضحكة، كل مسار، وكل مغامرة مع شلتك في مكان واحد.",
    trips: "رحلات استلهم منها مغامرتك القادمة",
    tsub: "تصفح أحدث الرحلات التي نظمها المستخدمون عبر WeWay.",
    test: "ماذا يقول عنا المستخدمون؟",
    tesub: "تجارب حقيقية لأصدقاء جعلوا رحلاتهم أسهل وأكثر تنظيماً مع WeWay.",
    cta: "جاهز لرحلتك القادمة؟",
    ctas: "اجمع أصدقاءك، خطط رحلتك، ودع WeWay يرتب التفاصيل.",
    view: "عرض التفاصيل",
    footer:
      "WeWay يجمع الأصدقاء في وجهة واحدة وينظم الرحلة من أول خطوة حتى آخر ذكرى.",
  },
  en: {
    nav: ["Home", "Features", "How it works", "Trips", "Testimonials"],
    dl: "Download app",
    tag: "Plan together, remember forever",
    hero: "Your journey on the map, your expenses in one wallet, every moment documented with WeWay",
    desc: "WeWay brings friends together in one destination with live tracking, shared expenses, group chat, and a smart plan that lets you enjoy the adventure without stress.",
    motto: "Travel together and turn every road into an unforgettable memory.",
    work: "How does WeWay work?",
    features: "Everything you need for an unforgettable group trip",
    fsub: "Plan your destinations, stay connected, and keep everyone on the same path.",
    how: "Simple steps to organize your group trip",
    hsub: "From choosing your destination to departure day, here's your simple guide to planning the perfect trip with friends.",
    mem: "Documented moments. Memories that last forever.",
    msub: "Don't let your travel memories disappear. Capture every laugh, every route, and every adventure with friends in one shared place.",
    trips: "Trips to inspire your next adventure",
    tsub: "Explore the latest trips organized by WeWay users.",
    test: "What do our users say?",
    tesub:
      "Real experiences from friends who made their trips easier and more organized with WeWay.",
    cta: "Ready for your next adventure?",
    ctas: "Bring your friends together, plan your trip, and let WeWay handle the details.",
    view: "Explore trip",
    footer:
      "WeWay brings friends together in one destination and organizes the journey from the first step to the final memory.",
  },
};

export const navTargets = ["home", "features", "how", "trips", "testimonials"];

export const features = [
  {
    Icon: Route,
    arTitle: "التتبع المباشر على الخريطة",
    arText:
      "كن على اتصال دائم مع أصدقائك وتعرف على مواقعهم لحظة بلحظة مع رسم مسار مباشر للوصول إليهم بكل سهولة.",
    enTitle: "Live Map Tracking",
  },
  {
    Icon: Brain,
    arTitle: "خطط الرحلات الذكية والمقترحة",
    arText:
      "حدد وجهتك ودع التطبيق يقترح عليك جدول زيارات متكامل لأبرز الأماكن، مع عرض مواقعها على الخريطة وتفاصيلها الشاملة.",
    enTitle: "Smart Trip Plans",
  },
  {
    Icon: MessageCircle,
    arTitle: "دردشة جماعية خاصة بالرحلة",
    arText:
      "مساحة تواصل فورية تجمع أفراد الرحلة لتنسيق الخطوات، تبادل التحديثات، ومشاركة اللحظات أولاً بأول.",
    enTitle: "Trip Group Chat",
  },
  {
    Icon: ShieldCheck,
    arTitle: "المحفظة الجماعية وإدارة الصلاحيات",
    arText:
      "نظام مالي منظم يتيح تعيين مسؤول للمحفظة للتحكم بالميزانية ومتابعة الأمور المالية بسلاسة.",
    enTitle: "Shared Wallet",
  },
  {
    Icon: Wallet,
    arTitle: "إدارة المصاريف وتسوية الحسابات",
    arText:
      "تسجيل دقيق لجميع المصروفات بعملة الوجهة، مع حساب آلي يوضح حصة كل فرد وما دفعه بدقة تامة.",
    enTitle: "Expense Management",
  },
  {
    Icon: FileText,
    arTitle: "تقرير شامل للرحلة",
    arText:
      "توثيق متكامل لكافة تفاصيل المحطة والرحلة في تقرير نهائي يجمع إحصائيات وأحداث مغامرتكم.",
    enTitle: "Trip Report",
  },
  {
    Icon: Camera,
    arTitle: "سجل الذكريات",
    arText:
      "مساحة مخصصة لرفع وحفظ صور ومقاطع فيديو الرحلة لتخليد أجمل اللحظات في سجل ذكريات مشترك.",
    enTitle: "Shared Memories",
  },
  {
    Icon: Compass,
    arTitle: "استكشاف الأماكن على طول المسار",
    arText:
      "اقتراح ذكي لأبرز المعالم الأثرية، السياحية، التعليمية، والرياضية القريبة من مسارك على الخريطة مع توجيه مباشر للوصول إليها.",
    enTitle: "Discover Places",
  },
];

export const steps = [
  {
    Icon: MapPin,
    arTitle: "سمّ رحلتك وجهّز تفاصيل الانطلاق",
    arText:
      "امنح مغامرتك اسماً وصورة تعكس روح الشلة، حدد بدقة مكان التجمع ونقطة اللقاء، وجهّز قائمة مستلزماتك لتنطلقوا بكل جاهزية وترتيب.",
    enTitle: "Name your trip and get ready",
  },
  {
    Icon: Compass,
    arTitle: "حدد وجهتك وجدولك الزمني",
    arText:
      "حدد مكان وجهتكم بدقة، وادخل تاريخ بدء الوصول وتاريخ المغادرة لتنظيم وقت الرحلة بكل دقة.",
    enTitle: "Set your destination and schedule",
  },
  {
    Icon: Users,
    arTitle: "اجمع أصدقائك وشاركهم المغامرة",
    arText:
      "أرسل دعواتك للأصدقاء بنقرة واحدة، واجمع فريق الرحلة في مكان واحد لتكونوا على استعداد تام للانطلاق معاً.",
    enTitle: "Invite friends into the adventure",
  },
  {
    Icon: Wallet,
    arTitle: "أضف مصروفات ما قبل الانطلاق",
    arText:
      "سجل التكاليف والمشتريات الأولية بعملة وجهتكم بدقة قبل بدء الرحلة لتبدأوا حساباتكم بشكل منظم وواضح.",
    enTitle: "Add pre-trip expenses",
  },
  {
    Icon: Brain,
    arTitle: "جدول ذكي بالذكاء الاصطناعي لوجهتكم",
    arText:
      "دع الذكاء الاصطناعي يصمم لك خطة زيارات متكاملة ومخصصة خصيصاً لأفضل الأماكن والأنشطة داخل وجهتكم بكل سهولة.",
    enTitle: "An AI-made itinerary",
  },
];

export const trips = [
  [
    "مغامرة الشمال",
    "Northern Adventure",
    "عسير، السعودية",
    "Asir, Saudi Arabia",
    saudiTrip,
  ],
  [
    "هروب إسطنبول",
    "Istanbul Escape",
    "إسطنبول، تركيا",
    "Istanbul, Turkey",
    turkeyTrip,
  ],
  [
    "رحلة البحر الأحمر",
    "Red Sea Journey",
    "جدة، السعودية",
    "Jeddah, Saudi Arabia",
    images.sea,
  ],
  [
    "ويكند في دبي",
    "Dubai Weekend",
    "دبي، الإمارات",
    "Dubai, UAE",
    dubaiTrip,
  ],
];

export const reviews = {
  ar: [
    [
      "نورة خالد",
      "رحلتنا إلى إسطنبول صارت أوضح وأسهل. كل شيء كان في مكان واحد.",
      "إسطنبول",
    ],
    [
      "عبدالله صالح",
      "المحفظة الجماعية ممتازة، انتهت حسابات آخر الرحلة المحرجة.",
      "العلا",
    ],
    ["لينا عمر", "الخريطة جعلتنا قريبين من بعض طوال الرحلة.", "جدة"],
  ],
  en: [
    [
      "Nora Khalid",
      "Our Istanbul trip became clearer and lighter. Everything in one place.",
      "Istanbul",
    ],
    [
      "Abdullah Saleh",
      "The shared wallet is brilliant. No more awkward math.",
      "AlUla",
    ],
    [
      "Lina Omar",
      "The map made us feel close to one another all trip long.",
      "Jeddah",
    ],
  ],
};

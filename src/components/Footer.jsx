import { useState } from "react";
import {
  Apple,
  ChevronDown,
  Heart,
  Layers,
  Link,
  Mail,
  MapPin,
  Phone,
  Play,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import logo from "../img/logo.png";
import { navTargets } from "../data/siteData";

export default function Footer({ ar, t, go }) {
  const services = ar
    ? [
        "تتبع مباشر",
        "المحفظة المشتركة",
        "الدردشة الجماعية",
        "البرنامج المقترح",
        "تقارير الرحلات",
      ]
    : [
        "Live tracking",
        "Shared wallet",
        "Group chat",
        "Suggested itinerary",
        "Trip reports",
      ];

  const quickLinks = [
    ...t.nav.map((label, index) => ({
      label,
      target: navTargets[index],
    })),
    {
      label: ar ? "الأسئلة الشائعة" : "FAQ",
      target: "features",
    },
    {
      label: ar ? "سياسة الخصوصية" : "Privacy Policy",
      target: "home",
    },
    {
      label: ar ? "الشروط والأحكام" : "Terms of Use",
      target: "home",
    },
  ];

  const socialLinks = [
    {
      label: "YouTube",
      icon: SocialYoutube,
    },
    {
      label: "X",
      icon: SocialX,
    },
    {
      label: "Instagram",
      icon: SocialInstagram,
    },
    {
      label: "TikTok",
      icon: SocialTikTok,
    },
    {
      label: "Facebook",
      icon: SocialFacebook,
    },
    {
      label: "LinkedIn",
      icon: SocialLinkedin,
    },
  ];

  const payments = [
    {
      name: "VISA",
      className: "visa",
    },
    {
      name: "mastercard",
      className: "mastercard",
    },
    {
      name: "Apple Pay",
      className: "apple-pay",
    },
    {
      name: "stc pay",
      className: "stc-pay",
    },
    {
      name: "mada",
      className: "mada",
    },
    {
      name: "PayPal",
      className: "paypal",
    },
    {
      name: "Meeza",
      className: "meeza",
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <section className="footer-brand">
          <img className="footer-logo" src={logo} alt="WeWay" />

          <p>{t.footer}</p>

          <div
            className="footer-social"
            aria-label={ar ? "روابط التواصل" : "Social links"}
          >
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <button type="button" key={item.label} aria-label={item.label}>
                  <Icon />
                </button>
              );
            })}
          </div>
        </section>

        <FooterColumn
          title={ar ? "الخدمات" : "Services"}
          className="footer-services"
          icon={Layers}
        >
          {services.map((item) => (
            <button type="button" key={item}>
              {item}
            </button>
          ))}
        </FooterColumn>

        <FooterColumn
          title={ar ? "روابط سريعة" : "Quick Links"}
          className="footer-links"
          icon={Link}
        >
          {quickLinks.slice(0, t.nav.length).map((item) => (
            <button
              type="button"
              key={item.label}
              onClick={() => go(item.target || "home")}
            >
              {item.label}
            </button>
          ))}
        </FooterColumn>

        <FooterColumn
          title={ar ? "حمّل التطبيق" : "Download App"}
          className="footer-download"
          icon={Smartphone}
          collapsible={false}
        >
          <p>
            {ar
              ? "استعد لمغامرتك القادمة وحمّل تطبيق WeWay الآن."
              : "Get ready for your next adventure and download WeWay now."}
          </p>

          <button type="button" className="footer-store">
            <Apple size={26} />

            <span>{ar ? "حمّله على" : "Download on the"}</span>

            <b>App Store</b>
          </button>

          <button type="button" className="footer-store">
            <Play size={25} />

            <span>{ar ? "احصل عليه من" : "Get it on"}</span>

            <b>Google Play</b>
          </button>
        </FooterColumn>

        <FooterColumn
          title={ar ? "تواصل معنا" : "Contact Us"}
          className="footer-contact"
          icon={Mail}
        >
          <a href="mailto:info@weway.sa.com">
            <Mail size={20} />
            info@weway.sa.com
          </a>

          <a href="tel:+972598113864">
            <Phone size={20} />
            +972598113864
          </a>

          <span>
            <MapPin size={20} />
            المملكة العربية السعودية - الرياض - حي الحمراء
          </span>
        </FooterColumn>
      </div>

      <div className="footer-divider" />

      <div className="footer-middle">
        <div className="footer-payments">
          <h3>{ar ? "طرق الدفع المتوفرة" : "Available Payments"}</h3>

          <div className="payment-logos">
            {payments.map((item) => (
              <span
                className={`payment-badge ${item.className}`}
                key={item.name}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>

        <div className="footer-safe">
          <ShieldCheck size={52} />

          <div>
            <b>{ar ? "رحلات آمنة وموثوقة" : "Safe And Trusted Trips"}</b>

            <span>
              {ar
                ? "بياناتك محمية معنا دائماً."
                : "Your data is always protected with us."}
            </span>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <small>
          © 2026 WeWay. {ar ? "جميع الحقوق محفوظة." : "All rights reserved."}
        </small>

        <span>
          {ar ? "معاً نحو مغامرات أجمل" : "Together toward better adventures"}

          <Heart size={18} />
        </span>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  className = "",
  icon: Icon,
  children,
  collapsible = true,
}) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    if (collapsible) {
      setOpen((previous) => !previous);
    }
  };

  const handleKeyDown = (event) => {
    if (!collapsible) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <section className={`footer-column ${className} ${open ? "open" : ""}`}>
      <h3
        onClick={toggle}
        onKeyDown={handleKeyDown}
        role={collapsible ? "button" : undefined}
        tabIndex={collapsible ? 0 : undefined}
        aria-expanded={collapsible ? open : undefined}
      >
        {Icon && <Icon className="footer-mobile-title-icon" size={28} />}

        <span>{title}</span>

        {collapsible && (
          <ChevronDown className="footer-mobile-chevron" size={26} />
        )}
      </h3>

      <div className="footer-column-content">{children}</div>
    </section>
  );
}

function SocialYoutube() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.6 7.2c-.2-1-1-1.8-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4c-1 .2-1.8 1-2 2C2 9 2 12 2 12s0 3 .4 4.8c.2 1 1 1.8 2 2 1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4c1-.2 1.8-1 2-2C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.4V8.6l5.8 3.4L10 15.4Z" />
    </svg>
  );
}

function SocialX() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m14.1 10.6 7-8.1h-1.7l-6.1 7.1-4.9-7.1H2.8l7.4 10.8-7.4 8.6h1.7l6.5-7.6 5.2 7.6h5.6l-7.7-11.3Zm-2.3 2.7-.8-1.1L5.1 3.8h2.5l4.8 6.9.8 1.1 6.2 8.9h-2.5l-5.1-7.4Z" />
    </svg>
  );
}

function SocialInstagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 2a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm5-2.55a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
    </svg>
  );
}

function SocialTikTok() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15.8 2c.4 3 2.1 4.8 5.2 5v3.4a8.4 8.4 0 0 1-5-1.5v6.9c0 3.5-2.4 6.2-6 6.2a5.8 5.8 0 0 1-6-5.7c0-3.5 2.7-5.9 6.7-5.6V14c-1.8-.2-3 .7-3 2.2 0 1.3 1 2.2 2.3 2.2 1.5 0 2.3-1 2.3-2.7V2h3.5Z" />
    </svg>
  );
}

function SocialFacebook() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.2 22v-8h2.7l.4-3.1h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H8V14h2.8v8h3.4Z" />
    </svg>
  );
}

function SocialLinkedin() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.8 8.9H3.5V21h3.3V8.9ZM5.2 3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8Zm15.3 11.1c0-3.3-1.8-5.4-4.6-5.4-2.1 0-3 1.2-3.5 2V8.9H9.1V21h3.3v-6.7c0-1.8.9-2.7 2.3-2.7 1.3 0 2.4.8 2.4 2.7V21h3.4v-6.9Z" />
    </svg>
  );
}

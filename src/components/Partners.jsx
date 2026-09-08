import tourismMinistry from '../img/partners/tourism-ministry.jpeg';
import commerceMinistry from '../img/partners/commerce-ministry.jpeg';
import tourismAuthority from '../img/partners/tourism-authority.jpeg';
import cst from '../img/partners/cst.jpeg';

const partners = [
  {
    image: tourismMinistry,
    ar: 'وزارة السياحة',
    en: 'Ministry of Tourism',
    registration: 'TO-2026-0148'
  },
  {
    image: commerceMinistry,
    ar: 'وزارة التجارة',
    en: 'Ministry of Commerce',
    registration: 'MC-2026-0712'
  },
  {
    image: tourismAuthority,
    ar: 'الهيئة السعودية للسياحة',
    en: 'Saudi Tourism Authority',
    registration: 'STA-2026-0320'
  },
  {
    image: cst,
    ar: 'هيئة الاتصالات والفضاء والتقنية',
    en: 'Communications, Space & Technology Commission',
    registration: 'CST-2026-1850'
  }
];

export default function Partners({ ar }) {
  return (
    <section className="partners" aria-labelledby="partners-title">
      <div className="partners-inner">
        <span className="partners-tag">{ar ? 'شراكات موثوقة' : 'Trusted partnerships'}</span>
        <h2 id="partners-title">{ar ? 'شركاؤنا في الرحلة' : 'Our trusted partners'}</h2>
        <p>
          {ar
            ? 'نعمل مع جهات رائدة لتقديم تجربة سفر أكثر ثقة وتنظيماً.'
            : 'We work with leading organizations to deliver a more trusted, organized travel experience.'}
        </p>

        <div className="partners-grid">
          {partners.map(partner => (
            <article className="partner-card" key={partner.en}>
              <div className="partner-logo">
                <img src={partner.image} alt={ar ? partner.ar : partner.en} loading="lazy" />
              </div>
              <div className="partner-meta">
                <h3>{ar ? partner.ar : partner.en}</h3>
                <span>{ar ? `رقم التسجيل: ${partner.registration}` : `Registration: ${partner.registration}`}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

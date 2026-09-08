import { Download } from 'lucide-react';
import GlobeTripMap from './RealGlobeMap';

const stripPunctuation = value => value.replace(/[\u060C\u061B,;:.!?\u061F'"“”]/g, '');

function HeroTitle({ value }) {
  return value.split(/([,\u060C])/).map((part, index) => (
    part === ',' || part === '\u060C'
      ? <span className="hero-comma" key={`${part}-${index}`}>{part}</span>
      : part
  ));
}

export default function Hero({ t, go }) {
  return (
    <section className="hero section" id="home">
      <div>
        <span className="eyebrow">{stripPunctuation(t.tag)}</span>
        <h1><HeroTitle value={t.hero} /></h1>
        <p>{stripPunctuation(t.desc)}</p>
        <div className="buttons">
          <button className="button" onClick={() => go('download')}>
            <Download size={18} aria-hidden="true" />
            <span>{t.dl}</span>
          </button>
        </div>
      </div>

      <GlobeTripMap />
    </section>
  );
}

import { CirclePlay, Download } from 'lucide-react';
import TripMap from './TripMap';

export default function Hero({ ar, t, go }) {
  return (
    <section className="hero section" id="home">
      <div>
        <span className="eyebrow">{t.tag}</span>
        <h1>{t.hero}</h1>
        <p>{t.desc}</p>
        <p className="motto">{t.motto}</p>
        <div className="buttons">
          <button className="button" onClick={() => go('cta')}>
            <Download size={18} />
            {ar ? 'حمل التطبيق الآن' : t.dl}
          </button>
          <button className="plain" onClick={() => go('how')}>
            <CirclePlay size={18} />
            {t.work}
          </button>
        </div>
        <div className="friends">
          <span>{ar ? '+ 12 صديق يخططون الآن' : '+ 12 friends planning now'}</span>
        </div>
      </div>
      <TripMap ar={ar} />
    </section>
  );
}

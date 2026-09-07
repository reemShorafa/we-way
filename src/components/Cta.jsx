import { Download, Route } from 'lucide-react';

export default function Cta({ t }) {
  return (
    <section className="cta section" id="cta">
      <div>
        <span className="eyebrow">WEWAY</span>
        <h2>{t.cta}</h2>
        <p>{t.ctas}</p>
        <div>
          <button><Download size={16} /> App Store</button>
          <button><Download size={16} /> Google Play</button>
        </div>
      </div>
      <b className="routeBadge">
        <Route size={64} />
      </b>
    </section>
  );
}

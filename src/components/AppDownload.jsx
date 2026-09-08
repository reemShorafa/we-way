import { Apple, Download, Play } from 'lucide-react';
import mobilePreview from '../img/app/weway-mobile.jpeg';

export default function AppDownload({ ar }) {
  return (
    <section className="app-download section" id="download">
      <div className="app-download-phone" aria-hidden="true">
        <div className="app-download-device">
          <span className="app-download-speaker" />
          <img src={mobilePreview} alt="" />
        </div>
      </div>

      <div className="app-download-copy">
        <span className="app-download-tag">{ar ? 'تطبيق WeWay' : 'WeWay app'}</span>
        <h2>{ar ? <>رحلتك تبدأ بخطوة<br /><em>والباقي علينا</em></> : <>Your trip starts here<br /><em>and we handle the rest</em></>}</h2>
        <p>{ar ? 'خطط رحلتك، ادع اصدقاءك، وتابع كل التفاصيل في مكان واحد مع تطبيق WeWay.' : 'Plan your trip, invite friends, and keep every detail together with WeWay.'}</p>
        <span className="app-download-label">{ar ? 'حمل التطبيق:' : 'Download the app:'}</span>
        <div className="app-download-stores">
          <a href="#download" className="app-store-button" aria-label="Download on the App Store">
            <Apple size={25} aria-hidden="true" />
            <span><small>{ar ? 'حمله من' : 'Download on the'}</small><b>App Store</b></span>
          </a>
          <a href="#download" className="app-store-button" aria-label="Get it on Google Play">
            <Play size={24} fill="currentColor" aria-hidden="true" />
            <span><small>{ar ? 'حمله من' : 'Get it on'}</small><b>Google Play</b></span>
          </a>
        </div>
        <div className="app-download-note"><Download size={15} aria-hidden="true" />{ar ? 'متاح قريباً على iOS و Android' : 'Coming soon for iOS and Android'}</div>
      </div>
    </section>
  );
}

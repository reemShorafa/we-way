import { Download, Globe2, Menu, X } from 'lucide-react';
import logo from '../img/logo.png';
import { navTargets } from '../data/siteData';

export default function Header({ ar, t, menu, setMenu, setLang, go }) {
  return (
    <header className="legacy-header">
      <nav>
        <button className="brand" onClick={() => go('home')} aria-label="WeWay">
          <img src={logo} alt="WeWay" />
        </button>
        <div className="links">
          {t.nav.map((label, index) => (
            <button key={label} onClick={() => go(navTargets[index])}>{label}</button>
          ))}
        </div>
        <div className="actions">
          <button className="lang" onClick={() => setLang(ar ? 'en' : 'ar')}>
            <Globe2 size={16} />
            {ar ? 'English' : 'العربية'}
          </button>
          <button className="button navcta" onClick={() => go('cta')}>
            <Download size={16} />
            {t.dl}
          </button>
          <button className="hamb" onClick={() => setMenu(!menu)} aria-label={ar ? 'القائمة' : 'menu'}>
            {menu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menu && (
        <div className="mobile">
          {t.nav.map((label, index) => (
            <button key={label} onClick={() => go(navTargets[index])}>{label}</button>
          ))}
          <button className="button" onClick={() => go('cta')}>
            <Download size={16} />
            {t.dl}
          </button>
        </div>
      )}
    </header>
  );
}

import { useEffect, useState } from 'react';
import './App.css';
import { copy } from './data/siteData';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import Memory from './components/Memory';
import Trips from './components/Trips';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import AppDownload from './components/AppDownload';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TripModal from './components/TripModal';

const REVEAL_SELECTOR = '.section, .feature, .step, .stats > div, footer > div';

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('weway-language') || 'ar');
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(null);
  const [slide, setSlide] = useState(0);
  const ar = lang === 'ar';
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = ar ? 'rtl' : 'ltr';
    localStorage.setItem('weway-language', lang);
  }, [lang, ar]);

  useEffect(() => {
    const elements = document.querySelectorAll(REVEAL_SELECTOR);

    // Reveal each content block once it enters the viewport.
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );

    elements.forEach((element, index) => {
      element.classList.add('reveal');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 70}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [lang]);

  useEffect(() => {
    const close = event => event.key === 'Escape' && setModal(null);

    window.addEventListener('keydown', close);
    document.body.style.overflow = modal === null ? '' : 'hidden';

    return () => {
      window.removeEventListener('keydown', close);
      document.body.style.overflow = '';
    };
  }, [modal]);

  const go = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenu(false);
  };

  return (
    <main>
      <Header ar={ar} t={t} menu={menu} setMenu={setMenu} setLang={setLang} go={go} />
      <Hero ar={ar} t={t} go={go} />
      <Features ar={ar} t={t} />
      <HowItWorks ar={ar} t={t} />
      <Stats ar={ar} />
      <Memory ar={ar} t={t} go={go} />
      <Trips ar={ar} t={t} setModal={setModal} />
      <Partners ar={ar} />
      <Testimonials ar={ar} t={t} slide={slide} setSlide={setSlide} />
      <AppDownload ar={ar} />
      <Contact ar={ar} />
      <Footer ar={ar} t={t} go={go} />
      <TripModal ar={ar} modal={modal} setModal={setModal} />
    </main>
  );
}

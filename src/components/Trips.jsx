import { useEffect, useRef } from 'react';
import SectionHead from './SectionHead';
import { trips } from '../data/siteData';

export default function Trips({ ar, t, setModal }) {
  const scrollerRef = useRef(null);
  const carouselTrips = [...trips, ...trips];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return undefined;

    const interval = window.setInterval(() => {
      const card = scroller.querySelector('.trip');
      if (!card) return;

      const gap = Number.parseFloat(getComputedStyle(scroller).columnGap || '0');
      const step = card.getBoundingClientRect().width + gap;
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      const next = scroller.scrollLeft + step >= maxScroll - 4 ? 0 : scroller.scrollLeft + step;

      scroller.scrollTo({ left: next, behavior: 'smooth' });
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="section" id="trips">
      <SectionHead title={t.trips} subtitle={t.tsub} tag={ar ? 'من مجتمع WeWay' : 'From the WeWay community'} />
      <div className="tripGrid" ref={scrollerRef}>
        {carouselTrips.map((trip, index) => (
          <button className="trip" onClick={() => setModal(index % trips.length)} key={`${trip[1]}-${index}`}>
            <img src={trip[4]} alt={trip[ar ? 0 : 1]} />
            <div>
              <small>{trip[ar ? 2 : 3]}</small>
              <h3>{trip[ar ? 0 : 1]}</h3>
              <b>{t.view}</b>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

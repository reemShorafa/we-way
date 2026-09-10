import { useEffect, useRef } from 'react';
import SectionHead from './SectionHead';
import { trips } from '../data/siteData';

const AUTOSCROLL_INTERVAL = 2000;
const tripTitle = (trip, ar) => trip[ar ? 0 : 1];
const tripLocation = (trip, ar) => trip[ar ? 2 : 3];

export default function Trips({ ar, t, setModal }) {
  const scrollerRef = useRef(null);
  const carouselTrips = [...trips, ...trips];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return undefined;

    // Move the carousel one card at a time and loop back at the end.
    const interval = window.setInterval(() => {
      const card = scroller.querySelector('.trip');
      if (!card) return;

      const gap = Number.parseFloat(getComputedStyle(scroller).columnGap || '0');
      const step = card.getBoundingClientRect().width + gap;
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      const next = scroller.scrollLeft + step >= maxScroll - 4 ? 0 : scroller.scrollLeft + step;

      scroller.scrollTo({ left: next, behavior: 'smooth' });
    }, AUTOSCROLL_INTERVAL);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="section" id="trips">
      <SectionHead title={t.trips} subtitle={t.tsub} tag={ar ? 'من مجتمع WeWay' : 'From the WeWay community'} />
      <div className="tripGrid" ref={scrollerRef}>
        {carouselTrips.map((trip, index) => (
          <button className="trip" onClick={() => setModal(index % trips.length)} key={`${trip[1]}-${index}`}>
            <img src={trip[4]} alt={tripTitle(trip, ar)} />
            <div>
              <small>{tripLocation(trip, ar)}</small>
              <h3>{tripTitle(trip, ar)}</h3>
              <b>{t.view}</b>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

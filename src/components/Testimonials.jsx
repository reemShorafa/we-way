import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Quote, Star } from 'lucide-react';
import SectionHead from './SectionHead';
import { reviews } from '../data/siteData';

export default function Testimonials({ ar, t, slide, setSlide }) {
  const list = reviews[ar ? 'ar' : 'en'];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlide(current => (current + 1) % list.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [list.length, setSlide]);

  return (
    <section className="section testimonials" id="testimonials">
      <SectionHead title={t.test} subtitle={t.tesub} tag={ar ? 'آراء المسافرين' : 'In travelers words'} center />
      <div className="review">
        <button onClick={() => setSlide((slide + 2) % 3)} aria-label={ar ? 'الرأي السابق' : 'Previous review'}>
          {ar ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
        <article key={slide}>
          <header className="review-profile">
            <i>{list[slide][0][0]}</i>
            <div>
              <b>{list[slide][0]}</b>
              <small><MapPin size={14} /> {list[slide][2]}</small>
            </div>
            <strong aria-label="5 stars">
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={15} fill="currentColor" />)}
            </strong>
          </header>
          <Quote className="review-quote" size={28} aria-hidden="true" />
          <blockquote>{list[slide][1]}</blockquote>
        </article>
        <button onClick={() => setSlide((slide + 1) % 3)} aria-label={ar ? 'الرأي التالي' : 'Next review'}>
          {ar ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>
      <div className="dots">
        {list.map((_, index) => (
          <button key={index} className={index === slide ? 'on' : ''} onClick={() => setSlide(index)} />
        ))}
      </div>
    </section>
  );
}

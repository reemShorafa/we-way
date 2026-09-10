import { X } from 'lucide-react';
import { trips } from '../data/siteData';

const tripTitle = (trip, ar) => trip[ar ? 0 : 1];
const tripLocation = (trip, ar) => trip[ar ? 2 : 3];

export default function TripModal({ ar, modal, setModal }) {
  if (modal === null) return null;

  const trip = trips[modal];

  return (
    <div className="overlay" onMouseDown={() => setModal(null)}>
      <article className="modal" onMouseDown={event => event.stopPropagation()}>
        <button onClick={() => setModal(null)} aria-label={ar ? 'إغلاق' : 'Close'}>
          <X size={20} />
        </button>
        <img src={trip[4]} alt="" />
        <div>
          <small>{tripLocation(trip, ar)}</small>
          <h2>{tripTitle(trip, ar)}</h2>
          <p>{ar ? 'نافذة تفاصيل الرحلة تعرض صور الرحلة، الوجهة، وجدول الزيارات المقترح بالذكاء الاصطناعي.' : 'A standout friends adventure shaped by exceptional views and shared moments.'}</p>
          <h3>{ar ? 'جدول الزيارات المقترح بالذكاء الاصطناعي' : 'AI suggested itinerary'}</h3>
          <ol>
            <li>{ar ? 'التجمع والانطلاق' : 'Meet and depart'}</li>
            <li>{ar ? 'زيارة معلم قريب' : 'Explore a local highlight'}</li>
            <li>{ar ? 'عشاء وتوثيق الذكريات' : 'Dinner and shared memories'}</li>
          </ol>
        </div>
      </article>
    </div>
  );
}

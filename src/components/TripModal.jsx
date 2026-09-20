import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { getTripImage, getTripLocation, getTripTitle, trips } from '../data/siteData';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export default function TripModal({ ar, modal, setModal }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modal === null) return undefined;

    const previousFocus = document.activeElement;
    const dialog = modalRef.current;

    dialog?.focus();

    const handleKeyDown = event => {
      if (event.key !== 'Tab' || !dialog) return;

      const focusable = Array.from(dialog.querySelectorAll(FOCUSABLE_SELECTOR));

      if (focusable.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [modal]);

  if (modal === null) return null;

  const trip = trips[modal];
  const titleId = 'trip-modal-title';

  return (
    <div className="overlay" onMouseDown={() => setModal(null)}>
      <article
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        ref={modalRef}
        onMouseDown={event => event.stopPropagation()}
      >
        <button onClick={() => setModal(null)} aria-label={ar ? 'ط¥ط؛ظ„ط§ظ‚' : 'Close'}>
          <X size={20} />
        </button>
        <img src={getTripImage(trip)} alt="" />
        <div>
          <small>{getTripLocation(trip, ar)}</small>
          <h2 id={titleId}>{getTripTitle(trip, ar)}</h2>
          <p>{ar ? 'ظ†ط§ظپط°ط© طھظپط§طµظٹظ„ ط§ظ„ط±ط­ظ„ط© طھط¹ط±ط¶ طµظˆط± ط§ظ„ط±ط­ظ„ط©طŒ ط§ظ„ظˆط¬ظ‡ط©طŒ ظˆط¬ط¯ظˆظ„ ط§ظ„ط²ظٹط§ط±ط§طھ ط§ظ„ظ…ظ‚طھط±ط­ ط¨ط§ظ„ط°ظƒط§ط، ط§ظ„ط§طµط·ظ†ط§ط¹ظٹ.' : 'A standout friends adventure shaped by exceptional views and shared moments.'}</p>
          <h3>{ar ? 'ط¬ط¯ظˆظ„ ط§ظ„ط²ظٹط§ط±ط§طھ ط§ظ„ظ…ظ‚طھط±ط­ ط¨ط§ظ„ط°ظƒط§ط، ط§ظ„ط§طµط·ظ†ط§ط¹ظٹ' : 'AI suggested itinerary'}</h3>
          <ol>
            <li>{ar ? 'ط§ظ„طھط¬ظ…ط¹ ظˆط§ظ„ط§ظ†ط·ظ„ط§ظ‚' : 'Meet and depart'}</li>
            <li>{ar ? 'ط²ظٹط§ط±ط© ظ…ط¹ظ„ظ… ظ‚ط±ظٹط¨' : 'Explore a local highlight'}</li>
            <li>{ar ? 'ط¹ط´ط§ط، ظˆطھظˆط«ظٹظ‚ ط§ظ„ط°ظƒط±ظٹط§طھ' : 'Dinner and shared memories'}</li>
          </ol>
        </div>
      </article>
    </div>
  );
}

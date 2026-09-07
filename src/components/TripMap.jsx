import { Check, MapPin, Navigation } from 'lucide-react';

export default function TripMap({ ar }) {
  const names = ar ? ['ريم', 'أحمد', 'سارة', 'محمد'] : ['Reem', 'Ahmed', 'Sara', 'Mohammed'];

  return (
    <div className="map">
      <svg viewBox="0 0 600 450">
        <path className="road" d="M25 350C130 240 130 360 230 270S340 155 420 235 480 320 570 130" />
        <path className="route" d="M25 350C130 240 130 360 230 270S340 155 420 235 480 320 570 130" />
        <circle r="7" className="dot">
          <animateMotion dur="7s" repeatCount="indefinite" path="M25 350C130 240 130 360 230 270S340 155 420 235 480 320 570 130" />
        </circle>
      </svg>

      {names.map((name, index) => (
        <div className={`pin p${index}`} key={name}>
          <i>{name[0]}</i>
          <b>{name}</b>
        </div>
      ))}

      <div className="dest">
        <MapPin size={28} />
        <small>{ar ? 'الوجهة' : 'Destination'}</small>
      </div>
      <div className="note n1">
        {ar ? 'ريم وصلت' : 'Reem arrived'} <Check size={14} />
      </div>
      <div className="note n2">
        {ar ? 'أحمد قريب منك' : 'Ahmed is close'} <Navigation size={14} />
      </div>
    </div>
  );
}

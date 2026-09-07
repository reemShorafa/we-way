import { MapPinned, Sparkles, Users } from 'lucide-react';

export default function Stats({ ar }) {
  return (
    <section className="stats">
      <div>
        <MapPinned size={28} />
        <b>320+</b>
        <span>{ar ? 'رحلة تم تنظيمها' : 'Trips organized'}</span>
      </div>
      <div>
        <Users size={28} />
        <b>1,850+</b>
        <span>{ar ? 'عضو مغامر' : 'Adventurers'}</span>
      </div>
      <div>
        <Sparkles size={28} />
        <b>45+</b>
        <span>{ar ? 'وجهة سياحية متاحة' : 'Destinations'}</span>
      </div>
    </section>
  );
}

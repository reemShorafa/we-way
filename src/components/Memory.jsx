import { ArrowLeft, ArrowRight, Camera, MapPin, Plane } from 'lucide-react';
import dammamMemory from '../img/memory/dammam-memory.jfif';

const avatars = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80'
];

export default function Memory({ ar, t, go }) {
  const ArrowIcon = ar ? ArrowLeft : ArrowRight;

  return (
    <section className="memory memory-section section">
      <div className="memory-decoration memory-decoration-flight">
        <Plane size={42} />
      </div>

      <div className="memory-inner">
        <div className="memory-content">
          <span className="memory-eyebrow">
            <Camera size={20} />
            {ar ? 'ذكرياتكم المشتركة' : 'Your shared memory'}
          </span>
          <h2 className="memory-title">
            {ar ? <><span>لحظات موثقة..</span><br /><span>وذكريات تدوم للأبد</span></> : t.mem}
          </h2>
          <p className="memory-description">{t.msub}</p>

          <div className="memory-actions">
            <button className="memory-cta" onClick={() => go('trips')}>
              {ar ? 'شاهد الرحلات' : 'See the trips'}
              <span><ArrowIcon size={22} /></span>
            </button>

            <div className="memory-social">
              <div className="memory-avatars">
                {avatars.map(src => <img key={src} src={src} alt="" />)}
                <span>+3</span>
              </div>
              <p>{ar ? 'آلاف المسافرين يوثقون رحلاتهم مع WeWay' : 'Thousands of travelers document their trips with WeWay'}</p>
            </div>
          </div>
        </div>

        <div className="memory-visual">
          <div className="memory-photo-card">
            <img src={dammamMemory} alt={ar ? 'أصدقاء في رحلة' : 'Friends traveling'} />

            <div className="memory-location">
              <MapPin size={28} />
              <div>
                <b>{ar ? 'الدمام، السعودية' : 'Dammam, Saudi Arabia'}</b>
                <small>{ar ? '16 مايو 2026' : 'May 16, 2026'}</small>
              </div>
            </div>

            <div className="memory-camera-card">
              <Camera size={26} />
              <b>{ar ? 'لحظات أجمل مع الأصدقاء' : 'Better moments with friends'}</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

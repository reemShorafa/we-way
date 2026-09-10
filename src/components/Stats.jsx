import { useEffect, useRef, useState } from 'react';
import { MapPinned, Sparkles, Users } from 'lucide-react';

const COUNT_DURATION = 850;

function CountUp({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      const start = performance.now();

      // Ease out the number once, when its card becomes visible.
      const tick = now => {
        const progress = Math.min((now - start) / COUNT_DURATION, 1);
        setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.45 });

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <b ref={ref}>{count.toLocaleString()}+</b>;
}

export default function Stats({ ar }) {
  const stats = [
    { icon: MapPinned, value: 320, label: ar ? 'رحلة تم تنظيمها' : 'Trips organized' },
    { icon: Users, value: 1850, label: ar ? 'عضو مغامر' : 'Adventurers' },
    { icon: Sparkles, value: 45, label: ar ? 'وجهة سياحية متاحة' : 'Destinations' }
  ];

  return (
    <section className="stats">
      {stats.map(({ icon: Icon, value, label }) => (
        <div key={label}>
          <Icon size={28} aria-hidden="true" />
          <CountUp value={value} />
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}

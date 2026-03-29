import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { STATS } from '@/lib/data';

export default function Stats() {
  return (
    <section className="bg-[var(--color-dark-strip)] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-6"
            >
              <div
                className="text-5xl lg:text-6xl font-black gold-gradient-text mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div
                className="text-[var(--color-gray-400)] text-xs font-semibold tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

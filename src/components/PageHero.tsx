function HibiscusFlower({ className = "", white = false }: { className?: string; white?: boolean }) {
  return (
    <img
      src="/hibiscus.png"
      alt=""
      className={className}
      style={{
        filter: white ? 'brightness(0) invert(1)' : undefined,
      }}
    />
  );
}

export default function PageHero({ title, subtitle, waveColor = "white" }: { title: string; subtitle?: string; waveColor?: string }) {
  return (
    <section className="relative overflow-hidden py-14 md:py-28">
      {/* Teal ocean background */}
      <div className="absolute inset-0 bg-[#4AA2B9]" />

      {/* Subtle wave pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q25 0 50 10 Q75 20 100 10' stroke='%23367d91' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 20px',
        }}
      />

      {/* Decorative hibiscus flowers */}
      <HibiscusFlower className="absolute top-6 left-6 md:top-10 md:left-16 w-10 h-10 md:w-14 md:h-14 opacity-30 -rotate-12" white />
      <HibiscusFlower className="absolute top-8 right-8 md:top-12 md:right-20 w-8 h-8 md:w-12 md:h-12 opacity-25 rotate-12" white />
      <HibiscusFlower className="absolute bottom-20 left-1/4 w-6 h-6 md:w-10 md:h-10 opacity-20 rotate-45 hidden md:block" white />

      {/* Bottom wave transition - more wavy darker blue */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 md:h-40" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,50 C120,90 240,20 360,60 C480,100 600,30 720,70 C840,110 960,25 1080,65 C1200,105 1320,35 1440,55 L1440,120 L0,120 Z"
            fill="#3B8FA5"
          />
        </svg>
        <svg className="w-full h-16 md:h-24 -mt-8 md:-mt-12" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,20 C240,60 480,10 720,35 C960,60 1200,15 1440,30 L1440,80 L0,80 Z"
            fill={waveColor}
          />
        </svg>
      </div>

      {/* Content - positioned higher */}
      <div className="relative z-10 container mx-auto px-4 text-center -mt-4 md:-mt-12">
        {subtitle && (
          <div className="flex items-center justify-center gap-2 mb-2 md:mb-3">
            <HibiscusFlower className="w-6 h-6 -rotate-12" white />
            <p className="font-script text-[#F7D711] text-xl md:text-2xl">{subtitle}</p>
            <HibiscusFlower className="w-6 h-6 rotate-12" white />
          </div>
        )}
        <h1 className="text-3xl md:text-6xl font-display font-extrabold text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
          {title}
        </h1>
      </div>
    </section>
  );
}

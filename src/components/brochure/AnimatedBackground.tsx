type Variant = 'network' | 'flow' | 'particles' | 'soft';

interface Props {
  variant?: Variant;
  className?: string;
}

export default function AnimatedBackground({ variant = 'network', className = '' }: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {(variant === 'network' || variant === 'soft') && (
        <>
          <div className="absolute -top-20 -right-32 h-[420px] w-[420px] rounded-full bg-[#00bfa5]/10 blur-[120px]" />
          <div className="absolute -bottom-32 -left-20 h-[380px] w-[380px] rounded-full bg-[#1d70a2]/15 blur-[110px]" />
        </>
      )}

      {variant === 'network' && (
        <>
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 15% 15%, rgba(0,191,165,0.18) 1px, transparent 1px), radial-gradient(circle at 85% 85%, rgba(29,112,162,0.18) 1px, transparent 1px), radial-gradient(circle at 50% 50%, rgba(0,191,165,0.12) 1px, transparent 1px)',
              backgroundSize: '90px 90px, 140px 140px, 70px 70px',
              animation: 'network-pulse 6s ease-in-out infinite',
            }}
          />
          <div className="absolute left-0 right-0 top-0 h-full">
            <div className="flow-line absolute" style={{ top: '18%', width: 120, animationDelay: '0s' }} />
            <div className="flow-line absolute" style={{ top: '52%', width: 180, animationDelay: '-1.4s' }} />
            <div className="flow-line absolute" style={{ top: '78%', width: 140, animationDelay: '-2.6s' }} />
          </div>
          <div className="hidden md:block">
            <span className="absolute left-[20%] top-[30%] h-2 w-2 rounded-full bg-[#00bfa5] animate-float-random1" />
            <span className="absolute right-[18%] top-[60%] h-1.5 w-1.5 rounded-full bg-[#1d70a2] animate-float-random2" />
            <span className="absolute left-[60%] top-[20%] h-1.5 w-1.5 rounded-full bg-[#00bfa5]/80 animate-float-random3" />
            <span className="absolute left-[35%] bottom-[15%] h-1 w-1 rounded-full bg-[#7de8d8] animate-float-random4" />
          </div>
        </>
      )}

      {variant === 'flow' && (
        <div className="absolute inset-0">
          <div className="flow-line absolute" style={{ top: '25%', width: 180 }} />
          <div className="flow-line absolute" style={{ top: '55%', width: 220, animationDelay: '-1.2s' }} />
          <div className="flow-line absolute" style={{ top: '80%', width: 160, animationDelay: '-2.4s' }} />
        </div>
      )}

      {variant === 'particles' && (
        <div className="hidden md:block">
          <span className="absolute left-[15%] top-[20%] h-1.5 w-1.5 rounded-full bg-[#00bfa5] animate-float-random1" />
          <span className="absolute right-[20%] top-[40%] h-1 w-1 rounded-full bg-[#1d70a2] animate-float-random2" />
          <span className="absolute left-[55%] top-[70%] h-1.5 w-1.5 rounded-full bg-[#00bfa5]/80 animate-float-random3" />
          <span className="absolute left-[80%] bottom-[20%] h-1 w-1 rounded-full bg-[#7de8d8] animate-float-random4" />
          <span className="absolute left-[30%] bottom-[10%] h-1 w-1 rounded-full bg-[#00bfa5]/60 animate-float-random5" />
        </div>
      )}
    </div>
  );
}

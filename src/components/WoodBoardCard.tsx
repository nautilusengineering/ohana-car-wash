export default function WoodBoardCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: '#FBF7C6',
        border: '5px solid #DEA726',
        borderRadius: '10px',
        boxShadow: '3px 3px 0px 3px #715924',
      }}
    >
      {/* Hawaiian/tiki pattern overlay */}
      <div className="absolute inset-0 hawaiian-bg opacity-[0.18]" />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

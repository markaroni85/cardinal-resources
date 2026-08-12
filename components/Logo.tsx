interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cardinal Resource Solutions"
    >
      <defs>
        <marker id="ah-s" viewBox="0 0 12 10" refX="10" refY="5"
          markerWidth="22" markerHeight="18" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M0,0 L12,5 L0,10 Z" fill="#5B8DB8" />
        </marker>
        <marker id="ah-g" viewBox="0 0 12 10" refX="10" refY="5"
          markerWidth="22" markerHeight="18" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M0,0 L12,5 L0,10 Z" fill="#D4A843" />
        </marker>
        <marker id="ah-t" viewBox="0 0 12 10" refX="10" refY="5"
          markerWidth="22" markerHeight="18" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M0,0 L12,5 L0,10 Z" fill="#C75A3C" />
        </marker>
        <marker id="ah-gr" viewBox="0 0 12 10" refX="10" refY="5"
          markerWidth="22" markerHeight="18" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M0,0 L12,5 L0,10 Z" fill="#4A7C59" />
        </marker>
      </defs>

      {/* Slate/Blue — top arc NW→NE */}
      <path
        d="M28,19 A38,38 0 0,1 72,19"
        fill="none" stroke="#5B8DB8" strokeWidth="9" strokeLinecap="butt"
        markerEnd="url(#ah-s)"
      />

      {/* Gold — right arc NE→SE */}
      <path
        d="M81,28 A38,38 0 0,1 81,72"
        fill="none" stroke="#D4A843" strokeWidth="9" strokeLinecap="butt"
        markerEnd="url(#ah-g)"
      />

      {/* Terra/Red — bottom arc SE→SW */}
      <path
        d="M72,81 A38,38 0 0,1 28,81"
        fill="none" stroke="#C75A3C" strokeWidth="9" strokeLinecap="butt"
        markerEnd="url(#ah-t)"
      />

      {/* Forest Green — left arc SW→NW */}
      <path
        d="M19,72 A38,38 0 0,1 19,28"
        fill="none" stroke="#4A7C59" strokeWidth="9" strokeLinecap="butt"
        markerEnd="url(#ah-gr)"
      />

      {/* 8-pointed compass rose — white so it shows on any dark background */}
      <path
        d="M50,14 L53,43 L63,37 L57,47 L70,50 L57,53 L63,63 L53,57 L50,86 L47,57 L37,63 L43,53 L30,50 L43,47 L37,37 L47,43 Z"
        fill="white"
      />

      {/* Center pin */}
      <circle cx="50" cy="50" r="7" fill="#C75A3C" />
    </svg>
  )
}

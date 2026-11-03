function SignalGlyph() {
  return (
    <svg
      aria-hidden="true"
      className="signal-glyph"
      fill="none"
      focusable="false"
      viewBox="0 0 320 250"
    >
      <g className="signal-glyph__waves" stroke="currentColor">
        <path d="M198 42c31 12 50 36 50 68s-19 56-50 68" strokeWidth="2" />
        <path d="M216 22c43 17 70 49 70 88s-27 71-70 88" strokeWidth="1.5" />
        <path d="M178 62c20 8 32 24 32 48s-12 40-32 48" strokeWidth="3" />
      </g>
      <g className="signal-glyph__signals">
        <circle cx="174" cy="108" r="8" />
        <circle cx="224" cy="52" r="4" />
        <circle cx="268" cy="109" r="5" />
        <circle cx="224" cy="166" r="3.5" />
      </g>
      <path className="signal-glyph__trail" d="M26 211c53-2 69-49 111-44 29 3 38 34 77 30" />
      <g className="signal-glyph__runner" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="108" cy="115" r="12" strokeWidth="3" />
        <path d="M103 129l-15 37 31 13 19-30" strokeWidth="4" />
        <path d="M95 144l29 8 25-18" strokeWidth="4" />
        <path d="M89 166l-30 17" strokeWidth="4" />
        <path d="M119 179l21 23" strokeWidth="4" />
      </g>
    </svg>
  )
}

export default SignalGlyph

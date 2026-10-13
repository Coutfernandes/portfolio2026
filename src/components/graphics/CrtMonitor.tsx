function CrtMonitor({ ariaLabel }: { ariaLabel: string }) {
  return (
    <svg className="crt-monitor" viewBox="0 0 520 350" role="img" aria-label={ariaLabel}>
      <path d="M45 27h405l26 27v221l-28 25H43l-25-25V54z" fill="#292a28" stroke="#8c8a82" strokeWidth="4" />
      <path d="M59 48h376v189H59z" fill="#10110f" stroke="#77766e" strokeWidth="3" />
      <path d="M77 66h340v153H77z" fill="#171a17" />
      <path d="M87 83h320M87 91h320" stroke="#30342f" strokeWidth="2" />
      <circle cx="73" cy="274" r="5" fill="#b0ada3" /><circle cx="97" cy="274" r="5" fill="#77766e" />
      <path d="M165 300h165l17 27H147z" fill="#3b3c38" stroke="#8c8a82" strokeWidth="3" />
      <text x="91" y="132" fill="#e9e7df" fontFamily="monospace" fontSize="17">matheus@portfolio:~$</text>
      <text x="91" y="163" fill="#e9e7df" fontFamily="monospace" fontSize="19">whoami</text>
      <text x="91" y="194" fill="#b7b5ac" fontFamily="monospace" fontSize="16">matheus coutinho</text>
      <path d="M224 183h10" stroke="#e9e7df" strokeWidth="3"><animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" /></path>
    </svg>
  )
}

export default CrtMonitor
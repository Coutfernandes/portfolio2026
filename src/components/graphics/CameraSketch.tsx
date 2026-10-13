function CameraSketch({ ariaLabel }: { ariaLabel: string }) {
  return (
    <svg className="camera-sketch" viewBox="0 0 520 340" role="img" aria-label={ariaLabel}>
      <path d="M53 92h92l28-39h125l31 39h123a23 23 0 0 1 23 23v156a23 23 0 0 1-23 23H53a23 23 0 0 1-23-23V115a23 23 0 0 1 23-23Z" fill="#292a28" stroke="#11120f" strokeWidth="7" />
      <path d="M75 115h123v68H75z" fill="#d8d5cb" stroke="#11120f" strokeWidth="4" />
      <text x="88" y="143" fill="#171815" fontFamily="monospace" fontSize="14">01 / PROJETO</text>
      <text x="88" y="164" fill="#171815" fontFamily="monospace" fontSize="14">MANAUS TOUR AI</text>
      <circle cx="306" cy="192" r="94" fill="#161714" stroke="#a6a39a" strokeWidth="7" />
      <circle cx="306" cy="192" r="69" fill="#242622" stroke="#77766e" strokeWidth="5" />
      <circle cx="306" cy="192" r="43" fill="#11120f" stroke="#77766e" strokeWidth="4" />
      <circle cx="306" cy="192" r="17" fill="#77766e" /><circle cx="394" cy="111" r="9" fill="#d8d5cb" />
      <path d="M74 226h102" stroke="#77766e" strokeWidth="3" />
      <text x="74" y="250" fill="#d8d5cb" fontFamily="monospace" fontSize="12">CAPTURAR IDEIAS</text>
    </svg>
  )
}

export default CameraSketch
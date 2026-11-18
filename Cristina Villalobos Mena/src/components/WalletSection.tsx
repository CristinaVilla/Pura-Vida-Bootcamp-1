function WalletIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 8V6a2 2 0 0 0-2-2H6a3 3 0 0 0 0 6h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3V7" />
      <path d="M22 13h-5a2 2 0 0 0 0 4h5" />
    </svg>
  )
}

export function WalletSection() {
  return (
    <section className="wallet" aria-labelledby="wallet-title">
      <h3 id="wallet-title">Wallet de Stellar</h3>
      <p>Conectá Varial para agregar tu dirección pública a la tarjeta.</p>

      <button className="wallet-button" type="button" disabled>
        <WalletIcon />
        Conectar wallet
      </button>

      <p className="wallet-note">
        Pronto voy a habilitar la conexión con Varial.
      </p>
    </section>
  )
}
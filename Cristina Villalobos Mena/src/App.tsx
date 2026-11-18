import logoBuzon from './assets/logo-buzon.png'
import './App.css'

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

function App() {
  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <img src={logoBuzon} alt="" width="44" height="44" />
          <span>Buzón de propinas Stellar</span>
        </div>
      </header>

      <main className="page">
        <div className="intro">
          <h1>Creá tu buzón de propinas</h1>
          <p>Personalizá una tarjeta para compartir tu dirección de Stellar.</p>
        </div>

        <div className="workspace">
          <section className="panel" aria-labelledby="editor-title">
            <h2 id="editor-title">Personalizá tu buzón</h2>

            <div className="field">
              <label htmlFor="creator-name">Nombre del creador</label>
              <input id="creator-name" type="text" placeholder="Ej. Cristina" />
            </div>

            <div className="field">
              <label htmlFor="tip-message">Mensaje</label>
              <textarea
                id="tip-message"
                rows={4}
                placeholder="Ej. Gracias por apoyar lo que hago."
              />
            </div>

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
          </section>

          <section className="preview" aria-labelledby="preview-title">
            <h2 id="preview-title">Ejemplo de tarjeta</h2>

            <div className="tip-card">
              <img src={logoBuzon} alt="" width="136" height="136" />
              <h3>Buzón de Cristina</h3>
              <p>¡Gracias por apoyar lo que hago!</p>
              <div className="qr-placeholder">
                Tu código QR aparecerá aquí al conectar la wallet.
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
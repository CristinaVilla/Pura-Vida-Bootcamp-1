import logoBuzon from '../assets/logo-buzon.png'
import type { TipJarDraft } from '../hooks/useTipJarDraft'
import { TipJarQr } from './TipJarQr'

type TipJarPreviewProps = {
  draft: TipJarDraft
  address: string | null
}

export function TipJarPreview({ draft, address }: TipJarPreviewProps) {
  const creatorName = draft.creatorName.trim()
  const message = draft.message.trim()
  const title = creatorName
    ? `Buzón de ${creatorName}`
    : 'Mi buzón de propinas'

  return (
    <section className="preview" aria-labelledby="preview-title">
      <h2 id="preview-title">Vista previa de tu buzón</h2>

      <div className="tip-card">
        <img src={logoBuzon} alt="" width="136" height="136" />
        <h3>{title}</h3>
        <p>{message || '¡Gracias por apoyar lo que hago!'}</p>

        {address ? (
          <TipJarQr key={address} address={address} />
        ) : (
          <div className="qr-placeholder">
            Conectá tu wallet para generar el código QR.
          </div>
        )}
      </div>
    </section>
  )
}
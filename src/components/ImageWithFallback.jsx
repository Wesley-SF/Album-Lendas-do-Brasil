import { useState } from 'react'
import { Image } from 'lucide-react'

const playerImages = import.meta.glob(
  '../assets/players/*.{png,jpg,jpeg,webp,avif}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
)

function ImageWithFallback({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const resolvedSrc = src ? playerImages[`../assets/players/${src}`] : null
  const name = alt.replace(/^Retrato de\s+/i, '')
  const initials = name
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join('')

  return (
    <div className="image-fallback">
      <div
        className="image-fallback__placeholder"
        role="img"
        aria-label={`${alt}. Imagem ainda não disponível.`}
      >
        <Image size={21} strokeWidth={1.4} aria-hidden="true" />
        <strong aria-hidden="true">{initials}</strong>
        <span>Imagem em breve</span>
      </div>

      {resolvedSrc && !hasError && (
        <img
          className={isLoaded ? 'is-loaded' : ''}
          src={resolvedSrc}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  )
}

export default ImageWithFallback

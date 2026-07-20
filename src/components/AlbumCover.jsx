import { forwardRef } from 'react'
import { Star } from 'lucide-react'

const AlbumCover = forwardRef(function AlbumCover(_, ref) {
  return (
    <article className="page cover" ref={ref}>
      <div className="cover__border">
        <div className="cover__stars" aria-hidden="true">
          {[...Array(5)].map((_, index) => (
            <Star key={index} size={14} fill="currentColor" />
          ))}
        </div>
        <p className="cover__eyebrow">Álbum de colecionador</p>
        <div className="cover__emblem" aria-hidden="true">
          <span>BR</span>
        </div>
        <div className="cover__titles">
          <h1>Lendas<br />do Brasil</h1>
          <p className="cover__subtitle">Os craques que fizeram história</p>
          <div className="cover__line" />
          <p className="cover__period">1950 — 2026</p>
        </div>
      </div>
    </article>
  )
})

export default AlbumCover

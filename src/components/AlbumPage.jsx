import { forwardRef } from 'react'
import { Quote, Trophy } from 'lucide-react'

const AlbumPage = forwardRef(function AlbumPage(
  { type, children, pageNumber },
  ref,
) {
  if (type === 'intro') {
    return (
      <article className="page paper intro-page" ref={ref}>
        <div className="paper__ornament" />
        <p className="page-kicker">Nossa história em campo</p>
        <h2>O país onde o futebol virou arte</h2>
        <div className="intro-page__ball" aria-hidden="true">✦</div>
        <p className="intro-page__lead">
          Este álbum é uma homenagem aos jogadores que vestiram o talento,
          a coragem e a criatividade do futebol brasileiro.
        </p>
        <div className="intro-page__quote">
          <Quote size={22} aria-hidden="true" />
          <p>
            Vire as páginas e reencontre momentos, conquistas e histórias que
            atravessaram gerações.
          </p>
        </div>
        <div className="intro-page__seal">
          <Trophy size={18} aria-hidden="true" />
          <span>Uma seleção de lendas inesquecíveis</span>
        </div>
        <span className="page-number">{pageNumber}</span>
      </article>
    )
  }

  if (type === 'final') {
    return (
      <article className="page paper final-page" ref={ref}>
        {children}
        <span className="page-number">{pageNumber}</span>
      </article>
    )
  }

  return (
    <article className="page paper players-page" ref={ref}>
      {children}
      <span className="page-number">{pageNumber}</span>
    </article>
  )
})

export default AlbumPage

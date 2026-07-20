import { useEffect, useRef, useState } from 'react'
import { Github, RotateCcw } from 'lucide-react'
import HTMLFlipBook from 'react-pageflip'
import players from '../data/players'
import AlbumCover from './AlbumCover'
import AlbumPage from './AlbumPage'
import NavigationControls from './NavigationControls'
import PlayerCard from './PlayerCard'

const generationOrder = [
  'Pioneiros e geração de ouro',
  'Geração de 1982',
  'Geração do tetra',
  'Geração do penta',
  'Era contemporânea',
]

const generationPages = generationOrder.flatMap((generation) => {
  const generationPlayers = players.filter(
    (player) => player.geracao === generation,
  )

  return Array.from(
    { length: Math.ceil(generationPlayers.length / 2) },
    (_, index) => ({
      generation,
      players: generationPlayers.slice(index * 2, index * 2 + 2),
      part: index + 1,
      totalParts: Math.ceil(generationPlayers.length / 2),
    }),
  )
})

function Album() {
  const bookRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = generationPages.length + 3

  const goToPrevious = () => bookRef.current?.pageFlip().flipPrev()
  const goToNext = () => bookRef.current?.pageFlip().flipNext()
  const goToStart = () => bookRef.current?.pageFlip().flip(0)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (['INPUT', 'TEXTAREA'].includes(event.target.tagName)) return

      const pageFlip = bookRef.current?.pageFlip()
      if (!pageFlip) return

      if (event.key === 'ArrowLeft') pageFlip.flipPrev()
      if (event.key === 'ArrowRight') pageFlip.flipNext()
      if (event.key === 'Home') pageFlip.flip(0)
      if (event.key === 'End') pageFlip.flip(totalPages - 1)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [totalPages])

  return (
    <section className="album-stage" aria-label="Álbum Lendas do Brasil">
      <div className="album-heading">
        <p>Memória · Paixão · Futebol</p>
        <span>Use as setas ou arraste as páginas</span>
      </div>

      <div className="book-wrap">
        <div className="book-shadow" />
        <HTMLFlipBook
          ref={bookRef}
          width={440}
          height={540}
          size="stretch"
          minWidth={280}
          maxWidth={440}
          minHeight={390}
          maxHeight={540}
          maxShadowOpacity={0.45}
          showCover
          mobileScrollSupport
          usePortrait
          autoSize={false}
          flippingTime={850}
          drawShadow
          onFlip={(event) => setCurrentPage(event.data)}
          className="flip-book"
        >
          <AlbumCover />
          <AlbumPage type="intro" pageNumber="01" />
          {generationPages.map((page, pageIndex) => (
            <AlbumPage
              key={`${page.generation}-${page.part}`}
              pageNumber={String(pageIndex + 2).padStart(2, '0')}
            >
              <header className="players-page__header">
                <p className="page-kicker">
                  Coleção {String(page.part).padStart(2, '0')} ·{' '}
                  {String(page.totalParts).padStart(2, '0')}
                </p>
                <h2>{page.generation}</h2>
              </header>
              <div className="players-page__grid">
                {page.players.map((player, index) => (
                  <PlayerCard
                    key={player.id}
                    player={player}
                    accent={['green', 'blue', 'gold', 'navy'][
                      (pageIndex + index) % 4
                    ]}
                  />
                ))}
              </div>
            </AlbumPage>
          ))}
          <AlbumPage
            type="final"
            pageNumber={String(totalPages - 1).padStart(2, '0')}
          >
            <div className="final-page__content">
              <p className="page-kicker">O próximo capítulo é seu</p>
              <h2>Uma história que nunca termina</h2>
              <p className="final-page__lead">
                O futebol brasileiro atravessa gerações, transforma jogadores
                em símbolos e mantém viva uma paixão que pertence a todo o país.
              </p>

              <div className="final-page__suggestion">
                <label htmlFor="legend-suggestion">
                  Qual lenda faltou neste álbum?
                </label>
                <input
                  id="legend-suggestion"
                  type="text"
                  placeholder="Escreva um nome..."
                />
              </div>

              <p className="final-page__thanks">
                Obrigado por visitar este projeto de portfólio.
              </p>
              <div className="final-page__actions">
                <button
                  type="button"
                  onClick={goToStart}
                  aria-label="Voltar para a capa do álbum"
                >
                  <RotateCcw size={15} aria-hidden="true" />
                  Voltar ao início
                </button>
                <a
                  href="https://github.com/Wesley-SF/Album-Lendas-do-Brasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir projeto no GitHub"
                  onPointerDown={(event) => event.stopPropagation()}
                  onMouseDown={(event) => event.stopPropagation()}
                  onTouchStart={(event) => event.stopPropagation()}
                  onClick={(event) => event.stopPropagation()}
                >
                  <Github size={15} aria-hidden="true" />
                  GitHub
                </a>
              </div>
              <p className="final-page__made-with">
                Desenvolvido com React, Vite e criatividade
              </p>
            </div>
          </AlbumPage>
        </HTMLFlipBook>
        <NavigationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      </div>
      <span className="keyboard-hint">
        Home: capa · End: última página
      </span>
    </section>
  )
}

export default Album

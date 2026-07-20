import { ChevronLeft, ChevronRight } from 'lucide-react'

function NavigationControls({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) {
  return (
    <nav className="navigation" aria-label="Navegação do álbum">
      <button
        className="navigation__button navigation__button--previous"
        type="button"
        onClick={onPrevious}
        disabled={currentPage === 0}
        aria-label="Voltar página"
      >
        <ChevronLeft aria-hidden="true" />
      </button>

      <div className="navigation__status" aria-live="polite">
        <span>{String(currentPage + 1).padStart(2, '0')}</span>
        <div className="navigation__track">
          <span
            style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
          />
        </div>
        <span>{String(totalPages).padStart(2, '0')}</span>
      </div>

      <button
        className="navigation__button navigation__button--next"
        type="button"
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        aria-label="Avançar página"
      >
        <ChevronRight aria-hidden="true" />
      </button>
    </nav>
  )
}

export default NavigationControls

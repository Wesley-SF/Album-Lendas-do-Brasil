import { Sparkles, Trophy } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'

function PlayerCard({ player, accent }) {
  return (
    <section className={`player-card player-card--${accent}`}>
      <div className="player-card__image">
        <ImageWithFallback
          src={player.imagem}
          alt={`Retrato de ${player.nome}`}
        />
        <span className="player-card__number">
          {String(player.figurinha).padStart(2, '0')}
        </span>
      </div>

      <div className="player-card__content">
        <p className="player-card__nickname">{player.apelido}</p>
        <h3>{player.nome}</h3>
        <div className="player-card__meta">
          <span>{player.posicao}</span>
          <span>{player.periodo}</span>
        </div>
        <p className="player-card__summary">{player.resumo}</p>

        <div className="player-card__achievements">
          <Trophy size={15} aria-hidden="true" />
          <p>{player.conquistas.join(' · ')}</p>
        </div>

        <div className="player-card__fact">
          <Sparkles size={14} aria-hidden="true" />
          <p>{player.curiosidade}</p>
        </div>
      </div>
    </section>
  )
}

export default PlayerCard

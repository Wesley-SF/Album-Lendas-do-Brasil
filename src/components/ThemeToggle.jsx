import { Moon, Sun } from 'lucide-react'

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={`Ativar tema ${isDark ? 'claro' : 'escuro'}`}
      title={`Ativar tema ${isDark ? 'claro' : 'escuro'}`}
    >
      <Sun size={17} aria-hidden="true" />
      <span className={`theme-toggle__thumb ${isDark ? 'is-dark' : ''}`}>
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </span>
      <Moon size={17} aria-hidden="true" />
    </button>
  )
}

export default ThemeToggle

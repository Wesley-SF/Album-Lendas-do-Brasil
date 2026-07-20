import { useEffect, useState } from 'react'
import { Github, Linkedin } from 'lucide-react'
import Album from './components/Album'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('lendas-theme') || 'dark',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('lendas-theme', theme)
  }, [theme])

  return (
    <main className="app-shell">
      <div className="ambient ambient--one" />
      <div className="ambient ambient--two" />

      <header className="topbar">
        <a className="brand" href="/" aria-label="Lendas do Brasil — início">
          <span className="brand__mark">LB</span>
          <span>Lendas do Brasil</span>
        </a>
        <ThemeToggle
          theme={theme}
          onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </header>

      <Album />

      <footer className="app-signature">
        <span>Projeto desenvolvido por Wesley Farias</span>
        <a
          href="https://www.linkedin.com/in/wesley-santos-de-farias-110605204/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de Wesley Farias"
        >
          <Linkedin size={14} aria-hidden="true" />
        </a>
        <a
          href="https://github.com/Wesley-SF/Album-Lendas-do-Brasil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub de Wesley Farias"
        >
          <Github size={14} aria-hidden="true" />
        </a>
      </footer>
    </main>
  )
}

export default App

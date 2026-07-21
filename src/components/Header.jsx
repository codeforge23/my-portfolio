import { useEffect, useState } from 'react'
import { personalInfo, navLinks } from '../data/portfolioData'

export default function Header() {
  const [sticky, setSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50)

      const sections = navLinks.map((link) => link.href.slice(1))
      const scrollPos = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    setActiveSection(href.slice(1))
  }

  return (
    <header className="header">
      <nav className={`navbar navbar-expand-md navbar-light fixed-top ${sticky ? 'sticky-header' : ''}`} id="main-navbar">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <h1>
              <span>{personalInfo.firstName}</span> {personalInfo.lastName}
            </h1>
          </a>

          <button
            type="button"
            className="navbar-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`navbar-nav ml-auto ${menuOpen ? 'open' : ''}`} id="main-menu">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a
                  className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

import React from 'react'
import Header from './components/Header'
import DomainStrategy from './components/DomainStrategy'
import TechnicalAnalysis from './components/TechnicalAnalysis'
import SEOAnalysis from './components/SEOAnalysis'
import CompetitorAnalysis from './components/CompetitorAnalysis'
import Summary from './components/Summary'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">

        {/* ── HERO ── */}
        <section className="hero-section">
          <div className="hero-glow" />
          <div className="container text-center">
            <span className="pill-badge">Kun for OsloKvinnehelse · 2026</span>
            <h1 className="hero-title">
              Den Komplette<br /><span className="accent-word">SEO-Rapporten</span>
            </h1>
            <p className="hero-subtitle">
              Tre analyser. Klare anbefalinger. Her er nøyaktig hva dere kan gjøre for å dominere søkeresultatene og hente inn flere kunder.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">69</span>
                <span className="stat-desc">Søkeord analysert</span>
              </div>
              <div className="hero-divider" />
              <div className="hero-stat">
                <span className="stat-number">7</span>
                <span className="stat-desc">Kritiske feil funnet</span>
              </div>
              <div className="hero-divider" />
              <div className="hero-stat">
                <span className="stat-number">5x</span>
                <span className="stat-desc">Vekstpotensial</span>
              </div>
            </div>
          </div>
        </section>

        <DomainStrategy />
        <TechnicalAnalysis />
        <SEOAnalysis />
        <CompetitorAnalysis />
        <Summary />

      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <img
            src="https://oslokvinnehelse.no/wp-content/uploads/2024/12/OsloKvinneHelse__staende_sort-uten-bakgrunn-crop-2.png"
            alt="OsloKvinnehelse"
            className="footer-logo"
          />
          <p>Laget med ♥ for OsloKvinnehelse — 2026</p>
        </div>
      </footer>
    </div>
  )
}

export default App

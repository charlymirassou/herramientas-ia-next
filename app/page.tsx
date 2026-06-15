'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTrack, setActiveTrack] = useState('basico')

  return (
    <>
      <div className="hero">
        <div className="hero-avatar">
          <img src="/foto.jpg" alt="Carlos Mirassou Canseco" />
        </div>
        <div className="hero-badge">Derecho · Tecnología · Inteligencia Artificial</div>
        <h1>Carlos <span>Mirassou Canseco</span></h1>
        <p className="tagline">
          Abogado, funcionario judicial, docente universitario y especialista en IA aplicada al derecho.
          Construyo herramientas prácticas para operadores jurídicos.
        </p>
        <div className="hero-pills">
          <span className="hero-pill">⚖️ Poder Judicial</span>
          <span className="hero-pill">🤖 Inteligencia Artificial</span>
          <span className="hero-pill">🛠️ Legal Tech</span>
          <span className="hero-pill">📚 Formación Jurídica</span>
        </div>
        <div className="hero-cta-wrap">
          <a href="#herramientas" className="hero-cta">Ver herramientas →</a>
          <a href="/test-madurez-ia.html" className="hero-cta-secondary">🧠 ¿Cuál es tu nivel en IA?</a>
          <a href="/que-ia-usar.html" className="hero-cta-secondary">🤔 ¿Qué IA uso para esto?</a>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Sobre mí</div>
        <h2 className="section-title">Derecho y tecnología,<br />aplicados a la práctica real</h2>
        <p className="section-desc">
          Trabajo en el cruce entre el mundo jurídico y la inteligencia artificial. Mi objetivo es ayudar
          a operadores del derecho a incorporar estas herramientas de forma efectiva, crítica y responsable.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <div className="icon">🏛️</div>
            <h3>Funcionario judicial</h3>
            <p>Experiencia práctica en el Poder Judicial, con conocimiento de sus dinámicas, necesidades y desafíos reales.</p>
          </div>
          <div className="about-card">
            <div className="icon">🤖</div>
            <h3>Especialista en IA</h3>
            <p>Formación y práctica en el uso de modelos de lenguaje aplicados al análisis jurídico, redacción y gestión del conocimiento legal.</p>
          </div>
          <div className="about-card">
            <div className="icon">🎓</div>
            <h3>Docente y formador</h3>
            <p>Docente universitario y capacitador de equipos judiciales en el uso responsable de la inteligencia artificial aplicada al derecho.</p>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="tools-section">
        <div className="section" id="herramientas">
          <div className="section-label">Herramientas</div>
          <h2 className="section-title">Recursos gratuitos para<br />trabajar con IA</h2>
          <p className="section-desc">Elegí tu nivel de experiencia y accedé a las herramientas que mejor se adaptan a vos.</p>

          <div className="track-tabs" style={{ marginTop: '32px' }}>
            <button
              className={`track-tab${activeTrack === 'basico' ? ' active' : ''}`}
              onClick={() => setActiveTrack('basico')}
            >
              🟢 Sin experiencia previa
            </button>
            <button
              className={`track-tab${activeTrack === 'avanzado' ? ' active' : ''}`}
              onClick={() => setActiveTrack('avanzado')}
            >
              🔵 Con experiencia en IA
            </button>
          </div>

          {activeTrack === 'basico' && (
            <div className="track-panel active">
              <div className="track-label">🟢 Herramientas guiadas · Sin configuración · 100% local</div>
              <div className="tools-grid">
                <div className="tool-card">
                  <div className="tool-card-icon">⚖️</div>
                  <span className="tool-card-badge badge-judicial">Uso Judicial</span>
                  <h3>Prompteador Judicial</h3>
                  <p>Generá prompts profesionales adaptados a tu rol, tu especialidad y tu tarea concreta dentro del Poder Judicial.</p>
                  <ul className="tool-features">
                    <li>Perfil de operador jurídico (juez, fiscal, defensor, letrado)</li>
                    <li>Especialidad por área del derecho</li>
                    <li>Casos de uso: sentencias, expedientes, jurisprudencia, escritos</li>
                    <li>Metodología de análisis paso a paso</li>
                    <li>Optimizado para ChatGPT, Gemini, Claude y NotebookLM</li>
                  </ul>
                  <div className="tool-privacy">🔒 100% local · Ningún dato sale de tu navegador</div>
                  <a href="/prompteador-judicial.html" className="tool-btn">Abrir herramienta →</a>
                </div>
                <div className="tool-card">
                  <div className="tool-card-icon">🛠️</div>
                  <span className="tool-card-badge badge-general">Uso General</span>
                  <h3>Prompteador General</h3>
                  <p>Armá prompts efectivos para cualquier tarea: redacción, análisis, resúmenes, generación de ideas y más.</p>
                  <ul className="tool-features">
                    <li>Selección de objetivo y rol del asistente</li>
                    <li>Descripción libre de la tarea</li>
                    <li>Formato de salida configurable</li>
                    <li>Restricciones y ajustes de tono</li>
                    <li>Optimizado para ChatGPT, Gemini, Claude y NotebookLM</li>
                  </ul>
                  <div className="tool-privacy">🔒 100% local · Ningún dato sale de tu navegador</div>
                  <a href="/prompteador-general.html" className="tool-btn">Abrir herramienta →</a>
                </div>
                <div className="tool-card">
                  <div className="tool-card-icon">🤔</div>
                  <span className="tool-card-badge badge-general">Uso General</span>
                  <h3>¿Qué IA usar para esto?</h3>
                  <p>No sabés si usar ChatGPT, Gemini, Claude o NotebookLM. Respondé 5 preguntas y te decimos cuál se adapta mejor a tu caso.</p>
                  <ul className="tool-features">
                    <li>5 preguntas, menos de 2 minutos</li>
                    <li>Cubre las 4 herramientas más usadas del mercado</li>
                    <li>Explica por qué se recomienda cada una</li>
                    <li>Incluye cómo empezar paso a paso</li>
                    <li>Útil para cualquier área o profesión</li>
                  </ul>
                  <div className="tool-privacy">🔒 100% local · Ningún dato sale de tu navegador</div>
                  <a href="/que-ia-usar.html" className="tool-btn">Usar el selector →</a>
                </div>
              </div>
            </div>
          )}

          {activeTrack === 'avanzado' && (
            <div className="track-panel active">
              <div className="track-label">🔵 Herramientas con integración de API · Requieren configuración técnica</div>
              <div className="tools-grid">
                <div className="tool-card">
                  <div className="tool-card-icon">🔍</div>
                  <span className="tool-card-badge badge-general">Uso General</span>
                  <h3>¿Qué verificar antes de presentar?</h3>
                  <p>Pegá el texto que generó la IA y el sistema analiza exactamente qué puntos tenés que revisar: citas, normativa, fechas, nombres y afirmaciones riesgosas.</p>
                  <ul className="tool-features">
                    <li>Detección de citas, jurisprudencia y normativa inventada</li>
                    <li>Clasificación de riesgos: alto, medio y bajo</li>
                    <li>Instrucciones concretas sobre cómo verificar cada punto</li>
                    <li>Compatible con OpenAI (ChatGPT) y Anthropic (Claude)</li>
                    <li>Guía paso a paso para obtener tu API key</li>
                  </ul>
                  <div className="tool-privacy">⚡ Requiere API key propia · Sin costo para el usuario de esta web</div>
                  <a href="/verificador-ia.html" className="tool-btn">Abrir herramienta →</a>
                </div>
                <div className="coming-soon-card">
                  <div className="cs-icon">🔌</div>
                  <h3>Más herramientas · Próximamente</h3>
                  <p>Se están desarrollando nuevas herramientas con integración de API para tareas avanzadas de análisis jurídico.</p>
                </div>
              </div>
            </div>
          )}

          <div className="contact-box">
            <h2>¿Querés trabajar juntos?</h2>
            <p>Consultas sobre charlas, capacitaciones o proyectos de IA aplicada al derecho.</p>
            <a href="mailto:charlymirassou@gmail.com" className="contact-email">✉️ charlymirassou@gmail.com</a>
          </div>
        </div>
      </div>

      <footer>
        © 2026 Carlos Mirassou Canseco · Derecho & IA ·{' '}
        <a href="https://github.com/charlymirassou">GitHub</a>
      </footer>
    </>
  )
      }

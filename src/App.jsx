import { useEffect, useRef } from 'react'
import { Box } from '@mui/material'
import { LeadProvider } from './contexts/LeadContext'
import FormBusca from './components/FormBusca'
import TabelaLeads from './components/TabelaLeads'
import Historico from './components/Historico'
import BotaoExportar from './components/BotaoExportar'

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const section = canvas.parentElement
    let particles = []
    let animId

    function resize() {
      canvas.width = section.offsetWidth
      canvas.height = section.offsetHeight
    }

    function createParticles() {
      particles = []
      const count = Math.floor((canvas.width * canvas.height) / 12000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 1,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = '#D9E02199'
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            const op = Math.floor((1 - dist / 120) * 60).toString(16).padStart(2, '0')
            ctx.strokeStyle = '#D9E021' + op
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }

    resize()
    createParticles()
    draw()

    const handleResize = () => { resize(); createParticles() }
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  )
}

const navLinks = [
  { label: 'Home', href: 'https://markant.com.br' },
  { label: 'Serviços', href: 'https://markant.com.br/servicos' },
  { label: 'Growth Lab', href: 'https://markant.com.br/growth-lab', active: true },
  { label: 'A Markant', href: 'https://markant.com.br/a-markant' },
  { label: 'Blog', href: 'https://markant.com.br/blog' },
]

const footerServicos = ['Growth Marketing', 'Tráfego Pago', 'Tráfego Orgânico', 'Sites & Landing Pages', 'CRM & Vendas']
const footerNav = [
  { label: 'Home', href: 'https://markant.com.br' },
  { label: 'Serviços', href: 'https://markant.com.br/servicos' },
  { label: 'Growth Lab', href: 'https://markant.com.br/growth-lab' },
  { label: 'A Markant', href: 'https://markant.com.br/a-markant' },
  { label: 'Blog', href: 'https://markant.com.br/blog' },
  { label: 'Contato', href: 'https://markant.com.br/#contato' },
]

const s = {
  linkNav: { color: '#5D5E5D', textDecoration: 'none', fontFamily: 'Lexend, sans-serif', fontSize: 14 },
  btnPrimary: { display: 'inline-block', backgroundColor: '#D9E021', color: '#2B2A29', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 6, textDecoration: 'none' },
  btnOutline: { display: 'inline-block', border: '1px solid rgba(249,249,249,0.2)', color: '#F9F9F9', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 13, padding: '10px 20px', borderRadius: 6, textDecoration: 'none' },
  footerTitle: { fontFamily: 'Space Grotesk, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: '#F9F9F9', marginBottom: 16, marginTop: 0 },
}

export default function App() {
  return (
    <LeadProvider>

      {/* HEADER */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(43,42,41,0.96)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(249,249,249,0.07)' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72, maxWidth: 1280, margin: '0 auto', padding: '0 32px', gap: 16 }}>
          <a href="https://markant.com.br">
            <img src="/Logo_padrao_amarelo_branco.png" alt="Markant" style={{ width: 140, height: 'auto' }} />
          </a>
          <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map(item => (
              <li key={item.label}>
                <a href={item.href} style={{ color: item.active ? '#D9E021' : '#F9F9F9', textDecoration: 'none', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, fontSize: 15 }}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/5514998435234?text=Olá%2C%20vim%20pelo%20site%20da%20Markant%20e%20quero%20solicitar%20contato."
            target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: '#D9E021', color: '#2B2A29', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 14, padding: '10px 20px', borderRadius: 6, textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            Solicitar Contato
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{ position: 'relative', padding: '60px 0 48px', overflow: 'hidden', borderBottom: '1px solid rgba(249,249,249,0.07)' }}>
        <ParticleCanvas />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: '#5D5E5D', fontFamily: 'Lexend, sans-serif' }}>
            <a href="https://markant.com.br" style={{ color: '#5D5E5D', textDecoration: 'none' }}>Home</a>
            <span style={{ margin: '0 8px' }}>→</span>
            <a href="https://markant.com.br/growth-lab" style={{ color: '#5D5E5D', textDecoration: 'none' }}>Growth Lab</a>
            <span style={{ margin: '0 8px' }}>→</span>
            <span style={{ color: '#F9F9F9' }}>Buscador de Leads</span>
          </nav>
          <span style={{ display: 'inline-block', backgroundColor: '#D9E021', color: '#2B2A29', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, padding: '4px 10px', borderRadius: 4, marginBottom: 16, fontFamily: 'Space Grotesk, sans-serif' }}>
            FERRAMENTA
          </span>
          <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#F9F9F9', margin: '0 0 12px', maxWidth: 600 }}>
            Buscador de Leads Qualificados
          </h1>
          <p style={{ fontFamily: 'Lexend, sans-serif', fontSize: 16, color: '#5D5E5D', maxWidth: 500, margin: 0, lineHeight: 1.6 }}>
            Encontre empresas prontas para prospecção com dados direto do Google Maps — e exporte para o seu CRM em segundos.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <main style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 32px' }}>
        <div style={{ backgroundColor: '#333230', border: '1px solid rgba(249,249,249,0.08)', borderRadius: 12, padding: 32, marginBottom: 24 }}>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 18, fontWeight: 600, color: '#F9F9F9', margin: '0 0 24px' }}>
            Insira os dados da busca
          </h2>
          <FormBusca />
        </div>
        <Historico />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mb: 1 }}>
          <BotaoExportar />
        </Box>
        <TabelaLeads />
      </main>

      {/* CTA FINAL */}
      <section style={{ borderTop: '1px solid rgba(249,249,249,0.07)', padding: '64px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 32, fontWeight: 700, color: '#F9F9F9', marginBottom: 12 }}>
          Seus leads podem ser melhores
        </h2>
        <p style={{ fontFamily: 'Lexend, sans-serif', color: '#5D5E5D', marginBottom: 32 }}>
          A ferramenta mostra os dados. A Mark<strong style={{ color: '#D9E021' }}>ant</strong> mostra como convertê-los.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/5514998435234?text=Olá%2C%20quero%20solicitar%20meu%20diagnóstico%20gratuito%20com%20a%20Markant." target="_blank" rel="noopener noreferrer" style={s.btnPrimary}>
            Falar com um especialista
          </a>
          <a href="https://calendar.app.google/VhJwRPjMjvUfMiGB7" target="_blank" rel="noopener noreferrer" style={s.btnOutline}>
            Agendar reunião
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(249,249,249,0.07)', padding: '48px 32px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, paddingBottom: 48 }}>

          <div>
            <a href="https://markant.com.br">
              <img src="/Logo_padrao_amarelo_branco.png" alt="Markant" style={{ width: 140, height: 'auto', marginBottom: 16 }} />
            </a>
            <p style={{ fontFamily: 'Lexend, sans-serif', fontSize: 13, color: '#5D5E5D', lineHeight: 1.6, marginBottom: 20 }}>
              Assessoria estratégica de Growth Marketing.<br />
              Pequenos passos para construir algo grande.
            </p>
            <a href="https://wa.me/5514998435234?text=Olá%2C%20vim%20pelo%20site%20da%20Markant%20e%20quero%20falar%20com%20um%20especialista." target="_blank" rel="noopener noreferrer" style={s.btnPrimary}>
              Falar com um especialista
            </a>
          </div>

          <div>
            <h4 style={s.footerTitle}>NAVEGAÇÃO</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {footerNav.map(item => (
                <li key={item.label}><a href={item.href} style={s.linkNav}>{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={s.footerTitle}>SERVIÇOS</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {footerServicos.map(sv => (
                <li key={sv}><a href="https://markant.com.br/servicos" style={s.linkNav}>{sv}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={s.footerTitle}>CONTATO</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li><a href="mailto:markantofc@gmail.com" style={s.linkNav}>markantofc@gmail.com</a></li>
              <li><a href="https://wa.me/5514998435234" target="_blank" rel="noopener noreferrer" style={s.linkNav}>+55 (14) 9 9843-5234</a></li>
              <li><a href="https://maps.google.com/?q=Incubadora+Sprint-CP+Cornelio+Procopio+PR" target="_blank" rel="noopener noreferrer" style={s.linkNav}>Incubadora Sprint-CP — Cornélio Procópio, PR</a></li>
            </ul>
            <a href="https://calendar.app.google/VhJwRPjMjvUfMiGB7" target="_blank" rel="noopener noreferrer" style={{ ...s.btnOutline, marginTop: 16 }}>
              Agendar reunião
            </a>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(249,249,249,0.07)', padding: '20px 0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontFamily: 'Lexend, sans-serif', fontSize: 12, color: '#5D5E5D', margin: 0 }}>
            CNPJ: 64.988.570/0001-14 · MARKANT SOFTWARE LTDA · Fundada em 2025
          </p>
          <p style={{ fontFamily: 'Lexend, sans-serif', fontSize: 12, color: '#5D5E5D', margin: 0 }}>
            © 2025 Markant. Todos os direitos reservados. ·{' '}
            <a href="https://markant.com.br/termos-de-uso" style={{ color: '#5D5E5D' }}>Termos de uso</a> ·{' '}
            <a href="https://markant.com.br/politica-de-privacidade" style={{ color: '#5D5E5D' }}>Política de privacidade</a>
          </p>
        </div>
      </footer>

    </LeadProvider>
  )
}
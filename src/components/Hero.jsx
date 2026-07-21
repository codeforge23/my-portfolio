import { useEffect, useRef, useState } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  const canvasRef = useRef(null)
  const [titleIndex, setTitleIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length)
        setVisible(true)
      }, 600)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    let animationId
    const particles = []
    const count = 80

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < count; i += 1) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = '#faf602'
        ctx.fill()

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(250, 246, 2, ${1 - dist / 120})`
            ctx.stroke()
          }
        })
      })
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="banner" id="home">
      <canvas ref={canvasRef} className="banner-particles" aria-hidden="true" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-content">
              <h2 className="cd-headline clip">
                <span className="before-heading">Hello world!</span>
                <span className="cd-words-wrapper">
                  <b className={visible ? 'is-visible' : ''}>{personalInfo.titles[titleIndex]}</b>
                </span>
              </h2>
              <p>{personalInfo.introduce}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

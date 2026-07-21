import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { projects, getProjectImage } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setActiveProject(null)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <SectionTitle title="Portfolio" subtitle="See Some Of My Previous Works" />

        <div className="row portfolio-boxes">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 col-sm-6 col-xs-12 portfolio-box">
              <div className="single-portfolio">
                <button
                  type="button"
                  className="portfolio-trigger"
                  onClick={() => setActiveProject(project)}
                >
                  <img src={getProjectImage(project, '0.png')} alt={project.title} />
                  <div className="single-portfolio-overlay">
                    <h3>{project.title}</h3>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="popup-overlay" onClick={() => setActiveProject(null)} role="presentation">
          <div
            className="popup-box"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
          >
            <button
              type="button"
              className="popup-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="content">
              <div className="image">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className="portfolio-gallery"
                >
                  {activeProject.images.map((image) => (
                    <SwiperSlide key={image}>
                      <img src={getProjectImage(activeProject, image)} alt={activeProject.title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="desc">
                <p>
                  <a href={activeProject.url} target="_blank" rel="noreferrer">
                    <h4 id="popup-title">-&gt; {activeProject.subtitle} &lt;-</h4>
                  </a>
                </p>
                <p>{activeProject.description}</p>
                <p>Skills: {activeProject.skills}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

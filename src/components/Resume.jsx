import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { experiences, education, skills } from '../data/portfolioData'
import SectionTitle from './SectionTitle'
import StarRating from './StarRating'

export default function Resume() {
  return (
    <section className="my-resume" id="resume">
      <div className="container">
        <SectionTitle title="My Resume" />

        <div className="row mb-5 pb-5">
          <div className="col-md-12">
            <div className="experience">
              <h3 className="sub-title">
                <i className="fa fa-briefcase" /> Experience
              </h3>

              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true, el: '.experience-pagination' }}
                spaceBetween={30}
                slidesPerView={1}
                className="experience-slider"
              >
                {experiences.map((exp) => (
                  <SwiperSlide key={`${exp.company}-${exp.period}`}>
                    <div className="experience-single">
                      <h5>{exp.title}</h5>
                      <h4>
                        {exp.company} • {exp.period}
                      </h4>
                      <ul>
                        {exp.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="experience-pagination" />
            </div>
          </div>

          <div className="col-md-12">
            <div className="education">
              <h3 className="sub-title">
                <i className="fa fa-graduation-cap" /> Education
              </h3>

              <div className="experience-single">
                <h5>
                  {education.dateFrom} - {education.dateTo}
                </h5>
                <h4>
                  {education.degree} - {education.field}
                </h4>
                <p>{education.name}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="skill">
              <h3 className="sub-title">
                <i className="fa fa-star-o" /> Skills and Expertise
              </h3>

              <div className="skill-content">
                <div className="row">
                  {skills.map((skill) => (
                    <div key={skill.name} className="col-md-2">
                      <div className="skill-single">
                        <h5>{skill.name}</h5>
                        <StarRating rating={skill.exp} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

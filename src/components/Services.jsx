import { services } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <SectionTitle title="My Services" />

        <div className="row" style={{ marginTop: '15px' }}>
          {services.map((service) => (
            <div key={service.title} className="col-md-4">
              <div className="service-single">
                <div className="icon-box">
                  <i className={service.icon} />
                </div>
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

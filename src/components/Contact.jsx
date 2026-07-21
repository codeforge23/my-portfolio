import { personalInfo } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

export default function Contact() {
  return (
    <>
      <section className="contactus" id="contact">
        <div className="container">
          <SectionTitle title="Get in touch" subtitle="Feel free to drop me a line - Contact me" />
        </div>
      </section>

      <div className="contact-information">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-info-single">
                <h3>Email</h3>
                <p>{personalInfo.email}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-single">
                <h3>Number</h3>
                <p>{personalInfo.contactNumber}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-single">
                <h3>Skype</h3>
                <p>{personalInfo.skypeId}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

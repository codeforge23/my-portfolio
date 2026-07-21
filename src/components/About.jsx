import { personalInfo } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <SectionTitle title="About Me" />

        <div className="row">
          <div className="col-lg-4" style={{ display: 'flex', alignItems: 'end' }}>
            <div className="about-image">
              <img src="/images/avatar.png" alt={`${personalInfo.firstName} ${personalInfo.lastName}`} />
            </div>
          </div>

          <div className="col-lg-8" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="about-content">
              <h3>
                I&apos;m {personalInfo.firstName} {personalInfo.lastName}
              </h3>
              <p>{personalInfo.aboutText}</p>

              <ul>
                <li>
                  <i className="flaticon-freelance" />
                  <b>Full-time:</b> {personalInfo.availability}
                </li>
                <li>
                  <i className="flaticon-placeholder" />
                  <b>Based on:</b> {personalInfo.basedOn}
                </li>
                <li>
                  <i className="flaticon-email" />
                  <b>Email:</b> {personalInfo.email}
                </li>
                <li>
                  <i className="flaticon-whatsapp" />
                  <b>Number:</b> {personalInfo.contactNumber}
                </li>
                <li style={{ width: '100%' }}>
                  <i className="flaticon-skype" />
                  <b>Skype:</b> {personalInfo.skypeId}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

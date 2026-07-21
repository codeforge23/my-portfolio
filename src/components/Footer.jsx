import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-logo">
              <h1>
                <span>{personalInfo.firstName}</span> {personalInfo.lastName}
              </h1>
            </div>

            <div className="footer-about">
              <p>{personalInfo.footerAbout}</p>
            </div>

            <div className="footer-social">
              <a href="#contact" aria-label="Telegram">
                <i className="fa fa-telegram" />
              </a>
              <a href="#contact" aria-label="Email">
                <i className="fa fa-envelope" />
              </a>
              <a href="#contact" aria-label="Skype">
                <i className="fa fa-skype" />
              </a>
            </div>

            <div className="footer-copyright">
              <p>
                Copyright &copy; 2024. All rights reserved. Design By{' '}
                <b>
                  {personalInfo.firstName} {personalInfo.lastName}
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

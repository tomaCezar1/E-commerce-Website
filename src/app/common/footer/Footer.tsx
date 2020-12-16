import Link from 'next/link'
import FacebookIcon from '../../../../public/svg/FacebookIcon.svg'
import LinkedInIcon from '../../../../public/svg/LinkedInIcon.svg'
import InstagramIcon from '../../../../public/svg/InstagramIcon.svg'
import CegoltarLogo from '../../../../public/svg/cegoltar-footer-logo.svg'

const date = new Date()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-links-container">
          <div className="footer-links-wrapper">
            <div className="footer-links-group">
              <p className="footer-links-heading">Link-uri</p>
              <p className="footer-link">Service centru</p>
              <p className="footer-link">Magazine regionale</p>
            </div>
            <div className="footer-links-group" style={{marginLeft: 50}}>
              <p className="footer-links-heading">Informații</p>
              <p className="footer-link">Condiții de garanție</p>
              <p className="footer-link">Despre noi</p>
              <p className="footer-link">Livrare</p>
              <p className="footer-link">Politica de confidențialitate</p>
              <p className="footer-link">Termeni de utilizare</p>
            </div>
          </div>
          <div className="footer-phone-wrapper">
            <div className="footer-phone-number">
              <p>Call centru: </p>
              <a href="tel: +373 69 606 707">+373 69 606 707</a>
            </div>
            <div className="footer-logo">
              <i style={{ height: '52px', width: '256px' }}>
                <CegoltarLogo />
              </i>
            </div>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-copyright">
          <div className="footer-social-icons">
            <i className="footer-icon">
              <FacebookIcon />
            </i>
            <i className="footer-icon">
              <InstagramIcon />
            </i>
            <i className="footer-icon">
              <LinkedInIcon />
            </i>
          </div>
          <div className="footer-copyright-text">
            Copyright &copy; {date.getFullYear()} Cegoltar S.R.L. str. Petricani, 21 MD-2005
          </div>
        </div>
      </div>
    </footer>
  )
}

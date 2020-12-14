import Link from 'next/link'
import FacebookIcon from '../../../../public/svg/FacebookIcon.svg'
import LinkedInIcon from '../../../../public/svg/LinkedInIcon.svg'
import InstagramIcon from '../../../../public/svg/InstagramIcon.svg'
import CegoltarLogo from '../../../../public/svg/cegoltar-footer-logo.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div
        style={{ display: 'flex', width: '1152px', flexDirection: 'column' }}
      >
        <div className="footer-container">
          <div className="footer-info-container">
            <div className="footer-info">
              <p className="footer-titles">Informatii</p>
              <Link href="/about-us">Despre noi</Link>
              <Link href="/">Condiții de garanție</Link>
              <Link href="/">Magazine regionale</Link>
              <Link href="/">Livrare</Link>
              <Link href="/">Termeni și condiții</Link>
            </div>
            <div className="footer-info footer-info-ml">
              <p className="footer-titles">Informatii</p>
              <Link href="/about-us">Despre noi</Link>
              <Link href="/">Condiții de garanție</Link>
              <Link href="/">Magazine regionale</Link>
              <Link href="/">Livrare</Link>
              <Link href="/">Termeni și condiții</Link>
            </div>
            <div className="footer-info footer-info-ml">
              <p className="footer-titles">Informatii</p>
              <Link href="/about-us">Despre noi</Link>
              <Link href="/">Condiții de garanție</Link>
              <Link href="/">Magazine regionale</Link>
              <Link href="/">Livrare</Link>
              <Link href="/">Termeni și condiții</Link>
            </div>
          </div>
          <div className="contact-info-container">
            <p className="contact-info">
              <span className="display-block">Call centru:</span>
              <span className="display-block"> +373 69 606 707</span>
            </p>
            <i style={{ height: '52px', width: '256px' }}>
              <CegoltarLogo />
            </i>
          </div>
        </div>

        <hr className="footer-hr" />

        <div className="icons-footer-wrapper">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <i className="footer-icons">
              <FacebookIcon />
            </i>
            <i className="footer-icons">
              <InstagramIcon />
            </i>
            <i className="footer-icons">
              <LinkedInIcon />
            </i>
          </div>
          <p className="footer-copywright">
            Copywright &copy; 2020 Cegoltar S.R.L. str. Petricani, 21 MD-2005
          </p>
        </div>
      </div>
    </footer>
  )
}

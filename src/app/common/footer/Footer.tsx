import Link from 'next/link';
import { useRouter } from 'next/router';
import FacebookIcon from '../../../../public/svg/FacebookIcon.svg';
import InstagramIcon from '../../../../public/svg/InstagramIcon.svg';
import CegoltarLogo from '../../../../public/svg/cegoltar-footer-logo.svg';
import Phone from '../../../../public/svg/phone-white.svg';

const date = new Date();

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-links-container">
          <div className="footer-links-wrapper">
            <div className="footer-links-group">
              <p className="footer-links-heading">Link-uri</p>
              <Link href="/service" locale={router.locale}>
                <span className="footer-link">Service centru</span>
              </Link>
              <Link href="/regional-store" locale={router.locale}>
                <span className="footer-link">Magazine regionale</span>
              </Link>
              <Link href="/news" locale={router.locale}>
                <span className="footer-link">Știri</span>
              </Link>
              <Link href="/jobs" locale={router.locale}>
                <span className="footer-link">Posturi vacante</span>
              </Link>
            </div>
            <div className="footer-links-group" style={{ marginLeft: 50 }}>
              <p className="footer-links-heading">Informații</p>
              <Link href="/guarantee" locale={router.locale}>
                <span className="footer-link">Condiții de garanție</span>
              </Link>
              <Link href="/about" locale={router.locale}>
                <span className="footer-link">Despre noi</span>
              </Link>
              <Link href="/delivery" locale={router.locale}>
                <span className="footer-link">Livrare</span>
              </Link>
              <Link href="/privacy" locale={router.locale}>
                <span className="footer-link">
                  Politica de confidențialitate
                </span>
              </Link>
              <Link
                href="/terms"
                as="/terms-and-conditions"
                locale={router.locale}
              >
                <span className="footer-link">Termeni de utilizare</span>
              </Link>
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
        <div className=" footer-divider-mobile" />

        <div className="footer-copyright">
          <div className="footer-social-icons">
            <a
              className="footer-icon"
              href="https://www.facebook.com/cegoltar.md/"
            >
              <i>
                <FacebookIcon />
              </i>
            </a>

            <a
              className="footer-icon"
              href="https://instagram.com/cegoltar?igshid=1hsf8mg0vy5jw"
            >
              <i className="footer-icon">
                <InstagramIcon />
              </i>
            </a>
          </div>

          <div className="footer-copyright-text">
            Copyright &copy; {date.getFullYear()} Cegoltar S.R.L. str.
            Petricani, 21 MD-2005
          </div>
        </div>

        <div className="footer-phone-wrapper-mobile">
          <div className="footer-copyright-mobile">
            <div className="footer-social-icons">
              <i className="footer-icon">
                <FacebookIcon />
              </i>
              <i className="footer-icon">
                <InstagramIcon />
              </i>
            </div>

            <div className="cursor-pointer footer-phone-mobile">
              <i>
                <Phone />
              </i>
              <a href="tel:+373 69 000 000">069 00 00 00</a>
            </div>
          </div>
          <div className=" footer-divider-mobile" />
          <div className="footer-copyright-text">
            Copyright &copy; {date.getFullYear()} Cegoltar S.R.L. str.
            Petricani, 21 MD-2005
          </div>
        </div>
      </div>
    </footer>
  );
}

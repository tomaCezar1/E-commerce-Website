import Link from 'next/link';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '../../../context';
import FacebookIcon from '../../../../public/svg/FacebookIcon.svg';
import InstagramIcon from '../../../../public/svg/InstagramIcon.svg';
import CegoltarLogo from '../../../../public/svg/cegoltar-footer-logo.svg';
import Phone from '../../../../public/svg/phone-white.svg';

const date = new Date();

export default function Footer() {
  const router = useRouter();
  const { appContext } = useContext(AppContext);
  const dictionary = appContext.dictionary;

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-links-container">
          <div className="footer-links-wrapper">
            <div className="footer-links-group">
              <p className="footer-links-heading">{dictionary.links}</p>
              <Link href="/service" locale={router.locale}>
                <div className="flex-row align-center">
                  <span className="material-icons">handyman</span>
                  <span className="footer-link">
                    {dictionary.serviceCenter}
                  </span>
                </div>
              </Link>
              <Link href="/regional-store" locale={router.locale}>
                <div className="flex-row align-center">
                  <span className="material-icons">store</span>
                  <span className="footer-link">
                    {dictionary.regionalStores}
                  </span>
                </div>
              </Link>
              <Link href="/news" locale={router.locale}>
                <div className="flex-row align-center">
                  <span className="material-icons">article</span>
                  <span className="footer-link">{dictionary.news}</span>
                </div>
              </Link>
              <Link href="/jobs" locale={router.locale}>
                <div className="flex-row align-center">
                  <span className="material-icons">people</span>
                  <span className="footer-link">{dictionary.jobs}</span>
                </div>
              </Link>
            </div>
            <div className="footer-links-group" style={{ marginLeft: 50 }}>
              <p className="footer-links-heading">{dictionary.information}</p>
              <Link href="/guarantee" locale={router.locale}>
                <div className="flex-row align-center">
                  <span className="material-icons">beenhere</span>
                  <span className="footer-link">{dictionary.guaranteeTerms}</span>
                </div>
              </Link>
              <Link href="/about" locale={router.locale}>
                <div className="flex-row align-center">
                  <span className="material-icons">info</span>
                  <span className="footer-link">{dictionary.aboutUs}</span>
                </div>
              </Link>
              <Link href="/delivery" locale={router.locale}>
                <div className="flex-row align-center">
                  <span className="material-icons">directions_car</span>
                  <span className="footer-link">{dictionary.delivery}</span>
                </div>
              </Link>
              <Link href="/privacy" locale={router.locale}>
                <div className="flex-row align-center">
                  <span className="material-icons">privacy_tip</span>
                  <span className="footer-link">{dictionary.privacy}</span>
                </div>
              </Link>
              <Link href="/terms" as="/terms" locale={router.locale}>
                <div className="flex-row align-center">
                  <span className="material-icons">policy</span>
                  <span className="footer-link">
                    {dictionary.termsAndConditions}
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="footer-phone-wrapper">
            <div className="footer-phone-number">
              <p>{dictionary.callCenter}: </p>
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
            {dictionary.copyrightFirst} {date.getFullYear()}
            {dictionary.copyrightSecond}
          </div>
        </div>

        <div className="footer-phone-wrapper-mobile">
          <div className="footer-copyright-mobile">
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/cegoltar.md/">
                <i className="footer-icon">
                  <FacebookIcon />
                </i>
              </a>
              <a
                href="https://instagram.com/cegoltar?igshid=1hsf8mg0vy5jw"
                style={{ marginLeft: 15 }}
              >
                <i className="footer-icon">
                  <InstagramIcon />
                </i>
              </a>
            </div>

            <a
              href="tel:+373 69 000 000"
              className="cursor-pointer footer-phone-mobile"
            >
              <i>
                <Phone />
              </i>
              <span>069 00 00 00</span>
            </a>
          </div>
          <div className=" footer-divider-mobile" />
          <div className="footer-copyright-text">
            {dictionary.copyrightFirst} {date.getFullYear()}
            {dictionary.copyrightSecond}
          </div>
        </div>
      </div>
    </footer>
  );
}

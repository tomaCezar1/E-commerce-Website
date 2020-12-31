import Footer from '../footer/Footer';
import Header from '../header/Header';
import MobileHeader from '../header/MobileHeader/MobileHeader';
import NextNprogress from 'nextjs-progressbar';

export default function Layout({ children }): JSX.Element {
  return (
    <>
      <NextNprogress color="#124193" startPosition={0.3} stopDelayMs={200} />
      <MobileHeader />
      <div className="layout-container" id="homepage">
        <Header />
        {children}
        <div className="footer-push" />
      </div>
      <Footer />
    </>
  );
}

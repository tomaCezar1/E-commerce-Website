import Footer from '../footer/Footer';
import Header from '../header/Header';
import MobileHeader from '../header/MobileHeader/MobileHeader';
import NextNprogress from 'nextjs-progressbar';

export default function Layout({ children }): JSX.Element {
  const { innerWidth } = window;
  return (
    <>
      <NextNprogress color="#124193" startPosition={0.3} stopDelayMs={200} />
      {innerWidth < 1250 ? <MobileHeader /> : null}
      <div className="layout-container" id="homepage">
        {innerWidth > 1250 ? <Header /> : null}
        {children}
        <div className="footer-push" />
      </div>
      <Footer />
    </>
  );
}

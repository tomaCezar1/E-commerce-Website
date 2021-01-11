import Footer from '../footer/Footer';
import Header from '../header/Header';
import MobileHeader from '../header/MobileHeader/MobileHeader';
import NextNprogress from 'nextjs-progressbar';
import { useMediaQuery } from '@chakra-ui/react';

export default function Layout({ children }): JSX.Element {
  const [isLargerThan1152] = useMediaQuery('(min-width: 1152px)');

  return (
    <>
      <NextNprogress
        color={isLargerThan1152 ? '#124193' : '#ffffff'}
        startPosition={0.3}
        stopDelayMs={200}
      />
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

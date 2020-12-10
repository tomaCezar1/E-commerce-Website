import Footer from '../footer/Footer'
import Header from '../header/Header'

export default function Layout({children}): JSX.Element {
  return (
    <>
      <div className="layout-container">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  )
}

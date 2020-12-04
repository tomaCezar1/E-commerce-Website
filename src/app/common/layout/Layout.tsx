import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Layout({children}) {
  return (
    <div className="layout-container">
      <Header/>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
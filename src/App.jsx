import './App.css'
import Beneficios from './components/Beneficios'
import Dato from './components/Dato'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Home from './components/Home'
import Llamada from './components/Llamada'
import SobreMi from './components/SobreMi'
import Testimonios from './components/Testimonios'

function App() {

  return (
    <>
     <Home />
     <Dato />
     <SobreMi />
     <section className="curved-sobreMi"></section>
     <Beneficios />
     <section className="curved-beneficios"></section>
     <Testimonios />
     <Llamada />
     <Faq />
     <Footer />
    </>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Technologies from './components/Technologies'
import Portfolio from './components/Portfolio'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <ContactForm />
    </>
  )
}

export default App

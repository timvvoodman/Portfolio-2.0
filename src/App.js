import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Technologies from './components/Technologies'
import Portfolio from './components/Portfolio'
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Technologies />
      <Portfolio />
    </>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Todo from './pages/Todo'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Header />

        <div className='container my-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='*' element={<Navigate to={'/notfound'} />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  )
}

export default App

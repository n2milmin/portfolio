import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home.js";
import Professional from './pages/professional.js';
import Academic from './pages/academic.js';
import NavBar from './components/navBar.js';
import Footer from './components/footer.js';
import './App.css';

function App() {
  return (
    <Router className="App">
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/professional" element={<Professional />}/>
          <Route path="/academic" element={<Academic />}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
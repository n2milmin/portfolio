import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import NavBar from './components/navBar.js';
import Footer from './components/footer.js';


function App() {
  return (
    <Router className="App">
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
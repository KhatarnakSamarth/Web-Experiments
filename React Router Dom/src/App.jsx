import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Simple components for each page
const Home = () => <div><h2>This is Home page</h2></div>;
const About = () => <div><h2>This is About page</h2></div>;
const Contact = () => <div><h2>This is Contact page</h2></div>;

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Menu */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Page Content based on URL */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 
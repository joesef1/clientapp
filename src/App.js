// import './index.css';
// import './input.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import ReadPage from './pages/ReadPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
          <Routes>
                <Route path="/" element={<CreatePage />} />
                <Route path="/ReadPage" element={<ReadPage />} />
      </Routes>
        </BrowserRouter>

    </>
    
  );
}

export default App;

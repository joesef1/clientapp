// import './index.css';
// import './input.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import ReadPage from './pages/ReadPage';
import EditModal from './pages/EditModal';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
          <Routes>
                <Route path="/" element={<CreatePage />} />
                <Route path="/ReadPage" element={<ReadPage />} />
                <Route path="/EditModal" element={<EditModal />} />
      </Routes>
        </BrowserRouter>

    </>
    
  );
}

export default App;

import './App.css';
import Navbar from './components/layouts/Navbar';
import Index from "./components/layouts/index";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import {BlogProvider} from './context';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <div className="container">
        <BlogProvider>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        </BlogProvider>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;

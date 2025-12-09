import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import ProjectLoader from './components/ProjectLoader';
import ThemeProvider from './context/themeContext';

function App() {

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/projects/:id' element={<ProjectLoader />}></Route>
          <Route path='/contact' element={<Contact />}></Route>

          {/* Catch-all route for 404 */}
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

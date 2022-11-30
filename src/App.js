
import {Route, BrowserRouter as Router,Routes , Outlet} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Footer from './Components/Footer/Footer';
import ServicesPage from './Pages/ServicesPage';
import CustomWebPage from './Pages/CustomWebPage';
import CustomAppPage from './Pages/CustomAppPage';
import UiUxPage from './Pages/UiUxPage';
import ScrollToTop from './Helpers/ScrollTopTop';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
<ScrollToTop/>
        <Navbar />
        <Outlet />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/custom-web-development" element={<CustomWebPage />} />
          <Route path="/services/custom-app-development" element={<CustomAppPage />} />
          <Route path="/services/ui-ux-design" element={<UiUxPage/>} />
          <Route path="*" element={<ErrorPage/>} />
          
        </Routes>
        <Footer />
      </Router>
    
    </div>
  );
}

export default App;

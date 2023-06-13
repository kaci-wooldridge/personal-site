import NavBar from './components/NavBar';
import AppViews from './components/AppViews';
import { BrowserRouter } from 'react-router-dom';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <NavBar />
      <AppViews />
      {/* <Footer /> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
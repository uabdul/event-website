import '../styles/App.css';
import Header from './Header';
import Main from './Main';
import Navigation from './Navigation';
import Footer from './Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="site-body">
        <Navigation />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;

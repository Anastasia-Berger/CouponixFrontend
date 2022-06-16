import './App.css';
import Header from './Components/LayoutArea/Header/Header';
import Main from './Components/LayoutArea/Main/Main';
import Footer from './Components/LayoutArea/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

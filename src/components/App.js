
import Header from './Header'
import Main from './Main';
import Footer from './Footer'

const App = () => {
  return (
    <div className='container-fluid bg-light' aria-label='app'>
      <Header />
      <div className='container'>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import Header from './component/Header'
import Prototypes from './component/Prototypes'
import Orders from './component/Orders'
import Footer from './component/Footer'
import AppStateProvider from './providers/AppStateProvider';

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className='container'>
        <Prototypes />
        <Orders />
      </div>
      <Footer />
    </AppStateProvider>
  );
}

export default App;
import Feature from './component/feature';
import Header from './component/header';
import Navigation from './component/navbar';
import About from './component/about';
import Service from './component/service';
import History from './component/history';


function App() {

  
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Feature />
      <About />
      <Service />
      <History />
    </div>
    
  );
}

export default App;

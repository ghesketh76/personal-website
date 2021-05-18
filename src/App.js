
import './App.css';
import {data} from '../src/components/data'
import Header from './components/Header';
import Footer from './components/footer';
import Body from './components/Body';
import Contact from './components/Contact'

function App() {

  const name = data.name
  const fullName = data.fullName
  const occupation = data.occupation
  
  return (
    <div className="App">
      <Header name={name} fullName={fullName} occupation={occupation}/>
      <Body name={name} fullName={fullName} occupation={occupation}/>
      <Contact name={name} fullName={fullName} occupation={occupation}/>
      <Footer name={name} fullName={fullName} occupation={occupation}/>
    </div>
  );
}

export default App;

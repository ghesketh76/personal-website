
import './App.css';
import {data} from '../src/components/data'
import Header from './components/Header';

function App() {

  const name = data.name
  const fullNaame = data.fullName
  const occupation = data.occupation
  
  return (
    <div className="App">
      <Header />
  
    </div>
  );
}

export default App;

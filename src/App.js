
import './App.css';
import {data} from '../src/components/data'

function App() {

  const name = data.name
  const fullNaame = data.fullName
  const occupation = data.occupation
  
  return (
    <div className="App">
      <header>
        <h1> Up here will be some buttons to click to take you to various parts of the site</h1>
        <ul>
          <li>Tab 1</li>
          <li>Tab 2</li>
          <li>Tab 3</li>
        </ul>
        </header>
      <h1>This is my website</h1>
      <h2>This is where i will put a blurb about myself</h2>
      <h3>put a picture of myself here</h3>
      <p>Some picyures of what i like to do</p>
      <p>This will be a paragraph about myself</p>
    </div>
  );
}

export default App;

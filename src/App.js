import './App.css';
import { Details } from './Data';
import Info from './Info';
import Maps from './Maps';
import Message from './Message';
import Rendering from './Rendering';
// import TabButton from './TabButton';
import State from './State';
import Toggle from './Toggle';
function App() {
  return (
    <div className="App">
      <Info />
      {/* method1 */}
      <Message
        name="xxx"
        qualification="HSC"
        age="30"
      />
      <Message
        name="yyx"
        qualification="HSC"
        age="30"
      />
      <Message
        name="xyx"
        qualification="SSlC"
        age="20"
      />
      {/* method2 */}
      <Message
        name={Details[0].name}
        qualification={Details[0].qualification}
        age={Details[0].age}
      />
      <Message
        name={Details[1].name}
        qualification={Details[1].qualification}
        age={Details[1].age}
      />
      {/* method3 */}
      <Message {...Details[2]}
      />
      <State />
      {/* <menu>
        <TabButton>Component</TabButton>
        <TabButton>props</TabButton>
        <TabButton>state</TabButton>
      </menu> */}
      <Rendering />
      <Toggle />
      <Maps />
    </div>
  );
}

export default App;

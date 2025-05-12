import './App.css';
import { Details } from './Components/Section3/Data';
import Info from './Components/Section3/Info';
import Maps from './Components/Section3/Maps';
import Message from './Components/Section3/Message';
import Rendering from './Components/Section3/Rendering';
// import TabButton from './TabButton';
import State from './Components/Section3/State';
import Toggle from './Components/Section3/Toggle';
import ForwardingProps from './Components/Section4/ForwardingProps';
import Fragment from './Components/Section4/Fragment';
import CounterApp from './Components/Section4/SplitByFeature&State/CounterApp';
import WithoutJs from './Components/Section4/WithoutJs';
import Card from './Components/Section4/Card';
import CustomProps from './Components/Section4/CustomProps';
import DefaultProps from './Components/Section4/DefaultProps';
import TwowayBinding from './Components/Section4/TwowayBinding';
import MultiDimension from './Components/Section4/MultiDimension';
import Intersecting from './Components/Section4/Intersecting';
import { useState } from 'react';
import PriceList from './Components/Section4/PriceList';
function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      {/* Section 3 */}
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

      {/* section 4 */}
      <WithoutJs />
      <Fragment />
      <CounterApp />
      <ForwardingProps onClick={() => { alert("Example of Forwarding props...") }} />
      <Card header={<h2>This is header</h2>}
        footer={<h2>Footer</h2>}>
        <p>This is content</p>
      </Card>
      <CustomProps as="h1">Heading Text</CustomProps>
      <DefaultProps names="xxx" />
      <TwowayBinding />
      <MultiDimension />
      <Intersecting inputValue={inputValue} setInputValue={setInputValue} />
      <PriceList />
    </div>
  );
}

export default App;

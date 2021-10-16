import logo from './logo.svg';
import './App.css';
//import {Greet}  from './components/Greet'; when used export with const
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/functionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';


function App() {
  return (
    <div className="App">
      <EventBind></EventBind>
     {/* <FunctionClick></FunctionClick>
     <ClassClick></ClassClick> */}
      {/* <Greet></Greet>
      <Welcome></Welcome> */}
      {/* <Hello></Hello> */}
       {/* <Greet name='Bruce' heroName='Batman'>
        
      </Greet> */}
      {/* <Greet name='Pranav' heroName='superMan'>
       
      </Greet>  */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
    </div>
  );
}

export default App;

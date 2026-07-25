import React,{useState} from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

function App(){
 const [count,setCount]=useState(5);

 const increment=()=>setCount(count+1);
 const decrement=()=>setCount(count-1);

 const sayHello=()=>alert('Hello Member!');

 const incrementAndHello=()=>{
  increment();
  sayHello();
 };

 const sayWelcome=(msg)=>alert(msg);

 const onPress=()=>alert('I was clicked');

 return(
 <div>
  <h2>{count}</h2>
  <button onClick={incrementAndHello}>Increment</button><br/>
  <button onClick={decrement}>Decrement</button><br/>
  <button onClick={()=>sayWelcome('welcome')}>Say welcome</button><br/>
  <button onClick={onPress}>Click on me</button>

  <CurrencyConvertor/>
 </div>
 );
}

export default App;

import React,{useState} from 'react';

export default function CurrencyConvertor(){
 const [amount,setAmount]=useState('');
 const [currency,setCurrency]=useState('');

 const handleSubmit=(e)=>{
  e.preventDefault();
  const euro=parseFloat(amount)/90;
  alert('Euro Value : '+euro.toFixed(2));
 };

 return(
 <div>
  <h1 style={{color:'green'}}>Currency Convertor!!!</h1>
  <form onSubmit={handleSubmit}>
   <label>Amount: </label>
   <input value={amount} onChange={(e)=>setAmount(e.target.value)}/><br/><br/>
   <label>Currency: </label>
   <input value={currency} onChange={(e)=>setCurrency(e.target.value)}/><br/><br/>
   <button type="submit">Submit</button>
  </form>
 </div>
 );
}

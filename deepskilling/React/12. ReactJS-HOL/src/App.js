import React,{useState} from 'react';
import Greeting from './components/Greeting';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

export default function App(){
const [isLoggedIn,setIsLoggedIn]=useState(false);
return(
<div style={{margin:'100px 180px'}}>
<Greeting isLoggedIn={isLoggedIn}/>
{isLoggedIn ? <LogoutButton onClick={()=>setIsLoggedIn(false)}/> : <LoginButton onClick={()=>setIsLoggedIn(true)}/>}
<h2>Flight Ticket Booking Portal</h2>
<p>Guests can browse flight details.</p>
<p>Logged in users can book tickets.</p>
</div>
);
}
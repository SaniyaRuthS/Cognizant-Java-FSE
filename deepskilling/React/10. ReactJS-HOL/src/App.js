
import './App.css';

function App(){

const officeSpaces=[
{Name:'DBS',Rent:50000,Address:'Chennai',Image:'https://picsum.photos/300/200?1'},
{Name:'Regus',Rent:65000,Address:'Bangalore',Image:'https://picsum.photos/300/200?2'},
{Name:'WeWork',Rent:75000,Address:'Hyderabad',Image:'https://picsum.photos/300/200?3'}
];

const element='Office Space';

return(
<div className="container">
<h1>{element}, at Affordable Range</h1>

{
officeSpaces.map((item,index)=>{
let colorClass=item.Rent<=60000?'textRed':'textGreen';

return(
<div key={index}>
<img src={item.Image} alt="Office Space"/>
<h1>Name: {item.Name}</h1>
<h3 className={colorClass}>Rent: Rs. {item.Rent}</h3>
<h3>Address: {item.Address}</h3>
<br/>
</div>
);
})
}
</div>
);
}

export default App;

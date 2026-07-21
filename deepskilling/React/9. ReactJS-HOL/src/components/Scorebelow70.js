export default function Scorebelow70({players}){
 const players70=players.filter(item=>item.score<=70);
 return(
  <div>
   {players70.map((item,index)=>(
    <li key={index}>Mr. {item.name} {item.score}</li>
   ))}
  </div>
 );
}

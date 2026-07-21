export default function ListofPlayers({players}){
 return(
  <div>
   {players.map((item,index)=>(
    <li key={index}>Mr. {item.name} {item.score}</li>
   ))}
  </div>
 );
}

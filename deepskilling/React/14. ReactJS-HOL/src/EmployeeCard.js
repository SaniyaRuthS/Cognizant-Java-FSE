import React,{useContext} from 'react';
import ThemeContext from './ThemeContext';
export default function EmployeeCard({employee}){
 const theme=useContext(ThemeContext);
 return <div className="card"><h3>{employee.name}</h3><p>{employee.designation}</p><button className={theme}>View Details</button></div>
}
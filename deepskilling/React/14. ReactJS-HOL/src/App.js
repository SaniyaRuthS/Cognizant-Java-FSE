import React,{useState} from 'react';
import EmployeeList from './EmployeeList';
import ThemeContext from './ThemeContext';

export default function App(){
 const [theme]=useState('light');
 const employees=[
 {id:1,name:'John Doe',designation:'Software Engineer'},
 {id:2,name:'Jane Smith',designation:'Senior Developer'},
 {id:3,name:'David Johnson',designation:'Project Manager'}
 ];

 return (
 <ThemeContext.Provider value={theme}>
  <div>
   <h1>Employee Management System</h1>
   <EmployeeList employees={employees}/>
  </div>
 </ThemeContext.Provider>
 );
}
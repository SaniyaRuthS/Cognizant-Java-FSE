import EmployeeCard from './EmployeeCard';
export default function EmployeeList({employees}){
 return <div>{employees.map(emp=><EmployeeCard key={emp.id} employee={emp}/>)}</div>
}
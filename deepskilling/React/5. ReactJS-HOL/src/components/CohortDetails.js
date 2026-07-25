import styles from './CohortDetails.module.css';
export default function CohortDetails({name,startDate,status,coach,trainer}){
const color=status.toLowerCase()==='ongoing'?'green':'blue';
return <div className={styles.box}><h3 style={{color}}>{name}</h3><dl><dt>Started On</dt><dd>{startDate}</dd><dt>Current Status</dt><dd>{status}</dd><dt>Coach</dt><dd>{coach}</dd><dt>Trainer</dt><dd>{trainer}</dd></dl></div>
}
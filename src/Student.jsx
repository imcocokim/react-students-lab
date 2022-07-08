import Score from './Score'

const Student = (props) => {
  return ( 
    <>
      <h2>{props.student.name}</h2>
      <p>{props.student.bio}</p>
      {props.student.scores.map((score, idx)=>
        <Score score={score} key={idx}/>
      )}  
    </>
  );
}

export default Student;
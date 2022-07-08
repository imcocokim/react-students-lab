const Score = (props) => {
  return ( 
    <div>
      <p>DATE: {props.score.date}</p>
      <p>SCORE: {props.score.score}</p>
    </div>
  );
}

export default Score;
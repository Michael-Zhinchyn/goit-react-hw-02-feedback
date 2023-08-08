export const FeedbackOptions = ({ onIncrement }) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      <button onClick={() => onIncrement('good')}>Good</button>
      <button onClick={() => onIncrement('neutral')}>Neutral</button>
      <button onClick={() => onIncrement('bad')}>Bad</button>
    </>
  );
};

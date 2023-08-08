export const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad;
  let positivePercent = total !== 0 ? (good / total) * 100 : 0;

  console.log(total);
  return (
    <>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercent.toFixed(2)}%</p>
    </>
  );
};

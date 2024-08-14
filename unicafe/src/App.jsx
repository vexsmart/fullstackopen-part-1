import { useState } from "react";

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ onCLick, text }) => {
  return <button onClick={onCLick}>{text}</button>;
};

const Statistics = ({
  calculateAverage,
  calculatePercentage,
  good,
  neutral,
  bad,
}) => {
  return (
    <>
      <h1>statistics</h1>
      <br />
      <table>
        <tbody>
          <StatisticsLine value={good} text={"good"} />
          <StatisticsLine value={neutral} text={"neutral"} />
          <StatisticsLine value={bad} text={"bad"} />
        </tbody>
      </table>
      <p>average {calculateAverage}</p>
      <p>percentage {calculatePercentage}</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleGood() {
    setGood((prevState) => prevState + 1);
  }

  function handleNeutral() {
    setNeutral((prevState) => prevState + 1);
  }

  function handleBad() {
    setBad((prevState) => prevState + 1);
  }

  function calculateAverage(good, neutral, bad) {
    const sum = good + neutral + bad;
    const average = sum / 3;
    return average;
  }

  function calculatePercentage(value1, value2, value3, positive1, positive2) {
    const totalSum = value1 + value2 + value3;
    const combinedPositives = positive1 + positive2;
    const percentage = (combinedPositives / totalSum) * 100;
    return percentage;
  }

  const noFeedBack = <p>No FeedBack given</p>;

  const checkForValid = good !== 0 || neutral !== 0 || bad !== 0;

  return (
    <div>
      <h1>give feedback</h1>
      <br />
      <Button onCLick={handleGood} text={"good"} />
      <Button onCLick={handleNeutral} text={"neutral"} />
      <Button onCLick={handleBad} text={"bad"} />
      <br />
      {checkForValid ? (
        <Statistics
          calculateAverage={calculateAverage(good, neutral, bad)}
          calculatePercentage={calculatePercentage(
            good,
            neutral,
            bad,
            good,
            neutral
          )}
          good={good}
          neutral={neutral}
          bad={bad}
        />
      ) : (
        noFeedBack
      )}
    </div>
  );
};

export default App;

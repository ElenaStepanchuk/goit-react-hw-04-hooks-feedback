import { useState } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";
export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const changeFeedback = (option) => {
    switch (option) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      default:
        return;
    }
  };
  const totalFedback = () => {
    return good + bad + neutral;
  };
  const percentageFedback = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };
  return (
    <>
      <Section title="Please leave feedback" />
      <FeedbackOptions
        options={["good", "bad", "neutral"]}
        onLeaveFeedback={changeFeedback}
      />
      <Section />
      <Section title="Statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFedback()}
        positivePercentage={percentageFedback()}
      />
      <Section />
      <Notification message="There is no feedback" total={totalFedback()} />
    </>
  );
}

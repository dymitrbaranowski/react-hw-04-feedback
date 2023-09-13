import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const totalFeedback = countTotalFeedback();

  const countPositivePercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const stateNames = Object.keys({ good, neutral, bad });
  const positivePercentage = countPositivePercentage();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={stateNames}
          onLeaveFeedback={handleFeedback}
          FeedbackOptions
        />
      </Section>

      {totalFeedback ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};

import { useState } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Container } from './FeedBack.styled';

export function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optionsObject = { good, neutral, bad };

  const onLeaveFeedback = e => {
    const { name } = e.target;

    switch (name) {
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
  const getOptions = () => {
    return Object.keys(optionsObject);
  };
  const countTotalFeedback = () => {
    return Object.values(optionsObject).reduce((acc, value) => acc + value, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    return `${Math.round((good / totalFeedback) * 100)}%`;
  };

  const options = getOptions();
  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            total={totalFeedback}
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={positivePercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Container>
  );
}

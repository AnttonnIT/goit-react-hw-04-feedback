import { Component } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Container } from './FeedBack.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    const { name } = e.target;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  getOptions = () => {
    return Object.keys(this.state);
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;
  };
  render() {
    const options = this.getOptions();
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
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
}

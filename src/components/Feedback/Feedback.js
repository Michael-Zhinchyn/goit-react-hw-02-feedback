import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    return (
      <>
        <FeedbackOptions onIncrement={this.handleClick} />
        <Statistics {...this.state} />
      </>
    );
  }
}

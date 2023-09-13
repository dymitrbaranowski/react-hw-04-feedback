import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  //   state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };
  //   handleFeedback = option => {
  //     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  //   };
  //   countTotalFeedback = () => {
  //     const { good, neutral, bad } = this.state;
  //     return good + neutral + bad;
  //   };
  //   countPositivePercentage = () => {
  //     const { good } = this.state;
  //     const totalFeedback = this.countTotalFeedback();
  //     if (totalFeedback === 0) {
  //       return 0;
  //     }
  //     return Math.round((good / totalFeedback) * 100);
  //   };
  //   render() {
  //     const { good, neutral, bad } = this.state;
  //     // const totalFeedback = this.countTotalFeedback();
  //     const positivePercentage = this.countPositivePercentage();
  //     return (
  //       <div
  //         style={{
  //           height: '100vh',
  //           display: 'flex',
  //           flexDirection: 'column',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           fontSize: 40,
  //           color: '#010101',
  //         }}
  //       >
  //         <Section title="Please leave feedback">
  //           <FeedbackOptions
  //             options={Object.keys(this.state)}
  //             onLeaveFeedback={this.handleFeedback}
  //             FeedbackOptions
  //           />
  //         </Section>
  //         {this.countTotalFeedback() ? (
  //           <Section title="Statistics">
  //             <Statistics
  //               good={good}
  //               neutral={neutral}
  //               bad={bad}
  //               totalFeedback={totalFeedback}
  //               positivePercentage={positivePercentage}
  //             />
  //           </Section>
  //         ) : (
  //           <Notification message="There is no feedback"></Notification>
  //         )}
  //       </div>
  //     );
  //   }
}

// export default App;

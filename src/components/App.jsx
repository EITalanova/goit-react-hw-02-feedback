import React from 'react';
import Feedback from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';


export const App = () => {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Feedback />
      <Statistics good={this.state.good} neutral={this.state.good} bad={this.state.good} total={this.state.good} positivePercentage={this.state.good}/>
    </div>
  );
};

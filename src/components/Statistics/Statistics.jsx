import React from 'react';
import { StatisticsList, StatisticsItem, Options } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        Good: <Options>{good}</Options>
      </StatisticsItem>
      <StatisticsItem>
        Neutral: <Options >{neutral}</Options>
      </StatisticsItem>
      <StatisticsItem>
        Bad: <Options>{bad}</Options>
      </StatisticsItem>
      <StatisticsItem>
        Total: <Options color="#DC143C">{total}</Options>
      </StatisticsItem>
      <StatisticsItem >
        Positive feedback: <Options color="#DC143C">{positivePercentage}</Options>
      </StatisticsItem>
    </StatisticsList>
  );
};

export default Statistics;

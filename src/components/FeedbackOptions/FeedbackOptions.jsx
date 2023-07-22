import React from 'react';
import { List, ButtonContainer, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <ButtonContainer key={option}>
            <Button type='button' onClick={() => onLeaveFeedback(option)}>{option}</Button>
          </ButtonContainer>
        );
      })}
    </List>
  );
};

export default FeedbackOptions;

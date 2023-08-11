import { OptionBtn } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <OptionBtn
        key={option}
        option={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </OptionBtn>
    ))}
  </div>
);

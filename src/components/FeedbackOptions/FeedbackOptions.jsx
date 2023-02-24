import PropTypes from 'prop-types';
import { Button, List, ListItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <ListItem key={option}>
            <Button name={option} type="button" onClick={onLeaveFeedback}>
              {option}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

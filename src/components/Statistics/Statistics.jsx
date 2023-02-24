import PropTypes from 'prop-types';
import { List, ListItem } from './Statistics.styled';

export const Statistics = ({
  total,
  good,
  neutral,
  bad,
  positivePercentage,
}) => {
  const options = {
    good,
    neutral,
    bad,
    total,
    positiveFeedback: positivePercentage,
  };

  return (
    <>
      <List>
        {Object.entries(options).map(([key, value]) => {
          return (
            <ListItem key={key}>
              {key}: <span>{value}</span>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

const MissionCard = ({ mission }) => (
  <div>
    {mission.id}
    {mission.name}
    {mission.description}
  </div>
);

MissionCard.propTypes = {
  mission: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MissionCard;

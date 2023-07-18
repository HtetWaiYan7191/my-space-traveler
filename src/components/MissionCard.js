import React from 'react'

const MissionCard = ({mission}) => {

  return (
    <div>
      {mission.id}
      {mission.name}
      {mission.description}
    </div>
  )
}

export default MissionCard

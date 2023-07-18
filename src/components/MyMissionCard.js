import React from 'react'

function MyMissionCard({mission}) {
  return (
    <div className='my-mission-card border border-1  text-2xl ps-4 py-5 '>
        {mission.name}
    </div>
  )
}

export default MyMissionCard

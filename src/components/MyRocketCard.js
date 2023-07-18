import React from 'react'

function MyRocketCard ({rocket}) {
  return (
    <div className='my-rocket-card border border-1 py-5 text-2xl ps-4 '>
        {rocket.name}
    </div>
  )
}

export default MyRocketCard

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchRockets } from '../redux/rocketSlice';

function Rockets() {
  const rockets = useSelector((state) => state.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  return (
    <div>

      This is rockets
    </div>
  );
}

export default Rockets;

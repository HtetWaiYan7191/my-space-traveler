import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missionSlice';
import MissionCard from '../components/MissionCard';

function Missions() {
  const missions = useSelector((state) => state.missions.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div className="mission-container">
      {missions.map((mission) => <MissionCard key={mission.id} mission={mission} />)}
    </div>
  );
}

export default Missions;

import React from "react";
import PropTypes from "prop-types";
import "../styles/MissionCard.css";

const MissionCard = ({ mission }) => (
  <tr className="table-row flex items-start">
    <th className=" w-[10%]">{mission.name}</th>
    <th className="description-row">{mission.description}</th>
    <th className=" w-[15%]"><span className="  bg-gray-300 rounded-md px-1">NOT A MEMBER</span></th>
    <th className=" w-[13%]">
        <button type="button" className=" px-1 py-1 border border-slate-700 rounded-md text-gray-500">Join Mission</button>
    </th>
  </tr>
);

MissionCard.propTypes = {
  mission: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MissionCard;

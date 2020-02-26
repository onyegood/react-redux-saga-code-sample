import React from 'react';
import propTypes from "prop-types";

const UserCard = ({owner}) => {
  return (
    <>
  {owner && owner.owner && owner.owner.avatar_url && 
    <div className="user-card">
    <div className="avatar">
      <img src={owner.owner.avatar_url} alt="avatar" />
    </div>
    <h1>{owner.owner.login}</h1>
  </div>}
  </>
  );
}


UserCard.propTypes = {
  owner: propTypes.object.isRequired
};

export default UserCard;
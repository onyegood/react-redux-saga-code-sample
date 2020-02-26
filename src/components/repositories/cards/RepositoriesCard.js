import React from 'react';
import propTypes from 'prop-types';

const RepositoriesCard = ({repositories, onClick}) => {
  return (
    <div className="repositories-card">
      {repositories && repositories.map(repository =>
        <div 
        onClick={() => onClick({name: repository.name, userName: repository.owner.login})}
        className="item" key={repository.id}>
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
        <p className="rating">
        <span>
        {repository.stargazers_count}
        <i className="fa fa-star" />
        </span>

        <span>
        {repository.private ? <i className="fa fa-lock" /> : <i className="fa fa-unlock" />}
        </span>
        </p>
        </div>
      )}
    </div>
  );
};

RepositoriesCard.propTypes = {
  onClick: propTypes.object.isRequired,
  repositories: propTypes.array.isRequired
};

export default RepositoriesCard;

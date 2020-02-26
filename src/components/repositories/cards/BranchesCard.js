import React from 'react';
// import propTypes from "prop-types";

const BranchesCard = ({branches}) => {
  return (
    <div className="branches-card">
    <div className="avatar"></div>
      <h1>onyegood</h1>
    </div>
  );
}

// BranchesCard.propTypes = {
//   branches: propTypes.arrayOf(
//     propTypes.shap({
//       name: propTypes.string.isRequired,
//       protected: propTypes.bool.isRequired,
//       commit: propTypes.arrayOf(
//         propTypes.shape({
//           sha: propTypes.string.isRequired,
//           url: propTypes.string.isRequired
//         }).isRequired
//       ).isRequired
//     }).isRequired
//   ).isRequired
// };

export default BranchesCard;
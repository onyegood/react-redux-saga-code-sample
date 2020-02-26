import React from 'react';
import {connect} from 'react-redux';
import LoadingSpinner from '../includes/spinners/LoadingSpinner';
import propTypes from "prop-types";

const BranchesPage = ({branches, loading}) => {
  return (
    <div className="branches-card">
      {loading ? (
        <LoadingSpinner />
      ) : branches && branches.length > 0 ? (
        branches.map((branch) => (
          <div className="item" key={branch.name}>
            <h1>{branch.name}</h1>
          </div>
        ))
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.branches.loading,
    branches: state.branches.branches,
  };
};

BranchesPage.propTypes = {
  branches: propTypes.array.isRequired,
  loading: propTypes.bool.isRequired
}


export default connect(mapStateToProps, null)(BranchesPage);

import React, {useState} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import PhraseInput from '../includes/PhraseInput';
import {fetchRepositoriesRequest} from './redux/action';
import {fetchBranchesRequest} from '../branches/redux/action';
import {Debounce} from '../../helpers/Debounce';
import UserCard from './cards/UserCard';
import RepositoriesCard from './cards/RepositoriesCard';
import LoadingSpinner from '../includes/spinners/LoadingSpinner';
import BranchesPage from '../branches/BranchesPage';

const HomePage = ({
  fetchRepositoriesRequest,
  fetchBranchesRequest,
  loading,
  repositories,
  branches,
  error
}) => {
  const [state, setState] = useState({
    value: '',
  });

  const onPhraseChange = (param) => {
    setState({value: param});
    Debounce.clearTime();
    Debounce.setTime(() => {
      if (param) {
        fetchRepositoriesRequest(param);
      }
    }, 500);
  };

  const handleFetchBranch = (params) => {
    fetchBranchesRequest(params);
  };

  return (
    <>
      <div className="app">
        <div className="logo">
          <img src="../assets/images/logo.png" alt="Github Logo" />
        </div>

        <PhraseInput value={state.value} onPhraseChange={onPhraseChange} />
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="error-div">
          <p className="error">{error}</p>
        </div>
      ) : repositories && repositories.length > 0 ? (
        <div className="result-canvas">
          <div className="col-2">
            <UserCard owner={repositories[0]} />
          </div>

          <div className={branches.length > 0 ? 'col-7' : 'col-10'}>
            <RepositoriesCard
              repositories={repositories}
              onClick={handleFetchBranch}
            />
          </div>

          {branches.length > 0 && (
            <div className="col-3">
              <BranchesPage />
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

const mapDispatchToProps = {
  fetchRepositoriesRequest,
  fetchBranchesRequest,
};

const mapStateToProps = (state) => {
  return {
    loading: state.repositories.loading,
    repositories: state.repositories.repositories,
    branches: state.branches.branches,
    error: state.repositories.error
  };
};

HomePage.propTypes = {
  fetchRepositoriesRequest: propTypes.func.isRequired,
  fetchBranchesRequest: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  repositories: propTypes.array.isRequired,
  branches: propTypes.array.isRequired,
  error: propTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

import React from 'react';
import PropTypes from 'prop-types';
import "./styles/PhraseInput.scss";

class PhraseInput extends React.Component {
  componentDidMount() {
    this.inputRef.focus();
  }

  render() {
    const {value, onPhraseChange, placeholder} = this.props;

    return (
      <div className="phrase-input-container">
        <span className="phrase-input-icon">
            <img src="../assets/images/search.svg" alt="Search Icon" />
        </span>
        <input
          className="phrase-input"
          type="search"
          placeholder={placeholder}
          ref={(inputRef) => (this.inputRef = inputRef)}
          value={value}
          onChange={(event) => onPhraseChange(event.target.value)}
        />
      </div>
    );
  }
}

PhraseInput.propTypes = {
  value: PropTypes.string.isRequired,
  onPhraseChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

PhraseInput.defaultProps = {
    placeholder: "Search github user"
}

export default PhraseInput;

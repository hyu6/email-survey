// SurveyFormReview shows users their survey forms for review
import React from 'react';

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>SurveyFormReview</h5>
      <button
        className="back-button btn-flat white-text teal left"
        onClick={onCancel}
      >
        Back
        <i className="material-icons left">navigate_before</i>
      </button>
    </div>
  );
};

export default SurveyFormReview;

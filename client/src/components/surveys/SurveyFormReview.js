// SurveyFormReview shows users their survey forms for review
import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel, formValues }) => {
  return (
    <div>
      <h5>Review</h5>
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

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);

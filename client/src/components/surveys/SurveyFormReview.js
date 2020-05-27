// SurveyFormReview shows users their survey forms for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import formFields from './formFields';

const SurveyFormReview = ({ onCancel, formValues }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div className="survey-form-review-value">{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="survey-form-review-wrapper">
      <h5>Review</h5>
      {reviewFields}
      <button
        className="back-button btn-flat white-text teal left"
        onClick={onCancel}
      >
        Back
        <i className="material-icons left">navigate_before</i>
      </button>
      <button className="send-button btn-flat white-text light-blue right">
        Send
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);

// SurveyField contains logic to render a single
// label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="survey-field-wrapper">
      <label>{label}</label>
      <input {...input} />
      <div className="error-message red-text">{touched && error}</div>
    </div>
  );
};

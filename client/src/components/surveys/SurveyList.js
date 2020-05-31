import React, { Component } from 'react';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { fetchSurveys, deleteSurveyById } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  delete(surveyTitle, surveyId) {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h4 className="title">Delete Survey</h4>
            <p className="message">Are you sure to delete "{surveyTitle}"?</p>
            <button
              className="yes-button btn-flat red white-text left"
              onClick={() => {
                this.props.deleteSurveyById(surveyId);
                onClose();
              }}
            >
              YES
            </button>
            <button
              className="no-button btn-flat white black-text right"
              onClick={onClose}
            >
              NO
            </button>
          </div>
        );
      },
    });
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div className="card blue-grey lighten-4" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <div className="response-container">
              <div className="green-text text-darken-2">
                POSITIVE: {survey.positive}
              </div>
              <div className="red-text text-darken-1">
                NEGATIVE: {survey.negative}
              </div>
            </div>
            <a
              className="delete-button btn-flat btn-small grey lighten-4 red-text right"
              // onClick={() => this.props.deleteSurveyById(survey._id)}
              onClick={() => this.delete(survey.title, survey._id)}
            >
              Delete
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="survey-list">{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurveyById })(
  SurveyList
);

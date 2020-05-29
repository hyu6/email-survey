const keys = require('../../config/keys');

module.exports = (survey) => {
  return `
    <html>

    <body>
      <div style="text-align: center;">
        <h3>Your Feedback</h3>
        <p>Please make a response:</p>
        <p>${survey.body}</p>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/${survey.id}/positive">Yes</a>
        </div>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/${survey.id}/negative">No</a>
        </div>
      </div>
    </body>

    </html>
  `;
};

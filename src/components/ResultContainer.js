import React from "react";

const ResultContainer = (props) => {
  if (props.userDetails.isUsernameValid) {
    return (
      <div className="card-container">
        <div className="card">
          <div className="user-details">
            <img src={props.userDetails.profileURL} />
            <hr />
            <div className="user-details-grid">
              <p className="item1">
                <em>Name: </em>
                {props.userDetails.fullName}
              </p>
              <p className="item2">
                <em>Repos: </em>
                {props.userDetails.repos}
              </p>
              <p className="item3">
                <em>Twitter: </em>
                {props.userDetails.twitterAccount}
              </p>
              <p className="item4">
                <em>Location: </em>
                {props.userDetails.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="result-incorrect-username">Username Incorrect!</div>;
  }
};

export default ResultContainer;

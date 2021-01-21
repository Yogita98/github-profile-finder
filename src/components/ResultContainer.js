import React from "react";

const ResultContainer = (props) => {
  if (props.isUsernameValid) {
    // console.log(props.userDetails);
    return (
      <div className="card-container">
        <div className="card">
          <div className="user-details">
            <img alt="user-avatar" src={props.userDetails.avatar_url} />
            <hr />
            <div className="user-details-grid">
              <p className="item1">
                <em>Name: </em>
                {props.userDetails.name}
              </p>
              <p className="item2">
                <em>Repos: </em>
                {props.userDetails.public_repos}
              </p>
              <p className="item3">
                <em>Twitter: </em>
                {props.userDetails.twitter_username}
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

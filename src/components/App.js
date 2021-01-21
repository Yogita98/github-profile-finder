import React from "react";
import "./App.css";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";
import SearchBar from "./SearchBar";
import ResultContainer from "./ResultContainer";

class App extends React.Component {
  const;
  state = {
    profileURL: "",
    fullName: "",
    repos: "",
    location: "",
    twitterAccount: "",
    showResultComponent: false,
    isUsernameValid: true,
  };
  onSearchButtonClick = async (userName) => {
    if (!userName) return;
    const fetch_URL = "https://api.github.com/users/" + userName;
    await fetch(fetch_URL)
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("Username not found");
      })
      .then((userDetails) => {
        console.log(userDetails);
        this.setState({
          profileURL: userDetails.avatar_url,
          fullName: userDetails.name,
          repos: userDetails.public_repos,
          location: userDetails.location,
          twitterAccount: userDetails.twitter_username,
          showResultComponent: true,
          isUsernameValid: true,
        });
      })
      .catch((error) => {
        this.setState({ isUsernameValid: false, showResultComponent: true });
      });
  };

  render() {
    // console.log(this.state.fullName);
    return (
      <div className="main-container">
        <MainHeading />
        <SubHeading />
        <SearchBar onSearch={this.onSearchButtonClick} />
        {this.state.showResultComponent && (
          <ResultContainer userDetails={this.state} />
        )}
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";
import SearchBar from "./SearchBar";
import ResultContainer from "./ResultContainer";

class App extends React.Component {
  const;
  state = {
    userDetails: "",
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
        // console.log(userDetails);
        this.setState({
          userDetails: userDetails,
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
          <ResultContainer
            isUsernameValid={this.state.isUsernameValid}
            userDetails={this.state.userDetails}
          />
        )}
      </div>
    );
  }
}

export default App;

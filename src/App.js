import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      expandedItems: {},
      expandedEducation: {}
    };
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  toggleExpanded = (index) => {
    this.setState((prevState) => ({
      expandedItems: {
        ...prevState.expandedItems,
        [index]: !prevState.expandedItems[index]
      }
    }));
  };

  toggleExpandedEducation = (index) => { 
    this.setState((prevState) => ({
      expandedEducation: {
        ...prevState.expandedEducation,
        [index]: !prevState.expandedEducation[index] 
      }
    }));
  };

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    const { resumeData, expandedItems, expandedEducation } = this.state;
    return (
      <div className="App">
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume
          data={resumeData.resume}
          toggleExpanded={this.toggleExpanded}
          toggleExpandedEducation={this.toggleExpandedEducation}
          expandedItems={expandedItems}
          expandedEducation={expandedEducation}
        />
        <Portfolio data={resumeData.portfolio} />
        <Footer data={resumeData.main} />
      </div>
    );
  }
}

export default App;
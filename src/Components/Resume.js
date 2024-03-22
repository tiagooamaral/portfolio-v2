import React, { Component } from "react";
import Slide from "react-reveal";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.formation.map(function (education) {
      return (
        <div key={education.degree}>
          <h3>{education.degree}</h3>
          <p className="info">
            {education.school} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const educationCurse = this.props.data.education.curse.map((education, index) => {
      const isExpanded = this.props.expandedEducation[index] || false;
      return (
        <div>
          <a key={education.degree} style={{ color: "#000" }} href={education.link} target="_blank" rel="noreferrer">
            <h3>{education.degree}</h3>
            <p className="info">
              {education.school} <span>&bull;</span> <em className="date">{education.graduated}</em>
            </p>
          </a>
          {isExpanded ? (
            <div>
              <p>{education.description}
                <a href="javascript:void(0)" style={{ float: "right", marginRight: "15px" }}>
                  <ExpandMoreIcon style={{ transform: "rotate(180deg)" }} onClick={() => this.props.toggleExpandedEducation(index)} />
                </a>
              </p>
            </div>
          ) : (
            <div>
              <p>{education.description.slice(0, 100)}...
                <a href="javascript:void(0)" style={{ float: "right", marginRight: "15px" }}>
                  <ExpandMoreIcon onClick={() => this.props.toggleExpandedEducation(index)} />
                </a>
              </p>
            </div>
          )}
        </div>
      );
    });


    const work = this.props.data.work.map((work, index) => {
      const isExpanded = this.props.expandedItems[index] || false;
      return (
        <div key={work.title}>
          <h3>{work.title}</h3>
          <p className="info">
            {work.company}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          {isExpanded ? (
            <div>
              <p>{work.description}
                <a style={{ float: "right", marginRight: "15px" }}>
                  <ExpandMoreIcon style={{ transform: "rotate(180deg)" }} onClick={() => this.props.toggleExpanded(index)} />
                </a>
              </p>
            </div>
          ) : (
            <div>
              <p>{work.description.slice(0, 100)}...
                <a style={{ float: "right", marginRight: "15px" }}>
                  <ExpandMoreIcon onClick={() => this.props.toggleExpanded(index)} />
                </a>
              </p>
            </div>
          )}
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Trabalhos</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Formação</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Cursos</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{educationCurse}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;

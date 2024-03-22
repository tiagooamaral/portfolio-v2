import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    console.log(this.props.data);
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <img alt={projects.title} src={projectImage} style={{ width: 250, height: 200 }} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
            <div style={{ textAlign: "center" }}>
              {projects.url && (
                <a href={projects.url} className="button btn project-p-btn">
                  <i className="fa fa-book"></i> Demo
                </a>
              )}
              {projects.github && (
                <a href={projects.github} className="button btn github-p-btn">
                  <i className="fa fa-github"></i> Projeto
                </a>
              )}
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Veja meus projetos</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;

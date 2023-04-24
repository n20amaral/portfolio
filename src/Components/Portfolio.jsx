/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "two computers of someone planning a project";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Pass by Value or Reference",
    description:
      "Created a presentation to help explain the difference between pass by value and pass by reference in Java.",
    url: "https://n20amaral.github.io/byval-ref",
  },
  {
    title: "Tim Berners-Lee Tribute Page",
    description: "Created a tribute page to Tim Berners-Lee, the inventor of the World Wide Web.",
    url: "https://n20amaral.github.io/berners-lee",
  },
  {
    title: "Software Design Antipatterns",
    description:
      "Created a presentation to help explain the difference between design patterns and antipatterns.",
    url: "https://n20amaral.github.io/antipatterns",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>
        Portfolio using{" "}
        <a href="https://www.revealjs.com" target="_blank" rel="noreferrer">
          reveal.js
        </a>
      </h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

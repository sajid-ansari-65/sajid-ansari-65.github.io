import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div class="headers">
        <div>
          <h1 class="name">Mohammad Sajid Ansari</h1>
          <p class="title">
            Senior / Lead Full Stack Developer (WordPress | Node.js | NestJS | React |
            Next.js | AWS)
          </p>
        </div>
        <div class="contact-info">
          <div class="contact-item">
            <span>
              <i class="fa-solid fa-phone"></i>
            </span>
            <span>
              <a href="tel:+917984342668">+91 7984342668</a>
            </span>
          </div>
          <div class="contact-item">
            <span>
              <i class="fa-solid fa-envelope"></i>
            </span>
            <span>
              {" "}
              <a href="mailto:vickymoditech@gmail.com">
                vickymoditech@gmail.com
              </a>
            </span>
          </div>
          <div class="contact-item">
            <span>
              <i class="fa-solid fa-link"></i>
            </span>
            <span>
              <a
                href="https://vickymoditech.github.io"
                rel="noreferrer"
                target="_blank"
              >
                vickymoditech.github.io
              </a>
            </span>
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="section-header">
        <i class="fa-solid fa-address-card"></i> &nbsp;
          About Me</h2>
        <p>
          I'm a Senior Full Stack Developer with over 9+ years of experience
          building scalable, high-performance web and mobile applications. I
          specialize in JavaScript, TypeScript, Node.js (Express/NestJS),
          React.js, Next.js, and AWS serverless architecture (Lambda, Step
          Functions, Cognito).
          <br />
          I'm proficient in designing RESTful APIs, microservices, and working
          with both relational (MySQL, PostgreSQL) and NoSQL databases (MongoDB,
          DynamoDB). Passionate about performance optimization, CI/CD
          integration, real-time socket functionality, and test-driven
          development.
          <br />I thrive in fast-paced environments and love delivering secure,
          scalable, and user-centric applications.
        </p>
      </div>
    </Fragment>
  );
};

export default About;

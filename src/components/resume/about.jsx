import { Fragment } from "react";

import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
  return (
    <Fragment>
      <div class="headers">
        <div>
          <h1 class="name">Mohammad Sajid Ansari</h1>
          <p class="title">
            Senior / Lead Full Stack Developer (WordPress | Node.js | React |
            Next.js | AWS)
          </p>
        </div>
        <div class="contact-info" style={{ display: "flex", gap: "20px" }}>
          <div class="contact-item" style={{ display: "flex", alignItems: "self-start" }}>
            <span>
              <PhoneIcon />
            </span>
            <span>
              <a href="tel:+917984342668">+91 7984342668</a>
            </span>
          </div>
          <div class="contact-item" style={{ display: "flex", alignItems: "self-start" }}>
            <span>
              <EmailIcon />
            </span>
            <span>
              <a href="mailto:sajidansari0605@gmail.com">
                sajidansari0605@gmail.com
              </a>
            </span>
          </div>
          <div class="contact-item" style={{ display: "flex", alignItems: "self-start" }}>
            <span>
                <a
                  href="https://sajid-ansari-65.github.io/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <GitHubIcon /> sajid-ansari-65
                  </span>
                </a>
            </span>
          </div>

          <div class="contact-item" style={{ display: "flex", alignItems: "self-start" }}>
            <span>
                <a
                  href="https://www.linkedin.com/in/iamsajidansari/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <LinkedInIcon /> iamsajidansari
                  </span>
                </a>
            </span>
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="section-header" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <HomeIcon/>  About Me
        </h2>
        <p>
          I'm a Senior Web Developer near a decade of experience building scalable, high-performance web and mobile applications.
          I am proficient in a wide range of technologies, including WordPress, Node.js, React, Next.js.
          I have a strong background in both front-end and back-end development, with expertise in JavaScript, TypeScript, HTML, CSS, and various frameworks.
          I have a solid understanding of software development principles and best practices, including Agile methodologies, version control (Git), and code reviews.
          <br />
          <br />
          I have a strong understanding of database design and management, including SQL and NoSQL databases.
          I have a strong focus on performance optimization, security, and scalability, ensuring that applications are built to handle high traffic and provide a seamless user experience.
          <br />
          I am passionate about writing clean, maintainable code and following best practices in software development.
          I have a strong understanding of web security principles and best practices, including authentication, authorization, and data protection.
          I have experience in implementing security measures to protect applications from common vulnerabilities and attacks.
        </p>
      </div>
    </Fragment>
  );
};

export default About;

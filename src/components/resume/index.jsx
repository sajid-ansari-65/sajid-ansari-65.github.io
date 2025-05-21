import html2pdf from "html2pdf.js";
import React, { Fragment, useEffect } from "react";
import Company from "./company";
import Page from "./page";
import About from "./about";
import company from "../../data/company.json";
import projects from "../../data/projects.json";
import skill from "../../data/skills.json";
import Project from "./project";
import "./resume.css";

import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TagIcon from '@mui/icons-material/Tag';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StorageIcon from '@mui/icons-material/Storage';
import DevicesIcon from '@mui/icons-material/Devices';
import LaptopIcon from '@mui/icons-material/Laptop';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Resume = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const pdfDownload = () => {
    window.scroll(0, 0);
    const element = document.getElementById("content"); // Select the container for all pages

    // Configure options for html2pdf
    const options = {
      margin: 0,
      filename: "Mohammad_Sajid_Ansari.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    // Generate PDF from the selected element
    html2pdf().from(element).set(options).save();
  };

  return (
    <Fragment>
      <div
        id="content"
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >


        {   
          /**
           * About & Work Experience
           */
        }
        <Page>
          <About />
          <div class="section">
            <h2 class="section-header" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <WorkIcon/> Work Experience
            </h2>
            {company.slice(0, 1).map((c, index) => (
              <Company company={c} key={index} />
            ))}
          </div>
        </Page>
        <Page>
          <div class="section">
            {/* <h2 class="section-header">Work Experience</h2> */}
            {company.slice(1, 4).map((c, index) => (
              <Company company={c} key={index} />
            ))}
          </div>
        </Page>

        {
          /**
           * Projects
           */
        }
        <Page>
          <div class="section">
            <h2 class="section-header" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <AccountTreeIcon/> Projects
            </h2>
            <Project projects={[...projects.slice(0, 3)]} />
          </div>
        </Page>
        <Page>
          <div class="section">
            {/* <h2 class="section-header">Projects</h2> */}
            <Project projects={[...projects.slice(3, 6)]} />
          </div>
          <div className="see-more">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://sajid-ansari-65.github.io/#/projects"
            >
              See More Projects &nbsp; <i class="fa-solid fa-angles-right"></i>
            </a>
          </div>
        </Page>

        {
          /**
           * Technical Skills
           */
        }
        <Page>
          <div class="section">
            <h2 class="section-header" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <CodeIcon/> Technical Skills
            </h2>

            <div class="skills-lists">
              <div className="main_skill" style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <StorageIcon/> Databases
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(0, 4).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill" style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <LaptopIcon/> Back-end
                Development&nbsp; <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(5, 16).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill" style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <DevicesIcon/> Front-end
                Development&nbsp; <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(17, 35).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill" style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <CreditCardIcon/> Payment
                Integration&nbsp; <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(53, 58).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Page>

        <Page>
          <div class="section">
            {/* <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-brands fa-aws"></i> &nbsp; AWS Cloud Services&nbsp;{" "}
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(35, 53).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div> */}

            <div class="skills-lists">
              <div className="main_skill">
                Extra&nbsp; <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(58, 100).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div class="section">
            <h2 class="section-header" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <SchoolIcon/>  EDUCATION
            </h2>

            <div class="education-item">
              <h3 class="degree">
                 B.Tech in Information Technology
              </h3>
              <p class="school">UKA TARSADIA UNIVERSITY (Maliba Campus, Bardoli) </p>
              <p class="education-years">July 2012 - June 2016</p>
            </div>
          </div>

          <div class="section">
            <h2 class="section-header" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <TagIcon/> Social
            </h2>

            <div class="contact-info" style={{ flexDirection: "row" }}>
              <div class="contact-item" style={{ display: "flex", alignItems: "self-start" }}>
                <span>
                  <GitHubIcon /> 
                </span>
                <span>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/sajid-ansari-65"
                  >
                    github.com/sajid-ansari-65
                  </a>
                </span>
              </div>
              <div class="contact-item" style={{ display: "flex", alignItems: "self-start" }}>
                <span>
                  <LinkedInIcon />
                </span>
                <span>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/iamsajidansari/"
                  >
                    iamsajidansari@linkedin
                  </a>
                </span>
              </div>
            </div>
          </div>
        </Page>
      </div>
      <button className="download" onClick={pdfDownload}>
        <DownloadForOfflineIcon style={{ width:'50px', height: '50px' }} />
      </button>
    </Fragment>
  );
};

export default Resume;

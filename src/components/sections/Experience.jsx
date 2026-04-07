import React from "react";
import "/src/stylesheets/sections/Experience.css";

const Experience = () => {
  return (
    <section className="Stack section" id="Experience">
      <div className="container">
        <h2 className="Stack-h2 section-head">Experience</h2>
        <div className="experience-container">
          <div className="experience-item">
            <h3>Software Engineering Intern - BNY Mellon</h3>
            <p className="experience-duration">
              May 2023 – Aug. 2023, New York, NY
            </p>
            <ul>
              <li>
                Developed a financial portal in Angular using an Oracle
                relational database to aggregate and display earnings of 4
                company sectors with charts for enhanced visualization, utilized
                by over 1,000 internal users.
              </li>
              <li>
                Created Maven libraries that reduced code duplication by 40%,
                improving the readability and scalability of the code base.
              </li>
              <li>
                Revamped the web application into an Angular Progressive Web App
                (PWA), leading to mobile user adoption and improved
                accessibility across devices as well as decreased load time by
                15%.
              </li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Research and Outreach Intern - ChangingThePresent</h3>
            <p className="experience-duration">
              June 2022 – Aug. 2022, New York, NY
            </p>
            <ul>
              <li>
                Researched and identified potential strategic partners for the
                non-profit initiative, resulting in partnerships with 12
                universities and organizations.
              </li>
              <li>
                Developed a comprehensive outreach strategy, resulting in a 25%
                increase in engagement with potential donors and partners.
              </li>
              <li>
                Contributed to a non-profit initiative aimed at channeling part
                of the $450 billion spent annually on gifts towards charitable
                donations.
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Tutor - Stem Nation</h3>
            <p className="experience-duration">July 2018 – Feb. 2021, Remote</p>
            <ul>
              <li>
                Held weekly feedback sessions with students to understand their
                challenges, leading to more productive tutoring sessions.
              </li>
              <li>
                Analyzed students’ progress data to identify areas of
                improvement and tailored instructional strategies to address
                their specific needs.
              </li>
              <li>
                Collaborated with a team of tutors to develop and refine
                curriculum materials, resulting in a decrease in preparation
                time for subsequent tutoring sessions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

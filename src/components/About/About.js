import React from "react";
import * as style from "./About.module.css";
import * as shared from "../shared.module.css";
import { className } from "../../helpers";
import group from "../../images/group.jpg";
import StatisticBubble from "./StatisticBubble";
import { statBubbles } from "../../constants";

function About() {
  return (
    <section id="about" {...className(shared.section)}>
      <span {...className(shared.sectionName)}>About us</span>
      <h2 {...className(shared.sectionTitle)}>Who we are</h2>
      <div {...className(style.aboutCon)}>
        <img
          {...className(shared.lightShadow, style.groupImg)}
          src={group}
          alt="A group of people in an office"
        />
        <div {...className(style.statistics)}>
          {statBubbles.map((currentBubble) => {
            return (
              <StatisticBubble {...currentBubble} key={currentBubble.des} />
            );
          })}
        </div>
        <div {...className(style.aboutText)}>
          <h3 {...className(shared.titleSecondary)}>Nice to meet you!</h3>
          <p {...className(shared.paragraph)}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
            incidunt consectetur nostrum ipsa itaque non sapiente.
            <br />
            Corporis provident reiciendis aspernatur praesentium qui quos
            numquam reprehenderit obcaecati! Autem molestiae nihil consectetur,
            eveniet excepturi veritatis quo ratione deserunt. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit.
            <br />
            Corporis provident reiciendis aspernatur praesentium qui quos
            numquam reprehenderit obcaecati!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

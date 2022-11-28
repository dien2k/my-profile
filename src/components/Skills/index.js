import IconBootstrap from "../icons/ic_bootstrap";
import IconCSS3 from "../icons/ic_css";
import IconDiamond from "../icons/ic_diamond";
import IconHTML5 from "../icons/ic_html5";
import IconJs from "../icons/ic_js";
import IconLightbulb from "../icons/ic_lightbulb";
import IconNextJs from "../icons/ic_nextjs";
import IconPlane from "../icons/ic_plane";
import IconReact from "../icons/ic_react";
import IconSass from "../icons/ic_sass";
import IconTs from "../icons/ic_ts";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-title">SKILLS</div>
      <div className="skills-body">
        <div className="skills-body__left">
          <figure class="chart-three animate">
            <svg role="img" xmlns="http://www.w3.org/2000/svg">
              <title>[title here]</title>
              <desc>[long description here]</desc>
              <circle class="circle-background" />
              <circle class="circle-foreground" />
            </svg>
            <figcaption>75% of all males like donuts.</figcaption>
          </figure>
        </div>
        <div className="skills-body__right">
          <div className="skills-list">
            <span className="skills-list__items">
              <IconHTML5 />
            </span>
            <span className="skills-list__items">
              <IconCSS3 />
            </span>
            <span className="skills-list__items">
              <IconJs />
            </span>
            <span className="skills-list__items">
              <IconTs />
            </span>
            <span className="skills-list__items">
              <IconReact />
            </span>
            <span className="skills-list__items">
              <IconNextJs />
            </span>
            <span className="skills-list__items">
              <IconBootstrap />
            </span>
            <span className="skills-list__items">
              <IconSass />
            </span>
          </div>
          <div className="skills-details">
            <div className="skills-details__items">
              <div className="skills-details__left">
                <IconLightbulb />
              </div>
              <div className="skills-details__right">
                Building fully responsive website using HTML, CSS, Bootstrap
                (Mui, Antd), Javascript & MERN.
              </div>
            </div>
            <div className="skills-details__items">
              <div className="skills-details__left">
                <IconDiamond />
              </div>
              <div className="skills-details__right">
                I have a good knowledge of full-stack (MERN) but in near future
                I will add more features to myself and excited to explore
                Python, VueJS and many more.
              </div>
            </div>
            <div className="skills-details__items">
              <div className="skills-details__left">
                <IconPlane />
              </div>
              <div className="skills-details__right">
                I have also used External Libraries (Material UI, Antd,
                Bootstrap, etc) and Figma to design User interface of websites .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

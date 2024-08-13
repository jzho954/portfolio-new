import skill1 from "../assets/img/python.svg";
import skill2 from "../assets/img/react2.svg";
import skill3 from "../assets/img/cSharp.svg";
import skill4 from "../assets/img/js.svg";
import skill5 from "../assets/img/java.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/mexico.jpg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Languages that I can use to a decent level</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                showDots={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={skill1} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={skill2} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={skill3} alt="Image" />
                  <h5>C#</h5>
                </div>
                <div className="item">
                  <img src={skill4} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={skill5} alt="Image" />
                  <h5>Java</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

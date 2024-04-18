import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/travel-website.PNG";
import projImg2 from "../assets/img/soon.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Travel Website",
      description: "See where I have traveled to!",
      imgUrl: projImg1,
    },
    {
      title: "In development",
      description: "Still in the works",
      imgUrl: projImg2,
    },
    {
      title: "In development",
      description: "Still in the works",
      imgUrl: projImg2,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of the projects that I have made in my spare time while at uni!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Project 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInLeft"
                      className={
                        isVisible ? "animate__animated animate__slideInLeft" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                            
                        <ProjectCard {...projects[0]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row className="justify-content-center">
                        <ProjectCard {...projects[1]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row className="justify-content-center">
                      <ProjectCard {...projects[2]} />
                      </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

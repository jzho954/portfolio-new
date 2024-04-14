import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
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
      imgUrl: projImg3,
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
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

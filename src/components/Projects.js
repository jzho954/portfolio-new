import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/travel-website.PNG";
import projImg2 from "../assets/img/health star.PNG";
import projImg3 from "../assets/img/pythonProject.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Link } from "react-bootstrap-icons";

export const Projects = () => {
  const projects = [
    {
      title: "Travel Website",
      description: "See where I have traveled to!",
      imgUrl: projImg1,
    },
    {
      title: "Python Projects",
      description: "Bunch of different python projects I have worked on in my spare time. Ranging from youtube video downloaders to currency converters",
      imgUrl: projImg3,
    },
    {
      title: "Health Star Calculator",
      description: "Worked as a front end dev with a team to create a health star calculator for a client. Used React for the front end and Node.js for the backend. The project was a success and the client was very happy with the final product.",
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
                        <div className="link-container">
                          <a className="website-link"href="https://jzho954.github.io/travel/" target="_blank">See it here!</a> 
                        </div>
                        
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row className="justify-content-center">
                        <ProjectCard {...projects[1]} />
                        </Row>
                        <div className="link-container">
                          <a className="website-link"href="https://github.com/jzho954/python_projects" target="_blank">See it here!</a> 
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row className="justify-content-center">
                      <ProjectCard {...projects[2]} />
                      </Row>
                      <div className="link-container">
                          <a className="website-link"href="https://www.healthstarcalcnz.online/" target="_blank">See it here!</a> 
                        </div>
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

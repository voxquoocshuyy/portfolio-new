import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ocelot from "../../Assets/Projects/ocelot.png";
import invoice from "../../Assets/Projects/invoice.png";
import workbee from "../../Assets/Projects/workbee.png";
import microservice from "../../Assets/Projects/microservice.png";
import kensa from "../../Assets/Projects/kensa.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workbee}
              isBlog={false}
              title="Workbee"
              description="This is a software solution that helps businesses manage and integrate their core
              business processes. This includes functions such as finance, human resources, procurement, inventory management, and customer relationship management."
              ghLink="https://github.com/voxquoocshuyy"
              demoLink="https://tms-trial.tgl-cloud.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kensa}
              isBlog={false}
              title="Kensa"
              description="This is an inspection application that allows you to easily do circumstantial
              investigations such as building inspection on a smartphone and create result reports automatically. It takes a lot of effort to manage the data of directly taken photos and the clerical work involved in
              creating reports."
              ghLink="https://github.com/voxquoocshuyy"
              demoLink="https://kensa-cloud.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoice}
              isBlog={false}
              title="Invoice"
              description="A real-time electricity calculation software system, equipped with the capability to
              utilize worker services for data retrieval from FTP servers, serves as a potent tool for businesses to manage and optimize their electricity consumption in real-time. Simultaneously, it seamlessly integrates other core processes to enhance operational efficiency and performance. Furthermore, this system offers the added convenience of automated monthly electricity billing."
              ghLink="https://github.com/voxquoocshuyy"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ocelot}
              isBlog={false}
              title="Mini project - Ocelot"
              description="Our latest project leverages Ocelot as an API gateway to streamline and secure API management. The system supports comprehensive CRUD operations for both product and customer entities. By using Ocelot, we ensure efficient routing, load balancing, and authentication for our microservices. The product management module allows for creating, reading, updating, and deleting product details, ensuring robust inventory control. Similarly, the customer management module provides full CRUD functionality, facilitating seamless customer data handling. This architecture enhances scalability, maintainability, and performance across our application."
              ghLink="https://github.com/voxquoocshuyy/Ocelot-Api-Gateway"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microservice}
              isBlog={false}
              title="Mini project - Microservice"
              description="Our project uses a microservices architecture for modularity and scalability. The Product.API microservice with MySQL handles product data, while Customer.API with Minimal API and PostgreSQL manages customer data. The Basket.API uses Redis for cart functionalities, and Ordering.API employs SQL Server, Clean Architecture, and CQRS for order processing. Inventory.API with MongoDB manages inventory. An API Gateway microservice ensures efficient routing and load balancing. Synchronous communication integrates the microservices seamlessly. Authentication and authorization are managed by Identity Server. The project is deployed to production with Azure DevOps, enabling efficient CI/CD pipelines."
              ghLink="https://github.com/voxquoocshuyy"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

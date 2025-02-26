import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            className="w-[120px]"
          >
            <div className="flex justify-center align-middle">
              <BsGithub className="m-auto" />{" "}
              <p className="m-auto">{props.isBlog ? "Blog" : "GitHub"}</p>
            </div>
          </Button>
        )}
        
        <div className="flex flex-row justify-center align-middle">
          {props.demoLink ? (
            <div className="">
              <Link to="/acdemo">
                <Button variant="primary" className="w-[120px] mt-2">
                  <div className="flex justify-center align-middle">
                    <CgWebsite className="m-auto" />
                    <p className="m-auto">Demo</p>
                  </div>
                </Button>
              </Link>
            </div>
          ) : (
            <div className="w-[120px]"></div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

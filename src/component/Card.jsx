import { Card, Button } from "react-bootstrap";
import data from "../data/data";
import { useState } from "react";

const Projects = () => {
    const [projectData, setProjectData] = useState(data);
    // console.log("projectData:", projectData);

    return (
        <div className="container mt-3">
            <h2 className="text-center">Add to Cart Projects</h2>

            <div className="row d-flex justify-content-center align-items-center">
                {projectData.map((element, id) => (
                    <Card
                        key={id}
                        style={{ width: "22rem", border: "none" }}
                        className="mx-2 mt-3"
                    >
                        <Card.Img
                            variant="top"
                            src={element.imgdata}
                            style={{ height: "16rem" }}
                        />
                        <Card.Body>
                            <Card.Title>{element.rname}</Card.Title>
                            <Card.Text>Price :{element.price}</Card.Text>

                            <div className="button_div d-flex justify-content-center">
                                <Button variant="primary" className="col-lg-12">
                                    Add cart
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;

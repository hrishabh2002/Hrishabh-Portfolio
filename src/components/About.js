import { Container, Row, Col } from "react-bootstrap";
import Timeline from "../utils/timeline";

const About = () => {
    return (
        <Container className="mt-2 mr-lg-5" fluid>
            <Row xs={1} md={2}>
                <Col className="mb-3 mt-5">
                    <Timeline />
                </Col>
                <Col className="px-lg-5 mb-2">
                    <div className="px-lg-5 about-text text-justify">
                        <p className="about-me-block">About</p>
                        <p>
                            A Frontend Developer from Lucknow.
                            Have strong base in developing UI and CRUD APIs, and always open to new directions of programming.
                        </p>
                        <p>

                        As an enthusiastic learner and creative individual, I am passionate about exploring new domains and ideas in both technical and non-technical fields. My innate creativity drives me to identify and solve real-life problems, with an innovative approach to problem-solving. I am constantly seeking new challenges and opportunities to apply my problem-solving skills to make a meaningful impact.
                        I have enhanced and emerged as a growing individual in technical knowledge. I have learned some vast data structures and algorithms in this journey. I also have developed my knowledge of the operating system, database management systems, and concepts of object-oriented programming.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default About;

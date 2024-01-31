import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomePage() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="mt-3">Azure Digital Twins Query App</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Stack direction="horizontal" gap={3} className="py-3">
              <Form.Control
                id="query-input"
                as="textarea"
                className="me-auto"
                placeholder="Type your query here..."
              ></Form.Control>
              <Button id="query-execute-button" variant="primary">
                Execute
              </Button>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="mt-3">Results</h2>
            <div>
              <Form.Control
                id="query-results"
                as="textarea"
                className="me-auto"
                placeholder="Type your query here..."
                value="[]"
              ></Form.Control>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;

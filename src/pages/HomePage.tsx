import { useState } from "react";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomePage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [instanceValidated, setInstanceValidated] = useState(false);

  const handleAuthenticate = () => {
    setAuthenticated(true);
  };

  const validateInstance = () => {
    setInstanceValidated(true);
  };

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
                id="instance-input"
                className="me-auto"
                placeholder="Type your Azure digital twin instance URL here..."
                onChange={validateInstance}
              ></Form.Control>
              <Button
                id="authenticate-button"
                variant="primary"
                onClick={handleAuthenticate}
                disabled={!instanceValidated}
              >
                Login
              </Button>
            </Stack>
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
                disabled={!authenticated}
              ></Form.Control>
              <Button id="query-execute-button" variant="primary" disabled={!authenticated}>
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
                readOnly
              ></Form.Control>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
